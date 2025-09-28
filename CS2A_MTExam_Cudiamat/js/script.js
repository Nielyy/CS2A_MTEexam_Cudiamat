function addToCart(button) {
    if (button.textContent === "Add to Cart") {
        button.textContent = "Remove from Cart";
    } else {
        button.textContent = "Add to Cart";
    }
}

function validateForm() {
    let name = document.getElementById('name').value;
    let title = document.getElementById('title').value;
    let message = document.getElementById('message').value;
    if (name && title && message) {
        alert("Form submitted successfully!");
        return true;
    } else {
        alert("Please fill in all fields.");
        return false;
    }
}
