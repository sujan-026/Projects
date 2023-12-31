// Number of stars you want
const numberOfStars = 700;
const jupiterMoons = 5;

// Create and append stars to the body
for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement("div");
  star.className = "stars";
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.borderRadius = '100%';

  // Check if the star's top position is within the specified range
  if (parseInt(star.style.top) >= 50 && parseInt(star.style.top) <= 50) {
    star.remove(); // Remove the star if it falls within the range
  } else {
    document.body.appendChild(star); // Append the star if it's outside the range
  }
}