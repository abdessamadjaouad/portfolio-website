# Systems Atlas content inventory

Status: Proposed in Phase 0; authoritative only after human approval.

## Evidence legend

| Label | Meaning |
| --- | --- |
| Approved fact | Explicitly approved in `AGENTS.md` or the active plan |
| DE resume | Resume-backed by the private English Data Engineer source |
| SE resume | Resume-backed by the private English Software Engineer source |
| Pending | A named content gap; no assumption is allowed |
| Excluded | Known material that must not be published |

The resume files are stored in the repository's lowercase
`private-inputs/cv/` directory even though the governing instructions spell the
directory `private-inputs/CV/`. This inventory uses the matching files in place
and does not rename or modify them.

The private French Data and AI resume is reference-only. It is not used here to
establish a public claim, and it must never be copied, compiled, linked,
indexed, or placed under `public/`.

## Profile registry

| Field | Public value | Evidence/status |
| --- | --- | --- |
| Name | Abdessamad Jaouad | Approved fact |
| Primary role | Data Engineer | Approved fact |
| Secondary role | Software Engineer | Approved fact |
| Location | Casablanca, Morocco | Approved fact; both English resumes |
| Availability | Immediately | Approved fact |
| Work arrangements | On-site, hybrid, and remote | Approved fact |
| Email | `abdessamadjaouad0@gmail.com` | Approved fact; overrides resume email |
| Phone | `+212679075431` | Approved fact; both English resumes |
| WhatsApp | `https://wa.me/212679075431` | Approved fact |
| LinkedIn | `https://linkedin.com/in/abdessamadjaouad` | Approved fact |
| GitHub | `https://github.com/abdessamadjaouad` | Approved fact |
| Contact order | Email, WhatsApp, LinkedIn | Approved fact |

## Experience registry

| Employer | Official public title | Type | Dates | Location | Evidence |
| --- | --- | --- | --- | --- | --- |
| DXC Technology Morocco | Data & AI Engineer | Internship | February to August 2026 | Sale El Jadida, Morocco | Approved fact; responsibilities in both English resumes |
| JESA S.A. | Software Engineer & Data Scientist | Internship | July to September 2025 | Casablanca, Morocco | Approved fact; responsibilities in both English resumes |
| OCP Group | Full Stack Developer | Internship | April to June 2024 | Safi, Morocco | Approved fact; responsibilities in both English resumes |

The official titles above override the different titles used in the resume
sources. Public content must retain the `Internship` employment type.

## Approved metric registry

| Claim | Attribution | Evidence currently available | Evidence limit |
| --- | --- | --- | --- |
| Data access time reduced by 40% | CentralGIS at JESA S.A. | Approved fact; DE and SE resumes attribute it to SQL/PostgreSQL/PostGIS optimization | No public benchmark artifact supplied; `TODO_CONTENT_CENTRALGIS_METRIC_ARTIFACT` |
| Inputs reduced from 52 to 38 | JESA Environmental Impact Assessment work | Approved fact; DE resume | No public report supplied; `TODO_CONTENT_EIA_METRIC_ARTIFACT` |
| Input reduction equals 27% | JESA Environmental Impact Assessment work | Approved fact; DE resume; arithmetic is consistent with the approved values | No public report supplied; `TODO_CONTENT_EIA_METRIC_ARTIFACT` |
| Accuracy maintained at least 95% | JESA Environmental Impact Assessment work | Approved fact; DE resume | Evaluation definition and artifact are not supplied; `TODO_CONTENT_EIA_ACCURACY_EVIDENCE` |
| Backend performance improved by 30% | OCP workforce management platform | Approved fact; DE and SE resumes attribute it to SQL-query optimization | No public benchmark artifact supplied; `TODO_CONTENT_OCP_METRIC_ARTIFACT` |

These are the only approved numeric outcome claims. AI Sandbox has no approved
numeric performance, cost, user, or business metric.

## Featured experience highlights

### 1. AI Sandbox

| Requirement | Inventory |
| --- | --- |
| Context | Employer experience at DXC Technology Morocco under the official title Data & AI Engineer, Internship |
| Problem | Provide a platform for machine-learning benchmarking and AI-agent evaluation |
| Personal contribution | Designed and deployed the platform; built automated classification and regression benchmarking; developed AI-agent evaluation; implemented the backend and supporting services; added Pytest and Vitest coverage |
| Sanitized architecture | FastAPI with PostgreSQL, Redis, MinIO, and MLflow; Docker Compose deployment behind Nginx on an Azure VM; resume-backed RBAC; benchmarking and evaluation modules |
| Outcome | A cloud-native MLOps/AIOps platform was deployed on Azure and supports model ranking, report generation, agent test suites, and KPI dashboards |
| Metrics | None approved; do not add latency, cost, success-rate, user, or performance numbers |
| Technologies | Python, FastAPI, PostgreSQL, Redis, MinIO, MLflow, scikit-learn, XGBoost, LightGBM, Docker, Docker Compose, Nginx, Pytest, Vitest, Azure |
| Claim evidence | Approved experience facts; DE resume; SE resume |
| Public treatment | Featured concise employer experience highlight only; no case-study route |
| Link status | Repository unavailable; demo/report URL blocked pending ownership and public-link approval; no paper link |
| Media status | No approved screenshot, diagram, video, logo, or poster supplied |

Pending fields:

- `TODO_CONTENT_SHARED_DRIVE_OWNERSHIP`
- `TODO_CONTENT_AI_SANDBOX_PUBLIC_LINKS`
- `TODO_CONTENT_AI_SANDBOX_APPROVED_MEDIA`

### 2. CentralGIS

| Requirement | Inventory |
| --- | --- |
| Context | Employer experience at JESA S.A. under the official title Software Engineer & Data Scientist, Internship |
| Problem | Extract and centralize geospatial data from heterogeneous PDFs and reports, then make it accessible through a geospatial application |
| Personal contribution | Designed/built the platform; built ingestion pipelines using Kafka, REST APIs, and web scraping; optimized SQL queries and PostgreSQL/PostGIS access |
| Sanitized architecture | Flask application and REST APIs; PostgreSQL/PostGIS; MapLibre GL JS; Kafka-assisted ingestion and web scraping; Docker deployment |
| Outcome | Centralized geospatial-data access across a containerized application and reduced data-access time by 40% |
| Metrics | 40% reduction in data-access time only |
| Technologies | Python, Flask, PostgreSQL, PostGIS, Kafka, MapLibre GL JS, Docker, REST APIs, web scraping |
| Claim evidence | Approved experience and metric facts; DE resume; SE resume |
| Public treatment | Featured concise employer experience highlight only; no case-study route |
| Link status | Repository unavailable; supplied shared URL blocked pending ownership and public-link approval; no paper link |
| Media status | No approved screenshot, diagram, video, logo, or poster supplied |

Pending fields:

- `TODO_CONTENT_SHARED_DRIVE_OWNERSHIP`
- `TODO_CONTENT_CENTRALGIS_PUBLIC_LINKS`
- `TODO_CONTENT_CENTRALGIS_APPROVED_MEDIA`
- `TODO_CONTENT_CENTRALGIS_METRIC_ARTIFACT`

The JESA Environmental Impact Assessment result is not a CentralGIS outcome and
must remain separate.

### 3. OCP workforce management platform

| Requirement | Inventory |
| --- | --- |
| Context | Employer experience at OCP Group under the official title Full Stack Developer, Internship |
| Problem | Digitize workforce and HR management, including time tracking, leave requests, absence justification, reporting, and manager/employee views |
| Personal contribution | Developed the application; built real-time workforce dashboards; optimized SQL queries; collaborated through Agile delivery, CI/CD, and code review |
| Sanitized architecture | Spring Boot, Angular, and PostgreSQL; RFID time tracking; automated reports; Docker/Linux delivery with CI/CD |
| Outcome | Delivered operational workforce workflows and dashboards; SQL optimization improved backend performance by 30% |
| Metrics | 30% backend-performance improvement only |
| Technologies | Spring Boot, Angular, PostgreSQL, SQL, Docker, CI/CD, Linux |
| Claim evidence | Approved experience and metric facts; DE resume; SE resume |
| Public treatment | Featured concise employer experience highlight only; no case-study route |
| Link status | No repository, demo, report, or paper link supplied |
| Media status | No approved screenshot, diagram, video, logo, or poster supplied |

Pending fields:

- `TODO_CONTENT_OCP_PUBLIC_LINKS`
- `TODO_CONTENT_OCP_APPROVED_MEDIA`
- `TODO_CONTENT_OCP_METRIC_ARTIFACT`

## Supporting employer result

### JESA Environmental Impact Assessment input reduction

| Requirement | Inventory |
| --- | --- |
| Context | Separate Data Science work within the JESA S.A. internship |
| Problem | Replace a manual Excel macro while reducing Environmental Impact Assessment inputs |
| Personal contribution | Delivered correlated synthetic-data generation and XGBoost sentinel-feature selection |
| Sanitized architecture | Data preparation with Python/Pandas and scikit-learn; correlated synthetic data; XGBoost feature selection |
| Outcome | Reduced inputs from 52 to 38, a 27% reduction, while maintaining at least 95% accuracy |
| Claim evidence | Approved metric facts; DE resume |
| Public treatment | Supporting JESA experience result, not a featured project or employer case study |
| Link/media status | No public repository, report, demo, screenshot, or diagram supplied |

Pending fields:

- `TODO_CONTENT_EIA_PUBLIC_EVIDENCE`
- `TODO_CONTENT_EIA_METRIC_ARTIFACT`
- `TODO_CONTENT_EIA_ACCURACY_EVIDENCE`

## Resume-backed personal project candidates

These projects are eligible for concise cards because they appear in one of the
public English resume sources. None is selected as an initial featured
experience highlight. The proposed card order is the order below, keeping the
Data Engineer resume projects first and the Software Engineer resume project
afterward. None currently has enough approved public evidence for a deep case
study.

### Real-Time ETL Pipeline — Stock Market

| Requirement | Inventory |
| --- | --- |
| Year | 2025 |
| Problem | `TODO_CONTENT_STOCK_PIPELINE_PROBLEM_CONTEXT`; the resume describes the implemented pipeline but not its user or decision context |
| Personal contribution | Built an end-to-end ELT pipeline |
| Architecture | Kafka ingestion; PySpark transformation; MongoDB storage; Airflow DAG scheduling; PostgreSQL data warehouse; Grafana real-time dashboards; Docker Compose |
| Outcome | An end-to-end, containerized pipeline and dashboard flow was implemented; no numeric result is approved |
| Evidence | DE resume |
| Links | `TODO_CONTENT_STOCK_PIPELINE_PUBLIC_LINKS`; no repository, demo, or report supplied |
| Media | `TODO_CONTENT_STOCK_PIPELINE_APPROVED_MEDIA`; none supplied |
| Public treatment | Eligible concise personal-project card; deep case study deferred |

### Data Quality & KPI Dashboard

| Requirement | Inventory |
| --- | --- |
| Year | 2025 |
| Problem | Detect and clean duplicates, null values, and format inconsistencies in CSV data, then expose data-quality KPIs |
| Personal contribution | Designed the data-quality pipeline and Power BI dashboard flow |
| Architecture | CSV ingestion; PostgreSQL staging; SQL anomaly detection and cleaning; OLAP data warehouse; Power BI with DAX calculated columns |
| Outcome | Completeness, consistency, and data-quality KPIs are represented in dashboards; no numeric result is approved |
| Evidence | DE resume |
| Links | `TODO_CONTENT_DATA_QUALITY_PUBLIC_LINKS`; no repository, demo, or report supplied |
| Media | `TODO_CONTENT_DATA_QUALITY_APPROVED_MEDIA`; none supplied |
| Public treatment | Eligible concise personal-project card; deep case study deferred |

### Multi-Label Classification — Legal Texts

| Requirement | Inventory |
| --- | --- |
| Year | 2024 |
| Problem | Perform multi-label classification of EUR-Lex legal documents |
| Personal contribution | Fine-tuned BERT and built the text preprocessing, tokenization, cross-validation, hyperparameter-optimization, and evaluation pipeline |
| Architecture | Hugging Face Transformers/BERT NLP pipeline with precision, recall, and F1 evaluation |
| Outcome | A complete classification and evaluation pipeline was implemented; no score is approved |
| Evidence | DE resume |
| Links | `TODO_CONTENT_LEGAL_NLP_PUBLIC_LINKS`; no repository, demo, or report supplied |
| Media | `TODO_CONTENT_LEGAL_NLP_APPROVED_MEDIA`; none supplied |
| Public treatment | Eligible concise personal-project card; deep case study deferred |

### Healthics — Full-Stack Medical Platform

| Requirement | Inventory |
| --- | --- |
| Year | 2024 |
| Problem | Manage medical data and provide symptom-based pathology prediction |
| Personal contribution | Developed the React frontend and Spring Boot REST API; designed the distributed backend architecture; implemented an interactive dashboard and medical chatbot |
| Architecture | React, Spring Boot REST API, Hadoop, Spark, and HBase |
| Outcome | A full-stack platform, distributed processing design, dashboard, and chatbot were implemented; no numeric result is approved |
| Evidence | SE resume |
| Links | `TODO_CONTENT_HEALTHICS_PUBLIC_LINKS`; no repository, demo, or report supplied |
| Media | `TODO_CONTENT_HEALTHICS_APPROVED_MEDIA`; none supplied |
| Public treatment | Eligible concise personal-project card; deep case study deferred |

## Candidate treatment summary

| Candidate | Category | Initial status | Public depth |
| --- | --- | --- | --- |
| AI Sandbox | Employer experience | Featured, order 1 | Concise highlight only |
| CentralGIS | Employer experience | Featured, order 2 | Concise highlight only |
| OCP workforce management platform | Employer experience | Featured, order 3 | Concise highlight only |
| JESA Environmental Impact Assessment work | Employer result | Supporting evidence | Concise JESA result only |
| Real-Time ETL Pipeline — Stock Market | Personal project | Nonfeatured candidate | Concise card eligible |
| Data Quality & KPI Dashboard | Personal project | Nonfeatured candidate | Concise card eligible |
| Multi-Label Classification — Legal Texts | Personal project | Nonfeatured candidate | Concise card eligible |
| Healthics — Full-Stack Medical Platform | Personal project | Nonfeatured candidate | Concise card eligible |

`TODO_CONTENT_DEDICATED_DATA_ENGINEERING_CASE_STUDY` remains open. The stock
pipeline and data-quality projects show relevant skills, but neither has the
complete public repository, problem context, personal ownership detail,
architecture evidence, and outcome evidence required for a deep case study.

## Research inventory

| Field | Value/status |
| --- | --- |
| Approved title | Reducing PQC Overhead in IoT Networks Using an Epoch-Based Compression Approach |
| Approved link | `https://ieeexplore.ieee.org/document/11601673` |
| Full citation | `TODO_CONTENT_IEEE_CITATION` |
| Authors | Pending exact exported citation; do not infer |
| Venue/date/pages/DOI | Pending exact exported citation; do not infer |
| Local paper PDF | Not supplied and not required while the approved IEEE link is used |
| Public treatment | Research highlight with approved title and IEEE link only |

The supplied Shor, Lopez, and Mosca entries are background references, not the
citation for Abdessamad's paper.

## Education, certifications, and languages

### Education

| Institution | Program | Dates | Result | Location | Evidence |
| --- | --- | --- | --- | --- | --- |
| National Higher School of Arts and Crafts (ENSAM) | Master's Degree in Big Data & Internet of Things | 2024 to 2026 | With Honors | Casablanca, Morocco | DE and SE resumes |
| Faculty of Sciences and Techniques (FST) | Bachelor's Degree in Information Systems & Digital Transformation | 2020 to 2024 | With Highest Honors | Settat, Morocco | DE and SE resumes |

### Certifications

| Certification | Year | Evidence/status |
| --- | --- | --- |
| AWS Cloud Foundations | 2026 | DE and SE resumes; credential link not supplied |
| Scrum Foundation Learner | 2025 | DE and SE resumes; credential link not supplied |

Credential-link gaps:

- `TODO_CONTENT_AWS_CERTIFICATION_LINK`
- `TODO_CONTENT_SCRUM_CERTIFICATION_LINK`

### Languages

| Language | Level | Evidence |
| --- | --- | --- |
| Arabic | Native | DE and SE resumes |
| English | Fluent | DE and SE resumes |
| French | Fluent | DE and SE resumes |

## Resume-backed skill inventory

These are candidate skill facts, not percentage ratings. Later content modeling
must connect prominent skills to experience or project evidence.

| Group | Resume-backed candidates |
| --- | --- |
| Programming | Python, SQL, Java, TypeScript, JavaScript, C, Bash |
| Data engineering | Apache Spark, Apache Kafka, Airflow, Hadoop/HDFS, ETL/ELT, Pandas, Selenium, BeautifulSoup |
| Backend and web | FastAPI, Flask, Spring Boot, SQLAlchemy, Pydantic, REST APIs, React, Angular, MapLibre GL JS |
| Data stores | PostgreSQL, PostGIS, MongoDB, MySQL, SQL Server, Redis, MinIO, HBase |
| Analytics and BI | Power BI, DAX, Power Query, Grafana, Excel |
| AI and machine learning | scikit-learn, XGBoost, LightGBM, MLflow, BERT, Hugging Face Transformers, LangChain, NLP, CrewAI, PyTorch, TensorFlow, Prompt Engineering |
| Cloud and delivery | AWS, Azure, Docker, Docker Compose, Nginx, Git, GitHub Actions, CI/CD, Linux |
| Testing | Pytest, Vitest |
| Architecture | Microservices, MVC, Design Patterns |

HBase is evidenced by the Healthics project description; Hugging Face
Transformers is evidenced by the legal-text project description. Prominence on
the future site still depends on evidence strength and role relevance.

## Link inventory

| Destination | Status |
| --- | --- |
| Email | Approved: `mailto:abdessamadjaouad0@gmail.com` |
| WhatsApp | Approved: `https://wa.me/212679075431` |
| LinkedIn | Approved: `https://linkedin.com/in/abdessamadjaouad` |
| GitHub profile | Approved: `https://github.com/abdessamadjaouad` |
| IEEE paper | Approved: `https://ieeexplore.ieee.org/document/11601673` |
| Data Engineer resume | Target path approved; reviewed PDF not supplied |
| Software Engineer resume | Target path approved; reviewed PDF not supplied |
| Employer repositories | Unavailable and excluded unless independently approved for publication |
| Shared Google Drive URL | Blocked; do not fetch or publish pending owner identification and explicit approval |
| Personal-project repositories/demos/reports | Not supplied; tracked by project-specific `TODO_CONTENT_*_PUBLIC_LINKS` markers |

Approved future resume paths:

- `public/resumes/abdessamad-jaouad-data-engineer.pdf`
- `public/resumes/abdessamad-jaouad-software-engineer.pdf`

Both files are currently absent. `TODO_CONTENT_REVIEWED_ENGLISH_RESUME_PDFS`
must be resolved before publication.

## Current asset inventory

| Asset class | Current state | Publication status |
| --- | --- | --- |
| English Data Engineer `.tex` | Present as a private input | Never publish |
| English Software Engineer `.tex` | Present as a private input | Never publish |
| French Data and AI `.tex` | Present as private reference material | Never copy, compile, link, index, or publish |
| Reviewed English resume PDFs | Not supplied | Required later at approved paths |
| Project screenshots | None supplied | Pending project-specific review |
| Architecture diagrams | None supplied | Sanitized recreations may be proposed later |
| Short videos/posters | None supplied | Shared URL blocked; autoplay is prohibited |
| Employer logos | None supplied | Do not use without permission |
| Headshot | None supplied | Not planned for Version 1; no blocker |
| Research PDF | None supplied | Use the approved IEEE link |

## Confidentiality and publication classification

### Excluded

- Employer source code, internal data, screenshots, repositories, reports,
  credentials, and private workflows.
- Employer-specific schemas, topology, endpoints, hostnames, credential details,
  logo assets, or internal diagrams.
- The private French resume and every `.tex` resume source.
- The unresolved shared Google Drive URL and its contents.
- Unverified citation metadata or metric artifacts.

### Eligible after review

- The two corrected, visually reviewed English resume PDFs.
- Concise wording already supported by the English resumes and approved facts.
- Personal-project media and links after ownership, privacy, and accuracy review.
- Sanitized recreated diagrams containing no employer-specific detail.

## Content gap report

### Required before the relevant Version 1 feature ships

1. `TODO_CONTENT_REVIEWED_ENGLISH_RESUME_PDFS` — provide both corrected English
   PDFs and verify appearance, selectable text, links, approved email, and
   official titles.
2. `TODO_CONTENT_SHARED_DRIVE_OWNERSHIP` — identify the owner and intended asset
   for the reused Drive URL, then explicitly approve or reject public linking.
3. `TODO_CONTENT_IEEE_CITATION` — provide an exact IEEE export or BibTeX if a
   full citation is desired; otherwise publish title and link only.
4. `TODO_CONTENT_DEDICATED_DATA_ENGINEERING_CASE_STUDY` — supply a complete,
   public, evidence-backed project before treating one as a deep case study.

### Evidence strengthening, not permission to invent

- Supply public or sanitized evidence for the CentralGIS, EIA, and OCP metrics
  only if it can be shared lawfully; otherwise keep the approved resume wording
  concise and do not imply stronger proof.
- Supply project-specific public links and approved media for any personal
  project that should receive more than a text card.
- Supply certification credential links only if public sharing is intended.

Unresolved items must remain internal markers. Public UI should omit unavailable
fields rather than display polished placeholder prose.
