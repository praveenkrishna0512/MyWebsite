import clientPromise from "../../../lib/mongodb";

export async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("personal-website");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myBlog = await db.collection("blogs").insertOne(bodyObject);
      res.json(myBlog.ops[0]);
      break;
    case "GET":
      if (req.query) {
        const blogID = req.query;
        const blog = await db
          .collection("blogs")
          .find({ id: blogID })
          .toArray();
        res.json({ status: 200, data: blog });
      } else {
        const allBlogs = await db.collection("blogs").find({}).toArray();
        res.json({ status: 200, data: allBlogs });
      }
      break;
  }
  return res;
}

export async function getBlogs(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("personal-website");

    const blogs = await db.collection("blogs").find({}).limit(20).toArray();

    res.json(blogs);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
}

export async function getOneBlog(req, res) {
    try {
      const client = await clientPromise;
      const db = client.db("personal-website");
      const { blogID } = req.query;
  
      const blog = await db.collection("blogs").findOne({
        id: blogID,
      });
  
      res.json(blog);
    } catch (e) {
      console.error(e);
      throw new Error(e).message;
    }
  }
