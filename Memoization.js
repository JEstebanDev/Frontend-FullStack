//example memoization 
import fetch from "node-fetch";
const memoization=(fn)=>{
    //save all the values
    let results={}
    //this return has the logic to save the values
    //args=value sent it
    return (arg)=>{
        //if results has NOT a value with the element how was sent it
        if (!results[arg]) {
            console.log("result not save it"+arg)
            //we will execute it and keep the index and resultValue [index,value]
            results[arg]=fn(arg)
        }else{
            console.log("result already save it"+arg)
        }
        //if I have the result, It'll just return it 
        return results[arg]
    }
}

const request = memoization(async id=>{
    console.log("Have been executed")
    let res= await fetch("https://jsonplaceholder.typicode.com/todos/"+id)
    let json=await res.json();
    return json
})

request(1).then(r=>console.log(r))
request(2).then(r=>console.log(r))
request(1).then(r=>console.log(r))