/*CREATED BY BLAKE COLLINS*/
$(".photoGallery").hide().delay(500).fadeIn(1000);

const $gallery_items = $(".photoGallery a");

$("#imageSearch").on("keyup", function(event) {
  let $search = $(event.target).val().toUpperCase();
  for ( let i = 0 ; i < $gallery_items.length ; i += 1) {
    let $imageSearch = $gallery_items.eq(i);
    if ($imageSearch.attr("data-title").toUpperCase().indexOf($search) === -1) {
      $imageSearch.fadeOut(500);
    } 
    if ($imageSearch.attr("data-title").toUpperCase().indexOf($search) !== -1) {
      $imageSearch.hide().fadeIn(500);
    }
  }
});