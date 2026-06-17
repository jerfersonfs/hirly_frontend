(function () {
  "use strict";

  var STORAGE_KEY = "hirly.mockdb.v1";
  var SELECTED_JOB_KEY = "hirly.selectedJobId";

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  var seed = {
    users: [
      { id: "user-candidato-1", role: "candidate", name: "Marcelo Ricardo Monteiro Filho", email: "marcelo@gmail.com", phone: "(19) 99120-3328" },
      { id: "user-recrutador-1", role: "recruiter", name: "Pedro Almeida", email: "pedro@techwave.com", phone: "(11) 97777-4411" },
      { id: "user-admin-1", role: "admin", name: "Livia Martins", email: "livia@hirly.com", phone: "(11) 96666-2277" }
    ],
    candidates: [
      {
        id: "cand-marcelo",
        userId: "user-candidato-1",
        name: "Marcelo Ricardo Monteiro Filho",
        email: "marcelo@gmail.com",
        phone: "(19) 99120-3328",
        level: "Junior",
        skills: ["HTML", "CSS", "JavaScript", "Figma"],
        experiences: [
          { role: "Assistente Front-end", company: "TechWare", period: "Jan 2025 - Atual", description: "Desenvolvimento de telas" },
          { role: "Suporte Tecnico", company: "Ype", period: "Mar 2023 - Out 2024", description: "Manutencao basica" }
        ]
      },
      { id: "cand-ana", name: "Ana Luiza Prado", email: "ana.prado@email.com", phone: "(11) 98888-1200", level: "Pleno", skills: ["UX", "Pesquisa", "Produto"] },
      { id: "cand-joao", name: "Joao Victor Lima", email: "joao.lima@email.com", phone: "(21) 95555-3344", level: "Junior", skills: ["React", "CSS", "Testes"] },
      { id: "cand-bruna", name: "Bruna Costa", email: "bruna.costa@email.com", phone: "(31) 94444-8822", level: "Senior", skills: ["Dados", "SQL", "BI"] }
    ],
    companies: [
      { id: "company-nubank", name: "Nubank", segment: "Fintech", status: "approved", logo: "nubank.png" },
      { id: "company-itau", name: "Itau", segment: "Banco", status: "approved", logo: "itau.png" },
      { id: "company-samsung", name: "Samsung", segment: "Tecnologia", status: "approved", logo: "samsung.png" },
      { id: "company-ifood", name: "Ifood", segment: "Delivery", status: "pending", logo: "ifood.png" },
      { id: "company-c6", name: "C6 Bank", segment: "Fintech", status: "pending", logo: "c6.png" },
      { id: "company-techwave", name: "TechWave Brasil", segment: "Tecnologia", status: "approved", logo: "logo.png" }
    ],
    recruiters: [
      { id: "rec-camila", name: "Camila Rocha", area: "Produto & Design", load: 72, companyId: "company-techwave" },
      { id: "rec-carlos", name: "Carlos Almeida", area: "Tecnologia", load: 48, companyId: "company-techwave" },
      { id: "rec-beatriz", name: "Beatriz Souza", area: "Operacao", load: 24, companyId: "company-techwave" },
      { id: "rec-pedro", name: "Pedro Almeida", area: "Recrutamento Tech", load: 56, companyId: "company-techwave" }
    ],
    jobs: [
      {
        id: "job-product-designer",
        title: "Product Designer",
        level: "Junior",
        companyId: "company-nubank",
        recruiterId: "rec-camila",
        workMode: "Remoto",
        type: "Full-time",
        salary: "R$ 2300 - 2800",
        area: "Produto",
        priority: "Alta",
        status: "published",
        description: "Atue na criacao de experiencias simples, acessiveis e orientadas a dados para produtos financeiros.",
        requirements: "Portfolio, Figma, pesquisa com usuarios e boa comunicacao com times de produto."
      },
      {
        id: "job-backend-itau",
        title: "Software Engineer (Backend)",
        level: "Pleno",
        companyId: "company-itau",
        recruiterId: "rec-carlos",
        workMode: "Hibrido",
        type: "CLT",
        salary: "R$ 4000 - 4300",
        area: "Tecnologia",
        priority: "Ativa",
        status: "published",
        description: "Desenvolvimento de servicos backend para meios de pagamento e integracoes internas.",
        requirements: "Node.js, APIs REST, banco de dados relacional e testes automatizados."
      },
      {
        id: "job-dados-samsung",
        title: "Analista de Dados",
        level: "Pleno",
        companyId: "company-samsung",
        recruiterId: "rec-beatriz",
        workMode: "Presencial",
        type: "Full-time",
        salary: "R$ 5000 - 5400",
        area: "Dados",
        priority: "Ativa",
        status: "published",
        description: "Construa relatorios e acompanhe indicadores de vendas, operacao e sucesso do cliente.",
        requirements: "SQL, Power BI, Excel avancado e capacidade de traduzir dados em decisoes."
      },
      {
        id: "job-testes-ifood",
        title: "Analista de Testes",
        level: "Junior",
        companyId: "company-ifood",
        recruiterId: "rec-carlos",
        workMode: "Presencial",
        type: "CLT",
        salary: "R$ 2300 - 2500",
        area: "Qualidade",
        priority: "Triagem",
        status: "published",
        description: "Apoie o time de qualidade com cenarios de teste, evidencias e acompanhamento de bugs.",
        requirements: "Conhecimento em testes manuais, escrita clara e nocao de automacao."
      },
      {
        id: "job-front-c6",
        title: "Desenvolvedor Front-End Junior",
        level: "Junior",
        companyId: "company-c6",
        recruiterId: "rec-pedro",
        workMode: "Remoto",
        type: "Estagio",
        salary: "R$ 3500 - 3700",
        area: "Tecnologia",
        priority: "Alta",
        status: "published",
        description: "Evolua interfaces web com foco em componentes reutilizaveis e experiencia responsiva.",
        requirements: "HTML, CSS, JavaScript, Git e vontade de aprender React."
      }
    ],
    applications: [
      { id: "app-1", jobId: "job-product-designer", candidateId: "cand-marcelo", status: "Em analise", createdAt: "2026-05-20" },
      { id: "app-2", jobId: "job-dados-samsung", candidateId: "cand-bruna", status: "Entrevista", createdAt: "2026-05-24" },
      { id: "app-3", jobId: "job-front-c6", candidateId: "cand-joao", status: "Triagem", createdAt: "2026-05-25" }
    ],
    messages: [
      { id: "msg-1", from: "Camila Rocha", to: "Marcelo", subject: "Portfolio recebido", body: "Seu portfolio foi anexado ao processo de Product Designer.", read: false },
      { id: "msg-2", from: "Pedro Almeida", to: "Joao", subject: "Entrevista tecnica", body: "Temos horarios disponiveis para esta semana.", read: true }
    ],
    activities: [
      { id: "act-1", title: "Nova candidatura", detail: "Marcelo se candidatou para Product Designer.", type: "application" },
      { id: "act-2", title: "Empresa pendente", detail: "Ifood aguarda aprovacao administrativa.", type: "moderation" },
      { id: "act-3", title: "Vaga publicada", detail: "Desenvolvedor Front-End Junior foi publicada.", type: "job" }
    ],
    notifications: [
      { id: "not-1", title: "3 candidaturas novas", role: "recruiter", read: false },
      { id: "not-2", title: "2 empresas aguardando aprovacao", role: "admin", read: false }
    ],
    reports: {
      admin: { reviewItems: 18, flaggedJobs: 7, suggestedBlocks: 3, avgResponse: "2h" },
      company: { openJobs: 18, applications: 342, screening: 84, interviews: 24, offers: 8 }
    }
  };

  function mergeDefaults(saved, defaults) {
    var result = clone(defaults);
    if (!saved || typeof saved !== "object") return result;
    Object.keys(defaults).forEach(function (key) {
      if (Array.isArray(defaults[key])) {
        result[key] = Array.isArray(saved[key]) && saved[key].length ? saved[key] : clone(defaults[key]);
      } else if (defaults[key] && typeof defaults[key] === "object") {
        result[key] = Object.assign({}, defaults[key], saved[key] || {});
      } else if (saved[key] !== undefined) {
        result[key] = saved[key];
      }
    });
    return result;
  }

  function loadDb() {
    try {
      return mergeDefaults(JSON.parse(localStorage.getItem(STORAGE_KEY)), seed);
    } catch (error) {
      return clone(seed);
    }
  }

  function saveDb(db) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  }

  var db = loadDb();

  function companyById(id) {
    return db.companies.find(function (company) { return company.id === id; }) || db.companies[0];
  }

  function jobById(id) {
    return db.jobs.find(function (job) { return job.id === id; }) || db.jobs[0];
  }

  function currentCandidate() {
    return db.candidates[0];
  }

  function createId(prefix) {
    return prefix + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
  }

  function firstAssetPrefix(pattern, fallback) {
    var image = Array.prototype.find.call(document.images, function (img) {
      return img.getAttribute("src") && img.getAttribute("src").indexOf(pattern) !== -1;
    });
    if (!image) return fallback;
    var src = image.getAttribute("src");
    return src.slice(0, src.indexOf(pattern) + pattern.length);
  }

  function logoSrc(fileName) {
    return firstAssetPrefix("images/logo/others/", "images/logo/others/") + fileName;
  }

  function iconSrc(fileName) {
    return firstAssetPrefix("images/icons/", "images/icons/") + fileName;
  }

  function notify(message) {
    var toast = document.createElement("div");
    toast.className = "hirly-toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(function () { toast.classList.add("is-visible"); });
    setTimeout(function () {
      toast.classList.remove("is-visible");
      setTimeout(function () { toast.remove(); }, 220);
    }, 2600);
  }

  function closeModal() {
    var backdrop = document.querySelector(".hirly-modal-backdrop");
    if (backdrop) backdrop.remove();
  }

  function showModal(title, bodyHtml, actions) {
    closeModal();
    var backdrop = document.createElement("div");
    backdrop.className = "hirly-modal-backdrop";
    var modal = document.createElement("div");
    modal.className = "hirly-modal";
    modal.innerHTML = "<h2>" + title + "</h2>" + bodyHtml;
    var actionBar = document.createElement("div");
    actionBar.className = "hirly-modal-actions";
    (actions || []).concat([{ label: "Fechar", type: "secondary", onClick: closeModal }]).forEach(function (action) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "hirly-action" + (action.type ? " " + action.type : "");
      button.textContent = action.label;
      button.addEventListener("click", action.onClick || closeModal);
      actionBar.appendChild(button);
    });
    modal.appendChild(actionBar);
    backdrop.appendChild(modal);
    backdrop.addEventListener("click", function (event) {
      if (event.target === backdrop) closeModal();
    });
    document.body.appendChild(backdrop);
  }

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
  }

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

  function registerForms() {
    function saveCandidateFromForm(form) {
      var inputs = form.querySelectorAll("input");
      var candidate = {
        id: createId("cand"),
        name: inputs[0].value,
        email: inputs[1].value,
        phone: inputs[2].value,
        level: "Junior",
        skills: [],
        experiences: []
      };
      db.candidates.unshift(candidate);
      db.users.unshift({ id: createId("user"), role: "candidate", name: candidate.name, email: candidate.email, phone: candidate.phone });
      saveDb(db);
      window.location.href = "../../candidato/principais/home.html";
    }

    function saveCompanyFromForm(form) {
      var inputs = form.querySelectorAll("input");
      db.companies.unshift({
        id: createId("company"),
        name: inputs[2].value || inputs[0].value,
        segment: "Empresa cadastrada",
        status: "pending",
        logo: "logo.png",
        cnpj: inputs[1].value,
        email: inputs[3].value,
        phone: inputs[4].value,
        address: inputs[5].value
      });
      saveDb(db);
      window.location.href = "../../empresa/principais/homeempresa.html";
    }

    var candidateForm = document.querySelector(".cadastro-form");
    if (candidateForm) {
      window.submitCadastro = function (event) {
        event.preventDefault();
        saveCandidateFromForm(candidateForm);
      };
      candidateForm.addEventListener("submit", function (event) {
        event.preventDefault();
        saveCandidateFromForm(candidateForm);
      });
    }

    var companyForm = document.querySelector(".cadastro-empresa-form");
    if (companyForm) {
      window.submitCadastroEmpresa = function (event) {
        event.preventDefault();
        saveCompanyFromForm(companyForm);
      };
      companyForm.addEventListener("submit", function (event) {
        event.preventDefault();
        saveCompanyFromForm(companyForm);
      });
    }
  }

  function renderRecruiterJobs() {
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
    });createButton.addEventListener("click", function () {

  if (!document.getElementById("hirly-modal-form-style")) {

    const style = document.createElement("style");

    style.id = "hirly-modal-form-style";

    style.textContent = `
    
    .hirly-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .form-group label {
        font-size: 14px;
        font-weight: 600;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
    }

    .hirly-input,
    .hirly-textarea {
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 12px;
        font-size: 14px;
        box-sizing: border-box;
    }

    .hirly-textarea {
        min-height: 100px;
        resize: vertical;
    }

    `;

    document.head.appendChild(style);
}

  showModal(
  "Nova vaga",
  `
    <div class="hirly-form">

      <div class="form-group">
        <label>Título da vaga</label>
        <input
          type="text"
          id="job-title"
          class="hirly-input"
          placeholder="Ex: Desenvolvedor Front-end"
        >
      </div>

      <div class="form-row">

        <div class="form-group">
          <label>Faixa salarial</label>
          <input
            type="text"
            id="job-salary"
            class="hirly-input"
            placeholder="Ex: R$ 3.000 - 5.000"
          >
        </div>

        <div class="form-group">
          <label>Modalidade</label>
          <select id="job-workmode" class="hirly-input">
            <option>Remoto</option>
            <option>Híbrido</option>
            <option>Presencial</option>
          </select>
        </div>

      </div>

      <div class="form-group">
        <label>Descrição</label>
        <textarea
          id="job-description"
          class="hirly-textarea"
          placeholder="Descreva a vaga..."
        ></textarea>
      </div>

      <div class="form-group">
        <label>Requisitos</label>
        <textarea
          id="job-requirements"
          class="hirly-textarea"
          placeholder="Liste os requisitos..."
        ></textarea>
      </div>

    </div>
  `,
  [
    {
      label: "Cancelar",
      type: "secondary",
      onClick: closeModal
    },
    {
      label: "Criar vaga",
      onClick: function () {

        const title =
          document.getElementById("job-title").value.trim();

        const salary =
          document.getElementById("job-salary").value.trim();

        const workMode =
          document.getElementById("job-workmode").value;

        const description =
          document.getElementById("job-description").value.trim();

        const requirements =
          document.getElementById("job-requirements").value.trim();

        if (!title) {
          notify("Informe o título da vaga.");
          return;
        }

        db.jobs.unshift({
          id: createId("job"),
          title,
          level: "Junior",
          companyId: "company-techwave",
          recruiterId: "rec-pedro",
          workMode,
          type: "CLT",
          salary: salary || "A combinar",
          area: "Tecnologia",
          priority: "Nova",
          status: "draft",
          description: description || "Não informado",
          requirements: requirements || "Não informado"
        });

        saveDb(db);

        closeModal();

        renderRecruiterJobs();

        notify("Vaga criada com sucesso!");
      }
    }
  ]
);

});

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

  function renderCompanyAssignment() {
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
  }

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

  function renderModerationQueues() {
    var wrapper = document.querySelector(".moderar-wrapper");
    if (!wrapper) return;
    var pageTitle = (document.querySelector(".page-title") || document.createElement("div")).textContent.toLowerCase();
    if (pageTitle.indexOf("usu") === -1) return;
    var cases = [
      { name: "Rafael Costa", label: "CRITICO", meta: "Candidato - Denunciado 3 vezes", identity: "Divergente", reports: "3 confirmadas", occurrence: "Hoje, 09:14", reason: "Reincidencia de perfil duplicado confirmado." },
      { name: "Maria Torres", label: "ALTO", meta: "Candidata - Informacao enganosa", identity: "Em revisao", reports: "2 confirmadas", occurrence: "Ontem, 17:40", reason: "Historico profissional inconsistente com documentos enviados." },
      { name: "Empresa Nova", label: "MEDIO", meta: "Empresa - Contato indevido", identity: "Empresa pendente", reports: "1 confirmada", occurrence: "Hoje, 11:22", reason: "Contato externo antes de aceitar os termos de comunicacao." },
      { name: "Joao Pedro", label: "ALTO", meta: "Candidato - Spam em candidatura", identity: "Valida", reports: "4 sinalizacoes", occurrence: "Ontem, 08:10", reason: "Mensagens repetidas em multiplas vagas." }
    ];
    var list = wrapper.querySelector(".panel-list");
    var detail = wrapper.querySelector(".col-direita");
    if (!list || !detail) return;

    function badgeClass(label) {
      if (label === "CRITICO") return "badge-critico";
      if (label === "ALTO") return "badge-alto";
      return "badge-medio";
    }

    function renderDetail(item) {
      detail.innerHTML = [
        '<div class="detalhes-header"><div class="detalhes-title-row"><h2 class="detalhes-title">' + item.name + '</h2><span class="badge ' + badgeClass(item.label) + '">' + item.label + '</span></div><p class="detalhes-meta">' + item.meta + '</p></div>',
        '<div class="detalhes-lista"><div class="detalhe-bloco"><span class="dado-label">Identidade</span><span class="dado-valor">' + item.identity + '</span></div><div class="detalhe-bloco"><span class="dado-label">Denuncias validas</span><span class="dado-valor">' + item.reports + '</span></div><div class="detalhe-bloco"><span class="dado-label">Ocorrencia</span><span class="dado-valor">' + item.occurrence + '</span></div></div>',
        '<div class="justificativa-section"><label class="justificativa-label">Justificativa da decisao</label><div class="justificativa-box">' + item.reason + '</div></div>',
        '<div class="panel-footer-btn-row"><button class="btn-light-purple" data-admin-action="warn">Advertir</button><button class="btn-danger-solid" data-admin-action="block">Revisar bloqueio</button></div>'
      ].join("");
    }

    list.innerHTML = cases.map(function (item, index) {
      return '<div class="fila-item' + (index === 0 ? " active" : "") + '" data-case-index="' + index + '"><div class="fila-textos"><h4 class="item-title">' + item.name + '</h4><p class="item-desc">' + item.meta.split(" - ")[1] + '</p></div><span class="badge ' + badgeClass(item.label) + '">' + item.label + '</span></div>';
    }).join("");
    renderDetail(cases[0]);

    list.addEventListener("click", function (event) {
      var item = event.target.closest(".fila-item");
      if (!item) return;
      list.querySelectorAll(".fila-item").forEach(function (row) { row.classList.remove("active"); });
      item.classList.add("active");
      renderDetail(cases[Number(item.dataset.caseIndex)]);
    });
    detail.addEventListener("click", function (event) {
      var action = event.target.closest("[data-admin-action]");
      if (!action) return;
      notify(action.dataset.adminAction === "warn" ? "Advertencia registrada." : "Revisao de bloqueio registrada.");
    });
  }

  function removeUnimplementedSidebarLinks() {
    document.querySelectorAll('.sidebar-menu a.menu-item[href="#"], .menu-group a.menu-item[href="#"]').forEach(function (link) {
      if (link.classList.contains("active")) return;
      var label = link.textContent.trim().toLowerCase();
      if (["mensagem", "documento", "ajuda", "feedbacks", "avaliacoes"].some(function (item) { return label.indexOf(item) !== -1; })) {
        link.remove();
      }
    });
  }

  function wireSearchRedirects() {
    document.querySelectorAll(".input-busca-real, .search-input").forEach(function (input) {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") notify("Busca aplicada aos dados locais.");
      });
    });
  }

  function init() {
    removeUnimplementedSidebarLinks();
    registerForms();
    renderCandidateHome();
    renderCandidateSearch();
    renderCandidateProfile();
    renderCandidateInsights();
    renderRecruiterJobs();
    renderCompanyAssignment();
    renderCompanyDashboard();
    renderAdminDashboard();
    renderModerationQueues();
    wireSearchRedirects();
    window.HirlyMock = {
      get data() { return db; },
      reset: function () { localStorage.removeItem(STORAGE_KEY); window.location.reload(); },
      save: function () { saveDb(db); }
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();