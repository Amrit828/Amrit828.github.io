export const profile = {
	name: 'Amrit Gopinath',
	title: 'Undergraduate Researcher in Natural Language Processing',
	intro:
		'I study how language models organize linguistic knowledge across languages, architectures, and modalities. My goal is to understand why representations emerge and how they can be interpreted.',
	tagline: 'Asking sharper questions about how language models work.',
	email: 'amrit2410182@ssn.edu.in',
	github: 'https://github.com/Amrit828',
	linkedin: 'https://linkedin.com/in/amrit-gopinath',
	scholar: '',
	semanticScholar: '',
	orcid: '',
	resumeHref: '/resume.pdf',
	portrait: '/portrait.jpg',
};

export const heroStats = [
	{ value: '4', label: 'Research Papers' },
	{ value: '1', label: 'First-author ARR Submission' },
	{ value: 'NIT-T', label: 'Research Internship' },
	{ value: '#1', label: 'Department Rank' },
];

export const researchInterests = ['NLP', 'Interpretability', 'MoE', 'Multilingual Models', 'Representation Learning', 'Vision-Language Models'];

export const publications = [
	{
		year: '2026',
		title:
			'A Declarative–Procedural Perspective on Expert Routing in Bilingual Mixture-of-Experts Language Models',
		role: 'First author',
		status: 'Under Review',
		venue: 'ACL Rolling Review → AACL 2026',
		area: 'Mechanistic Interpretability',
		bullets: [
			'Studied linguistic specialization and expert routing in <strong>bilingual English–German Mixture-of-Experts Transformers</strong> using probing and information-theoretic analysis.',
			'Led the research design, experimentation, writing, and submission as first author.',
		],
	},
	{
		year: '2025',
		title: 'MediaEval 2025 Working Notes: Synthetic Image Detection and Segmentation',
		role: 'First author',
		status: 'Accepted',
		venue: 'MediaEval 2025 Working Notes',
		area: 'Synthetic Media Detection',
		bullets: [
			'Developed systems distinguishing AI-generated from authentic imagery in a shared-task setting.',
			'Contributed to model design, experimentation, evaluation, and writing.',
		],
		links: [
			{ label: 'Paper', href: 'https://2025.multimediaeval.com/paper27.pdf' },
			{ label: 'GitHub', href: 'https://github.com/Amrit828/mediaEval-2025' },
		],
	},
	{
		year: '2026',
		title:
			'Exploring Swin Transformers, Luminance Input, and Hybrid Architectures for Synthetic Image Detection',
		role: 'First author',
		status: 'Presented',
		venue: 'MediaEval 2026',
		area: 'Synthetic Media Detection',
		bullets: [
			'Compared pretrained Swin Transformers, luminance-only variants, MIL aggregation, and compact CNN/ResNet–GRU–ViT hybrids.',
			'Best open-run system achieved an <strong>F1 score of 0.6997</strong> across constrained and open evaluation settings.',
		],
		links: [
			{ label: 'Paper', href: 'https://2026.multimediaeval.com/paper21.pdf' },
			{ label: 'GitHub', href: 'https://github.com/Amrit828/mediaEval-2025' },
		],
	},
	{
		year: '2026',
		title: 'FinMemeval 2026 Shared Task Submissions',
		role: 'Co-author',
		status: 'Accepted with Revisions',
		venue: 'CLEF 2026 Working Notes',
		area: 'Financial NLP',
		bullets: [
			'Contributed to three Financial NLP and multimodal benchmark submissions.',
			'Achieved Task 1 leaderboard results of <strong>6th in English, 6th in Chinese, and 7th in Arabic</strong>.',
		],
		links: [{ label: 'GitHub', href: 'https://github.com/Amrit828/TextSentianls-FinMMEval-Task-1' }],
	},
];

export const experience = [
	{
		year: '2026 – Present',
		title: 'NLP Research Intern',
		meta: 'National Institute of Technology Tiruchirappalli',
		bullets: [
			'Working on representation learning, linguistic structure, and evaluation of neural language models.',
			'Studying <strong>classical Tamil linguistic resources</strong>, including verse–commentary relations, clause structure, and syntax-aware retrieval.',
		],
	},
	{
		year: '2026',
		title: 'Reviewer / Sub-reviewer, CLEF 2026 Working Notes',
		meta: 'Academic Service',
		bullets: ['Reviewed assigned working-notes papers and provided technical feedback on shared-task submissions.'],
	},
];

export const projects = [
	{
		title: 'CASSIAN — Graph-Augmented Code Understanding Platform',
		body: 'A <strong>graph-augmented code retrieval</strong> system with function-level dependency graphs and an interactive <strong>D3 blast-radius visualization</strong> for architectural reasoning under LLM context limits.',
		stack: ['Python', 'LLMs', 'D3.js', 'Graph Algorithms'],
		github: 'https://github.com/Amrit828/CASSIAN-AI',
	},
	{
		title: 'A-Eye — Assistive Vision System',
		body: 'An assistive vision prototype combining <strong>object detection</strong> and contextual audio feedback for spatial awareness, with a proposed dual-camera vision-language system. <strong>Funded</strong> by institutional student research grant.',
		stack: ['Python', 'OpenCV', 'Object Detection', 'Text-to-Speech'],
	},
	{
		title: 'Amrit Shop — Full-Stack E-Commerce Platform',
		body: 'A <strong>microservices e-commerce platform</strong> — React/TypeScript storefront, Spring Boot backend split into auth, cart, order, and product services, containerized with Docker.',
		stack: ['React', 'TypeScript', 'Spring Boot', 'Docker'],
		github: 'https://github.com/Amrit828/ecomm-main',
		live: 'https://amrit-shop-ecommerce.netlify.app/products',
	},
];

export const education = {
	school: 'Sri Sivasubramaniya Nadar College of Engineering, Chennai',
	degree: 'B.E. Computer Science and Engineering',
	period: '2024 – Present',
	facts: ['CGPA: <strong>9.383 / 10.0</strong> up to 4th semester', '<strong>Ranked 1st</strong> in Department'],
};

export const skillGroups = [
	{
		label: 'Research Areas',
		values: 'Multilingual NLP, Representation Learning, Mechanistic Interpretability, Mixture-of-Experts Models, Probing & Evaluation',
	},
	{ label: 'Tools', values: 'PyTorch, Transformers, Git, LaTeX, Docker' },
	{ label: 'Languages', values: 'Python, TypeScript, Java, C' },
];

export const achievements = [
	'FinMemeval 2026 – <strong>Top-10</strong> multilingual leaderboard results in English, Chinese, and Arabic tracks',
	'Merit Scholarship – <strong>3rd Position</strong>, First Year, SSN College of Engineering',
	'<strong>Top 10</strong> – GDG Hackathon',
];
