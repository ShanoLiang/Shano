document.addEventListener("DOMContentLoaded", function() {
  var pseudoFullscreenTarget = null;

  function getFullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
  }

  function getParam(root, name, fallback) {
    var input = root.querySelector('[data-revisitgames-param="' + name + '"]');
    return encodeURIComponent(input ? input.value : fallback);
  }

  function getDemoUrl(root) {
    var demo = root.dataset.revisitgamesDemo;
    if (demo === "pcg") {
      return "https://jingruchenmax.github.io/tile-level-generator/?levelTag=" + getParam(root, "levelTag", "1");
    }
    if (demo === "navigation") {
      var scene = getParam(root, "scene", "1");
      var mode = getParam(root, "mode", "training");
      var assistance = getParam(root, "assistance", "2");
      return "https://jingruchenmax.github.io/NavigationLearning/build/scene" + scene + "_" + mode + "/index.html?assistance=" + assistance;
    }
    if (demo === "frogger") {
      return "https://jingruchenmax.github.io/FroggerClone/?difficultyLevel=" + getParam(root, "difficulty", "3") + "&isJuicy=" + getParam(root, "juicy", "1");
    }
    return "";
  }

  function isFullscreen(target) {
    return getFullscreenElement() === target || pseudoFullscreenTarget === target;
  }

  function updateFullscreenButtons() {
    document.querySelectorAll(".js-revisitgames-fullscreen-demo").forEach(function(button) {
      var target = button.closest(".js-revisitgames-demo-mount");
      var active = target && isFullscreen(target);
      button.textContent = active ? "Exit Full Screen" : "Full Screen";
      button.setAttribute("aria-label", active ? "Exit full screen demo" : "Open demo full screen");
    });
  }

  function enterPseudoFullscreen(target) {
    if (pseudoFullscreenTarget && pseudoFullscreenTarget !== target) {
      pseudoFullscreenTarget.classList.remove("is-pseudo-fullscreen");
    }
    pseudoFullscreenTarget = target;
    target.classList.add("is-pseudo-fullscreen");
    document.body.classList.add("revisitgames-demo-lock-scroll");
    updateFullscreenButtons();
  }

  function exitPseudoFullscreen(target) {
    target.classList.remove("is-pseudo-fullscreen");
    if (pseudoFullscreenTarget === target) {
      pseudoFullscreenTarget = null;
    }
    document.body.classList.remove("revisitgames-demo-lock-scroll");
    updateFullscreenButtons();
  }

  function enterFullscreen(target) {
    var request = target.requestFullscreen || target.webkitRequestFullscreen || target.msRequestFullscreen;
    if (!request) {
      enterPseudoFullscreen(target);
      return;
    }

    try {
      var result = request.call(target);
      if (result && result.catch) {
        result.catch(function() {
          enterPseudoFullscreen(target);
        });
      }
    } catch (error) {
      enterPseudoFullscreen(target);
    }
  }

  function exitFullscreen(target) {
    if (getFullscreenElement() === target) {
      var exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
      if (exit) exit.call(document);
      return;
    }
    if (pseudoFullscreenTarget === target) {
      exitPseudoFullscreen(target);
    }
  }

  function createFullscreenButton(mount) {
    var button = mount.querySelector(".js-revisitgames-fullscreen-demo");
    if (button) return button;

    button = document.createElement("button");
    button.type = "button";
    button.className = "revisitgames-demo-fullscreen-button js-revisitgames-fullscreen-demo";
    button.textContent = "Full Screen";
    button.setAttribute("aria-label", "Open demo full screen");
    button.addEventListener("click", function() {
      if (isFullscreen(mount)) {
        exitFullscreen(mount);
      } else {
        enterFullscreen(mount);
      }
    });
    mount.appendChild(button);
    return button;
  }

  function loadDemo(root) {
    var mount = root.querySelector(".js-revisitgames-demo-mount");
    var loadButton = root.querySelector(".js-revisitgames-load-demo");
    if (!mount || mount.dataset.loaded === "true") return;

    var url = getDemoUrl(root);
    if (!url) return;

    var placeholder = mount.querySelector(".euphoria-rainborough-demo-placeholder");
    if (placeholder) placeholder.remove();

    var iframe = document.createElement("iframe");
    iframe.title = root.dataset.revisitgamesDemoTitle || "ReVISit-Games WebGL Demo";
    iframe.allowFullscreen = true;
    iframe.src = url;
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("allow", "autoplay; fullscreen; gamepad");

    mount.setAttribute("aria-hidden", "false");
    mount.appendChild(iframe);
    createFullscreenButton(mount);
    mount.dataset.loaded = "true";

    if (loadButton) {
      loadButton.textContent = "Demo Loaded";
      loadButton.disabled = true;
    }
  }

  document.querySelectorAll("[data-revisitgames-demo]").forEach(function(root) {
    var loadButton = root.querySelector(".js-revisitgames-load-demo");
    if (loadButton) {
      loadButton.addEventListener("click", function() {
        loadDemo(root);
      });
    }

    if (root.dataset.revisitgamesAutoload === "true") {
      loadDemo(root);
    }
  });

  document.addEventListener("fullscreenchange", updateFullscreenButtons);
  document.addEventListener("webkitfullscreenchange", updateFullscreenButtons);
  document.addEventListener("msfullscreenchange", updateFullscreenButtons);
});
