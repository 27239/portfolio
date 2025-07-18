function navigateSection() {
    const dropdown = document.getElementById('menuDropdown');
    const sectionId = dropdown.value;
    if (sectionId) {
        window.location.href = sectionId;
    }
}
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

