import { test, expect } from "@playwright/test";

const homePage = "http://localhost:3000/";
const companiesPage = "http://localhost:3000/companies/1";

test.describe("Desktop Screen Size Testing", () => {
  test("checking if there is an Image with size of width and height of 30px", async ({
    page,
  }) => {
    await page.goto(companiesPage);
    const image = page.locator("img");
    const compStyles = await image.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        width: styles.width,
        height: styles.height,
      };
    });
    expect(compStyles.width).toEqual("30px");
    expect(compStyles.height).toEqual("30px");
  });

  test("check if there is an h2 on the page with margin-bottom of 8px", async ({
    page,
  }) => {
    await page.goto(companiesPage);
    const h2 = page.locator("#about-h2-test");
    const compStyles = await h2.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        marginBottom: styles.marginBottom,
      };
    });

    expect(compStyles.marginBottom).toEqual("8px");
  });
});

test.describe("iPad Air Screen Size Testing", () => {
  test("checking h2 string value", async ({ page }) => {
    await page.goto(companiesPage);
    await page.setViewportSize({ width: 768, height: 1024 });
    const h2 = page.locator("#about-h2-test");
    const h2Text = await h2.innerText();

    expect(h2Text).toEqual("About Forward Networks");
  });

  test("checking for an a tag with the text Visit Website and it redirects to https://www.forwardnetworks.com/", async ({
    page,
  }) => {
    await page.goto(companiesPage);
    await page.setViewportSize({ width: 768, height: 1024 });
    const aTag = page.locator("a:text('Visit Website')");
    const href = await aTag.getAttribute("href");

    expect(href).toEqual("https://www.forwardnetworks.com/");
  });
});

test.describe("iPhone XR Screen Size Testing", () => {
  test("checking for some css properties of the selector #testing-iphone-xr", async ({
    page,
  }) => {
    await page.goto(companiesPage);
    await page.setViewportSize({ width: 414, height: 896 });
    const div = page.locator("#testing-iphone-xr");

    const compStyles = await div.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        backgroundColor: styles.backgroundColor,
        borderRadius: styles.borderRadius,
        overflow: styles.overflow,
      };
    });

    expect(compStyles.backgroundColor).toEqual("rgb(255, 255, 255)");
    expect(compStyles.borderRadius).toEqual("8px");
    expect(compStyles.overflow).toEqual("hidden");
  });

  test("checking if the selector has a property of display: grid", async ({
    page,
  }) => {
    await page.goto(companiesPage);
    await page.setViewportSize({ width: 414, height: 896 });
    const div = page.locator("#job-card-container-parent-test");

    const compStyles = await div.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        display: styles.display,
      };
    });

    expect(compStyles.display).toEqual("grid");
  });
});
