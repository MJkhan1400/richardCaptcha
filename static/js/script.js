document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");
  const button = document.querySelector(".button");
  const input = document.querySelector("input");

  const animateStart = () => {
    container.classList.add("told-richard");
  }

  const inputChangeHandler = (event) => {
    console.log(event.target.value);

    if (event.target.value.includes("Your hair ")) {
      container.classList.add("eyebrow-raise");
    } else {
      container.classList.remove("eyebrow-raise");
    }

    if (event.target.value === "Your hair looks kind of funny") {
      container.classList.add("animating-tear");
    } else if (container.classList.value.includes("animating-tear")) {
      container.classList.remove("animating-tear");
    }

    if (event.target.value === "Your hair looks fantastic") {
      container.classList.add("animating-smile");
    } else if (container.classList.value.includes("animating-smile")) {
      container.classList.remove("animating-smile");
    }
  }

  button.addEventListener("click", animateStart);
  input.addEventListener("input", (event) => inputChangeHandler(event));
});

