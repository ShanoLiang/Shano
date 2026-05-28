---
layout: project_detail
title: "Transparent AR Markers"
project_nav_title: "Transparent AR Markers"
permalink: /projects/stackar/
nav: false
---

<!-- _pages/projects/jubensha.md: adapted from the Chuan project-detail structure. -->
<main class="project-detail-legacy jubensha-detail-page stackar-detail-page">
<section class="py-3 mt-0 mb-3 text-center container">
<div class="row py-lg-4 mt-1">
<div class="col-lg-6 col-md-8 mx-auto">
<img class="img-fluid mt-1 mb-4 py-4 stackar-title-image" height="70%" src="{{ '/assets/img/projects/stackar/stackartitle.png' | relative_url }}" width="108%"/>
<h1 class="display-5 fs-1 fw-bold lh-1 mb-5">Transparent AR Markers</h1>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Tags:</small>
<span class="badge badge-custom-cyan">Augmented Reality</span>
<span class="badge badge-custom-cyan">Tangible Interaction</span>
<span class="badge badge-custom-cyan">Compositional Input</span>
</p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Date:</small> May 2023 - Oct. 2023
                </p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Collaborator:</small> <a class="jubensha-inline-link" href="https://jingruchenmax.github.io/" target="_blank" rel="noopener noreferrer">Max Chen</a>
                </p>
<hr/>
<p class="lead text-muted fs-6 lh-sm px-5">A novel marker-based AR system that uses stacked transparent fiducial markers as a tangible, compositional input method, demonstrated through Stackable Music, an AR music synthesis game. 
                </p>
<div class="btn-group">
<a class="btn btn-sm btn-outline-dark" href="https://jingruchenmax.github.io/StackAR/">Website</a>
<a class="btn btn-sm btn-outline-dark" href="https://dl.acm.org/doi/10.1145/3573382.3616071">Article</a>
<a class="btn btn-sm btn-outline-dark" href="https://youtu.be/pAF2ckJ4YSA">Presentation</a>
</div>
</div>
</div>
</section>
<div class="album mt-1 mb-5 py-5">
<div class="container px-5 mt-5">
<div class="row flex-lg-row align-items-center py-4 mt-5 mb-5">
<div class="col-lg px-0">
<p>&nbsp;</p>

<div class="jubensha-intro-subheading px-5">
<p>PROJECT INTRODUCTION</p>
<hr/>
</div>
<p class="lead text-muted fs-6 lh-sm px-5">
                        We explored the interaction affordances of transparent PVC film as a material for tangible augmented reality. 
                        <small class="fs-6 fw-bolder">Stack AR</small> introduces an alternative input method for marker-based AR: stacking transparent fiducial markers so that the system can recognize not only individual markers, but also the combinations produced by layered markers. 
                        Unlike conventional AR interactions that rely on single opaque markers or touchscreen input, Stack AR treats physical stacking as a compositional interaction. 
                        We developed <small class="fs-6 fw-bolder">Stackable Music</small>, an AR music synthesis game, to demonstrate how this input method can be used in a playful interactive system. 
                        </p>
</div>
<div class="col-lg-6 px-0 text-center">
<img class="bd-placeholder-img mt-5" height="100%" src="{{ '/assets/img/projects/stack-ar-teaser-3.png' | relative_url }}" width="100%"/>
</div>
</div>
<div class="row flex-lg-row-reverse align-items-center py-5 mb-3 jubensha-explorations-row">
<div class="col-lg jubensha-explorations-copy">
<div class="jubensha-intro-subheading jubensha-explorations-subheading px-1">
</div>
<p class="lead text-muted fs-6 lh-sm px-1 text-start">
                        This work was published in the <a class="jubensha-inline-link" href="https://doi.org/10.1145/3573382.3616071" target="_blank" rel="noopener noreferrer">Companion Proceedings of the Annual Symposium on Computer-Human Interaction in Play</a> (CHI PLAY Companion 2023). 
                        It was later selected for presentation at <small class="fs-6 fw-bolder">MIT Reality Hack 2025</small> (Jan. 23–27) as part of an art grant. The system can be set up with a desktop computer, a camera, and printed transparent markers.
                        </p>
</div>
<div class="col-lg-7 text-center">
<img class="bd-placeholder-img mt-5" height="100%" src="{{ '/assets/img/projects/stackar/stackar_1.jpg' | relative_url }}" width="100%"/>
<p class="taxt-dark mt-0 fw-light fs-6 text-center jubensha-physical-game-caption">
                        Presenting Stack AR at MIT Reality Hack 2025
                        </p>
</div>
</div>
<div class="row flex-lg-row align-items-center py-4 mb-3">
<div class="col-lg">
<div class="jubensha-intro-subheading jubensha-explorations-subheading px-1">
<p>Technical Highlights</p>
<hr/>
</div>
<p class="lead text-muted fs-6 lh-sm text-sm-start px-2 stackar-tech-item">
                            <span class="stackar-tech-lead">Custom ArUco Marker Dictionary:</span> We created a custom ArUco dictionary to support marker stacking on transparent film. The marker design minimizes visual interference between layers and helps ensure that stacked combinations produce unique, detectable codes. Marker regions are arranged in concentric rings, allowing the system to distinguish layers more clearly when multiple transparent markers are placed on top of one another.
                        </p>
                        <p class="lead text-muted fs-6 lh-sm text-sm-start px-2 stackar-tech-item">
                            <span class="stackar-tech-lead">Computer Vision Integration in Unity:</span> The Unity application uses the OpenCV for Unity plugin to support real-time marker recognition and pose estimation from a top-down camera. Custom logic parses the detected markers, identifies their layered combinations, and maps those combinations to distinct musical and visual elements in the AR environment.
                        </p>
                        <p class="lead text-muted fs-6 lh-sm text-sm-start px-2 stackar-tech-item">
                            <span class="stackar-tech-lead">Detection and Interactive Synthesis:</span> By precomputing viable marker combinations, Stack AR can identify both individual and stacked markers within a single frame. Detected combinations trigger corresponding audio, 3D models, and particle effects in Stackable Music. The system is designed to remain usable under partial occlusion, variable lighting, and the visual ambiguity introduced by transparent materials.
                        </p>
</div>
<div class="col-lg-6 text-center stackar-media-col">
<div class="stackar-media-card">
<div class="stackar-media-section">
<div class="stackar-media-frame">
<iframe allowfullscreen="" frameborder="0" loading="lazy" src="https://www.youtube.com/embed/awycjq1M2FQ"></iframe>
</div>
<p class="stackar-media-caption">
                                Stack AR Demo Video
                            </p>
</div>
<div class="stackar-media-section">
<div class="stackar-media-frame">
<iframe allowfullscreen="" frameborder="0" loading="lazy" src="https://www.youtube.com/embed/pAF2ckJ4YSA"></iframe>
</div>
<p class="stackar-media-caption">
                                Stack AR Presentation Video
                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

</main>

<div class="project-page-updated">
<p class="taxt-muted fs-6">
            Project: Transparent AR Markers
        </p>
<p class="taxt-muted fs-6">
            The Page Last updated: May 26, 2026
        </p>
</div>
