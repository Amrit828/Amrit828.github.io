---
title: Blog
description: Notes on NLP research, interpretability, and everything in between.
---

<script setup>
import { data as posts } from '../.vitepress/blog.data';
</script>

# Blog

<p class="blog-date">Notes on research, interpretability, and whatever else I'm working through.</p>

<ul class="blog-list">
  <li v-for="post in posts" :key="post.url">
    <a :href="post.url">{{ post.title }}</a>
    <span class="blog-list-date">{{ post.date }}</span>
    <p v-if="post.description">{{ post.description }}</p>
  </li>
</ul>

<p v-if="posts.length === 0">No posts yet — check back soon.</p>
