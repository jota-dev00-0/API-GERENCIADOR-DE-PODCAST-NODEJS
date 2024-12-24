# Podcast Manager


### Dominio
podcasts em vídeo

### Descrição de dominio da aplicação
um app de podcast em que eu possa separar episódios em diferentes categorias, como em serviços de streaming tipo netflix, amazon prime e etc

### Features

    -listar os episódios do podcasts em sessões de categoria:
    -[Saúde, fitness , humor , mentalidade]

    - filtrar episódios por podcast

### Como

Get: retorna lista de episódios
response
```js
[
    {
        PodcastName: "Flow",
        EpisodeName: "RAFAEL GRATTA - Flow #408",
        VideoId: "Z38tcbrvFow",
        EpisodeImage: "https://i.ytimg.com/an_webp/Z38tcbrvFow/mqdefault_6s.webp?du=3000&sqp=COSuprsG&rs=AOn4CLD6VRjA6TMEx09TlwscKlrYHkq4SQ",
        Link: "https://www.youtube.com/live/Z38tcbrvFow?si=t116Tf80pZiar8SI",
        categories:["mentalidade" , "saúde"] 
    };
    {
        PodcastName: "Flow",
        EpisodeName: "JON VLOGS - Flow #418",
        VideoId: "VEGS8VHmGz8",
        EpisodeImage: "https://i.ytimg.com/an_webp/VEGS8VHmGz8/mqdefault_6s.webp?du=3000&sqp=CPSXprsG&rs=AOn4CLDIiUcFDPaPs6GQMcOdPooX8r5lTQ",
        Link: "https://www.youtube.com/live/VEGS8VHmGz8?si=Losx0JFkQNSg6E4t",
        categories:["internet" , "influencer"] 
    }
]
```

GET: retorna uma lista de episódios baseado em um parametro enviado pelo client do nome do podcast