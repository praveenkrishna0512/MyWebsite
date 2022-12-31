import blogsData from "../../../content/blogs";

export default function handler(req, res) {
    const { blogs } = blogsData;
    if (blogs) return res.status(200).json(blogs)
    return res.status(404).json({error: "Blogs Not Found"})
}