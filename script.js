// Function to change background color
function changeBackground() {
    const colors = ['#f0f0f0', '#e8f4f8', '#f8e8e8', '#f0f8e8'];
    const currentColor = document.body.style.backgroundColor;
    const currentIndex = colors.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[nextIndex];
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Add event listeners when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Background color change button
    const colorButton = document.getElementById('colorButton');
    if (colorButton) {
        colorButton.addEventListener('click', changeBackground);
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
}); 