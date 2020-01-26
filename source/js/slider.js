$('.slider-one').owlCarousel({
  loop:true,
  nav:false,
  margin:10,
  dots: true,
  autoHeight:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

$('.slider-two').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  autoHeight:true,
  responsive:{
    0:{
      items:1
    },
    750:{
      items:1
    },
    751:{
      items:3
    }
  }
});
