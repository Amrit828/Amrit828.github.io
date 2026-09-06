<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { achievements, education, engineeringProjects, experience, heroStats, profile, publications, researchInterests, researchProjects, researchWork, selectedResearch } from './data';

const theme = ref<'light' | 'dark'>('light');
function applyTheme(next: 'light' | 'dark') {
	theme.value = next;
	document.documentElement.dataset.theme = next;
	localStorage.setItem('theme', next);
}
onMounted(() => applyTheme((localStorage.getItem('theme') as 'light' | 'dark') || 'light'));
</script>

<template>
	<div class="site-shell">
		<header class="masthead">
			<a class="wordmark" href="#top" aria-label="Back to top">AG<span>.</span></a>
			<nav aria-label="Primary navigation"><a href="#research">Research</a><a href="#experience">Experience</a><a href="#work">Work</a><a href="#contact">Contact</a></nav>
			<button class="mode-button" type="button" :aria-label="`Use ${theme === 'dark' ? 'light' : 'dark'} theme`" @click="applyTheme(theme === 'dark' ? 'light' : 'dark')">{{ theme === 'dark' ? 'Light' : 'Dark' }}</button>
		</header>

		<main id="top">
			<section class="hero panel">
				<div class="hero-kicker">Research portfolio · Chennai, India</div>
				<div class="hero-grid">
					<div><p class="hero-overline">Amrit Gopinath</p><h1>Understanding language models, <em>carefully.</em></h1></div>
					<img class="portrait" :src="profile.portrait" alt="Amrit Gopinath" />
				</div>
				<div class="hero-bottom"><p>{{ profile.intro }}</p><div class="hero-links"><a :href="profile.resumeHref" download>Download résumé <span>↘</span></a><a :href="profile.github" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div>
			</section>

			<section class="signal-strip panel" aria-label="Academic highlights">
				<div v-for="stat in heroStats" :key="stat.label" class="signal"><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div>
				<div class="signal signal-focus"><span>Focus</span><p>Multilingual NLP · Model introspection · MoE routing</p></div>
			</section>

			<section id="research" class="section panel">
				<div class="section-label"><span>01</span> Selected research</div>
				<div class="section-heading"><h2>Questions worth isolating.</h2><p>Controlled experiments on the structure, routing, and self-knowledge of language models.</p></div>
				<div class="research-list">
					<article v-for="item in selectedResearch" :key="item.title" class="research-piece">
						<div class="piece-index">{{ item.year }}</div>
						<div><h3>{{ item.title }}</h3><p class="piece-meta">{{ item.meta }}</p><ul><li v-for="bullet in item.bullets" :key="bullet" v-html="bullet"></li></ul><div class="text-links"><a v-for="link in item.links" :key="link.href" :href="link.href" target="_blank" rel="noreferrer">{{ link.label }} ↗</a></div></div>
					</article>
				</div>
			</section>

			<section id="experience" class="section panel experience-section">
				<div class="section-label"><span>02</span> Research experience</div>
				<div v-for="item in experience" :key="item.title" class="experience-entry"><div class="experience-date">{{ item.year }}</div><div><h2>{{ item.title }}</h2><p class="experience-place">{{ item.meta }}</p><ul><li v-for="bullet in item.bullets" :key="bullet" v-html="bullet"></li></ul><div v-if="item.links" class="text-links"><a v-for="link in item.links" :key="link.href" :href="link.href" target="_blank" rel="noreferrer">{{ link.label }} ↗</a></div></div></div>
			</section>

			<section id="work" class="section panel">
				<div class="section-label"><span>03</span> Supporting work</div>
				<div class="work-layout"><div><h2>From shared tasks to research tools.</h2><p class="work-intro">Additional work across synthetic-media detection, financial NLP, Classical Tamil representation learning, and research tooling.</p></div><div class="compact-list"><article v-for="item in [...researchWork, ...publications]" :key="item.title" class="compact-item"><div><h3>{{ item.title }}</h3><p>{{ item.venue }} · {{ item.role }}</p><div v-if="item.links" class="compact-links"><a v-for="link in item.links" :key="link.href" :href="link.href" target="_blank" rel="noreferrer">{{ link.label }} ↗</a></div></div><span>{{ item.year }}</span></article></div></div>
				<div class="project-row"><article v-for="project in [...researchProjects, ...engineeringProjects]" :key="project.title" class="project-card"><h3>{{ project.title }}</h3><p v-html="project.body"></p><div class="project-links"><a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer">GitHub ↗</a><a v-if="project.live" :href="project.live" target="_blank" rel="noreferrer">Live demo ↗</a></div></article></div>
			</section>

			<section class="section panel credentials"><div class="section-label"><span>04</span> Foundation</div><div class="credentials-grid"><div><h2>{{ education.degree }}</h2><p>{{ education.school }}<br>{{ education.period }}</p></div><div><p v-for="fact in education.facts" :key="fact" v-html="fact"></p></div><div><p v-for="item in achievements" :key="item" v-html="item"></p><p class="interest-line">{{ researchInterests.join(' · ') }}</p></div></div></section>

			<section id="contact" class="contact panel"><p class="section-label"><span>05</span> Contact</p><h2>Let’s talk about research.</h2><a class="contact-mail" :href="`mailto:${profile.email}`">{{ profile.email }} ↗</a></section>
		</main>
		<footer class="footer panel"><span>© {{ new Date().getFullYear() }} Amrit Gopinath</span><span>Research portfolio</span></footer>
	</div>
</template>
