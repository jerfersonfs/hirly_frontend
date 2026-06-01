/*  function renderRecruiterJobs() {
    var grid = document.querySelector(".vagas-grid");
    if (!grid) return;
    var jobs = db.jobs.filter(function (job) { return job.status !== "closed"; });
    grid.innerHTML = jobs.map(function (job, index) {
      var candidates = db.applications.filter(function (application) { return application.jobId === job.id; }).length;
      var color = ["bg-green", "bg-blue", "bg-orange", "bg-purple"][index % 4];
      var solid = ["bg-green-solid", "bg-blue-solid", "bg-orange-solid", "bg-purple-solid"][index % 4];
      return [
        '<div class="vaga-card" data-job-id="' + job.id + '">',
        '<div class="vaga-card-left"><div class="vaga-icon-box ' + solid + '"></div>',
        '<div class="vaga-info"><h3 class="vaga-title">' + job.title + '</h3>',
        '<p class="vaga-meta">' + candidates + ' candidatos | ' + job.area + '</p>',
        '<span class="badge ' + color + ' c-purple-text">' + job.priority + '</span></div></div>',
        '<button class="btn-primary" data-view-candidates="' + job.id + '">Ver candidatos</button>',
        '</div>'
      ].join("");
    }).join("");

    var createButton = Array.prototype.find.call(document.querySelectorAll("button"), function (button) {
      return button.textContent.trim().toLowerCase() === "criar vaga";
    });
    if (createButton) {
      createButton.addEventListener("click", function () {
        var title = prompt("Titulo da vaga:");
        if (!title) return;
        var salary = prompt("Faixa salarial:", "R$ 3000 - 4500") || "R$ 3000 - 4500";
        db.jobs.unshift({
          id: createId("job"),
          title: title,
          level: "Junior",
          companyId: "company-techwave",
          recruiterId: "rec-pedro",
          workMode: "Remoto",
          type: "CLT",
          salary: salary,
          area: "Tecnologia",
          priority: "Nova",
          status: "draft",
          description: "Vaga criada localmente para simulacao do fluxo de recrutamento.",
          requirements: "Requisitos a definir pelo recrutador."
        });
        saveDb(db);
        renderRecruiterJobs();
        notify("Vaga criada como rascunho.");
      });
    }

    grid.addEventListener("click", function (event) {
      var view = event.target.closest("[data-view-candidates]");
      var card = event.target.closest(".vaga-card");
      var job = jobById(view ? view.dataset.viewCandidates : card && card.dataset.jobId);
      if (!job) return;
      if (view) {
        var applications = db.applications.filter(function (application) { return application.jobId === job.id; });
        var items = applications.length ? applications.map(function (application) {
          var candidate = db.candidates.find(function (item) { return item.id === application.candidateId; }) || currentCandidate();
          return '<div class="hirly-modal-item"><strong>' + candidate.name + '</strong><p>' + application.status + ' desde ' + application.createdAt + '</p></div>';
        }).join("") : '<p>Nenhum candidato nesta vaga ainda.</p>';
        showModal("Candidatos - " + job.title, '<div class="hirly-modal-list">' + items + '</div>');
      } else if (card) {
        showModal("Gerenciar vaga", "<p>" + job.title + " - " + companyById(job.companyId).name + "</p><p>Status atual: " + job.status + "</p>", [
          { label: "Editar titulo", type: "secondary", onClick: function () {
            var next = prompt("Novo titulo:", job.title);
            if (next) { job.title = next; saveDb(db); closeModal(); renderRecruiterJobs(); notify("Vaga atualizada."); }
          } },
          { label: "Publicar", onClick: function () { job.status = "published"; saveDb(db); closeModal(); renderRecruiterJobs(); notify("Vaga publicada."); } },
          { label: "Encerrar", type: "danger", onClick: function () { job.status = "closed"; saveDb(db); closeModal(); renderRecruiterJobs(); notify("Vaga encerrada."); } }
        ]);
      }
    });
  }
*/