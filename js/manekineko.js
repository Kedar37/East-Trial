    // Function to toggle visibility and position of neko-btn based on scroll
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
      const nekoButton = document.querySelector(".neko-btn");
      const footer = document.querySelector("footer");
    
      // Show the button when user scrolls past a certain point
      if (window.scrollY > 10) {
        nekoButton.style.display = "block";
      } else {
        nekoButton.style.display = "none";
      }
    
      // Calculate the offset where the button should stick to the footer
      let buttonBottomOffset = footer.offsetTop - window.innerHeight;
    
      // Stick the button to the bottom when scrolled near the footer
      if (window.pageYOffset >= buttonBottomOffset) {
        nekoButton.style.position = "absolute";
        nekoButton.style.bottom = "20px"; // Adjust this value as needed
        nekoButton.style.right = "20px"; // Adjust this value as needed
      } else {
        nekoButton.style.position = "fixed";
        nekoButton.style.bottom = "20px"; // Adjust this value as needed
        nekoButton.style.right = "20px"; // Adjust this value as needed
      }
    }