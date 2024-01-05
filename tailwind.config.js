/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}







.icon-container {
  display: flex;
  flex-wrap: nowrap;
  gap: 60px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

.icon-item {
  text-align: center;
  transition: color 0.3s, opacity 0.3s; /* Add transition for smooth hover effect */
}

.icon-item img {
  width: 40px;
  height: 40px;
  opacity: 50%;

  transition: opacity 0.3s; /* Add transition for smooth hover effect */
}

.icon-item span {
  display: block;
  margin-top: 5px;
  font-size: 10px; /* Set the font size of the text to 16px */
  opacity: 50%;
  transition: opacity 0.3s, border-bottom 0.3s; /* Add transition for smooth hover effect */
  border-bottom: 1px solid transparent; /* Add transparent border-bottom */
}

.icon-item:hover img{
  opacity: 1; /* Change opacity to 1 on hover */
  color: black; /* Change color to main color on hover */
}
.icon-item:hover span {
  opacity: 1; /* Change opacity to 1 on hover */
  color: black; /* Change color to main color on hover */
  border-bottom: 1px solid black; /* Add border-bottom color on hover */
}

.arrow-button {
  font-size: 24px;
  background-color: black;
  border: none;
  cursor: pointer;
}

.arrow-button:focus {
  outline: none;
}


.scroll {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: transparent;
}

.left-move,
.right-move {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  outline: none;




  <a href="#" class="footer-item">Popular</a>
    <a href="#" class="footer-item">Arts & culture</a>
    <a href="#" class="footer-item">Outdoors</a>
    <a href="#" class="footer-item">Mountains</a>
    <a href="#" class="footer-item">Beach</a>
    <a href="#" class="footer-item">Unique stays</a>
    <a href="#" class="footer-item">Categories</a>
    <a href="#" class="footer-item">Things to do</a>

    <a href="https://www.facebook.com/YourFacebookPageURL" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-facebook"></i>
</a>
<a href="https://twitter.com/YourTwitterPageURL" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-square-twitter"></i>
</a>
<a href="https://www.instagram.com/YourInstagramPageURL" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-square-instagram"></i>
</a>