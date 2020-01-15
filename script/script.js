function startup() {
    var $imgs = $(".thumbnail a");
    var $search = $("#search-filter");
    var $noResults = $("#no-results")[0];
    var $topButton = $(".nav .top")[0];

   

    // Declaring a function which will be called when the search input
    // keyup event is trigged (via user text input into the field)
    const filterImages = function() {
        // 'this' is $search element
        const searchValue = this.value.trim().toLowerCase();
        var resultsFound = false;

        $imgs.each(function(index, img) {
            const title = img.title.trim().toLowerCase();
            
            if (title.includes(searchValue)) {
                img.style.display = '';
                resultsFound = true;
            } else {
                img.style.display = 'none';
            }
        });

        if (resultsFound) {
            $noResults.style.display = "none";
            $topButton.style.display = "";
        } else {
            $noResults.style.display = "";
            $topButton.style.display = "none";
        }
    }

    // Calls filterImages on every keyup
    $search.on('keyup', filterImages);
}

startup();