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
