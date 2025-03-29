document.addEventListener("DOMContentLoaded", function() {
    //Navbar element for menu
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    if (navbarPlaceholder) {
        //Main menu
        
        navbarPlaceholder.innerHTML = `
            <header id="navbar">
                <div class="banner-container">   
                    <img src="Photos/Banner.jpg" alt="Banner Avalon Adventures" class="banner">
                </div>

                <div class="navlinks-container">
                    <div class="menu-container">
                        <div class="menu-icon" onclick="toggleMenu()">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <p class="brand-name">Avalon Adventures</p>
                    </div>
                    
                    <nav id="menu">
                        <button class="close-menu" onclick="toggleMenu()">X</button>
                        <ul class="nav-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
         `;
    }
 
    // Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        //Social network icons
        footerPlaceholder.innerHTML = `
            <footer>
                <div class="footer-container">
                    <p>Follow us on:</p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src="Icons/facebook.png" alt="Facebook">
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img src="Icons/instagram.png" alt="Instagram">
                        </a>
                        <a href="https://x.com/" target="_blank">
                            <img src="Icons/x.png" alt="Twitter">
                        </a>
                    </div>
                    <p>&copy; 2025 The Maple Leaf Market.</p>
                </div>
            </footer>
        `;
    }

}); // End DOMContentLoaded event

//Hamburger Menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("menu-active");
}

//JavaScript Validation
function validateForm() {

    let phone = document.getElementById('phone').value;
    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let question = document.getElementById('question').value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Not null
    if (name.trim() === "") {
        //Name
        alert("Please enter your name");
        return false;
    }else if (email.trim() === "") {
        //E-mail
        alert("Please enter your email");
        return false;
    }else if (question.trim() === "") {
        //Question
        alert("Please enter your question");
        return false;
    }else if (phone && !phonePattern.test(phone)) {
        //Format phone
        alert("Please enter a valid phone number in the format: 123-456-7890");
        return false; 
    }else if (email && !emailPattern.test(email)) {
        //Format e-mail
        alert("Please enter a valid email");
        return false; 
    }else{
        return true;
    }
}


