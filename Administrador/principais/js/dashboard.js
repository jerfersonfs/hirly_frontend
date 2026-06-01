  function renderAdminDashboard() {
    if (!document.querySelector(".dash-header")) return;
    var title = (document.querySelector(".dash-title") || document.createElement("div")).textContent.toLowerCase();
    if (title.indexOf("modera") === -1) return;
    var values = document.querySelectorAll(".metric-value");
    if (values[0]) values[0].textContent = db.reports.admin.reviewItems;
    if (values[1]) values[1].textContent = String(db.reports.admin.flaggedJobs).padStart(2, "0");
    if (values[2]) values[2].textContent = String(db.reports.admin.suggestedBlocks).padStart(2, "0");
    if (values[3]) values[3].textContent = db.reports.admin.avgResponse;
    document.querySelectorAll(".dash-grid button").forEach(function (button) {
      button.addEventListener("click", function () {
        showModal("Acao administrativa", '<p>Esta acao foi registrada no ambiente local de simulacao.</p><div class="hirly-modal-list">' + db.activities.slice(0, 3).map(function (activity) {
          return '<div class="hirly-modal-item"><strong>' + activity.title + '</strong><p>' + activity.detail + '</p></div>';
        }).join("") + "</div>", [
          { label: "Aprovar empresa", onClick: function () {
            var company = db.companies.find(function (item) { return item.status === "pending"; });
            if (company) company.status = "approved";
            saveDb(db);
            closeModal();
            notify(company ? company.name + " aprovada." : "Nao ha empresas pendentes.");
          } },
          { label: "Reprovar empresa", type: "danger", onClick: function () {
            var company = db.companies.find(function (item) { return item.status === "pending"; });
            if (company) company.status = "rejected";
            saveDb(db);
            closeModal();
            notify(company ? company.name + " reprovada." : "Nao ha empresas pendentes.");
          } }
        ]);
      });
    });
  }