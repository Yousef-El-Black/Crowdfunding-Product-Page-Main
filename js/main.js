// $(document).ready(function () {
//   $(".analysis .range div").css({
//     width: "80%"
//   })
// })

// document.querySelector(".analysis .range div").style.width = "80%";

let spans = document.querySelectorAll(".analysis .nums .num h3 span");

for (i = 0; i < spans.length; i++) {
  console.log(spans[i].innerHTML);
  text = spans[i].innerHTML;
  spans[i].innerHTML = 0;
  spans[i].innerHTML.map(function (ele) {
    if (ele < text) {
      ele++
    }
  })
}