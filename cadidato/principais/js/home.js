/*
function renderCandidateHome() {
    var list = document.querySelector(".lista-card");
    if (!list) return;
    list.innerHTML = visibleJobs().slice(0, 5).map(function (job) {
      var company = companyById(job.companyId);
      return [
        '<div class="vaga-card-item" data-job-id="' + job.id + '">',
        '<div class="vaga-main-info">',
        '<img class="empresa-logo" src="' + logoSrc(company.logo) + '" alt="' + company.name + '" />',
        '<div class="textos-vaga"><h2 class="vaga-titulo-purple">' + job.title + '</h2><span class="empresa-nome">' + company.name + '</span></div>',
        '</div>',
        '<div class="vaga-meta-info">',
        '<div class="meta-item"><img class="meta-icon" src="' + iconSrc("MapPin.png") + '" alt="Localizacao" /><span class="meta-text">' + job.workMode + '</span></div>',
        '<div class="meta-item"><img class="meta-icon" src="' + iconSrc("mala.png") + '" alt="Salario" /><span class="meta-text">' + job.salary + '</span></div>',
        '</div>',
        '</div>'
      ].join("");
    }).join("");
    list.addEventListener("click", function (event) {
      var card = event.target.closest(".vaga-card-item");
      if (!card) return;
      localStorage.setItem(SELECTED_JOB_KEY, card.dataset.jobId);
      window.location.href = "buscarcandidatos.html";
    });
  }
*/