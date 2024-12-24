import { IncomingMessage, ServerResponse } from "http"
import { serviceListEpisodes } from "../services/list-episode-services"
import { filterEpisode } from "../services/filter-episodes-services"

export const getListEpisodes = async (req: IncomingMessage , res : ServerResponse) => {

    const content = await serviceListEpisodes()
    res.writeHead(200 , {"content-type": "application/json" })
    res.end(JSON.stringify(content))
} 

export const getFilterEpisodes = 
async(req: IncomingMessage, res: ServerResponse) => {

    const queryString = req.url?.split("?p=")[1] ?? ""
     
   const content = await filterEpisode(queryString) 
   res.writeHead(200 , {"content-type": "application/json" })
   res.end(JSON.stringify(content))

}