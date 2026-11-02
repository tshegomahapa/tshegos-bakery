document.addEventListener("DOMContentLoaded", function() {
    
    var accordions = document.getElementsByClassName("accordion-btn");
    
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    var searchInput = document.getElementById("searchInput");
    
    if (searchInput) {
        searchInput.addEventListener("keyup", function() {
            var filter = searchInput.value.toLowerCase();
            var menuItems = document.querySelectorAll(".menu-item");

            menuItems.forEach(function(item) {
                var text = item.textContent.toLowerCase();
                if (text.includes(filter)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }
});