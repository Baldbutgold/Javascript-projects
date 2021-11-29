function allowDrop(ev) { //ev is the target while holding the img
  ev.preventDefault();
}

function drag(ev) { //ev is the image	  
  ev.dataTransfer.setData("text", ev.target.id)
}

function drop(ev) { //ev is end target
  ev.preventDefault();
  
  var data = ev.dataTransfer.getData("text");//data is empty string
  var grabbedElement = document.getElementById(data)
  ev.target.appendChild(document.getElementById(data));
}
