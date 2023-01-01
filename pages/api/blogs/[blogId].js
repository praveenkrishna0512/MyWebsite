// import blogsData from "../../../content/blogs";

// export default function handler(req, res) {
//     const { blogId } = req.query;
//     const { blogs } = blogsData;

//     if (blogId) {
//         const blog = blogs.find(value => value.id == blogId)
//         if (blog) return res.status(200).json(blog)
//     }

//     return res.status(404).json({error: "Blog Not Found"})
// }