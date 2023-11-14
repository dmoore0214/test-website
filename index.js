function myFunction(){
    let x=document.getElementById("myLinks");
    if(x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//function to show date and time of location
const date = new Date();
let day = date.getDate();
let month = date.getMonth()+ 1;
let year = date.getFullYear();
let currentDate= `${month}/${day}/${year}`;
let newDate = document.getElementById("dateTime");
newDate.innerHTML = currentDate;

//function for the weather

