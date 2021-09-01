const express = require ("express");
const api= express.Router();


var axios = require("axios").default;
api.get('/tournament',(req,res)=>{
    
var options = {
  method: 'GET',
  url: 'https://football-data1.p.rapidapi.com/tournament/info',
  params: {tournamentId: '9'},
  headers: {
    'x-rapidapi-host': 'football-data1.p.rapidapi.com',
    'x-rapidapi-key': 'bb96ba43a7msh2f94c51b5df5b43p15c4a9jsn2215f41432e3'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    res.render('tournament',{data: response.data,title:"tito"});
}).catch(function (error) {
	console.error(error);
});
});


module.exports=api;