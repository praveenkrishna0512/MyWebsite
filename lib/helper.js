const baseURL = "http://localhost:3000/api"

export default async function getBlog(id) {
    const res = await fetch(`${baseURL}/blogs`)
    const blogs = await res.json()

    if (id) {
        return blogs.find(value => value.id == id)
    }

    return blogs
}