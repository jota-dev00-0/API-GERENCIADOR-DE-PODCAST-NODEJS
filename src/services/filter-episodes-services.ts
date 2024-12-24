import { readRepoPodcast } from "../repositories/podcasts-repositories"

export const filterEpisode = async (PodcastName: string)=>{
    const data = await readRepoPodcast(PodcastName)
    return data
}