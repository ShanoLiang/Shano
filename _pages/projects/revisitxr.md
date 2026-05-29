---
layout: project_detail
title: "ReVISit-XR Suite"
project_nav_title: "ReVISit-XR Suite"
permalink: /projects/revisitxr/
nav: false
---

<!-- _pages/projects/jubensha.md: adapted from the Chuan project-detail structure. -->
<main class="project-detail-legacy jubensha-detail-page euphoria-detail-page revisitgames-detail-page">
<section class="py-3 mt-0 mb-3 text-center container revisitgames-hero-section">
<div class="row py-lg-4 mt-1">
<div class="col-lg-6 col-md-8 mx-auto">
<img class="mx-lg-auto img-fluid mt-1 mb-4 py-4 revisitgames-title-image" src="{{ '/assets/img/projects/revisitxr/revisitxrtitle.png' | relative_url }}" alt="ReVISit-Games framework overview"/>
<h1 class="display-5 fs-1 fw-bold lh-1 mb-5 revisitgames-project-title">ReVISit-XR Suite</h1>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Tags:</small>
<span class="badge badge-custom-cyan">Data Visualization</span>
<span class="badge badge-custom-cyan">Infrastructure</span>
<span class="badge badge-custom-cyan">Extended Reality</span>
</p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Date:</small> Oct. 2025 - Present
                </p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Collaborators:</small> Max Chen, Lane Harrison
                </p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">My Role:</small> Lead Author
                </p>
<hr/>
<p class="lead text-muted fs-6 lh-sm px-5">The reVISit-XR Suite is a research infrastructure project that extends reVISit to support embeddable, trackable, and replayable WebXR (including virtual reality and augmented reality) stimuli for empirical visualization studies.
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
<span class="align-bottom revisitgames-overlay-title">REVISIT-XR</span>
</p>
</div>
</div>
<p class="revisitgames-intro-spacer" aria-hidden="true">&nbsp;</p>

<div class="revisitgames-intro-subheading px-5">
<p>INTRODUCTION</p>
<hr/>
</div>
<p class="lead text-muted fs-6 lh-sm px-5">
                        Extended reality has become an important setting for visualization research because it allows researchers to study spatial, embodied, and situated forms of data interaction. 
                        However, XR studies also create methodological challenges that are harder to handle with ordinary web-study infrastructure. 
                        Meaningful study state may be distributed across headset pose, controller movement, selected objects, scene configuration, AR anchors, spatial layouts, interaction events, and participant responses. 
                        Recording too little can make later interpretation ambiguous, while dense frame-by-frame traces can be difficult to inspect or connect to task-level behavior. 
                        <small class="fs-6 fw-bold">ReVISit-XR</small> addresses this gap by extending <a class="jubensha-inline-link" href="https://revisit.dev/" target="_blank" rel="noopener noreferrer">reVISit</a> so that WebXR stimuli can be embedded in study flows, tracked during headset interaction, and replayed afterward for analysis. 
                        The paper reporting this system is <small class="fs-6 fw-bold">currently under review</small>; more details, results, and discussion will be added after peer review is complete.
                        </p>
</div>
<div class="col-lg-7 px-0 text-center">
<img class="bd-placeholder-img mt-5" height="100%" src="{{ '/assets/img/projects/revisitxr/revisitxr_1.png' | relative_url }}" width="100%"/>
<p class="taxt-dark mt-0 fw-light fs-6 text-center jubensha-physical-game-caption">
                            Top: entering embedded XR stimuli from a reVISit study on Meta Quest 3. Bottom: frame-by-frame replay of participant XR interactions.
                        </p>
</div>
</div>

<div class="row flex-lg-row-reverse align-items-center py-3 mb-4 jubensha-explorations-row">
<div class="col-lg project-mobile-flush-col jubensha-explorations-copy">
<div class="revisitgames-intro-subheading revisitgames-explorations-subheading px-1">
<p>REVISIT-XR FRAMEWORK</p>
<hr/>
</div>
<p class="lead text-muted fs-6 lh-sm px-1 text-start">
                            ReVISit-XR is organized around two complementary parts: a Stimulus Build Package and a Study Integration Package. 
                            The Stimulus Build Package provides a reusable WebXR runtime for building and managing XR scenes, including scene registration, Three.js/WebXR scaffolding, input handling, logging, serialization, replay visuals, and reusable scene helpers. 
                            The Study Integration Package embeds the built XR runtime into reVISit as website components, allowing XR trials to be sequenced with ordinary study elements such as instructions, consent materials, questionnaires, attention checks, and demographics. 
                            A key design principle is semantic provenance: instead of treating every rendered transform as a study record, each XR scene captures compact task-level state, such as selected objects, filter settings, panel layouts, AR placement state, comparison mode, or game outcomes. 
                            During analysis, reVISit-XR uses semantic state rehydration to reconstruct what the participant saw, selected, arranged, or triggered at a given moment.
                        </p>
</div>
<div class="col-lg-6 project-mobile-flush-col text-center">
<img class="bd-placeholder-img mt-5" height="100%" src="{{ '/assets/img/projects/revisitxr/revisitxr_2.png' | relative_url }}" width="100%"/>
<p class="taxt-dark mt-0 fw-light fs-6 text-center jubensha-physical-game-caption">
                            reVISit-XR usage examples (1-3)
                        </p>
</div>
</div>

<div class="row flex-lg-row align-items-center py-4 mb-3">
<div class="col-lg project-mobile-flush-col">
<div class="euphoria-intro-subheading euphoria-explorations-subheading px-1">
<p>REUSABLE XR STUDY EXAMPLES</p>
<hr/>
</div>
<p class="lead text-muted fs-6 lh-sm text-sm-start px-2">
                            To demonstrate the scope of the system, we implemented six reusable XR study examples that cover recurring visualization-study needs. 
                            These examples include immersive abstract visualization, a 3D scatterplot with navigation and selection, an immersive flow map with geospatial filtering, a spatial multi-view workspace, a situated AR overlay, landmark-scale visceralization, and a compact VR mini-game for embodied interaction logging. 
                            Together, these examples show how reVISit-XR can support different forms of XR study state, including navigation, selection, spatial layout, AR anchoring, embodied scale comparison, and event-based interaction records. 
                            The project remains part of a broader infrastructure effort rather than a finished endpoint. 
                            Future work includes community-informed extensions, support for more diverse XR study practices, and richer interpretation of embodied behavior such as gestures, gaze trajectories, drawing actions, and lapses of attention.
                        </p>
</div>
<div class="col-lg-6 project-mobile-flush-col text-center">
<img class="bd-placeholder-img mt-5" height="100%" src="{{ '/assets/img/projects/revisitxr/revisitxr_3.png' | relative_url }}" width="100%"/>
<p class="taxt-dark mt-0 fw-light fs-6 text-center jubensha-physical-game-caption">
                            reVISit-XR usage examples (4-6)
                        </p>
</div>
</div>

</div>
</div>

</main>

<div class="project-page-updated">
<p class="taxt-muted fs-6">
            Project: ReVISit-XR Suite
        </p>
<p class="taxt-muted fs-6">
            The Page Last updated: May 29, 2026
        </p>
</div>
