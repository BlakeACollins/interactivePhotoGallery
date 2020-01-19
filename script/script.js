/*CREATED BY BLAKE COLLINS*/
$(".photoGallery").hide().delay(250).fadeIn(200);

const $galleryPhotos = $(".photoGallery a");

$("#imageSearch").on("keyup", function(event) {
  let $search = $(event.target).val().toUpperCase();
    for ( let i = 0 ; i < $galleryPhotos.length ; i += 1) {
        let $imageSearch = $galleryPhotos.eq(i);
            if ($imageSearch.attr("data-title").toUpperCase().indexOf($search) === -1) {
                $imageSearch.fadeOut(200);} 
            if ($imageSearch.attr("data-title").toUpperCase().indexOf($search) !== -1) {
                $imageSearch.hide().fadeIn(200);}
  }
});