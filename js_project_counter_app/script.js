let dec=document.getElementById("dec");
let ans=document.getElementById("ans")
dec.addEventListener("click",getdecvalue)
const origenal_value=Number(ans.innerText)
function getdecvalue(){
    let value=Number(ans.innerText)
    if(value>0){
        ans.innerText=value-1
    }
    else{
        alert("Negative value not allowed")
    }
}
let inc=document.querySelector("#inc")
inc.addEventListener("click",getincvalue)
function getincvalue(){
    let value=Number(ans.innerText)
    if(value>=10){
        alert("Value greater then 10 not allowed")
    }
    else{
        ans.innerText=value+1;
    }
}
let reset=document.querySelector("#reset")
reset.addEventListener("click",resetvalue)
function resetvalue(){
    
    ans.innerText=origenal_value
}
