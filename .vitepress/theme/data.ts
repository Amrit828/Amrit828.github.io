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
	{ value: '5', label: 'Accepted Papers' },
	{ value: '1', label: 'ARR Submission' },
	{ value: 'NIT Trichy', label: 'Research Internship' },
	{ value: '#1', label: 'Department Rank' },
];

export const researchInterests = ['NLP', 'Interpretability', 'MoE', 'Multilingual Models', 'Representation Learning', 'Vision-Language Models'];

export const publications = [
	{
		year: 'May 2026',
		title:
			'A Declarative–Procedural Perspective on Expert Routing in Bilingual Mixture-of-Experts Language Models',
		role: 'First author',
		status: 'Preprint',
		venue: 'ARR Submission & Target Venue: BlackboxNLP 2026',
		area: 'NLP, Linguistics & Interpretability, MoE Analysis',
		bullets: [
			'Studied linguistic specialization and expert routing in <strong>bilingual English–German Mixture-of-Experts Transformers</strong> using probing and information-theoretic analysis.',
			'Led the research design, experimentation, writing, and submission as first author.',
		],
		links: [{ label: 'arXiv Preprint', href: 'https://arxiv.org/abs/2608.15102' }],
	},
	{
		year: 'Oct 2025',
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
		year: 'Jun 2026',
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
		year: 'Jun 2026',
		title: 'TextSentinels @ FinMMEval 2026 Task 1: A Multilingual Routed Retrieval-Augmented System for Financial Multiple Choice Questions',
		role: 'Co-author',
		status: 'Accepted',
		venue: 'CLEF 2026 Working Notes',
		area: 'Financial NLP',
		bullets: [
			'Built a multilingual routed retrieval-augmented system (FAISS retrieval + qwen3-32b router + qwen3-32b/gpt-oss-20b scoring ensemble) for financial MCQA across English, Chinese, and Arabic.',
			'Achieved leaderboard results of <strong>6th in English, 6th in Chinese, and 7th in Arabic</strong>.',
		],
		links: [
			{ label: 'Paper', href: 'https://clef-staging.pages.dev/paper192.pdf' },
			{ label: 'GitHub', href: 'https://github.com/Amrit828/TextSentianls-FinMMEval-Task-1' },
		],
	},
	{
		year: 'Jun 2026',
		title:
			'TextSentinels @ FinMMEval 2026 Task 2: Chronological Stabilization of a BM25-Grounded Multilingual Financial Question Answering Pipeline',
		role: 'Co-author',
		status: 'Accepted',
		venue: 'CLEF 2026 Working Notes',
		area: 'Financial NLP',
		bullets: [
			'Engineered a BM25-grounded multilingual financial QA pipeline over SEC filings, statements, and tabular disclosures spanning multiple languages.',
			'Improved local validation from 0.04 to <strong>0.28 ROUGE-1 F1</strong> across system iterations (0.18 on the final benchmark submission).',
		],
		links: [{ label: 'Paper', href: 'https://clef-staging.pages.dev/paper193.pdf' }],
	},
	{
		year: 'Jun 2026',
		title: 'TextSentinels @ FinMMEval 2026 Task 3: Multi-Asset Financial Decision Making Using Machine Learning and Financial Transformers',
		role: 'Co-author',
		status: 'Accepted',
		venue: 'CLEF 2026 Working Notes',
		area: 'Financial NLP',
		bullets: [
			'Developed an iterative quantitative trading agent, evolving from a FinBERT sentiment pipeline to an XGBoost classifier with a recursive sentiment-memory feature.',
			'Achieved an out-of-sample <strong>cumulative return of 1.1354</strong> and an <strong>annualized Sharpe ratio of 2.0260</strong> in live forward-testing.',
		],
		links: [
			{ label: 'Paper', href: 'https://clef-staging.pages.dev/paper191.pdf' },
			{ label: 'GitHub', href: 'https://github.com/Amrit828/finMMEval-26-Task-3' },
		],
	},
];

export const researchWork = [
	{
		year: '2026',
		title: 'Dravidian-CodeMix Shared Task — Tamil Hierarchical Hate Speech and Tulu Hope Speech Detection',
		role: 'Team member',
		venue: 'FIRE 2026',
		area: 'Dravidian-Language NLP',
		bullets: [
			'Built a <strong>5-level hierarchical hate-speech classifier for Tamil</strong> (Hate/Non-Hate → Target → Implicit/Explicit → 32-way Subcategory → 6-way Bias) on a shared IndicBERT encoder with graduated unfreezing, hard-gated at Level 1, and a per-level sweep over representation (CLS vs. mean-pooled vs. TF-IDF) and classifier (SVM vs. LogReg) to select the best combination at each level.',
			'Built a <strong>joint coarse/fine-grained hope-speech system for Tulu</strong> — a single shared IndicBERT encoder with two linear heads producing 3-way tone and 5-way hope-type predictions from one forward pass, replacing an earlier two-encoder design that could not satisfy the single-pass requirement.',
			'Ran extensive ablations across both tasks — encoder choice (IndicBERT vs. mBERT vs. MuRIL), unfreeze depth, from-scratch BiLSTM/BiGRU baselines, PCA/LDA bottleneck decomposition, and a router/ensemble architecture — to identify each task\'s final pipeline.',
		],
	},
];

export const experience = [
	{
		year: 'May – Jun 2026',
		title: 'NLP Research Intern',
		meta: 'National Institute of Technology Tiruchirappalli',
		bullets: [
			'Working on representation learning, linguistic structure, and evaluation of neural language models.',
			'Studying <strong>classical Tamil linguistic resources</strong>, including verse–commentary relations, clause structure, and syntax-aware retrieval.',
		],
		links: [
			{ label: 'GitHub', href: 'https://github.com/Amrit828/Classical-Tamil-NLP-Research-Internship' },
			{ label: 'Certificate', href: '/nit-internship-certificate.pdf' },
		],
	},
	{
		year: '2026',
		title: 'Reviewer / Sub-reviewer, CLEF 2026 Working Notes',
		meta: 'Academic Service',
		bullets: ['Reviewed assigned working-notes papers and provided technical feedback on shared-task submissions.'],
	},
];

export const researchProjects = [
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
		github: 'https://github.com/Amrit828/A-eye',
	},
];

export const engineeringProjects = [
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
	period: '2024 – 2028 (Expected)',
	facts: ['CGPA: <strong>9.383 / 10.0</strong> up to 4th semester', '<strong>Ranked 1st</strong> in Department'],
};

export const achievements = [
	'Merit Scholarship – <strong>3rd Position</strong>, First Year, SSN College of Engineering',
	'<strong>Top 10</strong> – GDG Hackathon',
];
