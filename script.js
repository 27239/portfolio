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
function flipCard(element) {
    element.classList.toggle('flipped');
}

const text = "Hello, I'm Yagnesh 👋";
const speed = 70;
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}



window.onload = typeWriter;


