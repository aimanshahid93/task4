//comparison of two json data
var obj1 = {"name":"person1","age":"5"};
var obj2 = {"age":"5","name":"person1"};

var flag=true;//created a flag 

if(Object.keys(obj1).length==Object.keys(obj2).length)//comparison of two json data
{
    for(key in obj1) { 
        if(obj1[key] == obj2[key])//comparison of two keys inside the data
         {
            continue;
        }
        else {
            flag=false;//if the condition is not true.then break the loop
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+flag);//printing of final output
/*output console
is object equaltrue
*/
      
  