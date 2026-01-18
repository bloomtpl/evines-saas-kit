import fs from "fs";
import matter from "gray-matter";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const fileNames = fs.readdirSync(blogDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      description: data.description,
      image: data.image,
      published: data.published,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
