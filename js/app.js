(function () {
  "use strict";












  function init() {
    removeUnimplementedSidebarLinks();
    registerForms();

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
