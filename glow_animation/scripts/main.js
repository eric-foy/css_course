window.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.className = "SelectedFieldBox";
  newDiv.style.width = "200px";
  newDiv.style.height = "80px";
  newDiv.style.top = "100px";
  newDiv.style.position = "absolute";

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
//   currentDiv.insertBefore(newDiv);
//   currentDiv.appendChild(newDiv);
  currentDiv.after(newDiv);
//   document.body.insertBefore(newDiv, currentDiv);
}