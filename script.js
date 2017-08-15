function myFunction() {
  var g = document.getElementById("topNav");
  if (g.className === "top-navigation") {
    g.className += " responsive";
  } else {
    g.className = "top-navigation";
  }
  
//  
  var selector = '.block1, .block2, .block3';
  
  if ($(selector).hasClass('change')) {
    $(selector).removeClass('change');
  } else {
    $(selector).addClass('change')
  };
  }