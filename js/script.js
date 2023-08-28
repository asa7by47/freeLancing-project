var images = ["images/main.png", "images/2.jpeg"];
var bodyBG = document.querySelectorAll(".bg-home");
const colorToggle = document.querySelector("#colorToggle");
const colorBox = document.querySelectorAll(".color-box");
const colors = document.querySelectorAll(".color");
// Images
function getRandomImage(array) {
  return Math.floor(Math.random() * array.length);
}
window.addEventListener("load",function(){
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
})

// Function to toggle the color box visibility
function toggleColorBox() {
  colorBox.forEach((c) => {
    if (c.style.right === "-143px") {
      console.log("true");

      c.style.right = "0";
    } else {
      c.style.right = "-143px";
      console.log("false");
    }
  });

}

colorToggle.addEventListener("click", toggleColorBox);

// Add click event listener to each color element
colors.forEach((color) => {
  color.addEventListener("click", () => {
    // Retrieve the clicked color
    const selectedColor = color.getAttribute("data-color");

    // Change the background color of the color box and the page
    // colorBox.style.backgroundColor = selectedColor;
    bodyBG.forEach((body) => {
      body.style.backgroundColor = selectedColor;
    });

    // Save the selected color in sessionStorage
    sessionStorage.setItem("selectedColor", selectedColor);
  });
});

// Check if a color is saved in sessionStorage
const savedColor = sessionStorage.getItem("selectedColor");
if (savedColor) {
  // Set the saved color as the initial background color
  bodyBG.forEach((body) => {
    body.style.backgroundColor = savedColor;
  });
} else {
  bodyBG.forEach((body) => {
    body.style.backgroundColor = "#CBB279";
  });

  // Save the random color in sessionStorage
  sessionStorage.setItem("selectedColor", randomColor);
}

// Paragraph styling
var paragraphs = document.querySelectorAll(".break-line"); // Select all the paragraph elements with the class "break-line"
paragraphs.forEach((p) => {
  // Loop through each paragraph element
  var text = p.textContent; // Get the text content of the paragraph
  text = text.split(".").join(".<br> <br>"); // Split the text by "." and join it back with ".<br>"
  text = text.split("؟").join("؟<br> <br>"); // Split the text by "؟" and join it back with "؟<br>"
  p.innerHTML = text; // Set the inner HTML of the paragraph to the modified text
  p.style.textAlign = "justify"; //
});

// New js up 




