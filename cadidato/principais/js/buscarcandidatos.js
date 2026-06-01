/*
const db = window.HirlyDatabase.db;

 function hasApplied(jobId) {
    return db.applications.some(function (application) {
      return application.jobId === jobId && application.candidateId === currentCandidate().id;
    });
  }

  function applyToJob(jobId) {
    if (hasApplied(jobId)) {
      notify("Voce ja se candidatou para esta vaga.");
      return;
    }
    db.applications.push({
      id: createId("app"),
      jobId: jobId,
      candidateId: currentCandidate().id,
      status: "Enviada",
      createdAt: new Date().toISOString().slice(0, 10)
    });
    db.activities.unshift({ id: createId("act"), title: "Nova candidatura", detail: currentCandidate().name + " se candidatou para " + jobById(jobId).title + ".", type: "application" });
    saveDb(db);
    notify("Candidatura enviada e salva.");
  }

  function visibleJobs() {
    return db.jobs.filter(function (job) { return job.status !== "closed"; });
  }

  function jobMatches(job, query, activeFilters) {
    var company = companyById(job.companyId);
    var haystack = [job.title, job.level, job.workMode, job.type, job.area, company.name].join(" ").toLowerCase();
    var matchesQuery = !query || haystack.indexOf(query.toLowerCase()) !== -1;
    var matchesFilters = activeFilters.every(function (filter) {
      var normalized = filter.toLowerCase();
      return haystack.indexOf(normalized) !== -1 || (normalized === "clt" && job.type.toLowerCase() === "clt");
    });
    return matchesQuery && matchesFilters;
  }
  function detailHtml(job) {
    var company = companyById(job.companyId);
    var applied = hasApplied(job.id);
    return [
      '<h2 class="detalhes-top-title">Detalhes da Vaga</h2>',
      '<div class="detalhes-centro">',
      '<img class="detalhe-logo-gigante" src="' + logoSrc(company.logo) + '" alt="' + company.name + '" />',
      '<h3 class="detalhe-cargo">' + job.title + '<br>(' + job.level + ')</h3>',
      '<p class="detalhe-info-linha">' + company.name + ' - ' + company.segment + '</p>',
      '<p class="detalhe-info-linha">' + job.workMode + ' - ' + job.type + '</p>',
      '<p class="detalhe-info-linha">Salario: ' + job.salary + '/mes</p>',
      '</div>',
      '<div class="detalhe-divisor"></div>',
      '<div class="detalhe-bloco-texto"><h4 class="detalhe-secao-titulo">Sobre a Vaga</h4><p class="detalhe-texto-p">' + job.description + '</p></div>',
      '<div class="detalhe-divisor"></div>',
      '<div class="detalhe-bloco-texto"><h4 class="detalhe-secao-titulo">Requisitos</h4><p class="detalhe-texto-p">' + job.requirements + '</p>',
      '<div class="btn-container-center"><button class="btn-candidatar-agora" data-apply-job="' + job.id + '"' + (applied ? " disabled" : "") + '>' + (applied ? "Candidatura Enviada" : "Candidatar-se Agora") + '<img src="' + iconSrc("seta.png") + '" alt="Seta" class="seta-btn-icon" /></button></div>',
      '</div>'
    ].join("");
  }

  function renderCandidateSearch() {
    var wrapper = document.querySelector(".vagas-cards-wrapper");
    var details = document.querySelector(".detalhes-vaga-coluna");
    if (!wrapper || !details) return;

    function render() {
      var queryInput = document.querySelector(".input-busca-real");
      var query = queryInput ? queryInput.value : "";
      var activeFilters = Array.prototype.slice.call(document.querySelectorAll(".filtro-tag input:checked")).map(function (input) {
        return input.parentElement.textContent.trim();
      });
      var jobs = visibleJobs().filter(function (job) { return jobMatches(job, query, activeFilters); });
      var subtitle = document.querySelector(".resultados-sub");
      if (subtitle) subtitle.textContent = "Encontramos " + jobs.length + " vagas para voce";
      wrapper.innerHTML = jobs.map(function (job, index) {
        var company = companyById(job.companyId);
        return [
          '<div class="vaga-card-busca' + (index === 0 ? " active" : "") + '" data-job-id="' + job.id + '">',
          '<img class="card-busca-logo" src="' + logoSrc(company.logo) + '" alt="' + company.name + '" />',
          '<div class="card-busca-textos">',
          '<h3 class="card-busca-titulo">' + job.title + '</h3>',
          '<span class="card-busca-empresa">' + company.name + '</span>',
          '<div class="card-busca-meta">',
          '<span><img src="' + iconSrc("MapPin.png") + '" alt="Pin"> ' + job.workMode + '</span>',
          '<span><img src="' + iconSrc("mala.png") + '" alt="Mala"> ' + job.salary + '</span>',
          '</div></div></div>'
        ].join("");
      }).join("");
      var selectedId = localStorage.getItem(SELECTED_JOB_KEY);
      var firstJob = jobs.find(function (job) { return job.id === selectedId; }) || jobs[0];
      if (firstJob) {
        details.innerHTML = detailHtml(firstJob);
        wrapper.querySelectorAll(".vaga-card-busca").forEach(function (card) {
          card.classList.toggle("active", card.dataset.jobId === firstJob.id);
        });
      }
    }

    wrapper.addEventListener("click", function (event) {
      var card = event.target.closest(".vaga-card-busca");
      if (!card) return;
      localStorage.setItem(SELECTED_JOB_KEY, card.dataset.jobId);
      wrapper.querySelectorAll(".vaga-card-busca").forEach(function (item) { item.classList.remove("active"); });
      card.classList.add("active");
      details.innerHTML = detailHtml(jobById(card.dataset.jobId));
    });

    details.addEventListener("click", function (event) {
      var button = event.target.closest("[data-apply-job]");
      if (!button) return;
      applyToJob(button.dataset.applyJob);
      details.innerHTML = detailHtml(jobById(button.dataset.applyJob));
    });

    document.querySelectorAll(".filtro-tag input").forEach(function (input) { input.addEventListener("change", render); });
    var search = document.querySelector(".input-busca-real");
    if (search) search.addEventListener("input", render);
    render();
  }*/