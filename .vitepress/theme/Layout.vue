<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vitepress';
import { achievements, education, engineeringProjects, experience, heroStats, profile, publications, researchInterests, researchProjects, researchWork, selectedResearch } from './data';

const route = useRoute();
const theme = ref<'light' | 'dark'>('light');
const isHome = computed(() => route.path === '/' || route.path === '/index.html');
const isResearch = computed(() => route.path.startsWith('/research'));
function applyTheme(next: 'light' | 'dark') { theme.value = next; document.documentElement.dataset.theme = next; localStorage.setItem('theme', next); }
onMounted(() => applyTheme((localStorage.getItem('theme') as 'light' | 'dark') || 'light'));
</script>

<template>
	<div class="site-shell">
		<header class="masthead">
			<a class="wordmark" href="/" aria-label="Home">AG<span>.</span></a>
			<nav aria-label="Primary navigation"><a href="/research">Research</a><a href="/projects">Projects</a><a href="/#contact">Contact</a></nav>
			<button class="mode-button" type="button" :aria-label="`Use ${theme === 'dark' ? 'light' : 'dark'} theme`" @click="applyTheme(theme === 'dark' ? 'light' : 'dark')">{{ theme === 'dark' ? 'Light' : 'Dark' }}</button>
		</header>

		<main v-if="isHome" id="top">
			<section class="hero panel">
				<div class="hero-kicker">Research portfolio · Chennai, India</div>
				<div class="hero-grid"><div><p class="hero-overline">Amrit Gopinath</p><h1>Language models, <em>carefully studied.</em></h1></div><img class="portrait" :src="profile.portrait" alt="Amrit Gopinath" /></div>
				<div class="hero-bottom"><p>{{ profile.intro }}</p><div class="hero-links"><a :href="profile.resumeHref" download>Résumé <span>↘</span></a><a :href="profile.github" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div>
			</section>
			<section class="signal-strip panel" aria-label="Academic highlights"><div v-for="stat in heroStats" :key="stat.label" class="signal"><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div><div class="signal signal-focus"><span>Focus</span><p>Multilingual NLP · Model introspection · MoE routing</p></div></section>

			<section class="section panel home-research"><div class="section-label"><span>01</span> In a nutshell</div><div class="section-heading"><h2>Research, not résumé prose.</h2><p>Two current threads, a low-resource language internship, and a growing record in evaluation and interpretability.</p></div><div class="preview-grid"><article v-for="item in selectedResearch" :key="item.title" class="preview-card"><p>{{ item.meta }}</p><h3>{{ item.title }}</h3><a href="/research">Research details ↗</a></article></div></section>

			<section class="section panel home-experience"><div class="section-label"><span>02</span> Current work</div><div class="home-split"><div><h2>{{ experience[0].title }}</h2><p>{{ experience[0].meta }}</p><p class="home-copy">Researching representation learning and linguistic structure in Classical Tamil at NIT Tiruchirappalli.</p></div><a class="page-cta" href="/research">View research record ↗</a></div></section>

			<section class="section panel"><div class="section-label"><span>03</span> Explore</div><div class="pathways"><a href="/research"><span>Research</span><strong>Publications, submissions, shared tasks, and reports.</strong><em>Open page ↗</em></a><a href="/projects"><span>Projects</span><strong>Research tooling and software engineering work.</strong><em>Open page ↗</em></a></div></section>

			<section id="contact" class="contact panel"><p class="section-label"><span>04</span> Contact</p><h2>Let’s talk about research.</h2><a class="contact-mail" :href="`mailto:${profile.email}`">{{ profile.email }} ↗</a></section>
		</main>

		<main v-else class="detail-page panel">
			<template v-if="isResearch">
				<section class="detail-hero"><p class="section-label"><span>01</span> Research record</p><h1>Selected research, papers, and collaborative work.</h1><p>Methods, results, and links to every available paper, report, and repository.</p></section>
				<section class="detail-section"><h2>Selected research</h2><article v-for="item in selectedResearch" :key="item.title" class="detail-entry"><div><span>{{ item.year }}</span><h3>{{ item.title }}</h3><p>{{ item.meta }}</p></div><ul><li v-for="bullet in item.bullets" :key="bullet" v-html="bullet"></li></ul><div class="text-links"><a v-for="link in item.links" :key="link.href" :href="link.href" target="_blank" rel="noreferrer">{{ link.label }} ↗</a></div></article></section>
				<section class="detail-section"><h2>Research experience</h2><article v-for="item in experience" :key="item.title" class="detail-entry"><div><span>{{ item.year }}</span><h3>{{ item.title }}</h3><p>{{ item.meta }}</p></div><ul><li v-for="bullet in item.bullets" :key="bullet" v-html="bullet"></li></ul><div v-if="item.links" class="text-links"><a v-for="link in item.links" :key="link.href" :href="link.href" target="_blank" rel="noreferrer">{{ link.label }} ↗</a></div></article></section>
				<section class="detail-section"><h2>All other work</h2><article v-for="item in [...researchWork.slice(1), ...publications]" :key="item.title" class="detail-entry"><div><span>{{ item.year }}</span><h3>{{ item.title }}</h3><p>{{ item.venue }} · {{ item.role }} · {{ item.status || item.area }}</p></div><ul><li v-for="bullet in item.bullets" :key="bullet" v-html="bullet"></li></ul><div v-if="item.links" class="text-links"><a v-for="link in item.links" :key="link.href" :href="link.href" target="_blank" rel="noreferrer">{{ link.label }} ↗</a></div></article></section>
			</template>
			<template v-else>
				<section class="detail-hero"><p class="section-label"><span>02</span> Projects</p><h1>Tools and systems built alongside research.</h1><p>Research tooling, assistive vision, and full-stack engineering projects.</p></section>
				<section class="detail-section"><h2>Projects</h2><article v-for="project in [...researchProjects, ...engineeringProjects]" :key="project.title" class="detail-entry project-detail"><div><h3>{{ project.title }}</h3><p v-html="project.body"></p></div><div class="project-stack-tags"><span v-for="tech in project.stack" :key="tech">{{ tech }}</span></div><div class="text-links"><a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer">GitHub ↗</a><a v-if="project.live" :href="project.live" target="_blank" rel="noreferrer">Live demo ↗</a></div></article></section>
				<section class="detail-section foundation-detail"><h2>Foundation</h2><p><strong>{{ education.degree }}</strong><br>{{ education.school }} · {{ education.period }}</p><p v-for="fact in education.facts" :key="fact" v-html="fact"></p><p v-for="item in achievements" :key="item" v-html="item"></p><p class="interest-line">{{ researchInterests.join(' · ') }}</p></section>
			</template>
		</main>
		<footer class="footer panel"><span>© {{ new Date().getFullYear() }} Amrit Gopinath</span><span>Research portfolio</span></footer>
	</div>
</template>
