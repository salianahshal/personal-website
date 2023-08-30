//title display for home page
const typed = new Typed(".multiple-text", {
  strings: ["Coder", "Web Developer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1200,
  loop: true,
});

// filtering for projects section
filterSelection("all");

function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("proj"); // Change the class name to match your project container
  if (c == "all") c = "";

  for (i = 0; i < x.length; i++) {
    if (x[i].classList.contains(c) || c === "") {
      x[i].classList.remove("hide"); // Remove hide class
      x[i].classList.add("show"); // Add show class
    } else {
      x[i].classList.remove("show"); // Remove show class
      x[i].classList.add("hide"); // Add hide class
    }
  }
}

function AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.querySelector(".btn.active");
    current.classList.remove("active");
    this.classList.add("active");
  });
}
