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