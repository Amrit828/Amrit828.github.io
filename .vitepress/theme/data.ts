export const profile = {
	name: 'Amrit Gopinath',
	title: 'Undergraduate Researcher in Natural Language Processing',
	intro:
		'I study how language models organize linguistic knowledge across languages, architectures, and modalities. My goal is to understand why representations emerge and how they can be interpreted.',
	tagline: 'Asking sharper questions about how language models work.',
	email: 'amritgopi06@gmail.com',
	github: 'https://github.com/Amrit828',
	linkedin: 'https://linkedin.com/in/amrit-gopinath',
	scholar: '',
	semanticScholar: '',
	orcid: '',
	resumeHref: '/resume.pdf',
	portrait: '/portrait.jpg',
};

export const heroStats = [
	{ value: '9.383', label: 'CGPA / 10.0 · through Sem. 4' },
	{ value: '#1', label: 'Department rank · through Sem. 4' },
	{ value: '3', label: 'Published CLEF task papers' },
];

export const researchInterests = ['Multilingual NLP', 'Causal Interpretability', 'MoE Routing', 'Model Introspection', 'Representation Learning', 'Vision-Language Models', 'AI Safety'];

export const selectedResearch = [
	{
		year: '2026',
		title: 'A Declarative-Procedural Perspective on Expert Routing in Bilingual Mixture-of-Experts Language Models',
		meta: 'ARR 2026 submission · arXiv preprint · First author',
		bullets: [
			'Asked whether expert routing in bilingual English-German MoE language models primarily reflects language identity and lexical information or higher-level grammatical and syntactic structure.',
			'Compared curriculum and mixed-language training using controlled bilingual corpora and held-out probes; analyzed routing with mutual and conditional mutual information, entropy, Jensen-Shannon distance, frequency controls, and targeted ablations.',
			'No-curriculum training showed stronger aggregate specialization (<strong>peak MI 0.2599 versus 0.1148</strong>), but the dominant language changed with the training seed. Curriculum training produced a more language-balanced routing profile across the two seeds.',
		],
		links: [
			{ label: 'Read on arXiv', href: 'https://arxiv.org/abs/2608.15102' },
			{ label: 'GitHub', href: 'https://github.com/Amrit828/DP-Theory-MOE-Interpretability-Research' },
		],
	},
	{
		year: '2026',
		title: 'Having a State Is Not Knowing It',
		meta: 'Apart Research Digital Minds Research Sprint · Co-author (equal contribution)',
		bullets: [
			'Investigated whether language models can report causally relevant internal decision states, separating possession of a state from verbal access through a falsifiable hierarchy of introspection capabilities.',
			'Replicated concept injection in Llama-3.2-3B-Instruct and built a controlled Qwen decision-state benchmark using measured logit-margin shifts. Naive self-report achieved <strong>0.243 macro-F1</strong>, trained native reporting <strong>0.522</strong>, and a matched external residual MLP <strong>1.000 F1</strong> on this benchmark.',
			'Counterfactual intervention-direction prediction reached <strong>0.695 F1 on 96 held-out base trials</strong>, falling to <strong>0.564</strong> on unseen direction mixtures. Negative response-curve R² did not support quantitative self-modeling.',
		],
		links: [
			{ label: 'View project', href: 'https://apartresearch.com/sprints/projects/having-a-state-is-not-knowing-it-0zbf' },
			{ label: 'Read report', href: 'https://framerforms.s3.us-east-1.amazonaws.com/form-uploads/ab0ae484-3d40-47e8-a323-fe485236ac45-Team_Layer_8_Legends_track_3_report_final.pdf' },
		],
	},
];

export const publications = [
	{
		year: '2026',
		title: 'Vectorizing Classical Tamil: Representation Learning for Verse–Commentary Pairs',
		role: 'First author',
		status: 'Submitted',
		venue: 'ICON 2026',
		area: 'Classical Tamil NLP, Representation Learning',
		bullets: [
			'Constructed a corpus of <strong>1,262 Classical Tamil verse–commentary (urai) pairs</strong> spanning five source sections and evaluated what neural representations recover beyond lexical overlap.',
			'Compared recurrent, Transformer, Siamese-style, encoder–decoder, and decoder-only models with controls-first evaluation, including minimal-pair word-order probes.',
			'The decoder preferred authentic word order in <strong>107/112 comparisons (95.5%)</strong>, mostly random line reorderings, but failed to generate verse-specific commentary. Matched controls exposed inflated canonical correlation and overfitting.',
		],
		links: [
			{ label: 'Paper', href: '/classical-tamil-icon-submission.pdf' },
			{ label: 'GitHub', href: 'https://github.com/Amrit828/Classical-Tamil-NLP-Research-Internship' },
		],
	},
	{
		year: 'Aug 2026',
		title:
			'A Declarative–Procedural Perspective on Expert Routing in Bilingual Mixture-of-Experts Language Models',
		role: 'First author',
		status: 'Preprint',
		venue: 'arXiv:2608.15102 · ARR 2026 submission',
		area: 'NLP, Linguistics & Interpretability, MoE Analysis',
		bullets: [
			'Studied linguistic specialization and expert routing in <strong>bilingual English–German Mixture-of-Experts Transformers</strong> using probing and information-theoretic analysis.',
			'Led the research design, experimentation, writing, and submission as first author.',
		],
		links: [
			{ label: 'arXiv Preprint', href: 'https://arxiv.org/abs/2608.15102' },
			{ label: 'GitHub', href: 'https://github.com/Amrit828/DP-Theory-MOE-Interpretability-Research' },
		],
	},
	{
		year: 'Oct 2025',
		title: 'Examining Difficulties with CNNs and Segmentation Models for Real-vs. Synthetic Image Detection',
		role: 'First author',
		status: 'Working notes',
		venue: 'MediaEval 2025 Working Notes',
		area: 'Synthetic Media Detection',
		bullets: [
			'Evaluated CNN classifiers for real-versus-synthetic images and a U-Net for manipulation localization in the MediaEval 2025 shared task.',
			'Analyzed a strong real-image classification bias (<strong>Task A F1 0.0627</strong>); the U-Net achieved average segmentation F1 <strong>0.357</strong> and detection F1 <strong>0.362</strong>.',
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
		role: 'First author (equal contribution)',
		status: 'Working notes',
		venue: 'MediaEval 2026 Working Notes',
		area: 'Synthetic Media Detection',
		bullets: [
			'Compared pretrained Swin Transformers, luminance-only variants, MIL aggregation, and compact CNN/ResNet–GRU–ViT hybrids.',
			'Swin Base achieved <strong>0.6997 synthetic-class F1</strong> and <strong>0.7471 AUC</strong> in open validation with external SID_Set training data; compared precision–recall trade-offs with constrained runs.',
		],
		links: [
			{ label: 'Paper', href: 'https://2026.multimediaeval.com/paper21.pdf' },
			{ label: 'GitHub', href: 'https://github.com/Amrit828/mediaEval-2026' },
		],
	},
	{
		year: 'Oct 2026',
		title: 'TextSentinels @ FinMMEval 2026 Task 1: A Multilingual Routed Retrieval-Augmented System for Financial Multiple Choice Questions',
		role: 'Co-author',
		status: 'Published',
		venue: 'CLEF 2026 Working Notes · CEUR-WS Vol. 4283, pp. 2635–2643',
		area: 'Financial NLP',
		bullets: [
			'Built a multilingual routed retrieval-augmented system (FAISS retrieval + qwen3-32b router + qwen3-32b/gpt-oss-20b scoring ensemble) for financial MCQA across English, Chinese, and Arabic.',
			'Achieved leaderboard results of <strong>6th in English, 6th in Chinese, and 7th in Arabic</strong>.',
		],
		links: [
			{ label: 'Paper', href: 'https://ceur-ws.org/Vol-4283/paper192.pdf' },
			{ label: 'GitHub', href: 'https://github.com/Amrit828/TextSentianls-FinMMEval-Task-1' },
		],
	},
	{
		year: 'Oct 2026',
		title:
			'TextSentinels @ FinMMEval 2026 Task 2: Chronological Stabilization of a BM25-Grounded Multilingual Financial Question Answering Pipeline',
		role: 'Co-author',
		status: 'Published',
		venue: 'CLEF 2026 Working Notes · CEUR-WS Vol. 4283, pp. 2644–2651',
		area: 'Financial NLP',
		bullets: [
			'Engineered a BM25-grounded multilingual financial QA pipeline over SEC filings, statements, and tabular disclosures spanning multiple languages.',
			'Improved local validation from approximately 0.04 to <strong>0.28 ROUGE-1 F1</strong> across system iterations (approximately 0.18 on the final benchmark submission).',
		],
		links: [{ label: 'Paper', href: 'https://ceur-ws.org/Vol-4283/paper193.pdf' }],
	},
	{
		year: 'Oct 2026',
		title: 'TextSentinels @ FinMMEval 2026 Task 3: Multi-Asset Financial Decision Making Using Machine Learning and Financial Transformers',
		role: 'Co-author',
		status: 'Published',
		venue: 'CLEF 2026 Working Notes · CEUR-WS Vol. 4283, pp. 2624–2634',
		area: 'Financial NLP',
		bullets: [
			'Developed an iterative quantitative trading agent, evolving from a FinBERT sentiment pipeline to an XGBoost classifier with a recursive sentiment-memory feature.',
			'Historical backtests across six assets yielded a <strong>mean per-asset annualized Sharpe ratio of 2.0260</strong> and mean cumulative-return value of <strong>1.1354</strong>. These summarize independent asset backtests, with live Arena results reported separately.',
		],
		links: [
			{ label: 'Paper', href: 'https://ceur-ws.org/Vol-4283/paper191.pdf' },
			{ label: 'GitHub', href: 'https://github.com/Amrit828/finMMEval-26-Task-3' },
		],
	},
];

export const researchWork = [
	{
		year: 'Aug 2026',
		title: 'Having a State Is Not Knowing It',
		role: 'Co-author (equal contribution)',
		venue: 'Apart Research — Digital Minds Research Sprint',
		area: 'Mechanistic Interpretability, AI Safety',
		bullets: [
			'Treated <strong>LLM introspection as a hierarchy of falsifiable capabilities</strong>, rather than a binary property, in collaboration with Raghul Sugumar.',
			'Replicated concept injection in Llama-3.2-3B-Instruct and developed controlled Qwen decision-state and counterfactual benchmarks: naive/trained reporting achieved 0.243/0.522 macro-F1, while a matched residual MLP achieved 1.000 F1 on the controlled decision-state benchmark.',
			'Counterfactual direction prediction reached 0.695 F1 on 96 held-out base trials and fell to 0.564 on unseen mixtures; quantitative response-curve prediction failed with negative R².',
		],
		links: [
			{ label: 'Project', href: 'https://apartresearch.com/sprints/projects/having-a-state-is-not-knowing-it-0zbf' },
			{ label: 'Report', href: 'https://framerforms.s3.us-east-1.amazonaws.com/form-uploads/ab0ae484-3d40-47e8-a323-fe485236ac45-Team_Layer_8_Legends_track_3_report_final.pdf' },
		],
	},
	{
		year: '2026',
		title: 'Dravidian-CodeMix Shared Task — Tamil Hierarchical Hate Speech and Tulu Hope Speech Detection',
		role: 'Team member',
		venue: 'FIRE 2026',
		area: 'Dravidian-Language NLP',
		bullets: [
			'Built a <strong>five-level hierarchical Tamil hate-speech pipeline</strong> using IndicBERTv2 with partial unfreezing, a hate/non-hate gate, and level-specific SVM and logistic-regression classifiers over CLS or mean-pooled representations.',
			'Built a <strong>joint coarse/fine-grained Tulu hope-speech system</strong> using one shared IndicBERTv2 encoder and two linear heads to produce both predictions in one forward pass.',
			'Compared backbone, representation, unfreezing, recurrent-baseline, bottleneck, and ensemble variants during model selection.',
		],
		links: [{ label: 'GitHub', href: 'https://github.com/Amrit828/Dravidian-Code-Mix-Fire-Task' }],
	},
];

export const experience = [
	{
		year: '18 May – 16 Jun 2026',
		title: 'NLP Research Intern',
		meta: 'National Institute of Technology Tiruchirappalli · Department of Computer Applications',
		bullets: [
			'Studied Classical Tamil verse–commentary representations under faculty mentorship, developing recurrent and Transformer encoders, Siamese matching, and encoder–decoder and decoder-only generation pipelines.',
			'First author of <strong>“Vectorizing Classical Tamil: Representation Learning for Verse–Commentary Pairs”</strong>, submitted to ICON 2026.',
			'Evaluated learned representations and generation against lexical, random-data, and constant-output controls; identified inflated canonical correlation, overfitting, and failures to generate verse-specific commentary.',
		],
		links: [
			{ label: 'Paper', href: '/classical-tamil-icon-submission.pdf' },
			{ label: 'GitHub', href: 'https://github.com/Amrit828/Classical-Tamil-NLP-Research-Internship' },
			{ label: 'Certificate', href: '/nit-internship-certificate.pdf' },
		],
	},
	{
		year: '2026',
		title: 'Reviewing assistance, CLEF 2026 Working Notes',
		meta: 'Academic Service',
		bullets: ['Assisted with reviewing methodological clarity, experimental validity, presentation, and reproducibility of working-notes submissions.'],
	},
];

export const researchProjects = [
	{
		title: 'CASSIAN — Graph-Augmented Code Understanding Platform',
		body: 'A code-understanding interface with <strong>file, function, and class dependency graphs</strong>, interactive path tracing, and co-node highlighting for exploring repository structure.',
		stack: ['Next.js', 'React', 'TypeScript', 'Graph Algorithms'],
		github: 'https://github.com/Amrit828/CASSIAN-AI',
	},
	{
		title: 'A-Eye — Assistive Vision System',
		body: 'An assistive vision prototype combining <strong>YOLOv8 object and vehicle detection</strong>, OpenCV video processing, and local text-to-speech alerts, with support for primary and secondary video sources.',
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
	degree: 'B.E. Computer Science and Engineering · Honors track in AI/ML',
	period: '2024 – 2028 (Expected)',
	facts: ['CGPA: <strong>9.383 / 10.0</strong> through Semester 4', '<strong>Ranked 1st</strong> in Department through Semester 4'],
};

export const achievements = [
	'Yearly GPA award – <strong>2nd position</strong>, Second Year, SSN College of Engineering',
	'Yearly GPA award – <strong>3rd position</strong>, First Year, SSN College of Engineering',
];
