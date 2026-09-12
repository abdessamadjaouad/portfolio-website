import type { Project } from "../schemas";

export const projects = [
  {
    id: "ai-sandbox",
    slug: "ai-sandbox",
    order: 1,
    title: "AI Sandbox",
    category: "employer-highlight",
    publicDepth: "case-study",
    featured: true,
    experienceId: "dxc-technology-morocco",
    context:
      "Employer experience at DXC Technology Morocco during the Data & AI Engineer internship.",
    problem:
      "Provide a platform for machine-learning benchmarking and AI-agent evaluation.",
    contributions: [
      "Designed and deployed the cloud-native MLOps/AIOps platform on Azure.",
      "Built automated classification and regression benchmarking with dataset upload, metric computation, model ranking, and report generation.",
      "Developed AI-agent evaluation with test suites, LLM-as-a-judge scoring, and KPI dashboards.",
      "Implemented the FastAPI backend, supporting services, role-based access control, and Pytest/Vitest coverage.",
    ],
    architecture: {
      summary:
        "A resume-level flow connects benchmarking and agent-evaluation modules to shared data services and an Azure deployment.",
      textAlternative:
        "Benchmarking and agent-evaluation modules use a FastAPI service with PostgreSQL, Redis, MinIO, and MLflow, deployed through Docker Compose and Nginx on an Azure virtual machine.",
      privacy: "sanitized-resume-level",
      nodes: [
        {
          id: "benchmarking",
          label: "ML benchmarking",
          responsibility:
            "Runs classification and regression comparisons, ranking, and report generation.",
          technologies: ["scikit-learn", "XGBoost", "LightGBM"],
        },
        {
          id: "agent-evaluation",
          label: "AI-agent evaluation",
          responsibility: "Runs agent test suites, scoring, and KPI reporting.",
          technologies: ["Python", "FastAPI"],
        },
        {
          id: "platform-services",
          label: "Platform services",
          responsibility:
            "Supports persistence, caching, object storage, and experiment tracking.",
          technologies: ["PostgreSQL", "Redis", "MinIO", "MLflow"],
        },
        {
          id: "delivery",
          label: "Cloud delivery",
          responsibility:
            "Runs the containerized platform behind a reverse proxy on Azure.",
          technologies: ["Docker Compose", "Nginx", "Azure"],
        },
      ],
      flow: [
        "benchmarking",
        "agent-evaluation",
        "platform-services",
        "delivery",
      ],
    },
    outcome:
      "A cloud-native MLOps/AIOps platform was deployed on Azure and supports model ranking, report generation, agent test suites, and KPI dashboards.",
    metricIds: [],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "MLflow",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Pytest",
      "Vitest",
      "Azure",
    ],
    linkIds: [],
    mediaIds: [],
    contentGapIds: [],
    evidence: {
      sources: [
        "approved-fact",
        "data-engineer-resume",
        "software-engineer-resume",
      ],
      claimsApproved: true,
    },
  },
  {
    id: "centralgis",
    slug: "centralgis",
    order: 2,
    title: "CentralGIS",
    category: "employer-highlight",
    publicDepth: "case-study",
    featured: true,
    experienceId: "jesa",
    context:
      "Employer experience at JESA S.A. during the Software Engineer & Data Scientist internship.",
    problem:
      "Extract and centralize geospatial data from heterogeneous PDFs and reports, then make it accessible through a geospatial application.",
    contributions: [
      "Designed and built the centralized geospatial platform.",
      "Built ingestion pipelines using Kafka, REST APIs, and web scraping.",
      "Optimized SQL queries and PostgreSQL/PostGIS data access.",
    ],
    architecture: {
      summary:
        "A resume-level ingestion flow extracts geospatial data into PostgreSQL/PostGIS for a Flask and MapLibre application.",
      textAlternative:
        "Kafka, REST APIs, and web scraping feed geospatial data into PostgreSQL and PostGIS; Flask APIs serve a MapLibre GL JS interface in a Docker deployment.",
      privacy: "sanitized-resume-level",
      nodes: [
        {
          id: "ingestion",
          label: "Ingestion",
          responsibility:
            "Extracts geospatial data from PDFs, reports, APIs, and web sources.",
          technologies: ["Kafka", "REST APIs", "web scraping"],
        },
        {
          id: "geospatial-store",
          label: "Geospatial store",
          responsibility: "Centralizes and queries geospatial records.",
          technologies: ["PostgreSQL", "PostGIS"],
        },
        {
          id: "application",
          label: "Geospatial application",
          responsibility:
            "Exposes the centralized data through APIs and an interactive map.",
          technologies: ["Flask", "MapLibre GL JS"],
        },
        {
          id: "deployment",
          label: "Container delivery",
          responsibility:
            "Keeps the application consistent across environments.",
          technologies: ["Docker"],
        },
      ],
      flow: ["ingestion", "geospatial-store", "application", "deployment"],
    },
    outcome:
      "Centralized geospatial-data access across a containerized application and reduced data-access time by 40%.",
    metricIds: ["centralgis-data-access-reduction"],
    technologies: [
      "Python",
      "Flask",
      "PostgreSQL",
      "PostGIS",
      "Kafka",
      "MapLibre GL JS",
      "Docker",
      "REST APIs",
      "web scraping",
    ],
    linkIds: [],
    mediaIds: [],
    contentGapIds: [],
    evidence: {
      sources: [
        "approved-fact",
        "data-engineer-resume",
        "software-engineer-resume",
      ],
      claimsApproved: true,
    },
  },
  {
    id: "ocp-workforce-platform",
    slug: "ocp-workforce-platform",
    order: 3,
    title: "OCP workforce management platform",
    category: "employer-highlight",
    publicDepth: "case-study",
    featured: true,
    experienceId: "ocp-group",
    context:
      "Employer experience at OCP Group during the Full Stack Developer internship.",
    problem:
      "Digitize workforce and HR management, including time tracking, leave requests, absence justification, reporting, and manager and employee views.",
    contributions: [
      "Developed the Spring Boot, Angular, and PostgreSQL application.",
      "Built real-time workforce dashboards and automated reports.",
      "Optimized SQL queries and collaborated through Agile delivery, CI/CD, and code review.",
    ],
    architecture: {
      summary:
        "A resume-level application flow connects employee and manager workflows to a Spring Boot service and PostgreSQL.",
      textAlternative:
        "Angular employee and manager views use a Spring Boot service backed by PostgreSQL; RFID time tracking and reporting support workforce workflows, delivered with Docker and CI/CD.",
      privacy: "sanitized-resume-level",
      nodes: [
        {
          id: "workforce-views",
          label: "Workforce views",
          responsibility:
            "Supports employee and manager workflows and dashboards.",
          technologies: ["Angular"],
        },
        {
          id: "application-service",
          label: "Application service",
          responsibility:
            "Handles time tracking, leave, absence, and report workflows.",
          technologies: ["Spring Boot"],
        },
        {
          id: "workforce-data",
          label: "Workforce data",
          responsibility: "Stores and queries operational workforce records.",
          technologies: ["PostgreSQL", "SQL"],
        },
        {
          id: "delivery",
          label: "Delivery",
          responsibility: "Supports repeatable application delivery.",
          technologies: ["Docker", "CI/CD", "Linux"],
        },
      ],
      flow: [
        "workforce-views",
        "application-service",
        "workforce-data",
        "delivery",
      ],
    },
    outcome:
      "Delivered operational workforce workflows and dashboards; SQL optimization improved backend performance by 30%.",
    metricIds: ["ocp-backend-performance-improvement"],
    technologies: [
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "SQL",
      "Docker",
      "CI/CD",
      "Linux",
    ],
    linkIds: [],
    mediaIds: [],
    contentGapIds: [],
    evidence: {
      sources: [
        "approved-fact",
        "data-engineer-resume",
        "software-engineer-resume",
      ],
      claimsApproved: true,
    },
  },
  {
    id: "jesa-eia-input-reduction",
    slug: "jesa-eia-input-reduction",
    order: 4,
    title: "JESA Environmental Impact Assessment input reduction",
    category: "employer-result",
    publicDepth: "case-study",
    featured: false,
    experienceId: "jesa",
    context:
      "Separate data-science work during the JESA S.A. internship, not a CentralGIS outcome.",
    problem:
      "Replace a manual Excel macro while reducing Environmental Impact Assessment inputs.",
    contributions: [
      "Generated correlated synthetic data.",
      "Applied XGBoost sentinel-feature selection.",
    ],
    architecture: {
      summary:
        "A resume-level data-science flow prepares data, generates correlated synthetic data, selects sentinel features, and evaluates the result.",
      textAlternative:
        "Python and Pandas prepare data, correlated synthetic data supports XGBoost feature selection, and scikit-learn evaluates the reduced parameter set.",
      privacy: "sanitized-resume-level",
      nodes: [
        {
          id: "data-preparation",
          label: "Data preparation",
          responsibility: "Prepares the assessment inputs.",
          technologies: ["Python", "Pandas"],
        },
        {
          id: "synthetic-data",
          label: "Synthetic data",
          responsibility: "Generates correlated synthetic data.",
          technologies: ["Python"],
        },
        {
          id: "feature-selection",
          label: "Feature selection",
          responsibility:
            "Selects sentinel features for the reduced input set.",
          technologies: ["XGBoost"],
        },
        {
          id: "evaluation",
          label: "Evaluation",
          responsibility: "Evaluates accuracy after input reduction.",
          technologies: ["scikit-learn"],
        },
      ],
      flow: [
        "data-preparation",
        "synthetic-data",
        "feature-selection",
        "evaluation",
      ],
    },
    outcome:
      "Reduced inputs from 52 to 38, a 27% reduction, while maintaining at least 95% accuracy.",
    metricIds: ["eia-parameter-reduction", "eia-accuracy-floor"],
    technologies: ["Python", "Pandas", "scikit-learn", "XGBoost"],
    linkIds: [],
    mediaIds: [],
    contentGapIds: [
      "TODO_CONTENT_EIA_PUBLIC_EVIDENCE",
      "TODO_CONTENT_EIA_METRIC_ARTIFACT",
      "TODO_CONTENT_EIA_ACCURACY_EVIDENCE",
    ],
    evidence: {
      sources: ["approved-fact", "data-engineer-resume"],
      claimsApproved: true,
    },
  },
  {
    id: "stock-market-etl",
    slug: "stock-market-etl",
    order: 10,
    title: "Real-Time ETL Pipeline — Stock Market",
    category: "personal-project",
    publicDepth: "case-study",
    featured: false,
    year: 2025,
    context: "Resume-backed personal data-engineering project.",
    problem: {
      status: "todo",
      id: "TODO_CONTENT_STOCK_PIPELINE_PROBLEM_CONTEXT",
    },
    contributions: ["Built the end-to-end, containerized ELT pipeline."],
    architecture: {
      summary:
        "A Kafka-to-Grafana data path combines stream ingestion, distributed transformation, orchestration, storage, and warehouse reporting.",
      textAlternative:
        "Kafka ingests stock-market data, PySpark transforms it, MongoDB stores pipeline data, Airflow schedules DAGs, PostgreSQL provides a data warehouse, and Grafana presents dashboards; Docker Compose runs the stack.",
      privacy: "resume-backed-public",
      nodes: [
        {
          id: "ingestion",
          label: "Stream ingestion",
          responsibility: "Ingests stock-market data.",
          technologies: ["Kafka"],
        },
        {
          id: "transformation",
          label: "Transformation",
          responsibility: "Transforms the ingested data.",
          technologies: ["PySpark"],
        },
        {
          id: "orchestration",
          label: "Orchestration",
          responsibility: "Schedules pipeline DAGs.",
          technologies: ["Airflow"],
        },
        {
          id: "storage",
          label: "Storage and warehouse",
          responsibility: "Stores pipeline data and warehouse outputs.",
          technologies: ["MongoDB", "PostgreSQL"],
        },
        {
          id: "dashboards",
          label: "Dashboards",
          responsibility: "Presents real-time dashboard views.",
          technologies: ["Grafana", "Docker Compose"],
        },
      ],
      flow: [
        "ingestion",
        "transformation",
        "orchestration",
        "storage",
        "dashboards",
      ],
    },
    outcome:
      "An end-to-end, containerized pipeline and dashboard flow was implemented.",
    metricIds: [],
    technologies: [
      "Kafka",
      "PySpark",
      "MongoDB",
      "Airflow",
      "PostgreSQL",
      "Grafana",
      "Docker Compose",
    ],
    linkIds: [],
    mediaIds: [],
    contentGapIds: [
      "TODO_CONTENT_STOCK_PIPELINE_PROBLEM_CONTEXT",
      "TODO_CONTENT_STOCK_PIPELINE_PUBLIC_LINKS",
      "TODO_CONTENT_STOCK_PIPELINE_APPROVED_MEDIA",
    ],
    evidence: {
      sources: ["data-engineer-resume"],
      claimsApproved: true,
    },
  },
  {
    id: "data-quality-kpi",
    slug: "data-quality-kpi",
    order: 11,
    title: "Data Quality & KPI Dashboard",
    category: "personal-project",
    publicDepth: "case-study",
    featured: false,
    year: 2025,
    context: "Resume-backed personal data-engineering and analytics project.",
    problem:
      "Detect and clean duplicates, null values, and format inconsistencies in CSV data, then expose data-quality KPIs.",
    contributions: [
      "Designed the data-quality pipeline and Power BI dashboard flow.",
    ],
    architecture: {
      summary:
        "A CSV-to-Power-BI flow stages data, detects and cleans anomalies, loads an OLAP warehouse, and presents quality indicators.",
      textAlternative:
        "CSV data enters PostgreSQL staging, SQL detects and cleans anomalies, an OLAP warehouse stores the result, and Power BI with DAX presents completeness, consistency, and quality indicators.",
      privacy: "resume-backed-public",
      nodes: [
        {
          id: "staging",
          label: "CSV staging",
          responsibility: "Loads source CSV data for quality checks.",
          technologies: ["CSV", "PostgreSQL"],
        },
        {
          id: "quality-rules",
          label: "Quality rules",
          responsibility:
            "Detects and cleans duplicates, nulls, and format inconsistencies.",
          technologies: ["SQL"],
        },
        {
          id: "warehouse",
          label: "OLAP warehouse",
          responsibility: "Stores cleaned analytical data.",
          technologies: ["PostgreSQL", "OLAP"],
        },
        {
          id: "quality-dashboard",
          label: "Quality dashboard",
          responsibility: "Presents data-quality indicators.",
          technologies: ["Power BI", "DAX"],
        },
      ],
      flow: ["staging", "quality-rules", "warehouse", "quality-dashboard"],
    },
    outcome:
      "Completeness, consistency, and data-quality indicators are represented in dashboards.",
    metricIds: [],
    technologies: ["CSV", "PostgreSQL", "SQL", "OLAP", "Power BI", "DAX"],
    linkIds: [],
    mediaIds: [],
    contentGapIds: [
      "TODO_CONTENT_DATA_QUALITY_PUBLIC_LINKS",
      "TODO_CONTENT_DATA_QUALITY_APPROVED_MEDIA",
    ],
    evidence: {
      sources: ["data-engineer-resume"],
      claimsApproved: true,
    },
  },
  {
    id: "legal-text-classification",
    slug: "legal-text-classification",
    order: 12,
    title: "Multi-Label Classification — Legal Texts",
    category: "personal-project",
    publicDepth: "case-study",
    featured: false,
    year: 2024,
    context: "Resume-backed personal machine-learning project.",
    problem: "Perform multi-label classification of EUR-Lex legal documents.",
    contributions: [
      "Fine-tuned BERT and built the preprocessing, tokenization, cross-validation, hyperparameter-optimization, and evaluation pipeline.",
    ],
    architecture: {
      summary:
        "A resume-backed NLP flow prepares EUR-Lex text, fine-tunes BERT, validates configurations, and evaluates classification results.",
      textAlternative:
        "Text preprocessing and tokenization feed a Hugging Face Transformers BERT model; cross-validation and hyperparameter optimization precede precision, recall, and F1 evaluation.",
      privacy: "resume-backed-public",
      nodes: [
        {
          id: "text-preparation",
          label: "Text preparation",
          responsibility: "Preprocesses and tokenizes EUR-Lex documents.",
          technologies: ["NLP", "Hugging Face Transformers"],
        },
        {
          id: "model-training",
          label: "Model training",
          responsibility: "Fine-tunes BERT for multi-label classification.",
          technologies: ["BERT"],
        },
        {
          id: "model-validation",
          label: "Model validation",
          responsibility:
            "Runs cross-validation and hyperparameter optimization.",
          technologies: ["Hugging Face Transformers"],
        },
        {
          id: "evaluation",
          label: "Evaluation",
          responsibility: "Evaluates precision, recall, and F1.",
          technologies: ["precision", "recall", "F1"],
        },
      ],
      flow: [
        "text-preparation",
        "model-training",
        "model-validation",
        "evaluation",
      ],
    },
    outcome:
      "A complete classification and evaluation pipeline was implemented.",
    metricIds: [],
    technologies: [
      "BERT",
      "Hugging Face Transformers",
      "NLP",
      "cross-validation",
    ],
    linkIds: [],
    mediaIds: [],
    contentGapIds: [
      "TODO_CONTENT_LEGAL_NLP_PUBLIC_LINKS",
      "TODO_CONTENT_LEGAL_NLP_APPROVED_MEDIA",
    ],
    evidence: {
      sources: ["data-engineer-resume"],
      claimsApproved: true,
    },
  },
  {
    id: "healthics",
    slug: "healthics",
    order: 13,
    title: "Healthics — Full-Stack Medical Platform",
    category: "personal-project",
    publicDepth: "case-study",
    featured: false,
    year: 2024,
    context: "Resume-backed personal software-engineering project.",
    problem:
      "Manage medical data and provide symptom-based pathology prediction.",
    contributions: [
      "Developed the React frontend and Spring Boot REST API.",
      "Designed the distributed backend architecture and implemented an interactive dashboard and medical chatbot.",
    ],
    architecture: {
      summary:
        "A resume-backed full-stack flow connects a React interface to Spring Boot services and distributed data processing.",
      textAlternative:
        "A React interface calls a Spring Boot REST API; Hadoop, Spark, and HBase support distributed medical-data processing for the dashboard and chatbot.",
      privacy: "resume-backed-public",
      nodes: [
        {
          id: "interface",
          label: "Web interface",
          responsibility:
            "Provides medical-data management, dashboard, prediction, and chatbot views.",
          technologies: ["React"],
        },
        {
          id: "application-api",
          label: "Application API",
          responsibility: "Exposes the platform's REST operations.",
          technologies: ["Spring Boot", "REST API"],
        },
        {
          id: "distributed-processing",
          label: "Distributed processing",
          responsibility: "Supports scalable medical-data processing.",
          technologies: ["Hadoop", "Spark", "HBase"],
        },
      ],
      flow: ["interface", "application-api", "distributed-processing"],
    },
    outcome:
      "A full-stack platform, distributed processing design, dashboard, and chatbot were implemented.",
    metricIds: [],
    technologies: [
      "React",
      "Spring Boot",
      "REST API",
      "Hadoop",
      "Spark",
      "HBase",
    ],
    linkIds: [],
    mediaIds: [],
    contentGapIds: [
      "TODO_CONTENT_HEALTHICS_PUBLIC_LINKS",
      "TODO_CONTENT_HEALTHICS_APPROVED_MEDIA",
    ],
    evidence: {
      sources: ["software-engineer-resume"],
      claimsApproved: true,
    },
  },
] satisfies Project[];
