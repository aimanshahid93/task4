// 1.setup our http Request 
let xhr= new XMLHttpRequest();//created an object xhr 

//2.Open The request

xhr.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//3.Setup our listener to process the complete request

xhr.onload=function()//get the data 
{
    if(xhr.status>=200&& xhr.status<300)
        //only if request is ok and received the data 
        {let data=JSON.parse(this.response);
            console.log(data);//console.log(this.response);
      for(let i=0;i<data.length;i++){
         console.log(data.flags);
      }
}
else{
    console.log("not valid");
}
}
    
//4.Send the request
xhr.send();
