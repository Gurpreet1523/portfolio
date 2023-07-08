//---------- Navbar ----------//

window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// Portfolio Gallery

let filterContainer = document.querySelector(".gallery-filter");
let galleryItems = document.querySelectorAll(".gallery-item");

// filterContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains("filter-item")){
//         // deactivates existing active filter item
//         filterContainer.querySelector(".active").classList.remove("active");
//         // activates new filter item
//         event.target.classList.add("active");
//         let filterValue = event.target.getAttribute("data-filter");
//         galleryItems.forEach((item) => {
//             if (item.classList.contains(filterValue) || filterValue === "all") {
//                 item.classList.remove("hide");
//                 item.classList.add("show");
//             }
//             else {
//                 item.classList.remove("show");
//                 item.classList.add("hide");
//             }
//         });
//     }

// });

$('.gallery-wrapper .gallery-filter .filter-item').click(function(){

    let filter = $(this).attr('data-filter');

    if(filter == 'all'){
      $('.gallery-wrapper .content-wrapper .gallery-item').show('400')
    }else{
      $('.gallery-wrapper .content-wrapper .gallery-item').not('.'+filter).hide('200');
      $('.gallery-wrapper .content-wrapper .gallery-item').filter('.'+filter).show('400');
    }

  })

