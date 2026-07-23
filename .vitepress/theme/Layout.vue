<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {
	achievements,
	education,
	engineeringProjects,
	experience,
	heroStats,
	profile,
	publications,
	researchInterests,
	researchProjects,
	skillGroups,
} from './data';

const theme = ref<'light' | 'dark'>('light');

function applyTheme(next: 'light' | 'dark') {
	theme.value = next;
	document.documentElement.setAttribute('data-theme', next);
	localStorage.setItem('theme', next);
}

function toggleTheme() {
	applyTheme(theme.value === 'dark' ? 'light' : 'dark');
}

onMounted(() => {
	const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
	if (stored) {
		applyTheme(stored);
	} else {
		theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
});
</script>

<template>
	<div class="page">
		<header class="site-header">
			<div class="header-inner">
				<a class="brand" href="#top">{{ profile.name }}</a>
				<nav class="header-nav">
					<a href="#research">Research</a>
					<a href="#experience">Experience</a>
					<a href="#projects">Projects</a>
					<a href="#education">Education</a>
					<a href="#contact">Contact</a>
					<button class="theme-toggle" @click="toggleTheme" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`">
						{{ theme === 'dark' ? '☀' : '☾' }}
					</button>
				</nav>
			</div>
		</header>

		<main>
			<section id="top" class="hero wrap">
				<div class="hero-inner">
					<img class="hero-portrait" :src="profile.portrait" alt="Portrait of Amrit Gopinath" />
					<div>
						<h1 class="hero-name">{{ profile.name }}</h1>
						<p class="hero-title">{{ profile.title }}</p>
					</div>
				</div>
				<p class="tagline">{{ profile.tagline }}</p>
				<p class="hero-intro">{{ profile.intro }}</p>
				<div class="hero-actions">
					<a class="btn btn-primary" :href="profile.resumeHref" download>Download Resume</a>
					<a class="btn" :href="`mailto:${profile.email}`">Email</a>
					<a class="btn" :href="profile.github" target="_blank" rel="noreferrer">GitHub</a>
					<a class="btn" :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
				</div>
				<div class="hero-stats">
					<div v-for="stat in heroStats" :key="stat.label" class="stat">
						<div class="stat-value">{{ stat.value }}</div>
						<div class="stat-label">{{ stat.label }}</div>
					</div>
				</div>
				<div class="research-interests">
					<span v-for="item in researchInterests" :key="item" class="tag tag-pill">{{ item }}</span>
				</div>
			</section>

			<section id="research" class="wrap">
				<p class="eyebrow"><span class="eyebrow-num">01</span>Research</p>
				<h2 class="section-title">Publications &amp; Submissions</h2>
				<div class="entry-list">
					<article v-for="(pub, i) in publications" :key="pub.title" class="entry" :class="{ featured: i === 0 }">
						<div class="entry-head">
							<div class="entry-title">{{ pub.title }}</div>
							<div class="entry-year">{{ pub.year }}</div>
						</div>
						<div class="entry-meta">{{ pub.role }}</div>
						<div class="entry-facts">
							<div><span class="entry-fact-label">Status</span>{{ pub.status }}</div>
							<div><span class="entry-fact-label">Venue</span>{{ pub.venue }}</div>
							<div><span class="entry-fact-label">Area</span>{{ pub.area }}</div>
						</div>
						<div class="entry-body">
							<ul>
								<li v-for="bullet in pub.bullets" :key="bullet" v-html="bullet"></li>
							</ul>
						</div>
						<div v-if="pub.links" class="entry-links">
							<a v-for="link in pub.links" :key="link.href" :href="link.href" target="_blank" rel="noreferrer">{{ link.label }}</a>
						</div>
					</article>
				</div>
			</section>

			<section id="experience" class="wrap">
				<p class="eyebrow"><span class="eyebrow-num">02</span>Experience</p>
				<h2 class="section-title">Research Experience &amp; Service</h2>
				<div class="entry-list">
					<article v-for="item in experience" :key="item.title" class="entry">
						<div class="entry-head">
							<div class="entry-title">{{ item.title }}</div>
							<div class="entry-year">{{ item.year }}</div>
						</div>
						<div class="entry-meta">{{ item.meta }}</div>
						<div class="entry-body">
							<ul>
								<li v-for="bullet in item.bullets" :key="bullet" v-html="bullet"></li>
							</ul>
						</div>
						<div v-if="item.links" class="entry-links">
							<a v-for="link in item.links" :key="link.href" :href="link.href" target="_blank" rel="noreferrer">{{ link.label }}</a>
						</div>
					</article>
				</div>
			</section>

			<section id="projects" class="wrap">
				<p class="eyebrow"><span class="eyebrow-num">03</span>Projects</p>
				<h2 class="section-title">Technical Projects</h2>

				<p class="project-group-title">Research Tooling</p>
				<div class="project-grid">
					<article v-for="project in researchProjects" :key="project.title" class="project-card">
						<h3>{{ project.title }}</h3>
						<p v-html="project.body"></p>
						<div class="project-stack">
							<span class="entry-fact-label">Tech Stack</span>
							<div class="project-stack-tags">
								<span v-for="tech in project.stack" :key="tech" class="tag tag-pill">{{ tech }}</span>
							</div>
						</div>
						<div v-if="project.github || project.live" class="project-links">
							<a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer">GitHub</a>
							<a v-if="project.live" :href="project.live" target="_blank" rel="noreferrer">Live Demo</a>
						</div>
					</article>
				</div>

				<p class="project-group-title project-group-title-secondary">Software Engineering</p>
				<div class="project-grid">
					<article v-for="project in engineeringProjects" :key="project.title" class="project-card">
						<h3>{{ project.title }}</h3>
						<p v-html="project.body"></p>
						<div class="project-stack">
							<span class="entry-fact-label">Tech Stack</span>
							<div class="project-stack-tags">
								<span v-for="tech in project.stack" :key="tech" class="tag tag-pill">{{ tech }}</span>
							</div>
						</div>
						<div v-if="project.github || project.live" class="project-links">
							<a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer">GitHub</a>
							<a v-if="project.live" :href="project.live" target="_blank" rel="noreferrer">Live Demo</a>
						</div>
					</article>
				</div>
			</section>

			<section id="education" class="wrap">
				<p class="eyebrow"><span class="eyebrow-num">04</span>Education</p>
				<h2 class="section-title">Academic Background</h2>
				<div class="edu-row">
					<div>
						<div class="edu-school">{{ education.school }}</div>
						<div class="edu-degree">{{ education.degree }} · {{ education.period }}</div>
					</div>
				</div>
				<div class="edu-facts">
					<div v-for="fact in education.facts" :key="fact" v-html="fact"></div>
				</div>
			</section>

			<section id="skills" class="wrap">
				<p class="eyebrow"><span class="eyebrow-num">05</span>Skills</p>
				<h2 class="section-title">Skills</h2>
				<div class="skills-grid">
					<div v-for="skill in skillGroups" :key="skill.label" class="skill-row">
						<div class="skill-label">{{ skill.label }}</div>
						<div class="skill-values">{{ skill.values }}</div>
					</div>
				</div>
			</section>

			<section id="achievements" class="wrap">
				<p class="eyebrow"><span class="eyebrow-num">06</span>Achievements</p>
				<h2 class="section-title">Selected Achievements</h2>
				<ul class="achv-list">
					<li v-for="item in achievements" :key="item" v-html="item"></li>
				</ul>
			</section>

			<section id="contact" class="wrap">
				<p class="eyebrow"><span class="eyebrow-num">07</span>Contact</p>
				<h2 class="section-title">Open for Collaboration</h2>
				<p class="hero-intro">For research inquiries, graduate opportunities, or technical conversation.</p>
				<div class="contact-links">
					<a class="btn btn-primary" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
					<a class="btn" :href="profile.github" target="_blank" rel="noreferrer">GitHub</a>
					<a class="btn" :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
					<a v-if="profile.scholar" class="btn" :href="profile.scholar" target="_blank" rel="noreferrer">Google Scholar</a>
					<a v-if="profile.semanticScholar" class="btn" :href="profile.semanticScholar" target="_blank" rel="noreferrer">Semantic Scholar</a>
					<a v-if="profile.orcid" class="btn" :href="profile.orcid" target="_blank" rel="noreferrer">ORCID</a>
				</div>
			</section>
		</main>

		<footer class="site-footer wrap">
			<span>© {{ new Date().getFullYear() }} {{ profile.name }}</span>
			<a :href="profile.resumeHref" download>Download Resume</a>
		</footer>
	</div>
</template>
