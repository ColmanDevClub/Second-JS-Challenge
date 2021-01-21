const api="https://geo.ipify.org/api/v1?apiKey=at_5WA9XxxUJ0ZzHUaC4aIfE6IZpv8is&ipAddress=";


let input = document.getElementById('myInput');
let showInformation = document.getElementById('showInformation');

input.addEventListener("keyup",(e)=>{
    const ipText= e.target.value;
   
     
   getData(ipText); 

});

 async function getData(text){
    await fetch(api+text).then((res)=>res.json()).then((data)=>{
        let output = `
        <h3>IP: ${data.ip} </h3>
        <h3>location: ${data.location.city}, ${data.location.region}, ${data.location.postalCode} </h3>
        <h3>timeZone: UTC ${data.location.timezone} </h3>
        <h3>ISP: ${data.isp} </h3>
        `;
        showInformation.innerHTML = output;
    })
 };






