import { readRepoPodcast } from "../repositories/podcasts-repositories"

export const serviceListEpisodes = async () => {
    const data = await readRepoPodcast()
    return data
}