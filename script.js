// Portfolio images from Sirv CDN
const portfolioImages = [
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/CYHWOCVFJY_10.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/NFUPV7XZIS_57.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/NFUPV7XZIS_274.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/SHOOT 128.JPG",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/CYHWOCVFJY_5.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/NFUPV7XZIS_119.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/DXB95FAWXV_MAGRABI_EDITORIAL_98.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/DXB95FAWXV_MAGRABI_EDITORIAL_14.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/CYHWOCVFJY_26.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/NFUPV7XZIS_238.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/DXB95FAWXV_MAGRABI_EDITORIAL_11.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/SHOOT 15.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/NFUPV7XZIS_91.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/CYHWOCVFJY_23.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/CYHWOCVFJY_4.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/CYHWOCVFJY_22.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/Lagado-381.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/SHOOT 82.jpeg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/SHOOT _ 1259.JPG",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/3.JPG",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/SHOOT-397.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/Lagado-544.jpg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/SHOOT-354.jpeg",
  "https://trupthi.sirv.com/Fashion Stylist portfolio/Stylist portfolio/CYHWOCVFJY_7.jpg"
];

const grid = document.getElementById("portfolioGrid");

portfolioImages.forEach((imageUrl, index) => {
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = `Fashion styling work ${index + 1}`;
  img.loading = "lazy"; // Lazy load images for better performance
  grid.appendChild(img);
});
