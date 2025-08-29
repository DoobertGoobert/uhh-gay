fetch("https://api.github.com/users/DoobertGoobert/repos?sort=updated&per_page=6")
  .then(response => response.json())
  .then(repos => {
    const container = document.getElementById("github-projects");
    repos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.language ? repo.language : "Unknown Language."}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error("GitHub API error:", error));
let typed = "";
document.addEventListener("keydown", (e) => {
  if (e.key.length === 1) {
    typed += e.key.toLowerCase();
    if (typed.includes("gennesis")) {
      window.location.href = "https://gennesis.cc";
    }
    if (typed.length > 20) typed = typed.slice(-20);
  }
});
