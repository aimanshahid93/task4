// 1.setup our http Request 
let xhr= new XMLHttpRequest();//created an object xhr 

//2.Open The request

xhr.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

//3.Setup our listener to process the complete request

xhr.onload=function()
{
    //get the data 
    if(xhr.status>=200&& xhr.status<300){
        //only if request is ok and received the data 
        let data=JSON.parse(this.response);
        console.log(data);
        // console.log(this.response);
       //get flags
for(let i=0;i<data.length;i++)
console.log(`
        name:${data[i].name}
        regions:${data[i].regions}
        subregion:${data[i].subregion}
        population:${data[i].population}
        `)
        
    }else{
        //RUn if the request is not ok
        console.log("Error");
    }
}