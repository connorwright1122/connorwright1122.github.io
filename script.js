/*
// JavaScript to handle the popup and image carousels
const popup = document.getElementById('imagePopup');
const popupContent = document.querySelector('.popup-content');
const popupImage = document.getElementById('popupImage');

// Arrays to store image paths for each carousel
/*
const carousels = [
    ['images/about-backdrop.jpg', 'images/about-backdrop1.jpg'], // First carousel images
    ['images/apero-1.png', 'images/connor-self-portrait.jpg']  // Second carousel images
    ['images/gt-backdrop.jpg', 'images/tron-xr.png']  // Third carousel images (add more as needed)
];
*/


/*
// Initialize current carousel index
let currentCarouselIndex = 0;

function openPopup(imageSrc, carouselIndex) {
    popup.style.display = 'block';
    popupImage.src = imageSrc;
    currentCarouselIndex = carouselIndex;
    updateCarousel(carouselIndex);
}

function closePopup() {
    const thumbnails = document.querySelectorAll(`.carousel${currentCarouselIndex} img`);
    thumbnails.forEach((thumbnail) => {
        thumbnail.setAttribute("hidden", "true"); 
    });
    popup.style.display = 'none';
}

function updateCarousel(carouselIndex) {
    const imageCarousel = document.getElementById(`imageCarousel${carouselIndex}`);
    //const imageCarousel = document.getElementById(`imageCarousel${carouselIndex}`);
    const thumbnailContainer = imageCarousel;
    thumbnailContainer.innerHTML = '';
    const thumbnails = document.querySelectorAll(`.carousel${carouselIndex} img`);
    thumbnails.forEach((thumbnail) => {
        thumbnail.removeAttribute("hidden");
        const clonedThumbnail = thumbnail.cloneNode(true);
        clonedThumbnail.onclick = () => openPopup(thumbnail.src, carouselIndex);
        if (carouselIndex === currentCarouselIndex) {
            clonedThumbnail.classList.add('active');
        }
        thumbnailContainer.appendChild(clonedThumbnail);
    });

    // Clear the thumbnails of the inactive carousel
    /*
    const inactiveCarouselIndex = currentCarouselIndex === 1 ? 2 : 1;
    const inactiveThumbnailContainer = document.getElementById(`imageCarousel${inactiveCarouselIndex}`);
    inactiveThumbnailContainer.innerHTML = '';
    */
//}


/*
// Close the modal when the background is clicked
popup.addEventListener('click', (e) => {
    if (e.target === popupContent) {
        closePopup();
    }
});


function addCarousel() {
    // create a new div element
    const newDiv = document.createElement("div");
    const newContent = document.createElement("img");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }
  


const carousels1 = [
    ['images/about-backdrop.jpg', 'images/about-backdrop1.jpg'], // First carousel images
    ['images/apero-1.png', 'images/connor-self-portrait.jpg']  // Second carousel images
];
*/