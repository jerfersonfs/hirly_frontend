var STORAGE_KEY = "hirly.mockdb.v1";
var SELECTED_JOB_KEY = "hirly.selectedJobId";

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

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }
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