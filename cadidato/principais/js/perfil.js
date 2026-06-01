  function renderCandidateProfile() {
    if (!document.querySelector(".perfil-wrapper")) return;
    var candidate = currentCandidate();
    var values = document.querySelectorAll(".perfil-dados-col .dado-valor");
    if (values[0]) values[0].textContent = candidate.name;
    if (values[1]) values[1].textContent = candidate.email;
    if (values[2]) values[2].textContent = candidate.phone;

    document.querySelectorAll(".perfil-dados-col .icon-lapis").forEach(function (icon, index) {
      icon.style.cursor = "pointer";
      icon.addEventListener("click", function () {
        var fields = ["name", "email", "phone"];
        var labels = ["nome", "email", "celular"];
        var next = prompt("Atualizar " + labels[index] + ":", candidate[fields[index]]);
        if (!next) return;
        candidate[fields[index]] = next;
        db.users[0][fields[index] === "name" ? "name" : fields[index]] = next;
        saveDb(db);
        renderCandidateProfile();
        notify("Perfil atualizado.");
      });
    });
  }