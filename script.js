const imageCount = 5; // 5 fashion/jewelry portfolio images
const grid = document.getElementById("portfolioGrid");

for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement("img");
  img.src = `stylist-images/image${i}.jpg`;
  img.alt = `Styling work ${i}`;
  grid.appendChild(img);
}
