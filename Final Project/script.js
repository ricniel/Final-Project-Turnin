// Dark and light mode button
const darkbutton = document.querySelector("#darkbutton");
darkbutton.addEventListener("click", function(){
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")){
        darkbutton.textContent = "Light Mode"
    }
    else
        darkbutton.textContent = "Dark Mode"
})

//Accordion setup (from W3 Schools)
var acc = document.getElementsByClassName("section-header");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    this.setAttribute("aria-expanded", panel.style.display === "block");
  });
}
//Mixitup initializer
var mixer = mixitup('#mixContainer',{
    selectors: {target: '.mix'
},
animation: {duration: 250}});

//Mixitupbuttons open accordions
var filterBtns = document.querySelectorAll(".filter-btn");
for (var f = 0; f < filterBtns.length; f++) {
  filterBtns[f].addEventListener("click", function() {
    var filter = this.dataset.filter;
    if (filter === "all") return;

    var sectionId = filter.replace(".", "");
    var section = document.getElementById(sectionId);

    if (section) {var btn = section.querySelector(".section-header");
      var panel = section.querySelector(".panel");

      if (panel.style.display !== "block") {
        btn.classList.add("active");
        panel.style.display = "block";
      }
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
}