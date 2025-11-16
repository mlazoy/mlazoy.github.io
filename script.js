document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  function toggleTheme() {
    document.body.classList.toggle("green-mode");

    // replace navbar content depending on mode
    if (document.body.classList.contains("green-mode")) {
      navbar.innerHTML = `
        root@mlazouhost:~#
        <a href="#about">Home</a>
        <a href="#cv">CV</a>
        <button id="theme-toggle">exit</button>
      `;
    } else {
      navbar.innerHTML = `
        <a href="#about">Home</a>
        <a href="#cv">CV</a>
        <button id="theme-toggle">
            <i class="fa fa-terminal" aria-hidden="true"></i>
        </button>
      `;
    }

    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
  }

  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
});
