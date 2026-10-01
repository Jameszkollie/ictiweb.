document.addEventListener("DOMContentLoaded", () => {

    //FUNCTIONALITY 1: Elegant Dark/Light Mode Switcher
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
    
        if(currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
        }
        else{
            document.documentElement.setAttribute("data-theme", "dark");
        }
});

//FUNCTIONALITY 2: Interactive Catering & Group Order Cost Estimator
const slider = document.getElementById("guest-slider");
const guestDisplay = document.getElementById("user-count");
const totlaCostDisplay = document.getElementById("total-cost");

slider.addEventListener("input", (event) => {
    const guests = event.target.value;
    const baseCostPerGuest = 30; // \$30 per head package dinner
    const totalCost = guests * baseCostPerGuest;

    guestDisplay.textContent=guests;
    totlaCostDisplay.textContent=totalCost;
});

//FUNCTIONALITY 3: Reservation Submission and Validation Alert
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Intercept page refresh

    const clientName = document.getElementById("name-input").value.trim();

    //show validation confirmation feedback
    formFeedback.style.color = "#10b981";//Elegant emerald color
    formFeedback.textContent = 'Table reserved successfully! We look forward to hosting you, {clientName}.';

    contactForm.reset();
});
});