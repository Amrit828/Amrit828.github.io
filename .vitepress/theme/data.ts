export const profile = {
	name: 'Amrit Gopinath',
	title: 'Undergraduate Researcher — NLP, Interpretability & Multimodal Learning',
	intro:
		'I work on multilingual representation learning, mechanistic interpretability, mixture-of-experts language models, classical Tamil NLP, and synthetic media detection.',
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
			'Studied linguistic specialization and expert routing behaviour in bilingual English–German Mixture-of-Experts Transformers.',
			'Used probing methodologies and information-theoretic analyses to examine how expert routing relates to linguistic structure.',
			'Led the research design, experimentation, writing, and submission process.',
		],
	},
	{
		year: '2025',
		title: 'MediaEval 2025 Working Notes: Synthetic Image Detection and Segmentation',
		meta: 'Accepted working-notes paper · First author',
		bullets: [
			'Developed systems for distinguishing AI-generated and authentic imagery in a shared-task evaluation setting.',
			'Contributed to model design, experimentation, evaluation, and paper writing.',
		],
		links: [{ label: 'GitHub', href: 'https://github.com/Amrit828/mediaEval-2025' }],
	},
	{
		year: '2026',
		title:
			'Exploring Swin Transformers, Luminance Input, and Hybrid Architectures for Synthetic Image Detection',
		meta: 'MediaEval 2026 Synthetic Image Detection submission · First author',
		bullets: [
			'Compared pretrained Swin Transformer systems, luminance-only variants, MIL-style aggregation, and compact CNN/ResNet–GRU–ViT hybrid architectures.',
			'Evaluated constrained and open training settings using official metrics including accuracy, precision, recall, F1, AUC, AP, and confusion matrices.',
			'Best open-run system achieved an F1 score of 0.6997.',
		],
		links: [{ label: 'GitHub', href: 'https://github.com/Amrit828/mediaEval-2025' }],
	},
	{
		year: '2026',
		title: 'FinMemeval 2026 Shared Task Submissions',
		meta: 'CLEF 2026 Working Notes — Accepted with Revisions · Co-author',
		bullets: [
			'Contributed to three Financial NLP and multimodal benchmark submissions.',
			'Achieved Task 1 leaderboard results of 6th place in English, 6th place in Chinese, and 7th place in Arabic.',
			'Worked on system development, experimentation, evaluation, and technical reporting.',
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
			'Working on NLP research involving representation learning, linguistic structure, and evaluation of neural language models.',
			'Exploring sentence representations, probing methods, and multilingual/classical-language analysis.',
			'Studying computational approaches for classical Tamil linguistic resources, including verse–commentary relations, clause structure, finite and non-finite predicates, and syntax-aware retrieval.',
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
		body: 'A graph-augmented code retrieval system for structurally grounded code understanding, generating function-level dependency graphs to support architectural reasoning over codebases, with an interactive D3-based blast-radius visualization and relevance-ranking pipeline under LLM context-window constraints.',
		tags: ['Code Intelligence', 'Graphs', 'LLM Systems'],
		github: 'https://github.com/Amrit828/CASSIAN-AI',
	},
	{
		title: 'A-Eye — Assistive Vision System',
		body: 'A prototype combining object detection and contextual audio feedback for spatial-awareness assistance, proposing a dual-camera vision-language system for real-time environmental understanding. Received institutional student research funding approval.',
		tags: ['Assistive Tech', 'Computer Vision', 'Applied ML'],
	},
	{
		title: 'Amrit Shop — Full-Stack E-Commerce Platform',
		body: 'A microservices e-commerce platform with a React, TypeScript, and Vite storefront in front of a Java Spring Boot backend split into auth, cart, order, and product services, containerized with Docker for deployment.',
		tags: ['Full-Stack', 'Spring Boot', 'React', 'Microservices'],
		github: 'https://github.com/Amrit828/ecomm-main',
		live: 'https://amrit-shop-ecommerce.netlify.app/products',
	},
];

export const education = {
	school: 'Sri Sivasubramaniya Nadar College of Engineering, Chennai',
	degree: 'B.E. Computer Science and Engineering',
	period: '2024 – Present',
	facts: ['CGPA: 9.383 / 10.0 up to 4th semester', 'Ranked 1st in Department'],
};

export const skills = [
	{ label: 'Programming', values: 'Python, C, TypeScript, Java, LaTeX, Git' },
	{ label: 'Machine Learning', values: 'PyTorch, Transformers, CNNs, Vision Transformers, Transfer Learning, Model Evaluation' },
	{ label: 'NLP', values: 'Representation Learning, Probing, Multilingual Modeling, Mixture-of-Experts, Tokenization' },
	{ label: 'Research Practice', values: 'Shared Tasks, Ablation Studies, Error Analysis, Technical Writing, Reproducible Experiments' },
	{ label: 'CS Fundamentals', values: 'Data Structures & Algorithms, Object-Oriented Programming, DBMS' },
];

export const achievements = [
	'FinMemeval 2026 – Top-10 multilingual leaderboard results in English, Chinese, and Arabic tracks',
	'Merit Scholarship – 3rd Position, First Year, SSN College of Engineering',
	'Top 10 – GDG Hackathon',
];
