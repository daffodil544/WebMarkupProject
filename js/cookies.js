// Select the button and cookies message using querySelector
const button = document.querySelector('.accept-cookies'); // Use .accept-cookies for class selector
const cookiesMessage = document.querySelector('.cookies-message'); // Select the message container

// Add click event to the button
button.addEventListener('click', () => {
  cookiesMessage.style.display = 'none'; // Hide the cookies message
});
