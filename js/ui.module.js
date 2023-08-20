
// get Api

async function getAPI(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c5ec271717msh9d672f54af0082bp120cefjsnf1d7ce2ba837',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    

    const api = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter',options);
    const response = await api.json();
    console.log(response); 
}

getAPI();
