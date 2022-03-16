

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
        console.log(ticketList.data);
        res = ticketList.data.populationCounts[0].value;
        return res;
    })
    .catch((error) => {
        console.log(error);
        return "error"
    });

    

    
    
}


export default getPopulationFromCity