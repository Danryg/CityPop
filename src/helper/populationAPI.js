


export async function getPopulationFromCity(name){
    
    var res = 0;
    var url = 'https://countriesnow.space/api/v0.1/countries/population/cities';
    return await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            city: name
        })
    }).then((response) =>{
        
       return response.json();
    }).then((responseData) => {
        var ticketList = responseData;
        
        res = ticketList.data.populationCounts[0].value;
        return res;
    })
    .catch((error) => {
        console.log(error);
        return "error"
    });
}

export async function getCitiesInCountry(name){


    var res = [];
    var url = 'https://countriesnow.space/api/v0.1/countries/population/cities/filter';
    return await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            limit: 10,
            order: "asc",
            orderBy: "name",
            country: name
        })
    }).then((response) =>{
        
       return response.json();
    }).then((responseData) => {
       
        var ticketList = responseData;
        return ticketList.data;
    })
    .catch((error) => {
        console.log(error);
        return "error"
    });
}




export default {getPopulationFromCity, getCitiesInCountry}