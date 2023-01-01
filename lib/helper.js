import { server } from '../config';
import fetcher from './fetcher';

const baseURL = `api`

export default async function getBlog(id) {

    // if (id) {
    //     const { data, isLoading, isError } = fetcher(`api/blogs/${id}`);
    //     return data
    // }
    
    // const { data, isLoading, isError } = fetcher(`api/blogs`);
    // return data
    const res = await fetch(`${baseURL}/blogs`)
    const blogs = await res.json()

    if (id) {
        return blogs.find(value => value.id == id)
    }

    return blogs
}