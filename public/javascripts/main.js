// wrap in IIFE to preserve local scope
(function(){

  // ajax get request, when done will call initCarousel
  $.ajax({
    url: 'https://photorankapi-a.akamaihd.net/customers/215757/media/recent',
    data: {
      auth_token : '0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18'
    },
    type: 'GET',
    dataType: 'json'
  })
  .done(function(result) {
    initCarousel(result);
  })
  .fail(function() {
    console.log("error");
  })


  // set up the carousel and modal
  function initCarousel(result) {

    var imageArray = result.data._embedded;

    //iterate over array of data, to append html template to the DOM
    $.each(imageArray, function(index, value) {

      //looks like some image objects may not have 'source_id' and 'source', address with Jae/Abe
      //should there be some type of id on each image?
      var self = this

      var slideTemplate = "<div><a class='fancybox' href='"+ self.images.normal +"'><img src="+ self.images.thumbnail +"></a></div>";

      $('.bxslider').append(slideTemplate);

    })

    //slider init
    $('.bxslider').bxSlider({
      minSlides: 3,
      maxSlides: 3,
      slideWidth: 150,
      slideMargin: 10,
      adaptiveHeight: true
    });

    //modal init
    $('.fancybox').fancybox();

  }

})();