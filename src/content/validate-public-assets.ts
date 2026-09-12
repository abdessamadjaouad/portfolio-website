import {
  closeSync,
  existsSync,
  lstatSync,
  openSync,
  readSync,
  readdirSync,
  realpathSync,
} from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

import { portfolioContent } from "./registry";
import type { PortfolioContent } from "./schemas";

const governedPublicFolders = ["images", "resumes", "videos"];
const forbiddenPublicExtensions = new Set([".tex", ".bib", ".log", ".aux"]);

function walkFiles(directory: string): string[] {
  if (!existsSync(directory)) {
    return [];
  }

  const files: string[] = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const absolutePath = join(directory, entry.name);

    if (entry.isSymbolicLink()) {
      throw new Error(
        `Public assets cannot be symbolic links: ${absolutePath}`,
      );
    }

    if (entry.isDirectory()) {
      files.push(...walkFiles(absolutePath));
    } else if (entry.isFile()) {
      files.push(absolutePath);
    }
  }

  return files;
}

function ensureInsidePublicRoot(publicDirectory: string, absolutePath: string) {
  const relativePath = relative(publicDirectory, absolutePath);
  if (relativePath.startsWith(`..${sep}`) || relativePath === "..") {
    throw new Error(
      `Public asset escapes the public directory: ${absolutePath}`,
    );
  }
}

function validateFileSignature(mimeType: string, absolutePath: string) {
  const signature = Buffer.alloc(12);
  const descriptor = openSync(absolutePath, "r");
  try {
    readSync(descriptor, signature, 0, signature.length, 0);
  } finally {
    closeSync(descriptor);
  }

  if (
    mimeType === "application/pdf" &&
    signature.subarray(0, 5).toString("ascii") !== "%PDF-"
  ) {
    throw new Error(
      `Declared PDF does not have a PDF signature: ${absolutePath}`,
    );
  }

  if (
    mimeType === "image/webp" &&
    (signature.subarray(0, 4).toString("ascii") !== "RIFF" ||
      signature.subarray(8, 12).toString("ascii") !== "WEBP")
  ) {
    throw new Error(
      `Declared WebP does not have a WebP signature: ${absolutePath}`,
    );
  }
}

export interface PublicAssetValidationResult {
  declaredAssetCount: number;
  governedFileCount: number;
  checkedPaths: string[];
}

export function validatePublicAssets(
  content: PortfolioContent = portfolioContent,
  publicDirectory = resolve(process.cwd(), "public"),
): PublicAssetValidationResult {
  const publicRoot = resolve(publicDirectory);
  if (!existsSync(publicRoot)) {
    throw new Error(`The public directory does not exist: ${publicRoot}`);
  }

  const realPublicRoot = realpathSync(publicRoot);
  const declaredPaths = new Set<string>();

  for (const asset of content.media) {
    const absolutePath = resolve(publicRoot, `.${asset.publicPath}`);
    ensureInsidePublicRoot(publicRoot, absolutePath);

    if (!existsSync(absolutePath)) {
      throw new Error(`Declared public asset is missing: ${asset.publicPath}`);
    }

    if (lstatSync(absolutePath).isSymbolicLink()) {
      throw new Error(
        `Declared public assets cannot be symbolic links: ${asset.publicPath}`,
      );
    }

    const realAssetPath = realpathSync(absolutePath);
    ensureInsidePublicRoot(realPublicRoot, realAssetPath);
    validateFileSignature(asset.mimeType, realAssetPath);
    declaredPaths.add(realAssetPath);
  }

  const governedFiles = governedPublicFolders.flatMap((folder) =>
    walkFiles(join(publicRoot, folder)),
  );

  for (const absolutePath of governedFiles) {
    const realAssetPath = realpathSync(absolutePath);
    ensureInsidePublicRoot(realPublicRoot, realAssetPath);

    const extension = extname(realAssetPath).toLowerCase();
    if (forbiddenPublicExtensions.has(extension)) {
      throw new Error(
        `Private source format found in public assets: ${absolutePath}`,
      );
    }

    if (!declaredPaths.has(realAssetPath)) {
      throw new Error(
        `Public asset is not declared in the registry: ${absolutePath}`,
      );
    }
  }

  return {
    declaredAssetCount: content.media.length,
    governedFileCount: governedFiles.length,
    checkedPaths: [...declaredPaths].map(
      (path) => `/${relative(realPublicRoot, path)}`,
    ),
  };
}
