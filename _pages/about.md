---
layout: about
title: Home
permalink: /
#subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

#profile:
#  align: right
#  image: prof_pic.jpg
#  image_circular: false # crops the image to make it circular
#  more_info: >
#    <p>555 your office number</p>
#    <p>123 your address street</p>
#    <p>Your City, State 12345</p>

# Template section kept for future use:
# selected_papers: true # includes a list of papers marked as "selected={true}"
selected_papers: false
# social: true # includes social icons at the bottom of the page
social: false

announcements:
  # enabled: true # includes a list of news items
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  # enabled: true
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---




<div id="about-intro-vanta" class="text-center py-5 about-intro-vanta">
  <div class="about-intro-content">
    <img src="assets/img/liang-headshot.png" class="img-fluid" alt="Responsive image" width="200" height="300">
    <p></p>
    <h1 class="font-weight-bold">Hi!</h1>
    <p class="h5 font-weight-normal">
      I'm <small class="h3 font-weight-bolder">Shano Liang</small>
    </p>
    <p class="h5 font-weight-light lh-sm">
      (she/her)
    </p>
    <hr class="intro-divider">
    <p class="fs-6 fw-light lh-sm">
      Computational Media PhD candidate at Worcester Polytechnic Institute
    </p>
    <p class="fs-6 fw-light lh-sm px-5">
    Research Interests:
    <small class="h6 font-weight-bold"> Human-Computer Interaction || Human-centered <br> Computing || Data Visualization || Interactive Media & Game Studies </small>
    </p>
    <p>
    <div class="spinner-grow" style="width: 0.5rem; height: 0.5rem;" role="status">
      <span class="visually-hidden"></span>
    </div>
    <div class="spinner-grow" style="width: 0.5rem; height: 0.5rem;" role="status">
      <span class="visually-hidden"></span>
    </div>
    <div class="spinner-grow" style="width: 0.5rem; height: 0.5rem;" role="status">
      <span class="visually-hidden"></span>
    </div>
    </p>
    &nbsp;
    <p>&nbsp;</p>
    &nbsp;
  </div>
</div>


<div class="text-center">
    <style>
        .about-intro-vanta {
            position: relative;
            overflow: hidden;
            width: calc(100vw - var(--page-scrollbar-width, 0px));
            max-width: calc(100vw - var(--page-scrollbar-width, 0px));
            margin-left: calc(50% - 50vw + var(--page-scrollbar-half-width, 0px));
            margin-right: calc(50% - 50vw + var(--page-scrollbar-half-width, 0px));
            min-height: min(760px, calc(100vh - 3.5rem));
            background-color: #fff;
        }
        .about-intro-vanta canvas {
            pointer-events: none;
        }
        .about-intro-content {
            position: relative;
            z-index: 1;
            width: 100%;
        }
        .about-developer-section {
            --about-developer-accent: #0dcaf0;
            position: relative;
            overflow: hidden;
            width: calc(100vw - var(--page-scrollbar-width, 0px));
            max-width: calc(100vw - var(--page-scrollbar-width, 0px));
            margin-left: calc(50% - 50vw + var(--page-scrollbar-half-width, 0px));
            margin-right: calc(50% - 50vw + var(--page-scrollbar-half-width, 0px));
            margin-top: 3rem;
            margin-bottom: 3rem;
            min-height: calc(100vh - 3.5rem);
            display: flex;
            align-items: center;
            color: #fff;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
            background-image: linear-gradient(rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.22)), url('{{ "/assets/img/about/bg-rimland.jpg" | relative_url }}');
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
        }
        .about-developer-inner {
            width: 100%;
            max-width: 1140px;
            margin: 0 auto;
            padding: 7rem 1rem 8rem;
        }
        .about-developer-carousel {
            margin-bottom: 2.25rem;
            border: 0;
            border-radius: 0.25rem;
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.28);
        }
        .about-developer-carousel img {
            width: 100%;
            height: auto;
            display: block;
        }
        .about-developer-caption {
            color: #fff !important;
            margin-bottom: 0;
            text-shadow: 0 0 5px #000;
        }
        .about-developer-carousel .carousel-caption {
            bottom: 0.75rem;
            padding-bottom: 0;
        }
        .about-developer-carousel .carousel-indicators {
            bottom: -2.15rem;
            margin-bottom: 0;
        }
        .about-developer-carousel .carousel-indicators li {
            width: 34px;
            height: 3px;
            margin-right: 4px;
            margin-left: 4px;
            border-top: 0;
            border-bottom: 0;
            border-radius: 0 !important;
            background-color: #fff;
            opacity: 0.55;
        }
        .about-developer-carousel .carousel-indicators .active {
            opacity: 1;
        }
        .about-developer-title {
            color: #fff;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
        }
        .about-developer-title i,
        .about-developer-title .developer-title-accent {
            color: var(--about-developer-accent);
        }
        .about-developer-body {
            color: #fff;
            text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
        }
        .about-developer-body a {
            color: #fff;
            font-weight: 600;
            text-decoration: underline;
        }
        .about-developer-body strong {
            color: #fff;
            font-weight: 600;
        }
        .about-developer-rule {
            width: 100px;
            margin: 0;
            border: 0;
            border-top: 2px solid var(--about-developer-accent);
            opacity: 1;
        }
        .about-developer-carousel .carousel-control-prev-icon,
        .about-developer-carousel .carousel-control-next-icon {
            background-color: var(--about-developer-accent);
            padding: 1rem;
        }
    .about-contact-section {
        width: calc(100vw - var(--page-scrollbar-width, 0px));
        max-width: calc(100vw - var(--page-scrollbar-width, 0px));
        margin-left: calc(50% - 50vw + var(--page-scrollbar-half-width, 0px));
        margin-right: calc(50% - 50vw + var(--page-scrollbar-half-width, 0px));
        padding: 7rem 1rem 7.5rem;
        background-color: #fff;
        color: #212529;
    }
        .about-contact-inner {
            width: min(100%, 610px);
            margin: 0 auto;
            text-align: center;
        }
        .about-contact-avatar {
            width: 200px;
            max-width: 68vw;
            height: auto;
            margin-bottom: 1.5rem;
        }
        .about-contact-message {
            text-align: left;
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.25;
            margin-bottom: 1.5rem;
        }
        .about-contact-divider {
            width: 100%;
            margin: 0 auto 1.25rem;
            border: 0;
            border-top: 1px solid rgba(0, 0, 0, 0.22);
        }
        .about-contact-name {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.15;
        }
        .about-contact-pronouns {
            font-size: 1.25rem;
            font-weight: 300;
        }
    .about-contact-email {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.25;
    }
    .about-contact-section p,
    .about-contact-section small,
    .about-contact-section span {
        color: #212529;
    }
    .about-contact-social-links {
        justify-content: center;
    }
    .about-contact-section .profile-social-button {
        color: #212529 !important;
    }
    .about-contact-section .profile-social-button:hover,
    .about-contact-section .profile-social-button:focus {
        color: #fff !important;
    }
        .about-bottom-band {
            width: calc(100vw - var(--page-scrollbar-width, 0px));
            max-width: calc(100vw - var(--page-scrollbar-width, 0px));
            height: calc(5.25rem + 70px);
            margin-left: calc(50% - 50vw + var(--page-scrollbar-half-width, 0px));
            margin-right: calc(50% - 50vw + var(--page-scrollbar-half-width, 0px));
            margin-bottom: -70px;
            background-color: #212529;
        }
        .intro-divider {
            width: 38rem;
            max-width: 80%;
            margin: 1rem auto;
            border-top: 1px solid rgba(0, 0, 0, 0.2);
        }
        .profile-social-links {
            display: flex;
            flex-wrap: wrap;
            gap: 0.25rem;
            align-items: center;
        }
        .profile-social-button {
            width: 42px;
            height: 38px;
            margin: 0 !important;
            padding: 0 !important;
            border: 1px solid #212529 !important;
            border-radius: 0.25rem !important;
            background-color: #fff !important;
            color: #212529 !important;
            box-shadow: none !important;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
            text-decoration: none !important;
            vertical-align: middle;
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
        }
        .profile-social-button:hover,
        .profile-social-button:focus {
            background-color: #212529 !important;
            border-color: #212529 !important;
            color: #fff !important;
            box-shadow: none !important;
            text-decoration: none !important;
        }
        .profile-social-button i {
            font-size: 1.45rem;
            line-height: 1;
        }
        .profile-about-title {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            margin-bottom: 1.5rem;
            font-size: clamp(1.6rem, 6.2vw, 2.2rem);
            font-weight: 600;
            line-height: 1.15;
            white-space: nowrap;
        }
        .profile-about-title i {
            flex: 0 0 auto;
            font-size: 0.9em;
            line-height: 1;
        }
        @media (max-width: 991.98px) {
            .about-intro-vanta {
                min-height: 680px;
            }
            .about-developer-inner {
                padding: 4rem 1.5rem;
            }
            .about-contact-section {
                padding-top: 5rem;
                padding-bottom: 5.5rem;
            }
            .about-developer-copy {
                margin-top: 2.5rem;
            }
            .profile-about-column {
                margin-top: 5.5rem;
            }
        }
        @media (max-width: 399.98px) {
            .profile-about-title {
                font-size: clamp(1.35rem, 6.25vw, 1.55rem);
            }
        }
        @media (max-width: 374.98px) {
            .profile-about-title {
                gap: 0.3rem;
                font-size: clamp(1.15rem, 5.8vw, 1.38rem);
            }
        }
    </style>
    <div class="row flex-lg-row-reverse mt-5">
        <div class="col-lg-4">
            <img src="assets/img/decor-head-01.jpg" class="img-fluid" alt="Responsive image" width="300" height="400">
            <div class="container text-left text-start pt-4 px-0" style="max-width: 300px; line-height: 1.25;">
                <p class="mb-1" style="font-size: 1.5rem; font-weight: 500;">Shano Liang</p>
                <p class="mb-1" style="font-size: 1rem; font-weight: 300;">
                    <span style="font-weight: 500;">Known Alias (Deadname):</span> <span style="text-decoration: line-through;">Hongyuan</span>
                </p>
                <p class="mb-1" style="font-size: 1rem; font-weight: 300;">
                    <span style="font-weight: 500;">Email:</span> sliang1 AT wpi DOT edu
                </p>
                <p class="mb-1" style="font-size: 1rem; font-weight: 300;">
                    <span style="font-weight: 500;">Address:</span> Worcester Polytechnic Institute
                </p>
                <p class="mb-1" style="font-size: 1rem; font-weight: 300;">100 Institute Rd, Worcester, MA, 01609</p>
                <p class="mb-1 profile-social-links">
                    <a href="mailto:sliang1@wpi.edu" class="btn btn-outline-dark profile-social-button" title="Email" aria-label="Email">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                    <a href="https://github.com/ShanoLiang" class="btn btn-outline-dark profile-social-button" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://scholar.google.com/citations?user=ufro9ysAAAAJ" class="btn btn-outline-dark profile-social-button" target="_blank" rel="noopener noreferrer" title="Google Scholar" aria-label="Google Scholar">
                        <i class="ai ai-google-scholar"></i>
                    </a>
                    <a href="https://twitter.com/ShanoLiang" class="btn btn-outline-dark profile-social-button" target="_blank" rel="noopener noreferrer" title="X" aria-label="X">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shano-liang-49a968204/" class="btn btn-outline-dark profile-social-button" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://orcid.org/0000-0003-1976-9680" class="btn btn-outline-dark profile-social-button" target="_blank" rel="noopener noreferrer" title="ORCID" aria-label="ORCID">
                        <i class="ai ai-orcid"></i>
                    </a>
                </p>
            </div>
        </div>
        <div class="col-lg profile-about-column">
            <div class="container-fluid text-left text-start">
                <h1 class="profile-about-title"><i class="fa-solid fa-graduation-cap"></i> About Me as Researcher:</h1>
                <p class="fs-5 fw-light lh-sm mb-4">
                    I am a PhD candidate in Computational Media, working and collaborating with <a class="text-info font-weight-bold" style="text-decoration: underline;" href="https://www.wpi.edu/people/faculty/ltharrison" target="_blank">Dr. Lane Harrison</a> and <a class="text-info font-weight-bold" style="text-decoration: underline;" href="https://research.monash.edu/en/persons/phoebe-toups-dugas/" target="_blank">Dr. Phoebe Toups Dugas</a>. I study how interactive media, games, and data interaction systems shape people’s felt experiences, judgments, and behavioral orientations, and I translate those <strong><em>"diagnoses"</em></strong> into feel-able, experiential systems that help people understand complex information and feelings, and/or make better judgments.
                </p>    
                <p class="fs-5 fw-light lh-sm mb-4">    
                    My research is driven by two connected questions: (i) What design factors make people feel cared for, harmed, anxious, immersed, euphoric, deceived, or recognized? (ii) How can knowledge from interaction design help in transforming these insights into prototypes that make complex experiences, information or data, events or phenomena, and/or social issues more felt, testable, and reflective?
                </p>
                <p class="fs-5 fw-light lh-sm mb-4">
                    I approach these questions through what I think of as media experience diagnostics that examine how design contributes to particular feelings and interpretations. I also build experiential prototypes based on these diagnoses, drawing on game and interaction design, including playful data systems, VR/AR environments, and interactive visualizations that help people explore uncertainty, consequences, and social complexity through action. My most recent reVISit-Games and reVISit-XR work also develops study infrastructure for deploying, logging, and replaying interactive system and XR experiences in empirical visualization and Human-Computer Interaction (HCI) studies.
                </p>
            </div>
        </div>
    </div>
    &nbsp;
    <p>&nbsp;</p>
    &nbsp;
</div>  

<section class="about-developer-section text-white">
    <div class="about-developer-inner">
        <div class="row align-items-center">
            <div class="col-lg-4">
                <div id="aboutDeveloperCarousel" class="carousel slide about-developer-carousel" data-ride="carousel" data-interval="6000">
                    <ol class="carousel-indicators mb-1">
                        <li data-target="#aboutDeveloperCarousel" data-slide-to="0" class="active" aria-label="Slide 1"></li>
                        <li data-target="#aboutDeveloperCarousel" data-slide-to="1" aria-label="Slide 2"></li>
                        <li data-target="#aboutDeveloperCarousel" data-slide-to="2" aria-label="Slide 3"></li>
                        <li data-target="#aboutDeveloperCarousel" data-slide-to="3" aria-label="Slide 4"></li>
                        <li data-target="#aboutDeveloperCarousel" data-slide-to="4" aria-label="Slide 5"></li>
                        <li data-target="#aboutDeveloperCarousel" data-slide-to="5" aria-label="Slide 6"></li>
                    </ol>
                    <div class="carousel-inner mb-1">
                        <div class="carousel-item active">
                            <img src="{{ '/assets/img/about/carousel-rimland-01.jpg' | relative_url }}" class="mx-lg-auto img-fluid" width="400" height="500" alt="Game art from Rimland">
                            <div class="carousel-caption d-none d-md-block">
                                <p class="lh-sm fw-normal about-developer-caption">Game Art of <small class="fst-italic fw-normal">Rimland</small> (2018)</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="{{ '/assets/img/about/carousel-rimland-02.jpg' | relative_url }}" class="mx-lg-auto img-fluid" width="400" height="500" alt="Game art from Rimland environment">
                            <div class="carousel-caption d-none d-md-block">
                                <p class="lh-sm fw-normal about-developer-caption">Game Art of <small class="fst-italic fw-normal">Rimland</small> (2018)</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="{{ '/assets/img/about/carousel-battlebilliards.jpg' | relative_url }}" class="mx-lg-auto img-fluid" width="400" height="500" alt="High-poly Battle Billiards models with PBR textures">
                            <div class="carousel-caption d-none d-md-block">
                                <p class="lh-sm fw-normal about-developer-caption">High-poly Models with PBR Textures of <small class="fst-italic fw-normal">Battle Billiards</small> (2022)</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="{{ '/assets/img/about/carousel-motioncomics.jpg' | relative_url }}" class="mx-lg-auto img-fluid" width="400" height="500" alt="Motion comic art">
                            <div class="carousel-caption d-none d-md-block">
                                <p class="lh-sm fw-normal about-developer-caption bg-dark p-1 rounded bg-opacity-80 shadow-lg">Motion Comic (2017)</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="{{ '/assets/img/about/carousel-forsurvive.jpg' | relative_url }}" class="mx-lg-auto img-fluid" width="400" height="500" alt="Game art from For Survive">
                            <div class="carousel-caption d-none d-md-block">
                                <p class="lh-sm fw-normal about-developer-caption">Game Art of <small class="fst-italic fw-normal">For Survive</small> (2019)</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="{{ '/assets/img/about/carousel-wos.jpg' | relative_url }}" class="mx-lg-auto img-fluid" width="400" height="500" alt="Game art from World of Summoner">
                            <div class="carousel-caption d-none d-md-block">
                                <p class="lh-sm fw-normal about-developer-caption bg-dark p-1 rounded bg-opacity-70 shadow-lg">Game Art of <small class="fst-italic fw-normal">World of Summoner</small> (2019)</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#aboutDeveloperCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#aboutDeveloperCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="col-lg about-developer-copy">
                <div class="container-fluid text-left text-start">
                    <h1 class="profile-about-title about-developer-title"><i class="fa-solid fa-palette"></i> About Me as <span class="developer-title-accent">Developer:</span></h1>
                    <p class="fs-5 fw-light lh-sm mb-4 about-developer-body">
                        As a multi-skilled digital artist, developer, and designer, I treat making as part of my research practice. My background in game art, animation, 2D/3D asset creation, film production, technical art, audio/music, interaction design, and prototyping allows me to move from conceptual analysis to working artifacts. Before becoming an HCI and computational media researcher, I received my Bachelor's degree in Video Game and Animation from the <a href="https://english.hifa.edu.cn/" target="_blank" rel="noopener noreferrer">Hubei Institute of Fine Arts</a> (HIFA) in Wuhan, China, in 2018, where I later served as a teaching assistant for game studio courses. I also founded Wuhan KBOOM Network Technology Co., Ltd., an early entrepreneurial experience that shaped how I think about creative production, collaboration, and cultural context.
                    </p>
                    <p class="fs-5 fw-light lh-sm mb-4 about-developer-body">
                        These experiences continue to shape my research practice. I approach development not only as implementation, but also as a way to test ideas, build experiential arguments, and understand how design choices affect people’s feelings, interpretations, and actions. My background in art, game development, and interactive systems helps me move between critical analysis and hands-on prototyping, which is central to the way I conduct research.
                    </p>
                    <hr class="about-developer-rule">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="about-contact-section">
    <div class="about-contact-inner">
        <img src="{{ '/assets/img/about/avatar_03.png' | relative_url }}" class="about-contact-avatar img-fluid" width="200" height="300" alt="Shano Liang illustrated avatar">
        <p class="about-contact-message">
            Please feel free to contact me if you are interested in my work or simply want to chat about cultures in games, and that could be the beginning of a wonderful tale!
        </p>
        <hr class="about-contact-divider">
        <p class="about-contact-name">
            Shano Liang <small class="about-contact-pronouns">(she/her)</small>
        </p>
        <p class="about-contact-email">
            <span class="font-weight-bold">Email:</span> sliang1 AT wpi DOT edu
        </p>
        <p class="mb-1 profile-social-links about-contact-social-links">
            <a href="mailto:sliang1@wpi.edu" class="btn btn-outline-dark profile-social-button" title="Email" aria-label="Email">
                <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="https://github.com/ShanoLiang" class="btn btn-outline-dark profile-social-button" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://scholar.google.com/citations?user=ufro9ysAAAAJ" class="btn btn-outline-dark profile-social-button" target="_blank" rel="noopener noreferrer" title="Google Scholar" aria-label="Google Scholar">
                <i class="ai ai-google-scholar"></i>
            </a>
            <a href="https://twitter.com/ShanoLiang" class="btn btn-outline-dark profile-social-button" target="_blank" rel="noopener noreferrer" title="X" aria-label="X">
                <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/shano-liang-49a968204/" class="btn btn-outline-dark profile-social-button" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://orcid.org/0000-0003-1976-9680" class="btn btn-outline-dark profile-social-button" target="_blank" rel="noopener noreferrer" title="ORCID" aria-label="ORCID">
                <i class="ai ai-orcid"></i>
            </a>
        </p>
    </div>
</section>

<div class="about-bottom-band" aria-hidden="true"></div>

<!-- Template content kept for future use:
Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.
-->

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.dots.min.js"></script>
<script>
  window.addEventListener("load", function () {
    var intro = document.querySelector("#about-intro-vanta");
    if (!intro || !window.VANTA) {
      return;
    }

    function syncFullBleedWidth() {
      var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty("--page-scrollbar-width", scrollbarWidth + "px");
      document.documentElement.style.setProperty("--page-scrollbar-half-width", scrollbarWidth / 2 + "px");
    }

    syncFullBleedWidth();

    var vantaEffect = VANTA.DOTS({
      el: "#about-intro-vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0,
      color2: 0x0,
      backgroundColor: 0xffffff,
      backgroundAlpha: 1.00,
      size: 2.20,
      spacing: 22.00,
      showLines: false
    });

    window.addEventListener("resize", function () {
      syncFullBleedWidth();
      if (vantaEffect && typeof vantaEffect.resize === "function") {
        vantaEffect.resize();
      }
    });
  });
</script>
