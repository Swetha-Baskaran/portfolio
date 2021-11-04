var setup = document.querySelector(".setup-nav");
var inp = document.querySelector("#input");

document.querySelector("#duplicate").addEventListener("click", () => {

if (inp.checked == false) {
      setup.style.right = "0px";
      setup.style.opacity = "1";
    } else if (inp.checked == true) {
      setup.style.right = "-940px";
      setup.style.opacity = "0";
    }

});

setup.addEventListener("click", () => {
      if (inp.checked == true) {
            setup.style.right = "-940px";
            setup.style.opacity = "0";
            inp.checked = false;
         }
      })



let fun = (e) =>{
   let list = document.querySelectorAll(".li-1");
   for(i of list){
      i.style.backgroundColor = "transparent";
      i.style.borderBottom = "3px solid transparent";
   }

   e.target.style.backgroundColor = "#64e9e914";
   e.target.style.borderBottom = "3px solid #64e9e9"
}

let projects = document.querySelectorAll(".proj");
let items = document.querySelectorAll(".lis")

let remove_All = () =>{
   for(i of items){
      i.firstElementChild.style.color = "#0c2335"
      i.firstElementChild.style.background = "white"
   }
}

let show_All = () => {
   remove_All()
   items[0].firstElementChild.style.background = "#0c2335";
   items[0].firstElementChild.style.color = "white";
   for(i of projects){
      i.style.display = "block";
   }
}

let website = (e) => {
   show_All()
   remove_All()
   console.log(e.target.style.background)
   e.target.style.background = "#0c2335";
   e.target.style.color = "white";
    
    for(i of projects){
       if(i.name != "website"){
          i.style.display = "none";
       }
    }
}

let react = (e) => {
   show_All()
   remove_All()
   e.target.style.background = "#0c2335";
   e.target.style.color = "white";
   for(i of projects){
      if(i.name != "react"){
         i.style.display = "none";
      }
   }
}

let mini_pro = (e) => {
   show_All()
   remove_All()
   e.target.style.background = "#0c2335";
   e.target.style.color = "white";
   for(i of projects){
      if(i.name != "mini_pro"){
         i.style.display = "none";
      }
   }
}


// semding email through smtp server

let sendEmail = () => {

   let username = document.querySelector("#name").value
   let from = document.querySelector("#email").value;
   let subject = document.querySelector("#text").value;
   let body = document.querySelector("#textarea").value;

  Email.send({
     Host: "smtp.gmail.com",
     Username:"swethabaskaran31072003@gmail.com",
     Password: "jzxkvldsflcjpuoz",
     To: "swethasambothi@gmail.com",
     From: "swethabaskaran31072003@gmail.com" ,
     Subject: `${username} sent this mail`,
     Body: `<div> Name: ${username} <br />Email: ${from} <br /><br />Subject: ${subject} <br /><br />Message: ${body} </div>`,

  }).then(
     ()=>{
        alert("Thank you for your message");
     }
  )
};

document.getElementById("submit").addEventListener("click", ()=>{
    sendEmail()
    
})