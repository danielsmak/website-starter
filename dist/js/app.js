/* === MAIN APP JS FILE === */

/* Preloader Counter based on counting images  */

const images = document.images; //get access to all document images
let imagesTotalAmount = images.length; //calculate length of all html images
let imagesLoadedAmount = 0; //define 0 as a starting point for images that are to be loaded 
const preloader = document.getElementById('fs-preloader'); // get access to the the preloader html element
const imageCounter = document.getElementById('perc-counter'); // get access to the the image-counter html element

for (var i = 0; i < imagesTotalAmount; i++) { 
    imageCloned = new Image(); // use new Image() for IE Support 
    imageCloned.onload = imageLoaded;
    imageCloned.onerror = imageLoaded;
    imageCloned.src = images[i].src;
}

console.log(imagesTotalAmount);
console.log(imagesLoadedAmount);

/* for (let i = 0 ; I < imagesTotalAmount; i++) {  // Without IE Support  
    images[i].onload = imageLoaded;
    images[i].onerror = imageLoaded;
    } 
*/

function imageLoaded() { // Function imageLoaded that is called above
    //console.log(imagesTotalAmount);
    //alert(imagesLoadedAmount);
    imagesLoadedAmount++; //increment loaded images from 0 till the total amount 
    
    imageCounter.innerHTML = (((100 / imagesTotalAmount) * imagesLoadedAmount) << 0) + '%';  /* Divide 100 by total amount and multiply that by loaded amount and add '%' sign
    to the html. Use innerHTML to show the whole thing in the div. */
    if (imagesLoadedAmount >= imagesTotalAmount) {
        setTimeout(function () {
            if (!preloader.classList.contains('fullscreen-preloader--hidden'))
                preloader.classList.add('fullscreen-preloader--hidden');
        }, 1000); //if images that were loaded are greater or equal the total amount of images - then add class "done" to remove preloader.
    }
}

(function images_notexist() {

    if (imagesTotalAmount <= 0) {
        setTimeout(function () {
            if (!preloader.classList.contains('fullscreen-preloader--hidden'))
                preloader.classList.add('fullscreen-preloader--hidden');
        }, 1000); //if total amount of images are less or equal 0 - then remove preloader as well since there are no images to preload.
    }
})();

/* Full screen menu */

/* Custom cursor */

/* Smooth Scroll  */
