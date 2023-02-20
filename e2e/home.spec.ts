import { test, expect } from "@playwright/test";

const homePage = "http://localhost:3000/";

test.describe("Desktop Screen Size Testing", () => {
  test("checking h1 with the fontsize of 3rem", async ({ page }) => {
    await page.goto(homePage);
    const h1 = page.locator("h1");

    const compStyles = await h1.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        fontSize: styles.fontSize,
      };
    });

    expect(compStyles.fontSize).toEqual("48px");
  });
  test("checking if there is a an a tag with the text Kaggle and it redirects to https://www.kaggle.com/datasets/chickooo/top-tech-startups-hiring-2023", async ({
    page,
  }) => {
    await page.goto(homePage);
    const aTag = page.locator("a:text('Kaggle')");
    const href = await aTag.getAttribute("href");

    expect(href).toEqual(
      "https://www.kaggle.com/datasets/chickooo/top-tech-startups-hiring-2023"
    );
  });
});

test.describe("iPad Air Screen Size Testing", () => {
  test("checking if hero-top changes to flex-direction: column", async ({
    page,
  }) => {
    await page.goto(homePage);
    await page.setViewportSize({ width: 768, height: 1024 });
    const heroTop = page.locator(".hero-top");

    const compStyles = await heroTop.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        flexDirection: styles.flexDirection,
      };
    });

    expect(compStyles.flexDirection).toEqual("column");
  });

  test("checking if there is a div with flex and margin-top of 16px", async ({
    page,
  }) => {
    await page.goto(homePage);
    await page.setViewportSize({ width: 768, height: 1024 });
    const div = page.locator("#test-div-ipad");

    const compStyles = await div.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        display: styles.display,
        marginTop: styles.marginTop,
      };
    });

    expect(compStyles.display).toEqual("flex");
    expect(compStyles.marginTop).toEqual("16px");
  });
});

test.describe("iPhone XR Screen Size Testing", () => {
  test("checking if p tag has a specific string value", async ({ page }) => {
    await page.goto(homePage);
    await page.setViewportSize({ width: 414, height: 896 });
    const ptag = page.locator("#iphone-test-para");

    // checking if the p tag has a specific string value
    expect(await ptag.innerText()).toEqual(
      '"Discover the latest information on top tech startups and their hiring activity - stay ahead of the curve with our comprehensive database."'
    );
  });

  test("checking if main tag has a padding of 32px", async ({ page }) => {
    await page.goto(homePage);
    await page.setViewportSize({ width: 414, height: 896 });
    const mainTag = page.locator("main");

    const compStyles = await mainTag.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        padding: styles.padding,
      };
    });

    expect(compStyles.padding).toEqual("32px");
  });
});
