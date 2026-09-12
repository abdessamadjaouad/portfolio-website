import { expect, test } from "@playwright/test";

const resumePaths = [
  "/resumes/abdessamad-jaouad-data-engineer.pdf",
  "/resumes/abdessamad-jaouad-software-engineer.pdf",
] as const;

for (const resumePath of resumePaths) {
  test(`serves ${resumePath} as a public PDF`, async ({ request }) => {
    const response = await request.get(resumePath);

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
    expect((await response.body()).subarray(0, 5).toString("ascii")).toBe(
      "%PDF-",
    );
  });
}

test("keeps private inputs, configuration and backend routes unavailable", async ({
  request,
}) => {
  for (const path of [
    "/private-inputs/cv/new-cv.tex",
    "/resumes/new-cv.tex",
    "/.env",
    "/.git/config",
    "/api/contact",
  ]) {
    const response = await request.get(path);
    expect(response.status()).toBe(404);
    expect(await response.text()).not.toMatch(
      /BEGIN (RSA |OPENSSH )?PRIVATE KEY|\\documentclass/,
    );
  }
});
