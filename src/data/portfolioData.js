import { contactConfig } from './contactConfig.js';

export { contactConfig };

export const personalInfo = {
  name: contactConfig.name,
  shortName: contactConfig.shortName,
  headline: contactConfig.title,
  location: contactConfig.location.display,
  email: contactConfig.email.address,
  phone: contactConfig.phone.display,
  github: contactConfig.socials.github.url,
  linkedin: contactConfig.socials.linkedin.url,
  whatsapp: contactConfig.socials.whatsapp.url,
  resume: contactConfig.resume,
  contacts: contactConfig,
  photo: "/yasara.jpg",
  status: contactConfig.status,
  summary:
    "First Class Honours Computer Science graduate from the University of Westminster through Informatics Institute of Technology (IIT), with over one year of industry experience across Machine Learning, Software Engineering, and IT. Skilled in Python, PyTorch, HuggingFace Transformers, Power BI, and end-to-end ML development from data processing to deployment. Experienced in building ML solutions, full-stack applications, and client-facing systems. Seeking a graduate role in Data Science, Machine Learning Engineering, or Data Analytics.",
  metrics: [
    { label: "Degree Classification", value: "First Class", subtext: "BSc (Hons) Computer Science" },
    { label: "Industry Experience", value: "1+ Year", subtext: "Enterprise Software & IT" },
    { label: "Deep Learning & AI", value: "4+", subtext: "Production & Research Models" },
    { label: "Peak Model Performance", value: "89.5%", subtext: "Multimodal Accuracy" },
  ]
};

export const skillsData = {
  "Machine Learning & AI": [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "HuggingFace Transformers",
    "NLP",
    "Computer Vision (ViT & CLIP)",
    "Multi-Task Learning",
    "BERT & RoBERTa",
    "RAG & Embeddings"
  ],
  "Data & Analytics": [
    "Python",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "R",
    "Power BI",
    "SQL",
    "Jupyter Notebook",
    "Google Colab"
  ],
  "Backend & APIs": [
    "Flask",
    "FastAPI",
    "RESTful APIs",
    "Node.js",
    "PHP",
    "Laravel"
  ],
  "Databases & Vector Stores": [
    "MySQL",
    "MongoDB",
    "Chroma DB"
  ],
  "Tools & Practices": [
    "GitHub",
    "Git Branching Workflows",
    "VS Code",
    "IntelliJ IDEA",
    "Agile Collaboration",
    "LangChain",
    "Streamlit",
    "Vite"
  ]
};

export const projectsData = [
  {
    id: "insightcast",
    title: "InsightCast",
    subtitle: "Multilingual Code-Mixed Sentiment & Emotion Analytics Platform",
    category: "AI & Full-Stack",
    featured: true,
    badge: "Multi-Task Learning",
    keyMetric: { value: "83.72%", label: "Sentiment Weighted F1 (12.7% > BERT)" },
    period: "2024",
    tech: [
      "Python",
      "PyTorch",
      "XLM-RoBERTa",
      "TextCNN",
      "React.js",
      "Flask",
      "MongoDB",
      "Power BI"
    ],
    description:
      "A complete enterprise-grade analytics platform that ingests raw social media comments in code-mixed languages and extracts deep post-level sentiment and emotional insights.",
    points: [
      "Designed and trained a dual-phase XLM-RoBERTa + TextCNN model using Multi-Task Learning, achieving 83.72% weighted sentiment F1 and 58.67% emotion Macro-F1, outperforming single-task BERT baselines by 12.67%.",
      "Developed a full-stack analytics platform using React.js, Flask, MongoDB, and Power BI to process 500+ social-media comments per batch with real-time insight dashboards.",
      "Built an end-to-end training pipeline with model versioning and automated retraining on high-confidence predictions (>80%), processing 500-comment batches in under two minutes.",
      "Engineered an unsupervised cross-lingual approach enabling zero-shot transfer across Sinhala, English, and Singlish without labelled localized training data."
    ],
    githubUrl: contactConfig.socials.github.url,
    metricsList: [
      { name: "Sentiment Weighted F1", score: "83.72%" },
      { name: "Emotion Macro-F1", score: "58.67%" },
      { name: "Batch Throughput", score: "500+ comments / 2 mins" },
      { name: "Zero-Shot Languages", score: "Sinhala, English, Singlish" }
    ]
  },
  {
    id: "truthlens",
    title: "TruthLens",
    subtitle: "Multimodal Fake News Detection System",
    category: "Computer Vision & NLP",
    featured: true,
    badge: "Multimodal Fusion",
    keyMetric: { value: "89.53%", label: "Accuracy on Fakeddit Benchmark" },
    period: "2024",
    tech: [
      "Python",
      "PyTorch",
      "RoBERTa",
      "Vision Transformer (ViT)",
      "CLIP",
      "FastAPI",
      "React.js",
      "Vite"
    ],
    description:
      "An end-to-end multimodal classification system that inspects both textual claims and visual images to identify synthetic or misleading news items with cross-modal alignment.",
    points: [
      "Independently developed a full-stack multimodal ML system for classifying news as FAKE or REAL using article text, image features, and headline-image consistency.",
      "Built separate inference paths using RoBERTa for content analysis and a custom Fusion MLP combining RoBERTa, Vision Transformer (ViT), and CLIP features.",
      "Exposed low-latency predictions through a FastAPI backend connected to a sleek React.js and Vite frontend.",
      "Achieved 89.53% accuracy and 89.42% Macro-F1 with the Fusion MLP, while the RoBERTa content model achieved 85.77% accuracy and 85.64% Macro-F1 on the held-out Fakeddit benchmark."
    ],
    githubUrl: contactConfig.socials.github.url,
    metricsList: [
      { name: "Multimodal Fusion Accuracy", score: "89.53%" },
      { name: "Macro-F1 Score", score: "89.42%" },
      { name: "RoBERTa Content Accuracy", score: "85.77%" },
      { name: "Modalities Analyzed", score: "Text + Image + Cross-Consistency" }
    ]
  },
  {
    id: "student-copilot",
    title: "Student Support Copilot",
    subtitle: "RAG-Based University Assistance Chatbot",
    category: "Generative AI & LLMs",
    featured: false,
    badge: "Enterprise RAG",
    keyMetric: { value: "100%", label: "Document Grounded Accuracy" },
    period: "2024",
    tech: [
      "Python",
      "LangChain",
      "BGE-M3",
      "Chroma",
      "Google Gemini",
      "Streamlit"
    ],
    description:
      "A local-first grounded retrieval-augmented generation assistant for university campuses, providing hallucination-free answers backed by direct citations.",
    points: [
      "Designed and developed a local-first RAG chatbot that retrieves evidence from approved university documents to provide grounded answers across examinations, modules, student services, and academic regulations.",
      "Built an end-to-end RAG pipeline using LangChain, BGE-M3 dense embeddings, Chroma vector database, and Google Gemini with grounded generation and source citations.",
      "Implemented SHA-256 document-change detection, manifest-based index tracking, staging validation, rollback support, and automated testing across the document processing pipeline."
    ],
    githubUrl: contactConfig.socials.github.url,
    metricsList: [
      { name: "Index Integrity", score: "SHA-256 Change Detection" },
      { name: "Vector Engine", score: "BGE-M3 + Chroma" },
      { name: "Core LLM", score: "Google Gemini" }
    ]
  },
  {
    id: "hate-speech-moderation",
    title: "Deep Learning Hate Speech Moderation System",
    subtitle: "Contextual & Obfuscated Content Filter",
    category: "NLP & Deep Learning",
    featured: false,
    badge: "Hybrid CNN-Transformer",
    keyMetric: { value: "0.98", label: "Weighted F1 Score" },
    period: "2023",
    tech: [
      "Python",
      "BERT",
      "CNN",
      "PyTorch",
      "NLP"
    ],
    description:
      "A hybrid deep learning model crafted to flag subtle and adversarial hate speech using n-gram convolutional filters on top of deep transformer embeddings.",
    points: [
      "Developed a BERT + CNN hybrid deep learning model for detecting implicit and obfuscated hate speech, combining contextual embeddings with CNN-based local feature extraction.",
      "Achieved 0.90 Macro-F1 and 0.98 Weighted F1, rigorously evaluated using precision, recall, F1-score, and confusion-matrix analysis."
    ],
    githubUrl: contactConfig.socials.github.url,
    metricsList: [
      { name: "Weighted F1 Score", score: "0.98" },
      { name: "Macro-F1 Score", score: "0.90" },
      { name: "Architecture", score: "BERT Contextual + CNN N-Gram" }
    ]
  }
];

export const experienceData = [
  {
    company: "Apps Technologies (Pvt) Ltd",
    role: "Software Engineering Intern",
    period: "Feb 2025 – Sep 2025",
    type: "Internship",
    location: "Sri Lanka / International Client Operations",
    description: "Spearheaded full-stack development, database architecture, and cross-border client collaboration across high-impact business systems.",
    highlights: [
      "Sole developer of an end-to-end admin management system for a large-scale plantation enterprise, designing the SQL database and implementing the application using Laravel and PHP.",
      "Managed the project from requirements to deployment, including client meetings, stakeholder communication, and system demonstrations.",
      "Contributed to two additional client projects, handling frontend development and cross-timezone communication with an international client in New Zealand.",
      "Managed Git branching across three concurrent client projects, maintaining zero merge conflicts."
    ],
    skills: ["Laravel", "PHP", "MySQL", "JavaScript", "Client Communication", "Git Branching"]
  },
  {
    company: "Ceylon Tobacco Company PLC",
    subCompany: "British American Tobacco (BAT)",
    role: "IT Intern",
    period: "Aug 2024 – Feb 2025",
    type: "Internship",
    location: "Colombo / Factory Infrastructure",
    description: "Maintained critical operational continuity, industrial IoT scanner networks, and corporate infrastructure across factory and enterprise environments.",
    highlights: [
      "Configured and maintained factory IoT scanners and tracking infrastructure to support continuous data collection.",
      "Diagnosed hardware, software, and network issues across factory and office environments to maintain reliable IT operations.",
      "Collaborated with IT teams to resolve daily incidents and support uninterrupted production systems."
    ],
    skills: ["IoT Scanners", "Industrial Hardware", "Network Troubleshooting", "Infrastructure", "Incident Resolution"]
  }
];

export const educationData = [
  {
    institution: "Informatics Institute of Technology (IIT)",
    affiliation: "Affiliated with the University of Westminster, UK",
    degree: "BSc (Hons) Computer Science",
    period: "Sep 2022 – Sep 2026",
    honours: "First Class Honours",
    badge: "First Class",
    description: "Specialized in advanced computing, machine learning, and high-performance software engineering with top-tier academic standing.",
    modules: [
      "Applied AI",
      "Machine Learning",
      "Object-Oriented Programming (Java)",
      "Digital Marketing & Web Analytics",
      "Database Systems",
      "Cyber Security",
      "Usability Testing & Evaluation"
    ]
  },
  {
    institution: "Wisdom Business Academy",
    degree: "CIMA Certificate in Business Accounting (Cert BA)",
    period: "Sep 2026 – Present",
    honours: "In Progress",
    badge: "Professional Finance",
    description: "Building foundational competencies in management accounting, financial analysis, business economics, and organizational ethics."
  },
  {
    institution: "Richmond College, Galle",
    degree: "Primary and Secondary Education",
    period: "Jan 2008 – Jun 2021",
    honours: "Alumnus",
    badge: "College Foundation",
    description: "One of Sri Lanka's most prestigious and historic national colleges, recognized for excellence in academics, sportsmanship, and leadership.",
    highlights: [
      "Represented Richmond College in Baseball, Badminton, and Football.",
      "Active member of the IT Society and Science Society."
    ]
  }
];

export const certificationsData = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    status: "In Progress",
    focus: "Data preparation, statistical analysis, SQL querying, R programming, and data storytelling."
  }
];

export const extracurricularData = [
  {
    organization: "Leo Club of IIT",
    role: "Member",
    details: "Engaged in community outreach, leadership workshops, and youth welfare initiatives."
  },
  {
    organization: "IEEE Student Branch of IIT",
    role: "Member",
    details: "Participated in research seminars, technology symposiums, and engineering hackathons."
  },
  {
    organization: "Mozilla Club of IIT",
    role: "Member",
    details: "Advocated for open-source initiatives, web accessibility, and collaborative development."
  },
  {
    organization: "Richmond College IT & Science Societies",
    role: "Active Member",
    details: "Contributed to student competitions, tech fairs, and scientific exhibitions."
  },
  {
    organization: "Varsity Athletics & Sports",
    role: "College Representative",
    details: "Represented Richmond College across Baseball, Badminton, and Football teams."
  }
];

export const referencesData = [
  {
    name: "Mr. Randika Bamunusinghe",
    role: "QA Engineer",
    company: "GTN Technologies (Pvt) Ltd.",
    phone: "+94 716 089 796",
    email: "b.randika@gtngroup.com"
  },
  {
    name: "Mr. Sameera Sandeepa",
    role: "Senior DevOps R&D AI Engineering",
    company: "IFS R&D International (Pvt) Ltd.",
    phone: "+94 773 090 809",
    email: "sameera.sandeepa@ifs.com"
  }
];

