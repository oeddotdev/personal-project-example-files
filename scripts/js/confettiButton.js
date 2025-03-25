// confetti.js

// Wait for the DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function () {
  const confettiButton = document.getElementById('confettiButton');

  // Confetti effect triggered by button click
  confettiButton.addEventListener('click', () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
    });
  });
});
