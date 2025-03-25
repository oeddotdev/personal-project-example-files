// confettiButton.js

document.addEventListener('DOMContentLoaded', function () {
  // Get the button element and canvas element
  const button = document.getElementById('button');
  const canvas = document.getElementById('canvas');
  
  // Initialize the canvas for confetti
  const confettiSettings = { target: canvas };

  // Handle the button click to trigger confetti
  button.addEventListener('click', () => {
    // Start confetti effect when the button is clicked
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();  // Start confetti animation

    // Optionally, change button text after confetti is triggered
    button.querySelector('.button-text').textContent = 'Success!';
  });
});
