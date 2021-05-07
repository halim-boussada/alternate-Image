var b = document.getElementById("button");
alert("suuubb ");
var counter = 0;
b.onclick = function () {
  var image = document.getElementById("image");
  var text = document.getElementById("text");
  counter++;
  if (counter % 2 === 1) {
    text.innerHTML = "hello this is halim with a toxido";
    b.innerHTML = "go casual";
    image.src =
      "https://media-exp1.licdn.com/dms/image/C4D03AQHTY8qIc3JIzA/profile-displayphoto-shrink_200_200/0/1608108129070?e=1620864000&v=beta&t=_K-1jyF4DHTMw1O_HzAdLU0gqdahtTA1ZEg2dUti3v4";
  } else {
    b.innerHTML = "go toxido";
    text.innerHTML = "Hello this is casual halim";
    image.src = "https://miro.medium.com/fit/c/344/344/0*TzCCxQMbvKWxKN9k";
  }
};
