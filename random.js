function selected(el) {
    var classes = el.classList;
    var active = false;
    for(var j = 0; j < classes.length; j++) {
      if(classes[j] == "active") {
        active = true;
      }
    }

    if(active == true) {
      el.classList.remove("active");
    }
    else {
      el.classList.add("active");
    }
}

function randomChar() {
  var selected = document.getElementsByClassName('active');
  var item = selected[Math.floor(Math.random()*selected.length)];

  //var randomChar = document.createElement("div");
  var x = document.getElementById("randomChar");
  //img.src = item.getAtribute("src");
  x.setAttribute("src", item.getAttribute("src"));
  x.setAttribute("width", "180");
  x.setAttribute("height", "100");

  var name = document.getElementById("randomName");
  var y = document.getElementById("char");
  y.classList.add("displayChar");
  name.innerHTML =  item.getAttribute("alt");


}

function selectAll() {
  var chars = document.getElementsByClassName("character");
  for(var i = 0; i < chars.length; i++) {
    chars[i].classList.add("active");
  }

}

function unselectAll() {
  var chars = document.getElementsByClassName("character");
  for(var i = 0; i < chars.length; i++) {
    chars[i].classList.remove("active");
  }

}
