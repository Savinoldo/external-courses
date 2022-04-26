const arrayOfImg = ['1.jpg', '2.jpg', '3.jpg'];

const image = document.querySelector('.image');
const nextButton = document.querySelector('.next-image');
const previousButton = document.querySelector('.previous-image');

let i = 0;

const imageStyle = () => {
  image.style.background = `url("${arrayOfImg[i]}")`;
  image.style.backgroundPosition = 'center center';
  image.style.backgroundRepeat = 'no-repeat';
  image.style.backgroundSize = 'cover';
  image.style.transition = '2.5s';
};

const nextImage = () => {
  if (i === arrayOfImg.length - 1) {
    i = 0;
    imageStyle();
  } else {
    i += i < arrayOfImg.length - 1;
    imageStyle();
  }
};

const previousImage = () => {
  if (i === 0) {
    i = arrayOfImg.length - 1;
    imageStyle();
  } else {
    i -= i > 0;
    imageStyle();
  }
};

nextButton.addEventListener('click', nextImage);
previousButton.addEventListener('click', previousImage);
