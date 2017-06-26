function myFunction() {
  var x = document.getElementById("topNav");
  if (x.className === "top-navigation") {
    x.className += "responsive";
  } else {
    x.className = "top-navigation";
  }
}