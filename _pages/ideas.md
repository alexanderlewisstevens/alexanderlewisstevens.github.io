---
layout: default
title: "Ideas"
permalink: /ideas/
---

<div class="tags">
  <div class="tags-header">
    <h2 class="tags-header-title">{{ page.title }}</h2>
    <div class="tags-header-line"></div>
  </div>
  
  <div class="tags-item" id="ideas">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-tag"
    >
      <path
        d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
      ></path>
      <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>
    
    <h2 class="tags-item-label">Posts with the "ideas" tag</h2>
    
    {% assign filtered_posts = site.posts | where:"tags","ideas" %}
    
    {% for post in filtered_posts %}
    <a class="tags-post" href="{{ post.url | prepend: site.baseurl }}">
      <div>
        <span class="tags-post-title">{{ post.title }}</span>
        <div class="tags-post-line"></div>
      </div>
    </a>
    {% endfor %}
    
  </div>
</div>