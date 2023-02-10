// $(".pic").hover(
//     function(){
//             $(".see-more", this).css("display", "block");
//       }, function(){
//             $(".see-more", this).css("display", "none");
//   });



const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open")
} );

const allLinks = document.querySelectorAll("a:Link");
allLinks.foreEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      if(href === "project.html")
      window.location.assign("project.html")({
      behaviour: "smooth",
      })

      if (link.classList.contains("nav-link"))
        headerEl.classList.toggle("nav-open")

    })
});

///////////
