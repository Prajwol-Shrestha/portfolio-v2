import { ENDPOINTS } from "@/constants/endpoints";
import { IDevToArticle } from "@/types/forums-api-type";
import fetcher from "@/utils/fetcher";

export async function getBlogs(query: Record<string, any>) {
    const blogs = (await fetcher<IDevToArticle[]>(ENDPOINTS.blogs.getAllArtcles, query)) || [];
    return blogs
}