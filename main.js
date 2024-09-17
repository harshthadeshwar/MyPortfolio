
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
});



// Get the span element
const cybersecurityText = document.getElementById('cybersecurity-text');

// Store the original text and the masked text
const originalText = 'Cybersecurity';
const maskedText = '*************';

// Function to toggle the text
function toggleText() {
    cybersecurityText.classList.add('animated'); // Add animation class
    setTimeout(() => {
        cybersecurityText.textContent = (cybersecurityText.textContent === originalText) ? maskedText : originalText;
        cybersecurityText.classList.remove('animated'); // Remove animation class after change
    }, 500); // Wait for 500ms for the transition
}

// Set an interval to switch every 2 seconds (2000ms)
setInterval(toggleText, 2000);





// Function to detect when an element is in the viewport
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom >= 0
    );
}

// Function to add the 'visible' class to elements in view
function checkScroll() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(element => {
        if (isElementInView(element)) {
            element.classList.add('visible');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', checkScroll);

// Initial check when the page loads
document.addEventListener('DOMContentLoaded', () => {
    checkScroll(); // Initial check on load
});




// Function to detect when an element is in the viewport
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Function to add 'visible' class to elements in view
function checkScroll() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(element => {
        if (isElementInView(element)) {
            element.classList.add('visible');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', checkScroll);

// Initial check when the page loads
document.addEventListener('DOMContentLoaded', () => {
    checkScroll(); // Initial check on page load
});


