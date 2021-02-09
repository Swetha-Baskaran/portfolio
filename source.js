var setup = document.querySelector(".setup-nav");
var inp = document.querySelector("#input");

document.querySelector("#duplicate").addEventListener("click", () => {

if (inp.checked == false) {
      setup.style.right = "0px";
    } else if (inp.checked == true) {
      setup.style.right = "-415px";
    }

});

setup.addEventListener("click", (e) => {
      if (inp.checked == true) {
            setup.style.right = "-415px";
            inp.checked = false;
         }
      })
