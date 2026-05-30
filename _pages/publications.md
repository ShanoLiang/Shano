---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<style>
  .post > .post-header {
    max-width: 1120px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 8.525rem;
  }

  .post > .post-header .post-title {
    margin-bottom: 1.35rem;
    color: var(--global-text-color);
    font-size: clamp(1.8rem, 4vw, 2.2rem);
    font-weight: 600;
    line-height: 1.15;
    text-transform: uppercase;
  }

  .publications-page {
    max-width: 1120px;
    margin: 0 auto;
  }

  .publications-layout {
    display: grid;
    grid-template-columns: 82px minmax(0, 1fr);
    column-gap: 3.4rem;
    align-items: start;
  }

  .publications-year-nav {
    position: sticky;
    top: 5.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.18rem;
    width: fit-content;
    min-width: 4.75rem;
    box-sizing: border-box;
    padding: 0.58rem 0.62rem;
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.56);
    box-shadow: 0 0.7rem 1.7rem rgba(18, 31, 44, 0.16);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    font-size: 0.93rem;
    line-height: 1.25;
    opacity: 0.72;
    transition:
      opacity 180ms ease,
      background 180ms ease;
  }

  .publications-year-nav:hover {
    background: rgba(255, 255, 255, 0.8);
    opacity: 0.88;
  }

  .publications-year-nav a {
    display: block;
    padding: 0.28rem 0.42rem;
    border-radius: 6px;
    color: #34424d;
    text-decoration: none !important;
    transition:
      color 140ms ease,
      background 140ms ease;
  }

  .publications-year-nav a:hover,
  .publications-year-nav a:focus,
  .publications-year-nav a.active,
  .publications-year-nav a[aria-current="true"] {
    color: #048ab0;
    background: rgba(25, 185, 220, 0.12);
    font-weight: 700;
    text-decoration: none !important;
  }

  .publications-content {
    min-width: 0;
  }

  .publications-year-section {
    scroll-margin-top: 5.8rem;
    margin-bottom: 3.25rem;
  }

  .publications-year-section + .publications-year-section {
    padding-top: 2.25rem;
    border-top: 1px solid var(--global-divider-color);
  }

  .publications-year-heading {
    margin: 0 0 1.15rem;
    color: var(--global-text-color);
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.1;
  }

  .publication-item {
    display: grid;
    grid-template-columns: 112px minmax(0, 1fr);
    column-gap: 1rem;
    align-items: start;
    margin-bottom: 2rem;
  }

  .publication-thumbnail {
    display: block;
    width: 108px;
    height: 140px;
    border: 1px solid #c9c9c9;
    background-color: #fff;
    object-fit: contain;
    object-position: center;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;
  }

  .publication-thumbnail-link {
    display: inline-block;
    text-decoration: none;
  }

  .publication-thumbnail-link:hover .publication-thumbnail,
  .publication-thumbnail-link:focus .publication-thumbnail {
    border-color: var(--global-theme-color);
    box-shadow: 0 0 0.85rem rgba(23, 162, 184, 0.5);
    transform: translateY(-2px) scale(1.025);
  }

  .publication-details {
    min-width: 0;
    padding-top: 0.1rem;
  }

  .publication-title {
    margin-bottom: 0.16rem;
    font-size: 1.03rem;
    font-weight: 700;
    line-height: 1.28;
  }

  .publication-title a {
    color: var(--global-text-color);
    text-decoration: none;
    transition: color 0.15s ease-in-out;
  }

  .publication-title a:hover,
  .publication-title a:focus {
    color: var(--global-theme-color);
    text-decoration: none;
  }

  .publication-authors,
  .publication-venue {
    color: var(--global-text-color-light);
    font-size: 0.92rem;
    line-height: 1.3;
  }

  .publication-authors strong {
    color: var(--global-text-color);
    font-weight: 700;
  }

  .publication-venue {
    font-style: italic;
  }

  .publication-award {
    margin-left: 0.35rem;
    color: var(--global-theme-color);
    font-style: normal;
    font-weight: 700;
    white-space: nowrap;
  }

  .publication-status {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    margin-top: 0.32rem;
    padding: 0.12rem 0.42rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 999px;
    color: var(--global-text-color-light);
    background-color: rgba(127, 127, 127, 0.09);
    font-size: 0.72rem;
    font-weight: 600;
    line-height: 1.25;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .publication-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.38rem;
    align-items: center;
    margin-top: 0.58rem;
  }

  .publication-link-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 52px;
    height: 38px;
    margin: 0;
    padding: 0 0.55rem;
    border: 1px solid #212529;
    border-radius: 0.25rem;
    color: #212529;
    background-color: #fff;
    box-shadow: none;
    font-size: 0.72rem;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    vertical-align: middle;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  }

  .publication-link-button:hover,
  .publication-link-button:focus {
    color: #fff;
    border-color: #212529;
    background-color: #212529;
    box-shadow: none;
    text-decoration: none;
    outline: none;
  }

  .publication-link-button i {
    font-size: 0.78rem;
    line-height: 1;
  }

  .publication-panel {
    max-width: min(100%, 760px);
    margin-top: 0.7rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.38rem;
    background-color: var(--global-bg-color);
    box-shadow: 0 0.38rem 1.1rem rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }

  .publication-panel[hidden] {
    display: none;
  }

  .publication-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.48rem 0.68rem;
    border-bottom: 1px solid var(--global-divider-color);
    background-color: rgba(127, 127, 127, 0.08);
    font-size: 0.9rem;
    font-weight: 700;
  }

  .publication-copy-button {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.18rem 0.54rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.25rem;
    color: var(--global-theme-color);
    background-color: var(--global-bg-color);
    font-size: 0.78rem;
    font-weight: 600;
    cursor: pointer;
  }

  .publication-copy-button:hover,
  .publication-copy-button:focus {
    color: #fff;
    background-color: var(--global-theme-color);
    outline: none;
  }

  .publication-panel-body {
    padding: 0.72rem;
  }

  .publication-cite-pre {
    max-height: 15rem;
    margin: 0;
    overflow: auto;
    color: var(--global-text-color);
    background-color: rgba(127, 127, 127, 0.06);
    font-size: 0.78rem;
    line-height: 1.45;
    white-space: pre;
  }

  .publication-abstract {
    margin: 0;
    color: var(--global-text-color);
    font-size: 0.92rem;
    line-height: 1.45;
  }

  .publication-redacted {
    color: transparent;
    background-image: linear-gradient(
      90deg,
      rgba(67, 78, 88, 0.42),
      rgba(67, 78, 88, 0.68)
    );
    border-radius: 0.18rem;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    caret-color: transparent;
    text-shadow: none;
    user-select: none;
    -webkit-user-select: none;
  }

  .publication-redacted::selection {
    color: transparent;
    background-color: transparent;
  }

  .publication-title .publication-redacted {
    line-height: 1.35;
  }

  .publications-footer-note {
    max-width: 1120px;
    margin: 2.4rem auto 0;
    padding-top: 1rem;
    border-top: 1px solid var(--global-divider-color);
    text-align: center;
  }

  .publications-footer-note p {
    margin: 0;
    color: var(--global-text-color);
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .publications-footer-dots {
    display: flex;
    justify-content: center;
    gap: 0.35rem;
    margin-top: 1.55rem;
  }

  .publications-footer-dots .spinner-grow {
    width: 0.5rem;
    height: 0.5rem;
    color: #343a40;
  }

  @media (max-width: 767.98px) {
    .post > .post-header {
      padding-left: 0;
    }

    .publications-layout {
      display: block;
    }

    .publications-year-nav {
      display: none;
    }

    .publications-year-heading {
      font-size: 1.65rem;
    }

    .publication-item {
      grid-template-columns: 88px minmax(0, 1fr);
      column-gap: 0.8rem;
      margin-bottom: 1.75rem;
    }

    .publication-thumbnail {
      width: 84px;
      height: 110px;
    }

    .publication-title {
      font-size: 0.98rem;
    }

    .publication-authors,
    .publication-venue,
    .publication-abstract {
      font-size: 0.86rem;
    }

    .publication-panel {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 420px) {
    .publication-item {
      grid-template-columns: 74px minmax(0, 1fr);
      column-gap: 0.65rem;
    }

    .publication-thumbnail {
      width: 70px;
      height: 92px;
    }
  }
</style>

{% assign publications = site.data.publications %}
{% assign publication_years = publications | map: 'year' | uniq %}
{% assign publications_last_updated = 'May 20, 2026' %}

<div class="publications-page">
  <div class="publications-layout">
    <nav class="publications-year-nav" aria-label="Publication years">
      {% for year in publication_years %}
        <a href="#year-{{ year }}" data-publication-year-link="{{ year }}">{{ year }}</a>
      {% endfor %}
    </nav>

    <div class="publications-content">
      {% assign current_year = '' %}
      {% for publication in publications %}
        {% if publication.year != current_year %}
          {% unless forloop.first %}
            </section>
          {% endunless %}
          {% assign current_year = publication.year %}
          <section class="publications-year-section" id="year-{{ current_year }}" data-publication-year="{{ current_year }}">
            <h2 class="publications-year-heading">{{ current_year }}</h2>
        {% endif %}

        {% assign is_under_review = false %}
        {% if publication.status == 'under_review' %}
          {% assign is_under_review = true %}
        {% endif %}

        <article class="publication-item{% if is_under_review %} publication-under-review{% endif %}" id="{{ publication.id }}">
          <div class="publication-thumbnail-wrap">
            {% if publication.link_url and is_under_review == false %}
              <a href="{{ publication.link_url }}" class="publication-thumbnail-link" target="_blank" rel="noopener noreferrer" aria-label="{{ publication.title | escape }}">
            {% endif %}
              <img
                src="{{ '/assets/img/' | append: publication.image | relative_url }}"
                class="publication-thumbnail"
                loading="lazy"
                alt="{% if is_under_review %}Under review paper preview{% else %}{{ publication.title | escape }} preview{% endif %}"
              >
            {% if publication.link_url and is_under_review == false %}
              </a>
            {% endif %}
          </div>

          <div class="publication-details">
            <div class="publication-title">
              {% if is_under_review %}
                <span class="publication-redacted">{{ publication.title }}</span>
              {% elsif publication.link_url %}
                <a href="{{ publication.link_url }}" target="_blank" rel="noopener noreferrer">{{ publication.title }}</a>
              {% else %}
                {{ publication.title }}
              {% endif %}
            </div>

            <div class="publication-authors">
              {% for author in publication.authors %}
                {% if is_under_review and author != 'Shano Liang' %}
                  <span class="publication-redacted">{{ author }}</span>
                {% elsif author == 'Shano Liang' %}
                  <strong>Shano Liang</strong>
                {% else %}
                  {{ author }}
                {% endif %}{% unless forloop.last %}, {% endunless %}
              {% endfor %}
            </div>

            <div class="publication-venue">
              {% if is_under_review %}
                <span class="publication-redacted">{{ publication.venue }}</span>
              {% else %}
                {{ publication.venue }}
                {% if publication.award %}
                  <span class="publication-award"><i class="fa-solid fa-trophy"></i> {{ publication.award }}</span>
                {% endif %}
              {% endif %}
            </div>

            {% if is_under_review %}
              <div class="publication-status">Under Review</div>
            {% else %}
              <div class="publication-links" aria-label="Publication links">
                {% if publication.link_url %}
                  <a href="{{ publication.link_url }}" class="publication-link-button" target="_blank" rel="noopener noreferrer">
                    {{ publication.link_type }}
                  </a>
                {% endif %}
                {% if publication.cite %}
                  <button class="publication-link-button" type="button" data-publication-toggle="cite-{{ publication.id }}" aria-expanded="false">
                    CITE
                  </button>
                {% endif %}
                {% if publication.abstract %}
                  <button class="publication-link-button" type="button" data-publication-toggle="abs-{{ publication.id }}" aria-expanded="false">
                    ABS
                  </button>
                {% endif %}
              </div>

              {% if publication.cite %}
                <div class="publication-panel" id="cite-{{ publication.id }}" hidden>
                  <div class="publication-panel-header">
                    <span>Citation</span>
                    <button class="publication-copy-button" type="button" data-publication-copy="cite-{{ publication.id }}">
                      <i class="fa-solid fa-copy"></i>
                      Copy
                    </button>
                  </div>
                  <div class="publication-panel-body">
                    <pre class="publication-cite-pre">{{ publication.cite | escape }}</pre>
                  </div>
                </div>
              {% endif %}

              {% if publication.abstract %}
                <div class="publication-panel" id="abs-{{ publication.id }}" hidden>
                  <div class="publication-panel-header">
                    <span>Abstract</span>
                  </div>
                  <div class="publication-panel-body">
                    <p class="publication-abstract">{{ publication.abstract }}</p>
                  </div>
                </div>
              {% endif %}
            {% endif %}
          </div>
        </article>

        {% if forloop.last %}
          </section>
        {% endif %}
      {% endfor %}
    </div>

  </div>
</div>

<div class="publications-footer-note">
  <p>The Page Last Updated in: {{ publications_last_updated }}</p>
  <div class="publications-footer-dots" aria-hidden="true">
    <div class="spinner-grow" role="status">
      <span class="visually-hidden"></span>
    </div>
    <div class="spinner-grow" role="status">
      <span class="visually-hidden"></span>
    </div>
    <div class="spinner-grow" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>
</div>

{% include site_bottom_contact.liquid %}

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll("[data-publication-toggle]");

    toggleButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const panelId = button.getAttribute("data-publication-toggle");
        const panel = document.getElementById(panelId);
        const item = button.closest(".publication-item");
        if (!panel || !item) return;

        const willOpen = panel.hasAttribute("hidden");

        item.querySelectorAll(".publication-panel").forEach(function (otherPanel) {
          otherPanel.setAttribute("hidden", "");
        });
        item.querySelectorAll("[data-publication-toggle]").forEach(function (otherButton) {
          otherButton.setAttribute("aria-expanded", "false");
        });

        if (willOpen) {
          panel.removeAttribute("hidden");
          button.setAttribute("aria-expanded", "true");
        }
      });
    });

    document.querySelectorAll("[data-publication-copy]").forEach(function (button) {
      button.addEventListener("click", function () {
        const panel = document.getElementById(button.getAttribute("data-publication-copy"));
        const text = panel ? panel.querySelector("pre")?.textContent || "" : "";
        const originalHtml = button.innerHTML;

        const markCopied = function () {
          button.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
          window.setTimeout(function () {
            button.innerHTML = originalHtml;
          }, 1400);
        };

        const fallbackCopy = function () {
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.setAttribute("readonly", "");
          textarea.style.position = "fixed";
          textarea.style.left = "-9999px";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          textarea.remove();
        };

        fallbackCopy();
        markCopied();

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).catch(function () {
            return false;
          });
        }
      });
    });

    const yearLinks = Array.from(document.querySelectorAll("[data-publication-year-link]"));
    const yearSections = Array.from(document.querySelectorAll("[data-publication-year]"));

    if (yearLinks.length && yearSections.length) {
      const setActiveYear = function () {
        const scrollAnchor = window.scrollY + 120;
        let activeYear = yearSections[0].getAttribute("data-publication-year");

        yearSections.forEach(function (section) {
          if (section.offsetTop <= scrollAnchor) {
            activeYear = section.getAttribute("data-publication-year");
          }
        });

        yearLinks.forEach(function (link) {
          const isActive = link.getAttribute("data-publication-year-link") === activeYear;
          link.classList.toggle("active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      };

      setActiveYear();
      window.addEventListener("scroll", setActiveYear, { passive: true });
    }
  });
</script>
