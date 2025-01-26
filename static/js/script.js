document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const input = document.querySelector("#name");
  const cryAudio = document.getElementById("cry-audio");
  const laughAudio = document.getElementById("laugh-audio");

  // Stop all audio playback
  const stopAllAudio = () => {
    cryAudio.pause();
    cryAudio.currentTime = 0;
    laughAudio.pause();
    laughAudio.currentTime = 0;
  };

  // Function to handle sentiment response and animations
  const handleResponse = (sentiment) => {
    // Remove all previous animation classes
    container.classList.remove("eyebrow-raise", "animating-tear", "animating-smile", "told-richard");

    stopAllAudio(); // Stop audio before applying new logic

    if (sentiment === "Neutral") {
      container.classList.add("eyebrow-raise"); // Neutral state: Eyebrow raise
    } else if (sentiment === "Negative") {
      container.classList.add("animating-tear"); // Negative state: Crying
      cryAudio.play(); // Play crying audio (loop enabled)
    } else if (sentiment === "Positive") {
      container.classList.add("animating-smile", "told-richard"); // Positive state: Smiling with thumbs-up
      laughAudio.play(); // Play laugh audio once
    }
  };

  // Event listener for input changes
  input.addEventListener("input", async () => {
    const text = input.value.trim();
    if (!text) {
      // Reset all states if the input is empty
      container.classList.remove("eyebrow-raise", "animating-tear", "animating-smile", "told-richard");
      stopAllAudio();
      return;
    }

    try {
      const response = await fetch("/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        handleResponse(data.sentiment); // Pass sentiment to the handler
      } else {
        console.error("Error analyzing sentiment:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  });
});
