import fs from "fs";
import path from "path";
import { podcasts } from "../models/podcastModels";


const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const readRepoPodcast = async (PodcastName?: string): Promise<podcasts[]> => {
    if (!fs.existsSync(pathData)) {
        throw new Error(`File not found: ${pathData}`);
    }

    const readData = fs.readFileSync(pathData, "utf-8");
    let createJSON = JSON.parse(readData);

    if(PodcastName){
        createJSON = createJSON.filter((podcast :podcasts )=> podcast.PodcastName === PodcastName)
    }

    return createJSON;
};

