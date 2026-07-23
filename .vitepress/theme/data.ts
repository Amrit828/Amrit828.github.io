export const profile = {
	name: 'Amrit Gopinath',
	title: 'Undergraduate Researcher — NLP, Interpretability & Multimodal Learning',
	intro:
		'I study how language models represent and organize linguistic knowledge — across languages, architectures, and media.',
	tagline: 'Asking sharper questions about how language models work.',
	email: 'amrit2410182@ssn.edu.in',
	github: 'https://github.com/Amrit828',
	linkedin: 'https://linkedin.com/in/amrit-gopinath',
	resumeHref: '/resume.pdf',
	portrait: '/portrait.jpg',
};

export const researchInterests = [
	'Natural Language Processing',
	'Multilingual Representation Learning',
	'Mechanistic Interpretability',
	'Mixture-of-Experts Language Models',
	'Classical Tamil NLP',
	'Synthetic Media Detection',
];

export const publications = [
	{
		year: '2026',
		title:
			'A Declarative–Procedural Perspective on Expert Routing in Bilingual Mixture-of-Experts Language Models',
		meta: 'Under anonymous review (ACL Rolling Review, May 2026 cycle) · intended for AACL 2026 · First author',
		bullets: [
			'Studied linguistic specialization and expert routing in <strong>bilingual English–German Mixture-of-Experts Transformers</strong> using probing and information-theoretic analysis.',
			'Led the research design, experimentation, writing, and submission as first author.',
		],
	},
	{
		year: '2025',
		title: 'MediaEval 2025 Working Notes: Synthetic Image Detection and Segmentation',
		meta: 'Accepted working-notes paper · First author',
		bullets: [
			'Developed systems distinguishing AI-generated from authentic imagery in a shared-task setting.',
			'Contributed to model design, experimentation, evaluation, and writing.',
		],
		links: [{ label: 'GitHub', href: 'https://github.com/Amrit828/mediaEval-2025' }],
	},
	{
		year: '2026',
		title:
			'Exploring Swin Transformers, Luminance Input, and Hybrid Architectures for Synthetic Image Detection',
		meta: 'MediaEval 2026 Synthetic Image Detection submission · First author',
		bullets: [
			'Compared pretrained Swin Transformers, luminance-only variants, MIL aggregation, and compact CNN/ResNet–GRU–ViT hybrids.',
			'Best open-run system achieved an <strong>F1 score of 0.6997</strong> across constrained and open evaluation settings.',
		],
		links: [{ label: 'GitHub', href: 'https://github.com/Amrit828/mediaEval-2025' }],
	},
	{
		year: '2026',
		title: 'FinMemeval 2026 Shared Task Submissions',
		meta: 'CLEF 2026 Working Notes — Accepted with Revisions · Co-author',
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
		tags: ['Code Intelligence', 'Graphs', 'LLM Systems'],
		github: 'https://github.com/Amrit828/CASSIAN-AI',
	},
	{
		title: 'A-Eye — Assistive Vision System',
		body: 'An assistive vision prototype combining <strong>object detection</strong> and contextual audio feedback for spatial awareness, with a proposed dual-camera vision-language system. <strong>Funded</strong> by institutional student research grant.',
		tags: ['Assistive Tech', 'Computer Vision', 'Applied ML'],
	},
	{
		title: 'Amrit Shop — Full-Stack E-Commerce Platform',
		body: 'A <strong>microservices e-commerce platform</strong> — React/TypeScript storefront, Spring Boot backend split into auth, cart, order, and product services, containerized with Docker.',
		tags: ['Full-Stack', 'Spring Boot', 'React', 'Microservices'],
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

export const skills = [
	{ label: 'Programming', values: 'Python, C, TypeScript, Java, LaTeX, Git' },
	{ label: 'Machine Learning', values: 'PyTorch, Transformers, CNNs, Vision Transformers, Transfer Learning, Model Evaluation' },
	{ label: 'NLP', values: 'Representation Learning, Probing, Multilingual Modeling, Mixture-of-Experts, Tokenization' },
	{ label: 'Research Practice', values: 'Shared Tasks, Ablation Studies, Error Analysis, Technical Writing, Reproducible Experiments' },
	{ label: 'CS Fundamentals', values: 'Data Structures & Algorithms, Object-Oriented Programming, DBMS' },
];

export const achievements = [
	'FinMemeval 2026 – <strong>Top-10</strong> multilingual leaderboard results in English, Chinese, and Arabic tracks',
	'Merit Scholarship – <strong>3rd Position</strong>, First Year, SSN College of Engineering',
	'<strong>Top 10</strong> – GDG Hackathon',
];
