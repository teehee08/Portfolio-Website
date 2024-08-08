const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".control");

function PageTransitions(){
    sectBtns.forEach((btn) => {
        btn.addEventListener("click", function(){
            // Remove active-btn class from currently active button
            document.querySelector(".active-btn").classList.remove("active-btn");
            // Add active-btn class to clicked button
            this.classList.add("active-btn");

            // Remove active class from currently active section
            document.querySelector(".active").classList.remove("active");
            // Add active class to section corresponding to clicked button
            const id = this.dataset.id;
            document.getElementById(id).classList.add("active");
        });
    });
}

PageTransitions();

// Add event listener to the container
document.querySelector('.pcard').addEventListener('mouseover', function() {
    // Add class to the container to trigger the animation
    this.classList.add('hover');
});
  
  // Add event listener to the container
document.querySelector('.pcard').addEventListener('mouseout', function() {
    // Remove class from the container to reset the animation
    this.classList.remove('hover');
});