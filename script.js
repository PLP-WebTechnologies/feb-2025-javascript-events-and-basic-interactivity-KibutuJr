// Button Click Event
// This script changes the button text and background color when clicked
const button = document.getElementById('action-btn');
button.addEventListener('click', () => {
    button.textContent = 'You Clicked Me!';
    button.style.backgroundColor = '#FF5733';
});

//  Hover Effects
// This script adds hover effects to the images in the gallery
// When the mouse hovers over an image, it scales up slightly
const images = document.querySelectorAll('#image-gallery img');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

//Keypress Detection

window.addEventListener('keypress', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

//Double-click or Long Press Event
// This script changes the background color of the body when double-clicked or long-pressed
button.addEventListener('dblclick', () => {
    alert('Double-click detected!');
});

let pressTimer;
button.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        alert('Long press detected!');
    }, 1500); // Trigger after 1.5 seconds
});
button.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
});

//Form Validation
// This script validates the form inputs before submissionconst form = document.getElementById('contact-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const name = document.getElementById('name');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    if (!name.value || !email.value || !password.value) {
        alert('All fields are required!');
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        alert('Please enter a valid email address.');
    } else if (password.value.length < 8) {
        alert('Password must be at least 8 characters long.');
    } else {
        alert('Form submitted successfully!');
    }
});


