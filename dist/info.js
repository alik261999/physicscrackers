let points=window.sessionStorage.getItem("points");
console.log(points);
window.onload=function(){
    fire();
    document.querySelector("div.result").innerHTML="Your Obtained Marks is "+points;
}


function fire(){

    db.collection("202107A").add({
      Name: namee,
      email_ID: mail,
      Marks: points
    });
}
