// assets/js/simoleons.js
const messages = [
  "Initializing INFINITY.exe… Estimated Time Remaining: ∞",
  // ... all your messages ...
  "[DIAGNOSTIC: Heartrate nominal, spiritual enrichment rate optimal.]",
];

const SPEND_COST = 25;

document.addEventListener('DOMContentLoaded', function() {
    const earnBtn = document.getElementById("counterBtn");
    const spendBtn = document.getElementById("spendBtn");
    const amount = document.querySelector("#clickCount .amount");
    const popup = document.getElementById("simPopup");
    const popupText = document.getElementById("simPopupText");
    const closePopup = document.getElementById("closePopup");

    if (!amount) {
        console.error("Counter display not found");
        return;
    }

    // Load count from localStorage
    let count = Number(localStorage.getItem("seventhHeavenClicks")) || 0;
    amount.textContent = count;

    // Setup earn button if it exists on this page
    if (earnBtn) {
        earnBtn.addEventListener("click", () => {
            count++;
            localStorage.setItem("seventhHeavenClicks", count);
            amount.textContent = count;
        });
    }

    // Setup spend button if it exists on this page
    if (spendBtn) {
        spendBtn.addEventListener("click", () => {
            if (count >= SPEND_COST) {
                count -= SPEND_COST;
                localStorage.setItem("seventhHeavenClicks", count);
                amount.textContent = count;

                const message = messages[Math.floor(Math.random() * messages.length)];
                popupText.textContent = message;
                popup.classList.remove("hidden");
            } else {
                // Optional: Show "not enough" message
                alert(`Need §${SPEND_COST - count} more Simoleons!`);
            }
        });
    }

    // Setup popup close if it exists on this page
    if (closePopup) {
        closePopup.addEventListener("click", () => {
            popup.classList.add("hidden");
        });
    }
});