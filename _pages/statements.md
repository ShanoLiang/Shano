---
layout: page
title: Statements
permalink: /statements/
description: Formal statements, documents, notes, and other writings.
nav: true
nav_order: 4
---

{% assign statement_entries = site.pages | where: 'statement_entry', true | sort: 'statement_order' %}

<div class="statements-index-page">
  <section class="statements-index-hero">
    <h1>STATEMENTS &amp; BLOGS</h1>
    <hr>
    <p>Here are my formal research/teaching statements, documents, news, academic stuff, notes, and other writings.</p>
  </section>

  <section class="statements-index-list" aria-label="Statements and blogs">
    {% for entry in statement_entries %}
      <a class="statements-index-item" href="{{ entry.url | relative_url }}">
        <div class="statements-index-copy">
          <span class="statements-index-type">{{ entry.statement_type }}</span>
          <h2>{{ entry.title }}</h2>
          {% if entry.description %}
            <p>{{ entry.description }}</p>
          {% endif %}
        </div>
        <dl class="statements-index-dates">
          <div>
            <dt>Created</dt>
            <dd><time datetime="{{ entry.created_iso }}">{{ entry.created }}</time></dd>
          </div>
          <div>
            <dt>Last edited</dt>
            <dd><time datetime="{{ entry.last_updated_iso }}">{{ entry.last_updated }}</time></dd>
          </div>
        </dl>
        <span class="statements-index-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></span>
      </a>
    {% endfor %}
  </section>
</div>
