// assets/js/simoleons.js
const messages = [
  "Initializing Infinity.EXE... (ETA: ∞)",
  "Serenity buffer: 97% loaded. Please remain appropriately serene.",
  "You feel a wave of calm. (This feeling is procedurally generated.)",
  "All deadlines have been postponed. Indefinitely.",
  "Stress_Rating is being archived to a lower-priority cloud.",
  "The heavenly sphere will undergo a short maintenance soon, thanks for your understanding.",
  "A state of grace has been assigned to your account.",
  "Rendering everlasting peace...",
  "You sit down on a vacant cloud... while time passes gently.",
  "A soft light settles around you... your energy bill increases slightly.",
  "You lean back and stop keeping track of the time, exactly at 3:14 PM EST.",
  "You take a short rest, without feeling the need to explain why.",
  "You suddenly feel comfortably unimportant... hey, that's actually pretty nice!",
  "Your thoughts drift into the distance... they promise to return later.",
  "You are allowed to linger, for the briefest of moments. (Heavenly terms and conditions apply.)",
  "You forget what you were rushing toward... or away from.",
  "Nothing interrupts this pause. (Click the 'OK' button to interrupt the pause.)",
  "A permission you didn't need to ask for, was suddenly granted.",
  "Time idles beside you... with the gentle hum of a Microscotch Covetta Q628-1500JA",
  "You sink into the quiet… the bathroom sink remains quiet as well.",
  "You remain, unsurprisingly undisturbed, even by this surprise disturbance.",
  "[<HEAVENLY ATMOSPHERE> LOADED SUCCESFULLY]",
  "[ACHIEVEMENT UNLOCKED: State of Mild Contentment]",
  "[SYSTEM NOTICE: The Blessed Machine acknowledges your presence.]",
  "Heavenly background processes continue normally.",
  "That one weight you carry lifts slowly...",
  "Aether Portal initialized… please provide sufficient hydration.",
  "[DIAGNOSTIC: Heartrate nominal, spiritual enrichment rate optimal.]"
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
