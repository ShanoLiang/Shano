---
layout: project_detail
title: "Chuan"
project_nav_title: "Chuan"
permalink: /projects/chuan/
nav: false
---

<!-- _pages/projects/chuan.md: migrated from Chuan.html. -->
<main class="project-detail-legacy chuan-detail-page">
<section class="py-3 mt-0 mb-3 text-center container">
<div class="row py-lg-4 mt-1">
<div class="col-lg-6 col-md-8 mx-auto">
<img class="mx-lg-auto img-fluid mt-1" height="20%" src="{{ '/assets/img/projects/chuan/chuandecor03.png' | relative_url }}" width="20%"/>
<h1 class="display-5 fs-1 fw-bold lh-1 mb-5">"Chuàn" (串)</h1>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Tags:</small>
<span class="badge badge-custom-cyan">Alternative Controller</span>
<span class="badge badge-custom-cyan">Cross-cultural Design</span>
</p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Date:</small> Oct. 2024 - Dec. 2024
                </p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">My Role:</small> Lead Designer and Developer.
                </p>
<hr/>
<p class="lead text-muted fs-6 lh-sm px-5">Chuan is a cultural alternative-controller project that translates the tactile practice of “盘串” (pán chuàn), or hand-rotating a bracelet or bead string, into a sensor-based interactive system for focus and relaxation. 
                </p>
<div class="btn-group">
<a class="btn btn-sm btn-outline-dark" href="https://youtu.be/3VIlJpzU-nY?si=WTebro46RYmC0iQE">Video on YouTube.com</a>
</div>
</div>
</div>
</section>
<div class="album mt-1 mb-5">
<div class="container px-5">
<div class="row flex-lg-row align-items-center py-4 mb-3">
<div class="col-lg">
<img class="mx-lg-auto img-fluid mt-5" height="60%" src="{{ '/assets/img/projects/chuan/chuandecor01.png' | relative_url }}" width="60%"/>
<p class="lead text-muted fs-5 lh-sm px-1">
<small class="fw-bold">"盘串"</small> (pán chuàn) refers to the practice of handling, rotating, and gradually wearing in bracelets, beads, or similar handheld objects. 
                        It is a simple but tactile activity built around repeated hand movement, material texture, and bodily rhythm. 
                        In everyday practice, pán chuàn can offer a quiet moment of relaxation within a busy routine, while also supporting attention, patience, and focus through continuous touch-based interaction.
                        </p>
</div>
<div class="col-lg-8 text-center">
<img class="bd-placeholder-img mt-5" height="100%" src="{{ '/assets/img/projects/chuan/chuan01.png' | relative_url }}" width="100%"/>
</div>
</div>
<div class="row flex-lg-row-reverse align-items-center py-5 mb-3">
<div class="col-lg">
<p class="lead text-muted fw-bold fs-1 lh-1 px-2 text-end">
<img class="mx-lg-auto img-fluid mt-5" height="60%" src="{{ '/assets/img/projects/chuan/chuandecor02.png' | relative_url }}" width="60%"/>
</p>
<p class="lead text-muted fs-5 lh-sm px-1 text-end">
                            In this project, I treated pán chuàn as a tactile interaction practice rather than simply a cultural reference. 
                            The goal was to reinterpret its hand rhythm, material intimacy, and calming tempo through an alternative controller and user interface. 
                            By sensing how the bracelet is handled, the system explores how a culturally specific handheld practice can become an embodied input method for a <small class="fw-bold color-text-cyan">digital experience</small>.
                        </p>
</div>
<div class="col-lg-8 text-center">
<img class="bd-placeholder-img mt-5" height="100%" src="{{ '/assets/img/projects/chuan/chuan02.png' | relative_url }}" width="100%"/>
</div>
</div>
<div class="row flex-lg-row align-items-center py-4 mb-5">
<div class="col-lg">
<p class="lead fs-1 fw-bolder lh-sm text-sm-start px-0">
<img class="mx-lg-auto img-fluid mt-5" height="20%" src="{{ '/assets/img/projects/chuan/chuandecor03.png' | relative_url }}" width="20%"/> <span class="align-bottom oversized-text">CHUAN</span>
</p>
<p class="lead text-muted fs-5 lh-sm text-sm-start px-2">
                            The controller uses a XIAO nRF52840 Sense microcontroller, which includes a Nordic nRF52840 microcontroller unit, Bluetooth 5.0, an onboard digital microphone, and a 6-axis inertial measurement unit (IMU). 
                            The microcontroller was soldered to a Lilypad Coin Cell Battery Holder, which powers the board. 
                            I designed a 3D-printed perforated ball-shaped enclosure to secure the microcontroller to the bracelet controller. 
                            A Python script connects to the microcontroller through Bluetooth communication and receives IMU data for movement-state classification. 
                            I also used machine-learning-assisted analysis to calibrate the thresholds for determining movement states in real time.
                        </p>
</div>
<div class="col-lg-8 text-center">
<img class="bd-placeholder-img mt-5" height="100%" src="{{ '/assets/img/projects/chuan/Chuan03.png' | relative_url }}" width="100%"/>
</div>
</div>
<div class="row flex-lg-row-reverse align-items-center py-5 mb-5 bg-c-dark">
<div class="col-lg px-3">
<p class="lead fs-1 fw-bolder lh-sm text-sm-start px-0">
<span class="align-bottom oversized-text text-white">CHUAN</span> <img class="mx-lg-auto img-fluid mt-5" height="20%" src="{{ '/assets/img/projects/chuan/chuandecor04.png' | relative_url }}" width="20%"/>
</p>
<hr class="text-white"/>
<p class="lead text-white fs-6 lh-sm px-2 text-start">
                            Currently, the system can classify three states: idling, gentle movement, and repetitive movement. 
                            These states are transmitted to a Unity game through a local TCP connection and mapped to player movement and audio feedback. 
                            In Unity, I developed a proof-of-concept game using Chinese-style Shan Shui visual assets. The player sits in a boat floating along a river and following a guided path. When the idling state is detected, the boat remains still; 
                            when gentle movement is detected, the boat flows along the river; 
                            and when repetitive movement is detected, an audio effect is triggered in the game.
                        </p>
</div>
<div class="col-lg-8 text-center">
<img class="bd-placeholder-img mt-5" height="100%" src="{{ '/assets/img/projects/chuan/Chuan04.png' | relative_url }}" width="100%"/>
</div>
</div>
<div class="col">
<div class="card bg-white shadow-lg">
<div class="card-body">
<p class="lead fs-2 fw-bolder lh-sm text-center px-0">
<img class="mx-lg-auto img-fluid" height="100" src="{{ '/assets/img/projects/chuan/chuandecor02.png' | relative_url }}" width="100"/> <span class="align-bottom">Video</span>
</p>
</div>
<iframe allowfullscreen="" class="bd-placeholder-img card-img-top" frameborder="0" height="700" src="https://www.youtube.com/embed/3VIlJpzU-nY?si=R3lm0R0fZSDHR9yl"></iframe>
<div class="card-body">
</div>
</div>
</div>
</div>
</div>

<div class="container py-5">

<div class="container mt-5">
</div>
</div>
</main>

<div class="project-page-updated">
<p class="taxt-muted fs-6">
            Project: "Chuan"
        </p>
<p class="taxt-muted fs-6">
            The Page Last updated: May 25, 2026
        </p>
</div>
