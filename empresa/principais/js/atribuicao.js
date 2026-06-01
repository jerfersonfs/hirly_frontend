/*  function renderCompanyAssignment() {
    if (!document.querySelector(".atribuir-wrapper")) return;
    var pendingList = document.querySelector(".atribuir-grid .card-painel:first-child .panel-list");
    var recruiterList = document.querySelector(".atribuir-grid .card-painel:nth-child(2) .panel-list");
    if (pendingList) {
      pendingList.innerHTML = db.jobs.filter(function (job) { return job.status !== "closed"; }).slice(0, 3).map(function (job) {
        return '<div class="list-item-simple" data-job-id="' + job.id + '"><h4 class="item-title">' + job.title + '</h4><p class="item-desc">' + job.area + ' - ' + job.workMode + '</p></div>';
      }).join("");
    }
    if (recruiterList) {
      recruiterList.innerHTML = db.recruiters.slice(0, 3).map(function (recruiter) {
        var badge = recruiter.load > 65 ? "badge-warning" : recruiter.load > 35 ? "badge-info" : "badge-success";
        return '<div class="recrutador-item" data-recruiter-id="' + recruiter.id + '"><div class="recrutador-textos"><h4 class="item-title">' + recruiter.name + '</h4><p class="item-desc">' + recruiter.area + ' - ' + Math.round(recruiter.load / 14) + ' vagas</p></div><span class="badge ' + badge + '">' + recruiter.load + '%</span></div>';
      }).join("");
    }
    document.querySelectorAll(".atribuir-wrapper button").forEach(function (button) {
      button.addEventListener("click", function () {
        notify(button.textContent.trim() === "Confirmar atribuicoes" ? "Atribuicoes confirmadas." : "Selecione uma vaga e um recrutador na lista.");
      });
    });
  }*/