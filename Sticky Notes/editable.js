let divElem = document.createElement("div");
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode("Click To Edit");
} else {
  text = document.createTextNode(val);
}

divElem.setAttribute("class", "elem");
divElem.setAttribute(
  "style",
  "border:2px solid black; width:59%; margin:5%; padding:2%;"
);
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");
container.insertBefore(divElem, first);
divElem.appendChild(text);
console.log(divElem, first, container);
let elem = document.getElementsByClassName("elem");

divElem.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas < 1) {
    let html = divElem.innerHTML;

    divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
  }
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", elem.innerHTML);
  });
});
