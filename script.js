function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

// Contact form
document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("response").innerText =
        "Thank you, " + name +
        "! Your message has been received.";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    this.reset();
});