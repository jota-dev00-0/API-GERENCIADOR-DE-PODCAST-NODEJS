import * as http from "http"
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcastsController"


const server = http.createServer(
    async (req : http.IncomingMessage, 
    res: http.ServerResponse) => {

        //queryString

        const [baseUrl, queryString] = req.url?.split("?") ?? ["",""]
        
        if(req.method === "GET" && baseUrl === "/api/list"){
            await getListEpisodes(req, res)
        }

        if(req.method === "GET" && baseUrl === "/api/episode"){
            await getFilterEpisodes(req, res)
        }

    })

const port = process.env.PORT

server.listen(port, ()=>{
    console.log(`servidor iniciado com sucesso (porta: ${port})`)
})