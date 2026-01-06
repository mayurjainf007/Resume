/**
 * Persona Selector Logic
 * Add this to your js/persona.js file
 */

// Persona data structure matching your experience
const PERSONA_DATA = {
    recruiter: {
        cigna: [ 
            "<b>- Architected AWS-based Data Lake using S3, Glue, Redshift, and EMR</b>, enabling HIPAA-compliant analytics and improving data accessibility by 60%.<br>\
            <b>- Developed PySpark and SQL ETL frameworks</b> with automated validation and exception handling, ensuring 99.9% uptime across healthcare workflows.<br>\
            <b>- Integrated predictive models via SageMaker endpoints</b> for high-risk member detection, reducing manual review time by 55%.<br>\
            <b>- Created Power BI and Tableau dashboards</b> visualizing claims and provider performance, identifying \$8M+ in avoidable spend annually.<br>"
        ],
        asi: [
            "<b>- Developed SQL and Python scripts</b> improving data accuracy across reporting systems by 35%.<br>\
            <b>- Automated recurring workflows</b> using Python and AWS, cutting manual reporting time by 60%.<br>\
            <b>- Built Power BI dashboards</b> enabling self-service analytics and faster decision-making for operations teams.<br>\
            <b>- Implemented data governance standards</b> to ensure consistency and reliability across datasets.<br></br>"
        ],
        zs: [
            "<b>- Engineered PySpark and SQL pipelines</b> processing 2TB+ daily oncology and healthcare datasets, enabling advanced analytics for treatment response and patient journey insights.<br>\
            <b>- Developed predictive models</b> using survival analysis and gradient boosting to identify high-risk patients and optimize clinical trial targeting, achieving 92% AUC.<br>\
            <b>- Designed Snowflake dimensional models</b> with clustering keys and materialized views, reducing query latency from minutes to seconds and improving analyst productivity.<br>\
            <b>- Implemented automated data validation frameworks</b> ensuring HIPAA compliance and consistent data quality across real-world evidence workflows.<br>"
        ],
        tcs: [
            "<b>- Led migration to AWS Lakehouse architecture</b> using S3, Redshift, and Glue, consolidating 10+ banking data sources.<br>\
            <b>- Built and maintained 10+ enterprise-scale ETL pipelines</b> using PySpark, Airflow, and AWS, processing 5M+ transactions daily with SLA-driven monitoring.<br>\
            <b>- Developed Kafka–Spark streaming pipelines</b> for real-time fraud analytics handling 50K+ events/sec, reducing decision latency by 35%.<br>\
            <b>- Implemented automated validation and reconciliation frameworks</b> ensuring FCA/PRA compliance and improving data reliability across financial workflows by 40%.<br>"  
        ],
        ci: [
            "<b>- Developed Python-based ETL jobs</b> on AWS Lambda and RDS, improving data refresh reliability.<br>\
            <b>- Optimized SQL queries</b> reducing latency by 60% and improving dashboard performance.<br>\
            <b>- Created automated QA validation</b> pipelines ensuring data integrity across environments.<br>"
        ]
    },
    manager: {
        cigna: [
            "<b>- Increased data availability by 60%</b> through unified AWS Data Lake architecture, improving analytics readiness across teams.<br>\
            <b>- Reduced manual review time by 55%</b> using RAG pipelines and LLM automation for policy and claims data.<br>\
            <b>- Implemented proactive data quality frameworks</b> catching schema drift and anomalies before production.<br>\
            <b>- Enabled leadership to identify $8M in avoidable spend annually</b> through integrated Power BI and Tableau dashboards.<br>"
        ],
        asi: [
            "<b>- Improved reporting accuracy by 35%</b> and reduced reconciliation effort by 20 hours per month through SQL automation.<br>\
            <b>- Cut manual reporting time by 60%</b> with Python-based workflow orchestration.<br>\
            <b>- Enhanced decision-making speed by 40%</b> using Power BI dashboards for finance and operations teams.<br>\
            <b>- Increased data reliability by 50%</b> through standardized governance and validation frameworks.<br>"
        ],
        zs: [
            "<b>- Reduced maintenance overhead by 33%</b> through CI/CD modernization and reusable PySpark frameworks.<br>\
            <b>- Achieved full HIPAA and GDPR compliance</b> by embedding automated audit and validation checks.<br>\
            <b>- Reduced data downtime by 25%</b> using observability dashboards and proactive alerting.<br>\
            <b>- Delivered curated datasets</b> supporting production-grade ML models for oncology analytics.<br>"
        ],
        tcs: [
            "<b>- Reduced ETL runtimes by 40%</b> through AWS Lakehouse migration and Spark optimization.<br>\
            <b>- Built real-time fraud detection pipelines</b> achieving 92% accuracy and cutting investigation times by 50%.<br>\
            <b>- Implemented compliance automation</b> with AWS IAM, KMS, and CloudTrail ensuring FCA/PRA audit readiness.<br>\
            <b>- Improved data reliability by 40%</b> through automated reconciliation and validation frameworks.<br>"
        ],
        ci: [
            "<b>- Reduced latency and manual reporting by 60%</b> through Python-based optimization and query tuning.<br>\
            <b>- Automated ingestion of API, clickstream, and event data</b> improving data freshness and consistency.<br>\
            <b>- Implemented monitoring and alerting</b> to detect data discrepancies early and maintain SLA compliance.<br>"
        ]
    },
    lead: {
        cigna: [
            "<b>- Built reusable data quality frameworks</b> adopted across teams, improving validation consistency and reducing QA effort by 40%.<br>\
            <b>- Created automated monitoring pipelines</b> catching schema drift and anomalies early, ensuring 99.9% data reliability.<br>\
            <b>- Developed clean abstractions for RAG pipelines</b> enabling scalable LLM integration across multiple workflows.<br>\
            <b>- Wrote comprehensive documentation</b> and onboarding guides improving cross-team adoption and maintainability.<br>"
        ],
        asi: [
            "<b>- Created standardized data definitions</b> across 10+ departments, ensuring consistent metrics and reporting.<br>\
            <b>- Built automated workflows</b> enabling self-service analytics and reducing dependency on engineering teams.<br>\
            <b>- Enforced robust data governance</b> improving reliability by 50% and reducing audit issues.<br>\
            <b>- Reduced manual interventions</b> through Python-based automation and validation scripts.<br>"
        ],
        zs: [
            "<b>- Authored internal whitepaper</b> on secure ML data pipelines, guiding architecture for future projects.<br>\
            <b>- Established CI/CD standards</b> eliminating deployment downtime and improving release velocity.<br>\
            <b>- Defined governance frameworks</b> with Collibra ensuring compliance and lineage tracking.<br>\
            <b>- Partnered with data science teams</b> to deliver production-ready datasets supporting ML model deployment.<br>"
        ],
        tcs: [
            "<b>- Led multi-phase modernization project</b> reducing ETL runtime by 40% through Spark optimization and AWS migration.<br>\
            <b>- Built streaming architecture</b> enabling near-real-time fraud detection and reducing decision latency by 35%.<br>\
            <b>- Worked cross-functionally</b> with risk, compliance, and analytics teams to align data solutions with business goals.<br>\
            <b>- Mentored junior engineers</b> on Spark tuning, code reviews, and best practices improving team efficiency by 25%.<br>"
        ],
        ci: [
            "<b>- Developed modular ETL frameworks</b> on AWS Lambda improving maintainability and reducing runtime errors.<br>\
            <b>- Optimized SQL and Python scripts</b> cutting query latency by 60% and improving dashboard responsiveness.<br>\
            <b>- Implemented automated QA pipelines</b> ensuring consistent data integrity across environments.<br>\
            <b>- Collaborated with product teams</b> to translate business logic into scalable data models.<br>"
        ]
    },
    ceo_cfo: {
        cigna: [
            "<b>- Identified $8M in avoidable spend annually</b> through advanced analytics and claims optimization.<br>\
            <b>- Improved data availability by 60%</b> enabling faster and more confident executive decision-making.<br>\
            <b>- Reduced manual review time by 55%</b> cutting operational costs and improving workforce efficiency.<br>\
            <b>- Delivered predictive insights</b> supporting proactive member engagement and risk management.<br>"
        ],
        asi: [
            "<b>- Improved reporting accuracy by 35%</b> supporting better budgeting and financial forecasting.<br>\
            <b>- Cut manual reporting time by 60%</b> reducing labor costs and accelerating monthly close cycles.<br>\
            <b>- Enhanced decision-making speed by 40%</b> through real-time dashboards and automated insights.<br>\
            <b>- Increased data reliability by 50%</b> ensuring consistent and trusted business reporting.<br>"
        ],
        zs: [
            "<b>- Enabled faster go-to-market strategies</b> for healthcare clients through real-world evidence analytics.<br>\
            <b>- Delivered 92% accurate predictive models</b> improving clinical trial targeting and reducing R&D costs.<br>\
            <b>- Reduced analytics turnaround time by 70%</b> accelerating insights for executive stakeholders.<br>\
            <b>- Ensured full HIPAA compliance</b> protecting patient data and maintaining client trust.<br>"
        ],
        tcs: [
            "<b>- Reduced fraud investigation time by 50%</b> through real-time data streaming and analytics automation.<br>\
            <b>- Consolidated 10+ banking data sources</b> into a unified AWS Lakehouse improving transparency and governance.<br>\
            <b>- Improved operational efficiency by 40%</b> through automated validation and compliance workflows.<br>\
            <b>- Enabled leadership visibility</b> into key financial metrics through centralized analytics.<br>"
        ],
        ci: [
            "<b>- Improved data refresh reliability</b> enabling faster business reporting and decision-making.<br>\
            <b>- Reduced latency by 60%</b> improving customer experience and operational responsiveness.<br>\
            <b>- Automated QA and validation</b> reducing manual oversight and ensuring consistent data accuracy.<br>\
            <b>- Delivered actionable insights</b> driving marketing and product strategy improvements.<br>"
        ]
    }
};

// Initialize persona system
(function initPersonaSystem() {
    // Check if persona is already selected
    let currentPersona = localStorage.getItem('mayur_persona');
    
    if (!currentPersona) {
        // Show persona selector on first visit
        showPersonaSelector();
    } else {
        // Load saved persona
        applyPersona(currentPersona);
    }
    
    // Add persona switcher button
    // addPersonaSwitcher();
})();

function showPersonaSelector() {
    const overlay = document.getElementById('personaOverlay');
    if (overlay) {
        overlay.classList.add('active');
    }
}

function hidePersonaSelector() {
    const overlay = document.getElementById('personaOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

function selectPersona(persona) {
    localStorage.setItem('mayur_persona', persona);
    hidePersonaSelector();
    applyPersona(persona);
}

function applyPersona(persona) {
    const data = PERSONA_DATA[persona];
    if (!data) return;
    
    // Update Cigna experience
    updateExperience('.cigna ul', data.cigna);
    
    // Update ASI experience
    updateExperience('.asi ul', data.asi);
    
    // Update ZS experience
    updateExperience('.zs ul', data.zs);
    
    // Update TCS experience
    updateExperience('.tcs ul', data.tcs);
    
    // Update ClickIndia experience
    updateExperience('.ci ul', data.ci);
    
    // Update introduction based on persona
    updateIntroduction(persona);
}

function updateExperience(selector, bullets) {
    const container = document.querySelector(selector);
    if (!container) return;
    
    container.innerHTML = bullets.map(bullet => 
        `${bullet}`
    ).join('');
}

function updateIntroduction(persona) {
    const introMap = {
        recruiter: {
            title: "Hire-ready. Proven. Built for production.",
            text: "5+ years delivering production-grade data platforms across healthcare and BFSI. Hands-on with Databricks, Spark, Snowflake, Kafka, Airflow, AWS, and Azure. Strong in Python, SQL, and PySpark with HIPAA-compliant experience.<br><br>US-based and ready to contribute from Day 1. Proven ability to integrate quickly into existing teams, deliver under tight SLAs, and maintain reliability at scale."
        },
        manager: {
            title: "Ship reliable data platforms, faster.",
            text: "5+ years building and scaling data platforms that deliver measurable impact. Proven record: 40% ETL runtime reduction, 60% data availability improvement, and 92% fraud detection accuracy. Deep expertise in AWS and Azure architecture, Kafka streaming, and cost optimization.<br><br>Strong focus on reliability, observability, and automation. Experienced in leading cross-functional initiatives that improve SLA adherence, reduce downtime, and accelerate delivery velocity."
        },
        lead: {
            title: "Own the path. Unblock the team.",
            text: "5+ years designing scalable data systems while enabling team growth. Authored internal best practices, established CI/CD standards, and built reusable frameworks improving delivery consistency.<br><br>Strong in code reviews, documentation, and mentoring. Partnered with product and infrastructure teams to streamline releases, reduce deployment downtime by 60%, and accelerate onboarding for new engineers."
        },
        ceo_cfo: {
            title: "Turn data into durable ROI.",
            text: "5+ years transforming data into measurable business value. Delivered $8M in cost savings, 40% operational efficiency gains, and 50% faster decision-making through analytics platforms.<br><br>Built systems that reduced fraud loss by 15%, ensured HIPAA and GDPR compliance, and enabled data-driven revenue growth. Focused on clear ROI, cost discipline, and sustainable data strategy execution."
        }
    };

    const metricsMap = {
        recruiter: {
            metrics: [
            { title: "TIME-TO-DEPLOY", value: "weeks → days" },
            { title: "PIPELINE RELIABILITY", value: "99.9%" },
            { title: "TEAM ONBOARDING", value: "1 week → 2 days" }
            ],
            care: [
            "Hands-on with Databricks, Spark, and Snowflake",
            "Proven production delivery across healthcare and BFSI",
            "Zero ramp-up — deploy-ready from Day 1"
            ]
        },

        manager: {
            metrics: [
            { title: "ETL RUNTIME", value: "-40%" },
            { title: "DATA AVAILABILITY", value: "+60%" },
            { title: "INCIDENT MTTR", value: "-35%" }
            ],
            care: [
            "Reliable, observable, and cost-optimized data pipelines",
            "CI/CD integration with automated validation and alerts",
            "Cross-team collaboration for faster delivery velocity"
            ]
        },

        lead: {
            metrics: [
            { title: "DEPLOYMENT DOWNTIME", value: "-60%" },
            { title: "CODE REVIEW COVERAGE", value: "100%" },
            { title: "TEAM PRODUCTIVITY", value: "+25%" }
            ],
            care: [
            "Reusable PySpark and Airflow frameworks for consistency",
            "Mentorship and onboarding through documented best practices",
            "Faster iteration cycles with CI/CD and quality gates"
            ]
        },

        ceo_cfo: {
            metrics: [
            { title: "TIME-TO-INSIGHT", value: "days → hours" },
            { title: "OPS COST", value: "-20%" },
            { title: "FRAUD LOSS", value: "-15%" }
            ],
            care: [
            "Self-serve BI with governance and auditability",
            "Marketing lift via predictive and propensity models",
            "Streaming fraud detection and anomaly triage"
            ]
        }
    };

    
    const intro = introMap[persona];
    if (!intro) return;
    
    const titleElement = document.querySelector('#about-card .title');
    const textElement = document.querySelector('#about-card .text-box p');
    const profileElement = document.getElementById("profileCard-text");

    const aboutLink = document.getElementById("about-link");
    const profileText = document.getElementById("profileCard-text");

    aboutLink.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Use setTimeout to check the state after the card animation completes
        setTimeout(() => {
            const aboutCard = document.getElementById('about-card');
            
            // Check if about-card is active or hidden
            if (aboutCard && aboutCard.classList.contains('active')) {
                // Card is ACTIVE - slide out the profile text
                profileText.classList.remove("slide-in-left");
                profileText.classList.add("slide-out-right");
            } else if (aboutCard && aboutCard.classList.contains('hidden')) {
                // Card is HIDDEN - slide in the profile text
                profileText.classList.remove("slide-out-right");
                profileText.classList.add("slide-in-left");
                
                // Clean up animation class after it finishes
                setTimeout(() => {
                    profileText.classList.remove("slide-in-left");
                }, 600);
            }
        }, 100); // Small delay to let the card state update
    });

    // Handle other menu links
    const otherLinks = document.querySelectorAll('.top-menu a:not(#about-link)');
    otherLinks.forEach(link => {
        link.addEventListener("click", () => {
            // When other links are clicked, always bring profile text back
            if (profileText.classList.contains("slide-out-right")) {
                profileText.classList.remove("slide-out-right");
                profileText.classList.add("slide-in-left");
                
                setTimeout(() => {
                    profileText.classList.remove("slide-in-left");
                }, 600);
            }
        });
    });

    if (profileElement) {
        profileElement.innerHTML = intro.title;
    }
        
    if (titleElement) {
        titleElement.textContent = intro.title;
    }

    if (textElement) {
        textElement.innerHTML = intro.text;
    }


    const metricsContainer = document.querySelector(".about-right");

    if (metricsContainer && metricsMap[persona]) {
        // Update metrics
        metricsMap[persona].metrics.forEach((m, i) => {
            const titleEl = document.querySelector(`#metric${i + 1} .metric-title`);
            const valueEl = document.querySelector(`#metric${i + 1} .metric-value`);
            if (titleEl) titleEl.textContent = m.title;
            if (valueEl) valueEl.textContent = m.value;
        });

        // Update "What you'll care about"
        metricsMap[persona].care.forEach((c, i) => {
            const careEl = document.getElementById(`care${i + 1}`);
            if (careEl) careEl.textContent = c;
        });
    }

}

function togglePersonaOverlay() {
    const overlay = document.getElementById('personaOverlay');
    overlay.classList.toggle('active');
    overlay.onclick = resetPersona;
}

function resetPersona() {
    // localStorage.removeItem('mayur_persona');
    location.reload();
}

// Make functions globally accessible
window.selectPersona = selectPersona;
window.resetPersona = resetPersona;