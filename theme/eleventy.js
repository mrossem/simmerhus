// Shared Eleventy setup for the Simmerhûs and Silhûs sites.
// This theme/ folder is identical in both repositories; everything site-specific lives in content/.
import path from "node:path";
import { readFileSync } from "node:fs";

const i18n = JSON.parse(readFileSync(new URL("./i18n.json", import.meta.url)));

// ARTIFACT=1 builds links as explicit index.html files, for previews served without directory indexes.
const explicitIndex = process.env.ARTIFACT === "1";

export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("i18n", i18n);
  eleventyConfig.addPassthroughCopy({ "content/img": "img", "theme/fonts": "fonts", "theme/css": "css", "theme/js": "js" });
  eleventyConfig.addPassthroughCopy({ "content/CNAME": "CNAME" });

  // Relative link from the current page to an absolute site path, so the output works on any host or subpath.
  eleventyConfig.addFilter("rel", function (target) {
    const from = this.page?.url || "/";
    const fromDir = from.endsWith("/") ? from : path.posix.dirname(from) + "/";
    let rel = path.posix.relative(fromDir, target) || ".";
    if (target.endsWith("/")) {
      rel = rel === "." ? "" : rel + "/";
      if (explicitIndex) rel += "index.html";
      else if (rel === "") rel = "./";
    }
    return rel;
  });

  // Fills {name}-style placeholders in shared UI strings with values from site.json.
  eleventyConfig.addFilter("fill", (text, values) =>
    String(text).replace(/\{(\w+)\}/g, (m, key) => values?.[key] ?? m));

  return {
    dir: { input: "content", includes: "../theme/_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
