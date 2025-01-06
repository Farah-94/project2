function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  let box1 = document.getElementsByClassName("box1");
  box1.addEventListener("mouseenter",function(e){

    console.log(box1.length);
box1.style.backgroundcolor="#090909";
  });


