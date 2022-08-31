const menu = document.querySelector(".menu");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closemenu");
const menuIcon = document.querySelector(".openmenu");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )





// let slideIndex = 1;
// showSlides(slideIndex);

// function prevSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("sub_next");
//   if (n > slides.length)
//    {slideIndex = 1}  
//   if (n < 1) {slideIndex = slides.length} 
//   if (n==1)
//   {
//    document.getElementById("previous").style.display="none";
//  }  else{
//   document.getElementById("previous").style.display="block";
//  } 
//  if(n==6){
//   document.getElementById("next").style.display="none";
//  }else{
//   document.getElementById("next").style.display="block";
//  }
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slides[slideIndex-1].style.display = "flex";  
// }







var b = 0 , c = 0;


function prev_mob() {
  let slides = document.getElementById("sub_next1");
  console.log(slides.clientWidth )
    let width = slides.clientWidth + 16;
    b += width;
    c-- ;
   if(c==0){
    document.getElementById("previous").style.display="none";
   }
   if(c>0){
    document.getElementById("next").style.display="flex";
  }
    var leftmob = document.getElementById("next-container");
    leftmob.style.transform = `translateX(${b}px)`;
    leftmob.style.transition = "1s";
}

function next_mobile() {
   let slides = document.getElementById("sub_next1");
    let width = slides.clientWidth + 16;
    b -= width;
    c++ ;
    if(c>4){
     document.getElementById("next").style.display="none";
    }
    if(c>0){
      document.getElementById("previous").style.display="flex";
    }
    var rightmob = document.getElementById("next-container");
    rightmob.style.transform = `translateX(${b}px)`;
    rightmob.style.transition = "1s";
}



function arrowp(direction){
  var container = document.getElementById('arrowss');
  scrollCompleted = 0;
  var slideVar = setInterval(function(){
      if(direction >= 1){
          container.scrollLeft += 7;
      } if(direction<0) {
          container.scrollLeft -= 7;
      }
      scrollCompleted += 3;
      if(scrollCompleted >= 30)
      {
          window.clearInterval(slideVar);
      }
  }, 17);
}













// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("sub_next");
//   if (n > slides.length)
//    {slideIndex = 1}  
//   if (n < 1) {slideIndex = slides.length} 
//   if (n==1)
//   {
//    document.getElementById("carosel").style.display="none";
//  }  else{
//   document.getElementById("carosel").style.display="block";
//  } 
//  if(n==4){
//   document.getElementById("carosel_r").style.display="none";
//  }else{
//   document.getElementById("carosel_r").style.display="block";
//  }
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slides[slideIndex-1].style.display = "flex";  
// }




// function plusSlides(direction){
//   var container = document.getElementById('tab-carosel-scroll');
//   scrollCompleted = 0;
//   var slideVar = setInterval(function(){
//       if(direction >= 1){
//           container.scrollLeft += 3;
//       } if(direction<0) {
//           container.scrollLeft -= 3;
//       }
//       scrollCompleted += 3;
//       if(scrollCompleted >= 500)
//       {
//           window.clearInterval(slideVar);
//       }
//   },1);
// }
























// const slides = document.querySelectorAll(".sub_next");
// slides.forEach((sub_next, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });

// let curSlide = 0;


// const nextSubnext = document.querySelector(".btn-next");


// nextSlide.addEventListener("click", function () {
//      curSlide++;

//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });


// const nextSlide = document.querySelector(".btn-next");


// let curSubnext = 0;

// let maxSlide = slides.length - 1;


// nextSlide.addEventListener("click", function () {
 
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }


//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// const prevSlide = document.querySelector(".btn-prev");


// prevSlide.addEventListener("click", function () {
 
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide-;
//   }

  
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });










// function searchshipment() {
// let input = document.getElementById('searchbar').value
// input=input.toLowerCase();
// let x = document.getElementsByClassName('card');

// for (i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//         x[i].style.display="none";
//     }
//     else {
//         x[i].style.display="bottomcards";             
//     }
// }
// }


function searchship() {
  let input = document.getElementById('searching-box').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('sub-cont1');
  
  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="shipment-container";             
      }
  }
  }
  
  function searchshipmob() {
    let input = document.getElementById('searchingbox-mob').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('sub-cont1');
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="shipment-container";             
        }
    }
    }




































// const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )