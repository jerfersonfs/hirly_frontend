  function renderCandidateInsights() {
    var wrapper = document.querySelector(".insights-content-wrapper");
    if (!wrapper) return;
    var candidateId = currentCandidate().id;
    var applications = db.applications.filter(function (application) { return application.candidateId === candidateId; });
    var interviews = applications.filter(function (application) { return application.status.toLowerCase().indexOf("entrevista") !== -1; });
    var numbers = wrapper.querySelectorAll(".card-number");
    if (numbers[0]) numbers[0].textContent = applications.length;
    if (numbers[1]) numbers[1].textContent = db.messages.filter(function (message) { return message.to === "Marcelo"; }).length;
    if (numbers[2]) numbers[2].textContent = applications.filter(function (application) { return application.status !== "Encerrada"; }).length;
    if (numbers[3]) numbers[3].textContent = "4";
    if (numbers[4]) numbers[4].textContent = interviews.length;
    if (numbers[5]) numbers[5].textContent = visibleJobs().length;

    var events = wrapper.querySelector(".eventos-list");
    if (events) {
      var nextEvents = applications.slice(0, 5).map(function (application, index) {
        var job = jobById(application.jobId);
        var company = companyById(job.companyId);
        var labels = ["Amanha, 14:00 - Entrevista Tecnica", "15 de Jun, 10:30 - Bate-papo com RH", "18 de Jun, 16:00 - Teste Pratico"];
        return '<div class="evento-item-row"><div class="evento-icon-wrapper"><img src="' + iconSrc("CalendarDots.png") + '" alt="Calendario"></div><p class="evento-desc-text">' + (labels[index] || "Aguardando retorno") + '<br><span class="sub-tech">(' + company.name + ')</span></p></div>';
      }).join("");
      events.innerHTML = nextEvents || '<div class="evento-item-row"><div class="evento-icon-wrapper"><img src="' + iconSrc("CalendarDots.png") + '" alt="Calendario"></div><p class="evento-desc-text">Nenhum evento agendado<br><span class="sub-tech">(acompanhe suas candidaturas)</span></p></div>';
    }
  }