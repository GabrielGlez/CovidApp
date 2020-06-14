const axios = require('axios');

var CovidService={
  getMexico: function(){
    return axios({
    "method":"GET",
    "url":"https://covid-19-data.p.rapidapi.com/country",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
    "x-rapidapi-key":"44c9aee670mshcd7773b9197f900p17732fjsn0ad53654e7ec",
    "useQueryString":true
    },"params":{
    "format":"json",
    "name":"mexico"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}

export { CovidService as default };
