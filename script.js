document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
        const dropdown = item.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});

// Close dropdowns if clicked outside
window.addEventListener('click', event => {
    if (!event.target.matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});
