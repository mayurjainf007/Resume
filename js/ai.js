/**
 * AI Chat Assistant with Google Gemini
 * Using Cloudflare Worker as proxy
 */

class GeminiChat {
    constructor() {
        // Point to your Cloudflare Worker URL
        this.WORKER_URL = "https://gemini-proxy.mayurjain-mj96.workers.dev"; // CHANGE THIS to your actual worker URL
        
        this.messages = [];
        this.isTyping = false;
        this.conversationHistory = [];
        
        this.init();
    }

    init() {
        // DOM Elements
        this.chatToggle = document.getElementById('ai-chat-toggle');
        this.chatClose = document.getElementById('ai-chat-close');
        this.chatMinimize = document.getElementById('ai-chat-minimize');
        this.chatContainer = document.getElementById('ai-chat-container');
        this.chatInput = document.getElementById('ai-chat-input');
        this.chatSend = document.getElementById('ai-chat-send');
        this.messagesContainer = document.getElementById('ai-chat-messages');

        // Event Listeners
        this.chatToggle?.addEventListener('click', () => this.toggleChat());
        this.chatClose?.addEventListener('click', () => this.toggleChat());
        this.chatMinimize?.addEventListener('click', () => this.toggleChat());
        this.chatSend?.addEventListener('click', () => this.sendMessage());
        
        this.chatInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Auto-resize textarea
        this.chatInput?.addEventListener('input', () => {
            this.chatInput.style.height = 'auto';
            this.chatInput.style.height = Math.min(this.chatInput.scrollHeight, 120) + 'px';
        });

        // Suggestion chips
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('chip')) {
                const question = e.target.dataset.question;
                this.chatInput.value = question;
                this.sendMessage();
            }
        });

        // Track analytics
        this.trackEvent('chat_loaded');
    }

    toggleChat() {
        this.chatContainer.classList.toggle('ai-chat-open');
        this.chatContainer.classList.toggle('ai-chat-closed');
        
        if (this.chatContainer.classList.contains('ai-chat-open')) {
            this.chatInput?.focus();
            this.trackEvent('chat_opened');
        } else {
            this.trackEvent('chat_closed');
        }
    }

    async sendMessage() {
        const message = this.chatInput?.value.trim();
        if (!message || this.isTyping) return;

        // Add user message to UI
        this.addMessage(message, 'user');
        this.chatInput.value = '';
        this.chatInput.style.height = 'auto';

        // Track message
        this.trackEvent('message_sent', message.substring(0, 50));

        // Disable input while processing
        this.setTyping(true);

        try {
            const response = await this.callGeminiAPI(message);
            this.addMessage(response, 'ai');
            this.trackEvent('response_received');
        } catch (error) {
            console.error('Chat error:', error);
            this.addMessage(
                "I apologize, but I'm having trouble connecting right now. " +
                "Please try again in a moment or reach out to Mayur directly at " +
                "mayurjain333@gmail.com.",
                'ai'
            );
            this.trackEvent('error_occurred', error.message);
        } finally {
            this.setTyping(false);
        }
    }

    async callGeminiAPI(userMessage) {
        // Build the system prompt with Mayur's information
        const systemPrompt = `You are Mayur Jain's AI assistant on his portfolio website. Your role is to help visitors learn about Mayur's professional background, skills, and experience in a friendly, concise manner.

ABOUT MAYUR JAIN:

CURRENT ROLE:
- Data Engineer at Cigna Healthcare (July 2025 - Present)

EDUCATION:
- Master of Science in Computer Science, California State University, Long Beach (2023-2025)
  Coursework: Advanced AI, Data Visualization, Advanced Data Science, Cloud Infrastructure
- Bachelor of Technology in Information Technology, GGSIPU, New Delhi (2015-2019)
  Coursework: Python, DBMS, Machine Learning, Big Data

WORK EXPERIENCE:

1. Cigna Healthcare - Data Engineer (July 2025 - Present)
   [Current role - mention ongoing work]

2. Associated Student Inc. (Beach Shops) - Data Engineer & Analytics Assistant (March 2024 - May 2025)
   - Developed SQL/Python scripts improving reporting accuracy by 35%
   - Automated workflows using AWS and Python, cutting manual reporting by 60%
   - Built Power BI dashboards improving decision-making speed by 40%
   - Improved data reliability by 50% through governance and standardization

3. ZS Associates - Associate Consultant, Data Engineer (Sept 2022 - July 2023)
   - Led PySpark + AWS Glue pipelines for 100M+ HIPAA-compliant healthcare records
   - Defined governance frameworks using Collibra and AWS Lake Formation
   - Automated CI/CD using Terraform and GitHub Actions
   - Developed observability dashboards reducing data downtime by 25%
   - Authored whitepaper on secure ML data pipelines

4. Tata Consultancy Services - System Engineer, Data Engineer (July 2019 - Sept 2022)
   - Migrated legacy data warehouse to AWS Lakehouse (S3 + Redshift + Glue)
   - Engineered PySpark pipelines achieving 92% fraud detection accuracy
   - Implemented real-time streaming using Kafka and AWS Kinesis
   - Defined GDPR and SOX compliance policies using AWS IAM, KMS
   - Created secure Snowflake marts and dashboards

5. ClickIndia Infomedia - Software Development Engineer Intern (Aug 2018 - July 2019)
   - Developed Python ETL jobs on AWS Lambda and RDS
   - Optimized SQL queries reducing latency by 60%
   - Created automated QA validation scripts

TECHNICAL SKILLS:
- Programming: Python, SQL, PySpark, R, Git, Bash/Linux, Java, C++, Scala, JavaScript
- Data Science & Analytics: Pandas, NumPy, Matplotlib, Seaborn, Power BI, Tableau, Google Analytics
- Machine Learning: Scikit-learn, TensorFlow, PyTorch, OpenCV, NLP, Recommendation Engines
- Data Engineering: Apache Spark, Hadoop, Kafka, Airflow, Azure Data Factory, Databricks, Redshift
- Cloud & Deployment: AWS, Azure, GCP, Docker, Kubernetes, CI/CD, Jenkins
- Tools: Zaidyn, Dataiku, Collibra, ServiceNow, JIRA, VSCode

KEY PROJECTS:
1. RAG-ChatBot: RAG-based chatbot with 1,000+ policies, OpenAI LLMs, Weaviate vector search, Kafka, Spark, PostgreSQL, Docker, Azure. API responses < 500ms.

2. Heart Disease Detection: Real-time health data analysis using Kafka, Apache Spark, ML/DL models for heart disease prediction.

3. Real-Time Credit Card Fraud Detection: Apache Kafka, Spark Streaming, Flask dashboard with 92% accuracy.

4. Code Smell Detection: Automated code quality analysis for maintainability issues.

5. Emotion and Gender Classification: Neural network real-time video analysis, 89% accuracy, LSTM, SVM optimization.

6. Face Detection System: Deep learning multi-face detection, 95% accuracy, reduced false positives by 30%.

7. Twitter Sentiment Analysis Pipeline: Apache Airflow pipeline with AWS for Twitter data processing.

CERTIFICATIONS:
- Microsoft Azure: Multiple certifications
- Amazon Web Services: AWS certifications
- Google Cloud Platform: GCP certifications

BUSINESS SKILLS:
Data Analysis, Economics Understanding, Emotional Intelligence, Networking, Leadership, Business Management, Project Management, Financial Management, Communication & Negotiation, Financial Accounting

HOBBIES:
Reading, Listening to Music, Outdoor Adventures, Sports (Chess)

CONTACT INFORMATION:
- Email: mayurjain333@gmail.com
- Phone: +1 (562) 254-7817
- Location: Long Branch, NJ 07740
- LinkedIn: linkedin.com/in/mayurjain007
- GitHub: github.com/mayurjainf007
- Medium: medium.com/@mayurjain007
- Calendly: calendly.com/mayurjain333/30min

RESPONSE GUIDELINES:
- Keep responses concise (2-4 sentences typically, max 6 sentences)
- Be enthusiastic and professional
- Only discuss Mayur's professional background
- For off-topic questions: "I can only help with questions about Mayur's professional experience. Would you like to know about his skills, experience, or projects?"
- For availability/contact: "You can reach Mayur at mayurjain333@gmail.com, schedule a call on his Calendly, or connect on LinkedIn!"
- Use specific examples when relevant
- Be conversational and friendly
- If asked about specific technologies, relate them to Mayur's actual experience

Now respond to the user's question concisely and helpfully.`;

        // Build conversation context (last 5 exchanges)
        const recentHistory = this.conversationHistory.slice(-10);
        const context = recentHistory.map(msg => 
            `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
        ).join('\n\n');

        const fullPrompt = `${systemPrompt}\n\nConversation History:\n${context}\n\nUser: ${userMessage}\n\nAssistant:`;

        // Call Cloudflare Worker (which proxies to Gemini)
        const response = await fetch(this.WORKER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: fullPrompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 2048,
                }
            })
        });

        if (!response.ok) {
            throw new Error(`Worker Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Gemini API response:', data);

        const aiResponse = data?.candidates?.[0]?.content?.parts
            ?.map(p => p.text || '')
            .join(' ')
            .trim() || 'No response received.';

        // Store in conversation history
        this.conversationHistory.push(
            { role: 'user', content: userMessage },
            { role: 'assistant', content: aiResponse }
        );

        return aiResponse;
    }

    addMessage(text, sender) {
        // Store in messages array
        this.messages.push({ role: sender, content: text });

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = sender === 'user' ? 'user-message' : 'ai-message';

        const avatar = document.createElement('div');
        avatar.className = sender === 'user' ? 'user-avatar' : 'ai-avatar';
        avatar.innerHTML = sender === 'user' 
            ? '<i class="fas fa-user"></i>' 
            : '<i class="fas fa-robot"></i>';

        const bubble = document.createElement('div');
        bubble.className = sender === 'user' ? 'user-bubble' : 'ai-bubble';
        
        // Format text with line breaks and links
        const formattedText = this.formatMessage(text);
        bubble.innerHTML = formattedText;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(bubble);
        this.messagesContainer.appendChild(messageDiv);

        // Scroll to bottom with smooth animation
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }

    formatMessage(text) {
        // Convert line breaks
        let formatted = text.replace(/\n/g, '<br>');
        
        // Make emails clickable
        formatted = formatted.replace(
            /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
            '<a href="mailto:$1" target="_blank">$1</a>'
        );
        
        // Make URLs clickable
        formatted = formatted.replace(
            /https?:\/\/[^\s<]+/g,
            '<a href="$&" target="_blank" rel="noopener noreferrer">$&</a>'
        );
        
        return formatted;
    }

    setTyping(typing) {
        this.isTyping = typing;
        this.chatSend.disabled = typing;
        this.chatInput.disabled = typing;

        if (typing) {
            // Add typing indicator
            const typingDiv = document.createElement('div');
            typingDiv.className = 'ai-message typing-message';
            typingDiv.innerHTML = `
                <div class="ai-avatar"><i class="fas fa-robot"></i></div>
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `;
            this.messagesContainer.appendChild(typingDiv);
        } else {
            // Remove typing indicator
            const typingMsg = this.messagesContainer.querySelector('.typing-message');
            if (typingMsg) typingMsg.remove();
        }

        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    trackEvent(eventName, eventLabel = '') {
        // Google Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                'event_category': 'ai_chat',
                'event_label': eventLabel,
                'value': 1
            });
        }
        console.log(`Event tracked: ${eventName}`, eventLabel);
    }
}

// Initialize chat when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const geminiChat = new GeminiChat();
    console.log('AI Chat initialized');
});