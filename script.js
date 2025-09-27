document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("search");
  if (search) {
    search.addEventListener("keyup", () => {
      const filter = search.value.toLowerCase();
      const commands = document.querySelectorAll(".command");
      commands.forEach(cmd => {
        cmd.style.display = cmd.textContent.toLowerCase().includes(filter) ? "block" : "none";
      });
    });
  }
});