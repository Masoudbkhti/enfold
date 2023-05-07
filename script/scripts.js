//TOURDATES ACOORDION
// const acoordionTitle = document.querySelector(".tour-dates__acoordion");
// function openAcoordion() {
//   acoordionTitle.style.height = "200px";
// }
// function closeAcoordion() {
//   acoordionTitle.style.height = "auto";
// }

// پیدا کردن تمام آکاردئون ها با کلاس "list-header"
// var accordions = document.querySelectorAll(".list-header");

// // پیمایش تمام المان ها و اضافه کردن رویداد کلیک به هر کدام
// for (var i = 0; i < accordions.length; i++) {
//   accordions[i].addEventListener("click", function () {
//     // پیدا کردن المان های آکاردئون داخل المان کلیک شده
//     var content = this.nextElementSibling;

//     // بررسی وضعیت آکاردئون بسته شده است یا باز؟
//     if (content.style.maxHeight) {
//       // اگر باز بود ، بسته شود
//       content.style.maxHeight = null;
//       this.innerHTML = "+ " + this.innerHTML.slice(2);
//     } else {
//       // اگر بسته بود ، باز شود
//       // بستن تمام آکاردئون های دیگر باز
//       for (var j = 0; j < accordions.length; j++) {
//         var otherContent = accordions[j].nextElementSibling;
//         if (otherContent.style.maxHeight) {
//           otherContent.style.maxHeight = null;
//           accordions[j].innerHTML = "+ " + accordions[j].innerHTML.slice(2);
//         }
//       }
//       // باز کردن آکاردئون کلیک شده
//       content.style.maxHeight = content.scrollHeight + "px";
//       this.innerHTML = "- " + this.innerHTML.slice(2);
//     }
//   });
// }
