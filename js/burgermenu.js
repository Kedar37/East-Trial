function toggleMenu() {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  }
  
  document.querySelectorAll('.dropdown-header').forEach(item => {
    item.addEventListener('click', function() {
      var dropdownItems = this.nextElementSibling;
      dropdownItems.style.display = dropdownItems.style.display === "block" ? "none" : "block";
    });
  });