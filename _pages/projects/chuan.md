---
layout: project_detail
title: "Chuan"
project_nav_title: "Chuan"
permalink: /projects/chuan/
nav: false
---

<!-- _pages/projects/chuan.md: migrated from Chuan.html. -->
<main class="project-detail-legacy">
<section class="py-3 mt-0 mb-3 text-center container">
<div class="row py-lg-4 mt-1">
<div class="col-lg-6 col-md-8 mx-auto">
<img class="mx-lg-auto img-fluid mt-1" height="20%" src="{{ '/assets/img/projects/chuan/chuandecor03.png' | relative_url }}" width="20%"/>
<h1 class="display-5 fs-1 fw-bold lh-1 mb-5">"Chuan"</h1>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Tags:</small>
<span class="badge badge-custom-cyan">Alternative Controller</span>
<span class="badge badge-custom-cyan">Culture in Design</span>
</p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">Date:</small> Oct. 2024 - In Progress
                </p>
<p class="lead text-muted fs-6 lh-sm mb-1">
<small class="fw-bold">My Role:</small> Lead Designer and Developer.
                </p>
<hr/>
<p class="lead text-muted fs-6 lh-sm px-5">Chuan (bracelet) is a cultural alternative controller design project. 
                    The project aims to promote the Chinese culture of the “盘串” (playing walnut bracelet) for stress-relieving into cyberlizing. 
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
<small class="fw-bold">"盘串"</small> (pán chuàn), or playing bracelet in English, is a traditional Chinese cultural activity that offers a serene and relaxing experience. 
                            Simple yet captivating, it plays by handling and rotating intricately crafted bead bracelets with the hands. 
                            Beyond providing a moment of tranquility amidst a modern busy life, this practice cultivates focus. 
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
<p class="lead text-muted lh-1 px-2 text-end">
<span class="badge badge-custom-cyan">Alternative Controller</span>
<span class="badge badge-custom-cyan">Culture in Design</span>
</p>
<hr/>
<p class="lead text-muted fs-5 lh-sm px-1 text-end">
                            It embodies profound cultural and artistic significance, allowing enthusiasts to appreciate the power of culture and art through the process. 
                            Our project tries to turn it <small class="fw-bold color-text-cyan">cyberlized</small> through the alternative controller and user interface development.
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
                            The microcontroller used in the controller is the XIAO nRF52840 Sense. 
                            It features a Nordic nRF52840 microcontroller unit, Bluetooth 5.0, a digital microphone, and an onboard 6-axis Inertial Measurement Unit (IMU). 
                            The microcontroller is soldered to a Lilypad Coin Cell Battery Holder, which powers the board. 
                            A 3D-printed perforated ball-shaped container was created to secure the microcontroller to the bracelet controller. 
                            We used a Python script to connect to the microcontroller via Bluetooth communication, receiving IMU data for state classification. 
                            Machine learning was utilized to inform the thresholds for determining movement states in real-time. 
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
                            Currently, the system can classify three states: 
                            idling, gentle movement, and repetitive movement. 
                            These states were sent to the Unity game through a local TCP network and mapped to the player's movements in a custom game created in Unity. 
                            In Unity, a proof-of-concept game was developed using Chinese-style Shan Shui art assets. 
                            The player sits in a boat that floats on a river and follows a guided path. When the idling state is triggered, the boat remains stationary; 
                            when the gentle movement state is activated, the boat merrily flows along the river; and when repetitive movement is detected, an audio effect is triggered in the game.
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
            The Page Last updated: January 15, 2025
        </p>
</div>
