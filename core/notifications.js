/*
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
  }*/