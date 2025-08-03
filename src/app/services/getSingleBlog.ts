import { ENDPOINTS } from "@/constants/endpoints"
import { IDevToArticleDetails } from "@/types/forums-api-type"
import fetcher from "@/utils/fetcher"

export async function getSingleBlog(id: string) {
    const response = await fetcher<IDevToArticleDetails>(ENDPOINTS.blogs.getSingleArticle.replace(':id', id))
    return response
}