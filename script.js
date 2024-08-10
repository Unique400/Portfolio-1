document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the default form submission

        alert('Form submitted!'); // Show a simple alert on form submission

        // Here you could add code to actually submit the form data via AJAX, etc.
    });
});