$(() => {

  console.log($('.drgSlide'))

$('.drgSlide').slick({
  infinite:true,
  slidesToShow:2,
  slidesToScroll:1,
  dots:true
})
$('.popcont').slick({
  infinite:true,
  slidesToShow:4,
  slidesToScroll:4,
  dots:true
})
$('.catcont').slick({
  infinite:true,
  slidesToShow:4,
  slidesToScroll:4,
  dots:true
})

});