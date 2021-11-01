/* === MAIN APP JS FILE === */

/* Preloader Counter based on counting images */
/* Start Code Preloader */

const images = document.images; //get access to all document images
let imagesTotalAmount = images.length; //calculate length of all html images
let imagesLoadedAmount = 0; //define 0 as a starting point for images that are to be loaded 
const preloader = document.getElementById('page-preloader'); // get access to the the preloader html element
const ImageCounter = document.getElementById('load_perc'); // get access to the the image-counter html element

for (var i = 0; i < imagesTotalAmount; i++) {
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
}

function image_loaded() {
    console.log(imagesTotalAmount);
    console.log(imagesLoadedAmount);
    imagesLoadedAmount++; //increment loaded images from 0 till the total amount 
    ImageCounter.innerHTML = (((100 / imagesTotalAmount) * imagesLoadedAmount) << 0) + '%'; //Divide 100 by total amount and multiply that 
    // by loaded amount and add '%' sign to the html. Use innerHTML to show the whole thing in the div.


    if (imagesLoadedAmount >= imagesTotalAmount) {
        setTimeout(function () {
            if (!preloader.classList.contains('done'))
                preloader.classList.add('done');
        }, 1000); //if images that were loaded are greater or equal the total amount of images - then add class "done" to remove preloader.
    }

}

(function images_notexist() {
    console.log(imagesTotalAmount);
    if (imagesTotalAmount <= 0) {
        setTimeout(function () {
            if (!preloader.classList.contains('done'))
                preloader.classList.add('done');
        }, 1000); //if total amount of images are less or equal 0 - then remove preloader as well since there are no images to preload.
    }
})();


/* End Code Preloader */

/* Full screen menu */

/* Custom cursor */

/* Smooth Scroll  */
