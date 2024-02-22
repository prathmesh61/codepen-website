import { test, expect } from "@playwright/test";
test("has user login", async ({ page }) => {
  await page.goto("http://localhost:3007/sign-in");

  // Expect a title "to contain" a substring.
  page.getByText("Sign in");
  page.getByText("to continue to Online Code Compiler CodeEdii");
  await page.getByLabel("Email address").fill("namita@gmail.com");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await expect(page.getByText("Enter your password")).toBeVisible();
  await page.getByLabel("Password", { exact: true }).fill("Namita@987");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  // after page is signed in.
  page.getByRole("link", { name: "CodeEdii" });
});
