let points=window.sessionStorage.getItem("points");
console.log(points);
window.onload=function(){
    document.querySelector("div.result").innerHTML="Your Obtained Marks is "+points;
}


