const images = ["0.jpg", "1.jpeg", "2.jpeg","3.jpeg","4.jpeg","5.jpg","6.jpeg","7.jpeg","8.jpg","9.jpeg","10.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
