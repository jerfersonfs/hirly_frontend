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