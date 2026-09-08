// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// Keep the command palette focused on top-level navigation and project pages.
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Shano/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Shano/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Shano/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Shano/cv/";
          },
        },{id: "project-360-lab-tours",
      title: "360 Lab Tours",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/360lab/";
      },
    },{id: "project-battle-billiards",
      title: "Battle Billiards",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/battle-billiards/";
      },
    },{id: "project-covid-control-simulator",
      title: "COVID Control Simulator",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/covid-control-simulator/";
      },
    },{id: "project-chuan",
      title: "Chuan",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/chuan/";
      },
    },{id: "project-containment-breach-escape",
      title: "Containment Breach Escape",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/containment-breach-escape/";
      },
    },{id: "project-euphoria-amp-rainborough",
      title: "Euphoria &amp; Rainborough",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/euphoria/";
      },
    },{id: "project-flow-chemistry-ar",
      title: "Flow Chemistry AR",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/flowar/";
      },
    },{id: "project-for-survive",
      title: "For Survive",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/for-survive/";
      },
    },{id: "project-free-body-diagram-app",
      title: "Free Body Diagram App",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/free-body-diagram-app/";
      },
    },{id: "project-jubensha",
      title: "Jubensha",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/jubensha/";
      },
    },{id: "project-juicy-interactive-vis",
      title: "Juicy Interactive VIS",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/juicyvis/";
      },
    },{id: "project-mythic-hue",
      title: "Mythic Hue",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/mythichue/";
      },
    },{id: "project-no-shake",
      title: "No Shake",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/noshake/";
      },
    },{id: "project-revisit-games-suite",
      title: "ReVISit-Games Suite",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/revisitgames/";
      },
    },{id: "project-revisit-xr-suite",
      title: "ReVISit-XR Suite",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/revisitxr/";
      },
    },{id: "project-rimland",
      title: "Rimland",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/rimland/";
      },
    },{id: "project-team-fight",
      title: "Team Fight",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/team-fight/";
      },
    },{id: "project-transparent-ar-markers",
      title: "Transparent AR Markers",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/stackar/";
      },
    },{id: "project-world-of-summoner",
      title: "World of Summoner",
      description: "",
      section: "Projects",
      handler: () => {
        window.location.href = "/Shano/projects/world-of-summoner/";
      },
    },];
