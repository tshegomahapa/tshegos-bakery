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

    function validateForm(event, formType) {
        event.preventDefault(); 
        var name, email, message;
        
        if (formType === 'contact') {
            name = document.getElementById("contact-name").value;
            email = document.getElementById("contact-email").value;
            message = document.getElementById("contact-message").value;
            
            if (name.length < 3) {
                alert("Please enter a valid name (at least 3 characters).");
                return false;
            }
            if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
                alert("Please enter a valid email address.");
                return false;
            }
            if (message.length < 10) {
                alert("Your message must be at least 10 characters long.");
                return false;
            }
            alert("Contact message sent successfully!");
            document.querySelector('#contact-name').value = '';
            document.querySelector('#contact-email').value = '';
            document.querySelector('#contact-message').value = '';
            
        } else if (formType === 'enquiry') {
            name = document.getElementById("enq-name").value;
            var phone = document.getElementById("enq-phone").value;
            var details = document.getElementById("enq-details").value;
            
            if (name.length < 3) {
                alert("Please enter a valid name.");
                return false;
            }
            if (phone.length < 10) {
                alert("Please enter a valid phone number (at least 10 digits).");
                return false;
            }
            if (details.length < 5) {
                alert("Please provide more details about your enquiry.");
                return false;
            }
            alert("Enquiry submitted successfully! We will contact you soon.");
            document.querySelector('#enq-name').value = '';
            document.querySelector('#enq-phone').value = '';
            document.querySelector('#enq-details').value = '';
        }
    }

    var contactForm = document.querySelector('form[action="mailto:tshego@bakery.com"]');
    if (contactForm) {
        var formType = window.location.pathname.includes("Contact") ? 'contact' : 'enquiry';
        contactForm.addEventListener('submit', function(e) {
            validateForm(e, formType);
        });
    }
});