var colors = ["#537188", "#CBB279", "#E1D4BB", "#B59282"];
var images = ["images/main.png", "images/2.jpeg"];
// Images
function getRandomImage(array) {
  return Math.floor(Math.random() * array.length);
}
// Colors
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

window.addEventListener("load", function () {
  // body backgroundColor
  var bodyBG = document.querySelectorAll(".bg-home");

  var randomColorIndex = getRandomIndex(colors);

  bodyBG.forEach(function (ele) {
    ele.style.backgroundColor = colors[randomColorIndex];
  });
  // End
  // Navbar BG Color
  var navbarRandomColorIndex = getRandomIndex(colors);
  var navbarBG = document.querySelectorAll(".nav-container-bg");
  navbarBG.forEach(function (ele) {
    ele.style.backgroundColor = colors[navbarRandomColorIndex];
  });
  // End

  // Navbar text  BG Color
  var navbarTextRandomColorIndex = getRandomIndex(colors);
  var navbarBG = document.querySelectorAll(".nav-bg");
  navbarBG.forEach(function (ele) {
    ele.style.backgroundColor = colors[navbarTextRandomColorIndex];
  });
  // End

  // Cart Border Color
  var borderRandomColorIndex = getRandomIndex(colors);
  var borderRandomColorIndexx = getRandomIndex(colors);
  var navbarBG = document.querySelectorAll(".custom-border");
  navbarBG.forEach(function (ele) {
    ele.style.backgroundColor = colors[borderRandomColorIndex];
    ele.style.borderColor = colors[borderRandomColorIndexx];
  });
  // End

  // right side
  var rightSideRandomColorIndex = getRandomIndex(colors);
  var navbarBG = document.querySelectorAll(".new-subjects");
  navbarBG.forEach(function (ele) {
    ele.style.backgroundColor = colors[rightSideRandomColorIndex];
  });
  // End

  // Images
  var randomImages = getRandomImage(images);
  var currentPath = window.location.pathname;
  var image = document.querySelectorAll(".main-image");

  image.forEach(function (ele) {
    if (
      currentPath.includes("home") ||
      currentPath.includes("subjects") ||
      currentPath.includes("cv") ||
      currentPath.includes("contact") ||
      currentPath.includes("books") ||
      currentPath.includes("articles")
    ) {
      ele.src = "../" + images[randomImages];
    } else {
      ele.src = images[randomImages];
    }
  });

  image.forEach((page) => {
    if (
      currentPath.includes("one") ||
      currentPath.includes("two") ||
      currentPath.includes("three") ||
      currentPath.includes("four") ||
      currentPath.includes("five") ||
      currentPath.includes("six") ||
      currentPath.includes("seven") ||
      currentPath.includes("eight") ||
      currentPath.includes("1") ||
      currentPath.includes("2") ||
      currentPath.includes("3") ||
      currentPath.includes("4") ||
      currentPath.includes("5") ||
      currentPath.includes("6") ||
      currentPath.includes("7") ||
      currentPath.includes("8") ||
      currentPath.includes("9") ||
      currentPath.includes("10") ||
      currentPath.includes("11") ||
      currentPath.includes("12") ||
      currentPath.includes("13") ||
      currentPath.includes("14") ||
      currentPath.includes("15") ||
      currentPath.includes("16") ||
      currentPath.includes("17") ||
      currentPath.includes("18") ||
      currentPath.includes("19") ||
      currentPath.includes("20") ||
      currentPath.includes("21")
    ) {
      page.src = "../../" + images[randomImages];
    }
  });
});

var paragraphs = document.querySelectorAll (".break-line"); // Select all the paragraph elements with the class "break-line"
paragraphs.forEach (p => { // Loop through each paragraph element
  var text = p.textContent; // Get the text content of the paragraph
  text = text.split (".") .join (".<br> <br>"); // Split the text by "." and join it back with ".<br>"
  text = text.split ("؟") .join ("؟<br> <br>"); // Split the text by "؟" and join it back with "؟<br>"
  p.innerHTML = text; // Set the inner HTML of the paragraph to the modified text
  p.style.textAlign = "justify"; //
  
});
