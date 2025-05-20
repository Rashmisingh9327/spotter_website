// // PAGE LOAD JS anim
// window.addEventListener("DOMContentLoaded", () => {
//     const wordSpans = document.querySelectorAll(".anim");

//     wordSpans.forEach((span, index) => {
//         const delay = index * 130;
//         span.style.animationDelay = `${delay}ms`;
//     });
// });

window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".anim");

  elements.forEach((el, index) => {
    const delay = index * 130;
    el.style.animationDelay = `${delay}ms`;
    el.style.animationName = "animatedkey"; // Ensure it's explicitly set
  });
});




function animateText(containerId, delay = 50) {
    const container = document.getElementById(containerId);
    const text = container.getAttribute("data-text");

    container.innerHTML = ""; // Clear original

    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        container.appendChild(span);

        // Animate each letter with staggered delay
        setTimeout(() => {
            span.classList.add("visible");
        }, delay * index);
    });

    // Add class when done
    setTimeout(() => {
        container.classList.add("completed");
    }, delay * text.length + 500); // +500ms buffer
}


  const toggle = document.getElementById("viewToggle");
  const label = document.getElementById("labelText");

  toggle.addEventListener("change", function () {
    const isHire = this.checked;

    // Update text
    label.textContent = isHire ? "Request API Key" : "I'm a developer";

    // Toggle screen
    document.getElementById("developerScreen").classList.toggle("active", !isHire);
    document.getElementById("hireScreen").classList.toggle("active", isHire);
  });