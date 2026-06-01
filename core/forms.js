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
      window.location.href = "../../cadidato/principais/home.html";
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