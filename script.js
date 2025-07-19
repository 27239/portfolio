function navigateSection() {
    const dropdown = document.getElementById('menuDropdown');
    const sectionId = dropdown.value;
    if (sectionId) {
        window.location.href = sectionId;
    }
}
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}
const text = "Hello, I'm Yagnesh 👋";  // You can change this
const speed = 100; // typing speed in ms
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

