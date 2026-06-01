  function renderCompanyDashboard() {
    var dashboard = document.querySelector(".dashboard-wrapper");
    var title = document.querySelector(".dash-title");
    if (!dashboard || !title || title.textContent.toLowerCase().indexOf("governan") === -1) return;
    var values = dashboard.querySelectorAll(".metric-value");
    if (values[0]) values[0].textContent = db.jobs.filter(function (job) { return job.status === "draft" || job.status === "published"; }).length;
    if (values[1]) values[1].textContent = String(db.recruiters.length).padStart(2, "0");
    if (values[2]) values[2].textContent = "94%";
    if (values[3]) values[3].textContent = String(db.companies.filter(function (company) { return company.status === "pending"; }).length).padStart(2, "0");
    dashboard.querySelectorAll("button").forEach(function (button) {
      button.addEventListener("click", function () {
        var text = button.textContent.trim().toLowerCase();
        if (text.indexOf("atribui") !== -1) window.location.href = "../secundarias/atribuirrecrutadores.html";
        else if (text.indexOf("dados") !== -1) window.location.href = "../secundarias/dadosempresa.html";
        else notify("Fila de validacao carregada com dados locais.");
      });
    });
  }
