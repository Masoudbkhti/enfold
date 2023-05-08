//TOURDATES ACOORDION

/*

const accordionHeaders = document.querySelectorAll(".list-header");
const accordionContents = document.querySelectorAll(".list-content");

function toggleAccordion() {
  const accordion = this.parentElement;
  const accordionContent = accordion.querySelector(".list-content");
  accordionContent.classList.toggle("active");
  this.classList.toggle("active");
  if (accordionContent.style.display === "block") {
    accordionContent.style.display = "none";
    this.textContent = this.textContent.replace("-", "+");
  } else {
    accordionContents.forEach((content) => {
      if (content.classList.contains("active")) {
        content.classList.remove("active");
        content.style.display = "none";
        content.previousElementSibling.classList.remove("active");
        content.previousElementSibling.textContent =
          content.previousElementSibling.textContent.replace("-", "+");
      }
    });

    accordionContent.style.display = "block";
    this.textContent = this.textContent.replace("+", "-");
  }
}

accordionHeaders.forEach((header) => {
  header.addEventListener("click", toggleAccordion);
});

*/

const accordionHeaders = document.querySelectorAll(".list-header");
const accordionContents = document.querySelectorAll(".list-content");

function toggleAccordion() {
  const accordion = this.parentElement;
  const accordionContent = accordion.querySelector(".list-content");
  const isActive = accordionContent.classList.contains("active");

  // Close all active accordion contents
  accordionContents.forEach((content) => {
    if (content.classList.contains("active") && content !== accordionContent) {
      content.style.display = "none";
      content.classList.remove("active");
      const header = content.previousElementSibling;
      header.classList.remove("active");
      header.querySelector(".toggle-icon").textContent = "+";
    }
  });

  if (isActive) {
    accordionContent.style.display = "none";
    accordionContent.classList.remove("active");
    this.classList.remove("active");
    this.querySelector(".toggle-icon").textContent = "+";
  } else {
    accordionContent.style.display = "block";
    accordionContent.classList.add("active");
    this.classList.add("active");
    this.querySelector(".toggle-icon").textContent = "-";
  }
}

accordionHeaders.forEach((header) => {
  header.addEventListener("click", toggleAccordion);
});
