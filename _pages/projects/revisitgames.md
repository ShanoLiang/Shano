---
layout: project_detail
title: "ReVISit-Games Suite"
project_nav_title: "ReVISit-Games Suite"
permalink: /projects/revisitgames/
nav: false
---

<!-- _pages/projects/jubensha.md: adapted from the Chuan project-detail structure. -->
<main class="project-detail-legacy jubensha-detail-page euphoria-detail-page revisitgames-detail-page">
<section class="py-3 mt-0 mb-3 text-center container revisitgames-hero-section">
<div class="row py-lg-4 mt-1">
<div class="col-lg-6 col-md-8 mx-auto">
<img class="mx-lg-auto img-fluid mt-1 mb-4 py-4 revisitgames-title-image" src="{{ '/assets/img/projects/revisitgames/revisitgamestitle.png' | relative_url }}" alt="ReVISit-Games framework overview"/>
<h1 class="display-5 fs-1 fw-bold lh-1 mb-5 revisitgames-project-title">ReVISit-Games Suite</h1>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Tags:</small>
<span class="badge badge-custom-cyan">Data Visualization</span>
<span class="badge badge-custom-cyan">Infrastructure</span>
<span class="badge badge-custom-cyan">Interactive Media</span>
</p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Date:</small> Aug. 2025 - Present
                </p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Tech Stack:</small> Unity (WebGL), JavaScript, Web Integration
                </p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Collaborators:</small> Max Chen, Gillian Smith, Lane Harrison
                </p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">My Role:</small> Lead Author
                </p>
<hr/>
<p class="lead text-muted fs-6 lh-sm px-5">ReVISit-Games is a methodological and study infrastructure project that extends the reVISit study framework to support scalable, asynchronous, and trackable player experience studies with embedded game stimuli, configurable sequencing, and researcher-defined gameplay logging.
                </p>
<div class="btn-group">
    <a class="btn btn-sm btn-outline-dark" href="https://revisit.dev/">About ReVISit</a>
</div>
</div>
</div>
</section>
<div class="album mt-1 mb-5 py-5">
<div class="container px-5 mt-5">
<div class="row flex-lg-row align-items-center py-4 mt-5 mb-5">
<div class="col-lg px-0">
<div class="image-container">
<img src="{{ '/assets/img/projects/revisitgames/bb02-2.png' | relative_url }}" style="height: 100%;"/>
<div class="overlay-text revisitgames-overlay-heading-stack">
<p>&nbsp;</p>
<p class="fs-1 lh-1 text-sm-start px-0">
<span class="align-bottom revisitgames-overlay-kicker">Study Infrastructure</span>
</p>
<p class="fs-1 lh-1 text-sm-start px-0">
<span class="align-bottom revisitgames-overlay-title">REVISIT-GAMES</span>
</p>
</div>
</div>
<p class="revisitgames-intro-spacer" aria-hidden="true">&nbsp;</p>

<div class="revisitgames-intro-subheading px-5">
<p>INTRODUCTION</p>
<hr/>
</div>
<p class="lead text-muted fs-6 lh-sm px-5">
                        Player experience (PX) studies are central to HCI, game studies, visualization, and interactive media research because they help researchers examine how game designs shape perception, behavior, affect, and meaning-making. 
                        However, running PX studies online is often methodologically fragmented. 
                        Researchers may need to host a playable game in one place, collect survey responses in another, manage recruitment through a separate platform, and store gameplay logs through a custom pipeline. 
                        These fragmented workflows increase setup overhead, make debugging harder, and weaken reproducibility. 
                        <small class="fs-6 fw-bold">ReVISit-Games </small> responds to this problem by extending <a class="jubensha-inline-link" href="https://revisit.dev/" target="_blank" rel="noopener noreferrer">reVISit</a> into a workflow for scalable, asynchronous, browser-based PX studies, allowing games, questionnaires, sequencing logic, and logging to be coordinated within a single study environment.
                        </p>
</div>
<div class="col-lg-6 px-0 text-center">
<img class="bd-placeholder-img mt-5" height="100%" src="{{ '/assets/img/projects/revisitgames/revisitgames_1.png' | relative_url }}" width="100%"/>
<p class="taxt-dark mt-0 fw-light fs-6 text-center jubensha-physical-game-caption">
                            Screenshots of our developed research game, <em>Rainborough</em>
                        </p>
</div>
</div>

<div class="row flex-lg-row-reverse align-items-center py-3 mb-4 jubensha-explorations-row">
<div class="col-lg px-0 jubensha-explorations-copy">
<div class="revisitgames-intro-subheading revisitgames-explorations-subheading px-1">
<p>REVISIT-GAMES FRAMEWORK</p>
<hr/>
</div>
<p class="lead text-muted fs-6 lh-sm px-1 text-start">
                            ReVISit-Games builds on reVISit's existing support for study specification, navigation, preview, data collection, and replay, while adding PX-specific support for embedded game stimuli and gameplay-derived data. 
                            In this framework, games can be treated as web-deployable study components, such as Unity WebGL builds, and integrated into the same flow as consent forms, instructions, attention checks, questionnaires, and post-study items. Study structure is authored through reVISit's JSON-based DSL, which allows researchers to specify fixed or randomized orders, condition assignment, branching, required responses, and reusable questionnaire blocks. 
                            A lightweight JavaScript bridge connects the embedded game with the surrounding study, allowing game events, state variables, completion signals, and study parameters to move between the game and reVISit. 
                            This makes it possible to store questionnaire data and gameplay logs in a shared study record, preview and export them together, and preserve study configurations for later inspection or reuse. 
                            The paper reporting this framework is <small class="fs-6 fw-bold">currently under review</small>; more details, results, and discussion will be added after peer review is complete.
                        </p>
</div>
<div class="col-lg-6 px-0 text-center revisitgames-study-media-col">
<div class="revisitgames-study-media-card">
<div class="revisitgames-study-media-section">
<div class="revisitgames-study-media-frame">
<img alt="reVISit-Games workflow diagram" class="revisitgames-study-media-image" src="{{ '/assets/img/projects/revisitgames/revisitgames_2.png' | relative_url }}"/>
</div>
<p class="revisitgames-study-media-caption">
                                reVISit-Games workflow: core reVISit components in orange, reVISit-Games extensions in blue.
                            </p>
</div>
<div class="revisitgames-study-media-section">
<div class="revisitgames-study-media-frame">
<img alt="reVISit-Games study sequencing diagram" class="revisitgames-study-media-image" src="{{ '/assets/img/projects/revisitgames/revisitgames_3.png' | relative_url }}"/>
</div>
<p class="revisitgames-study-media-caption">
                                Six study groups merged into one online study, with sequencing logic shown on the left and implementation on the right.
                            </p>
</div>
</div>
</div>
</div>

<div class="row flex-lg-row align-items-center py-4 mb-3">
<div class="col-lg px-0">
<p class="fs-1 lh-1 text-sm-start px-0">
<span class="align-bottom revisitgames-overlay-title revisitgames-field-test-title">FIELD TEST: REPLICATIONS</span>
</p>
<p>&nbsp;</p>
<div class="revisitgames-intro-subheading revisitgames-explorations-subheading px-1">
<p>CASE 1: DUNGEON DIGGER WEB</p>
<p class="fs-5 lh-sm text-muted">Mixed-Initiative Procedural Content Generation (PCG) Game
                        </p>
<hr/>
</div>
<p class="lead text-muted fs-6 lh-sm text-sm-start px-2">
                            The first replication case adapts <a class="jubensha-inline-link" href="https://doi.org/10.1145/3270316.3271539" target="_blank" rel="noopener noreferrer">Sheffield and Shah's 2D player-experience study</a> about procedurally generated dungeon levels.
                            In the original study, participants played six dungeon levels in randomized order and evaluated each level with Game Experience Questionnaire items. 
                            Our replication preserved the core study structure while moving the sequencing logic into reVISit-Games; In the original in-lab study, a survey was manually administered after each level, and participants could not continue until the survey was completed. 
                            Replicating this process online presented challenges, so we improved the workflow: the game now sends a signal to the parent web app upon successful level completion. 
                            This triggers the end-of-level survey, and only after the survey is completed can participants proceed to the next randomly selected level.
                        </p>
</div>
<div class="col-lg-7 px-0 revisitgames-playable-demo-col">
<section class="euphoria-rainborough-demo revisitgames-playable-demo" aria-labelledby="pcg-demo-title" data-revisitgames-demo="pcg" data-revisitgames-demo-title="Dungeon Digger Web Demo">
<div class="euphoria-rainborough-demo-header">
<div class="euphoria-rainborough-demo-heading">
<p class="euphoria-rainborough-demo-kicker">Playable Demo</p>
<h3 id="pcg-demo-title">Configure Case 1 Game</h3>
<p class="euphoria-rainborough-demo-warning"><strong>Screen note:</strong> This Unity WebGL demo is best on a laptop or desktop browser.</p>
</div>
<button class="euphoria-rainborough-demo-button js-revisitgames-load-demo" type="button" id="loadPcgGameBtn">Show Game</button>
</div>
<p class="euphoria-rainborough-demo-copy">Select a level tag, then load the embedded Dungeon Digger Web build in-place. On smaller or slower devices, open the demo in its own page at <a class="jubensha-inline-link" href="{{ '/projects/revisitgames/case-1-game/' | relative_url }}" target="_blank" rel="noopener noreferrer">Configure Case 1 Game</a>.</p>
<div class="revisitgames-demo-controls" aria-label="Dungeon Digger Web configuration">
<div class="revisitgames-demo-control">
<label for="pcgLevelTagSelect">Level Tag:</label>
<select id="pcgLevelTagSelect" data-revisitgames-param="levelTag">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
</select>
</div>
</div>
<div class="euphoria-rainborough-demo-frame revisitgames-demo-frame js-revisitgames-demo-mount" id="pcgGameMount" aria-hidden="true">
<div class="euphoria-rainborough-demo-placeholder">
<span>Dungeon Digger Web Demo</span>
<small>Click "Show Game" to load the selected PCG level.</small>
</div>
</div>
</section>
</div>
</div>

<div class="row flex-lg-row-reverse align-items-center py-3 mb-4 jubensha-explorations-row">
<div class="col-lg px-0 jubensha-explorations-copy">
<div class="revisitgames-intro-subheading revisitgames-explorations-subheading px-1">
<p>CASE 2: CITY WANDERER</p>
<p class="fs-5 lh-sm text-muted">3D Navigation with Procedurally Generated City Map
                        </p>
<hr/>
</div>
<p class="lead text-muted fs-6 lh-sm px-1 text-start">
                            The second replication case adapts <a class="jubensha-inline-link" href="https://doi.org/10.1145/3116595.3116602" target="_blank" rel="noopener noreferrer">Johanson et al.'s 3D navigation-assistance study</a>. 
                            The original study examined how different levels of navigation support affected route-finding, spatial learning, workload, anxiety, and gameplay performance. 
                            Because the original game files and maps were unavailable, we rebuilt the study as a Unity WebGL prototype based on the published description. 
                            Using procedural cities not only makes navigation more realistic, but also ensures each player encounters a unique, unfamiliar map. This case was especially useful for testing complex sequencing: the original design combined three assistance conditions with two map orders, producing six study groups. 
                            In reVISit-Games, these branches were represented within one online study program, allowing condition assignment, map-order control, training, testing, questionnaires, and gameplay logging to remain coordinated in a single deployment.
                        </p>
</div>
<div class="col-lg-7 px-0 revisitgames-playable-demo-col">
<section class="euphoria-rainborough-demo revisitgames-playable-demo" aria-labelledby="navigation-demo-title" data-revisitgames-demo="navigation" data-revisitgames-demo-title="City Wanderer WebGL Demo">
<div class="euphoria-rainborough-demo-header">
<div class="euphoria-rainborough-demo-heading">
<p class="euphoria-rainborough-demo-kicker">Playable Demo</p>
<h3 id="navigation-demo-title">Configure Case 2 Game</h3>
<p class="euphoria-rainborough-demo-warning"><strong>Screen note:</strong> This Unity WebGL demo is best on a laptop or desktop browser.</p>
</div>
<button class="euphoria-rainborough-demo-button js-revisitgames-load-demo" type="button" id="loadNavigationGameBtn">Show Game</button>
</div>
<p class="euphoria-rainborough-demo-copy">Choose a scene, study mode, and assistance level, then load the embedded City Wanderer build in-place. On smaller or slower devices, open the demo in its own page at <a class="jubensha-inline-link" href="{{ '/projects/revisitgames/case-2-game/' | relative_url }}" target="_blank" rel="noopener noreferrer">Configure Case 2 Game</a>.</p>
<div class="revisitgames-demo-controls" aria-label="City Wanderer configuration">
<div class="revisitgames-demo-control">
<label for="navigationSceneSelect">Scene:</label>
<select id="navigationSceneSelect" data-revisitgames-param="scene">
<option value="1">1</option>
<option value="2">2</option>
</select>
</div>
<div class="revisitgames-demo-control">
<label for="navigationModeSelect">Mode:</label>
<select id="navigationModeSelect" data-revisitgames-param="mode">
<option value="training">Training</option>
<option value="testing">Testing</option>
</select>
</div>
<div class="revisitgames-demo-control">
<label for="navigationAssistSelect">Assistance:</label>
<select id="navigationAssistSelect" data-revisitgames-param="assistance">
<option value="0">0 (None)</option>
<option value="1">1 (Partial)</option>
<option value="2" selected>2 (Full)</option>
</select>
</div>
</div>
<div class="euphoria-rainborough-demo-frame revisitgames-demo-frame js-revisitgames-demo-mount" id="navigationGameMount" aria-hidden="true">
<div class="euphoria-rainborough-demo-placeholder">
<span>City Wanderer WebGL Demo</span>
<small>Click "Show Game" to load the selected navigation condition.</small>
</div>
</div>
</section>
</div>
</div>

<div class="row flex-lg-row align-items-center py-4 mb-3">
<div class="col-lg px-0">
<div class="revisitgames-intro-subheading revisitgames-explorations-subheading px-1">
<p>CASE 3: JUICY FROGGER</p>
<p class="fs-5 lh-sm text-muted">The Impact of Juicy Feedback on Player Engagement
                        </p>
<hr/>
</div>
<p class="lead text-muted fs-6 lh-sm text-sm-start px-2">
                            The third replication case adapts <a class="jubensha-inline-link" href="https://doi.org/10.1145/3311350.3347171" target="_blank" rel="noopener noreferrer">Hicks et al.'s work on juicy game feedback</a>. We reconstructed a Frogger-like game from the original paper's descriptions and screenshots, preserving the comparison between standard and juicy versions while simplifying the level structure for online deployment. 
                            This case tested another capability of reVISit-Games: communication between participant-side study inputs and the embedded game. 
                            Participants could select a difficulty setting before play, and that study-side choice was passed into the game at runtime. The replication collected both self-report measures and gameplay logs, including scores, deaths, cleared levels, and play duration.
                        </p>
</div>
<div class="col-lg-7 px-0 revisitgames-playable-demo-col">
<section class="euphoria-rainborough-demo revisitgames-playable-demo" aria-labelledby="frogger-demo-title" data-revisitgames-demo="frogger" data-revisitgames-demo-title="Juicy Frogger WebGL Demo">
<div class="euphoria-rainborough-demo-header">
<div class="euphoria-rainborough-demo-heading">
<p class="euphoria-rainborough-demo-kicker">Playable Demo</p>
<h3 id="frogger-demo-title">Configure Case 3 Game</h3>
<p class="euphoria-rainborough-demo-warning"><strong>Screen note:</strong> This Unity WebGL demo is best on a laptop or desktop browser.</p>
</div>
<button class="euphoria-rainborough-demo-button js-revisitgames-load-demo" type="button" id="loadFroggerGameBtn">Show Game</button>
</div>
<p class="euphoria-rainborough-demo-copy">Select difficulty and whether juicy feedback is enabled, then load the embedded Juicy Frogger build in-place. On smaller or slower devices, open the demo in its own page at <a class="jubensha-inline-link" href="{{ '/projects/revisitgames/case-3-game/' | relative_url }}" target="_blank" rel="noopener noreferrer">Configure Case 3 Game</a>.</p>
<div class="revisitgames-demo-controls" aria-label="Juicy Frogger configuration">
<div class="revisitgames-demo-control">
<label for="froggerDifficultySelect">Difficulty:</label>
<select id="froggerDifficultySelect" data-revisitgames-param="difficulty">
<option value="1">1 (Easy)</option>
<option value="2">2</option>
<option value="3" selected>3 (Default)</option>
<option value="4">4</option>
<option value="5">5 (Hard)</option>
</select>
</div>
<div class="revisitgames-demo-control">
<label for="froggerJuicySelect">Juicy:</label>
<select id="froggerJuicySelect" data-revisitgames-param="juicy">
<option value="1" selected>On</option>
<option value="0">Off</option>
</select>
</div>
</div>
<div class="euphoria-rainborough-demo-frame revisitgames-demo-frame js-revisitgames-demo-mount" id="froggerGameMount" aria-hidden="true">
<div class="euphoria-rainborough-demo-placeholder">
<span>Juicy Frogger WebGL Demo</span>
<small>Click "Show Game" to load the selected Frogger condition.</small>
</div>
</div>
</section>
</div>
</div>

<script src="{{ '/assets/js/revisitgames-demos.js' | relative_url }}"></script>

</div>
</div>

</main>

<div class="project-page-updated">
<p class="taxt-muted fs-6">
            Project: ReVISit-Games Suite
        </p>
<p class="taxt-muted fs-6">
            The Page Last updated: May 28, 2026
        </p>
</div>
