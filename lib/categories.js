import { categories } from "../data/flix";
import path from "path";
import fs from "fs/promises";

export function getAllCatIds() {
  return categories.map((category) => {
    return {
      params: {
        slug: `${category.slug}`,
      },
    };
  });
}

export async function getCategoryData(slug) {
  const filePath = path.join(process.cwd(), "data", "flix.json");
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString());

  return data;
}
