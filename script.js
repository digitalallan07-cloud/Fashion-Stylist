const imageCount = 12; // change based on how many images you have
const grid = document.getElementById("portfolioGrid");

for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement("img");
  img.src = `stylist-images/image${i}.jpg`;
  img.alt = `Styling work ${i}`;
  grid.appendChild(img);
}
