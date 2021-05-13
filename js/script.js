window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

$('.fade').slick({
  // slidesToShow: 3,
  // slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  swipe: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.autoplay').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  swipe: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
  ]
});

// tabs

function openPage(pageName, elmnt) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";

  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.opacity = "0.5";

  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.opacity = '1';

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openPage2(pageName1, elmnt1) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";

  }
  tablinks = document.getElementsByClassName("tablink2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.opacity = "0.5";

  }
  document.getElementById(pageName1).style.display = "block";
  elmnt1.style.opacity = '1';

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen1").click();


$('.variable-width').slick({
  arrows: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  dots: false,
  infinite: true,
  speed: 300,
  // variableWidth: true,
  responsive: [{
    breakpoint: 900,
    settings: {
      arrows: false,
      slidesToShow: 4
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 3
    }
  },
  {
    breakpoint: 600,
    settings: {
      arrows: false,
      slidesToShow: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      slidesToShow: 1
    }
  }
  ]
});
document.getElementById("search_block").style.display = "none"
document.getElementById("gg_lupa").style.display = "none"


$('.single-item').slick({
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
});
function searchFunction() {
  var navbar = document.getElementById("navbar")
  navbar.style.display = "none"
  document.getElementById("search_block").style.display = "block"
  document.getElementById("gg_lupa").style.display = "inline-block"
  document.getElementById("lupa").style.display = "none"


}
function ggsearchFunction() {
  navbar.style.display = "block"
  document.getElementById("search_block").style.display = "none"
  document.getElementById("gg_lupa").style.display = "none"
  document.getElementById("lupa").style.display = "inline-block"
}
var x = document.querySelector(".navbar")
x.style.left = "-1500px"
console.log(x);
function menuFunction() {
  if (x.style.left === "-1500px") {
    x.style.left = "0px"
    console.log(1);
  }
  else {
    x.style.left = "-1500px"
    console.log(2);
  }
}
function myFunction(xs) {
  xs.classList.toggle("change");
}

var panel = document.querySelector(".tabs_panel")
var panel2 = document.querySelector(".tabs_panel2")

panel.style.left = "-1500px"
panel2.style.left = "-1500px"

function openTabs() {
  if(panel.style.left === "-1500px") {
    panel.style.left = "0px"

  }else if(panel.style.left === "0px") {
    panel.style.left = "-1500px"

  }
console.log(1);
}
function openTabs2() {
  if(panel2.style.left === "-1500px") {
    panel2.style.left = "0px"

  }else if(panel2.style.left === "0px") {
    panel2.style.left = "-1500px"

  }
console.log(1);
}