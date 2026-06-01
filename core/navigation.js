/*  function removeUnimplementedSidebarLinks() {
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
  }*/