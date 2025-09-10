import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [activeSection, setActiveSection] = useState('home')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Smooth scrolling to sections
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(sectionId)
            setIsMenuOpen(false)
        }
    }

    // Handle scroll to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'projects', 'education', 'contact']
            const scrollPosition = window.scrollY + 100

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i])
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i])
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="portfolio">
            {/* Navigation */}
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-brand">
                        <span className="brand-text">Portfolio</span>
                    </div>

                    <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <button
                            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={() => scrollToSection('home')}
                        >
                            Home
                        </button>
                        <button
                            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={() => scrollToSection('about')}
                        >
                            About
                        </button>
                        <button
                            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                            onClick={() => scrollToSection('experience')}
                        >
                            Experience
                        </button>
                        <button
                            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={() => scrollToSection('projects')}
                        >
                            Projects
                        </button>
                        <button
                            className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                            onClick={() => scrollToSection('education')}
                        >
                            Education
                        </button>
                        <button
                            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact
                        </button>
                    </div>

                    <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Hi, I'm <span className="gradient-text">Lifa Mbangata</span>
                        </h1>
                        <p className="hero-subtitle">Mobile Developer & Problem Solver</p>
                        <p className="hero-description">
                            As a third-year ICT – Applications Development student at Cape Peninsula University of Technology, I'm passionate about using technology to solve real-world problems and create innovative, user-friendly software.

                            My skill set spans both frontend and backend development, with hands-on experience in building mobile apps and backend systems. I thrive in collaborative, agile teams and enjoy continuously learning through mentorship, testing methodologies, and working on impactful projects.
                        </p>
                        <div className="hero-buttons">
                            <button
                                className="btn btn-primary"
                                onClick={() => scrollToSection('projects')}
                            >
                                View My Work
                            </button>
                            <a
                                href="/LIFA_Mbangata_CV_(LM).pdf"
                                download="Lifa_Mbangata_CV.pdf"
                                className="btn btn-primary"
                            >
                                Download CV
                            </a>
                            <button
                                className="btn btn-primary"
                                onClick={() => scrollToSection('contact')}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="profile-image-container">
                            <img src="/PPort.JPG" alt="Lifa Mbangata" className="profile-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                I'm a passionate developer with a love for creating innovative solutions
                                and learning new technologies. With experience in modern mobile and backend development,
                                I enjoy tackling complex problems and turning ideas into reality.
                            </p>
                            <div className="skills">
                                <h3>Technologies I work with:</h3>
                                <div className="skill-tags">
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <img src="/images/Javalogo.png" alt="Java" className="skill-image" />
                                        </div>
                                        <span className="skill-name">Java</span>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <img src="/images/Kotlin.png" alt="Kotlin" className="skill-image" />
                                        </div>
                                        <span className="skill-name">Kotlin</span>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <img src="/images/Andriod.jpeg" alt="Android Development" className="skill-image" />
                                        </div>
                                        <span className="skill-name">Android Development</span>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <img src="/images/python.jpeg" alt="Python" className="skill-image" />
                                        </div>
                                        <span className="skill-name">Python</span>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <img src="/images/springboot.png" alt="Spring Boot" className="skill-image" />
                                        </div>
                                        <span className="skill-name">Spring Boot</span>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <img src="/images/sql.jpeg" alt="SQL" className="skill-image" />
                                        </div>
                                        <span className="skill-name">SQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="experience">
                <div className="container">
                    <h2 className="section-title">Experience</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3>Mobile Developer</h3>
                                <h4>CAPACITI</h4>
                                <span className="timeline-date">2025 - Present</span>
                                <p>
                                    Developing mobile applications and gaining hands-on experience with modern mobile development frameworks and methodologies in a professional environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects">
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image">
                                <img src="/images/custom.jpeg" alt="AI Resume Builder Screenshot" className="project-screenshot" />
                            </div>
                            <div className="project-content">
                                <h3>AI Resume Builder</h3>
                                <p><strong>Role:</strong> No-Code Developer - Built an intelligent resume generator using Base44 platform with GPT-based APIs to create personalized, professional resumes with dynamic content generation and formatting</p>
                                <div className="project-tech">
                                    <span>Base44</span>
                                    <span>GPT API</span>
                                    <span>No-Code</span>
                                    <span>AI Integration</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://app--resume-craft-ai-1aad638c.base44.app" target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">Live Demo</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <img src="/images/project.png" alt="Custom Content Generator Screenshot" className="project-screenshot" />
                            </div>
                            <div className="project-content">
                                <h3>Custom Content Generator</h3>
                                <p><strong>Role:</strong> No-Code Developer - Created a versatile AI-powered tool using Base44 platform that generates text, images, and code content using advanced machine learning models and APIs</p>
                                <div className="project-tech">
                                    <span>Base44</span>
                                    <span>AI APIs</span>
                                    <span>OpenAI</span>
                                    <span>No-Code</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://app--prompt-craft-ai-f32fa235.base44.app" target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">Live Demo</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <img src="/images/AIPro.png" alt="HealthMate AI Prototype Screenshot" className="project-screenshot" />
                            </div>
                            <div className="project-content">
                                <h3>HealthMate AI Prototype</h3>
                                <p><strong>Role:</strong> UX Designer & AI Researcher - Designed HealthMate, a personal health companion chatbot, using Figma to visualize its user flow and functionality for comprehensive health assistance</p>
                                <div className="project-tech">
                                    <span>Figma</span>
                                    <span>UI/UX Design</span>
                                    <span>AI Chatbot</span>
                                    <span>Health Tech</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://www.figma.com/design/amVybESCQ3lac4mf4ask1b/A1TEQ?node-id=0-1&p=f&t=STzubvYZNuIXQ0eH-0" target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">View Design</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="education">
                <div className="container">
                    <h2 className="section-title">Education</h2>
                    <div className="education-grid">
                        <div className="education-card">
                            <h3>Diploma in ICT (Applications Development)</h3>
                            <h4>Cape Peninsula University of Technology</h4>
                            <span className="education-date">2023 - 2026 (Currently in third year)</span>
                            <p>
                                <strong>Relevant Coursework:</strong> Object-Oriented Programming (Java/Python/Kotlin),
                                Data Structures & Algorithms, Software Design, Spring Boot, Database Management Systems,
                                SQL, Software Testing and Debugging, Agile Methodologies
                            </p>
                        </div>
                        <div className="education-card">
                            <h3>National Senior Certificate (Matric)</h3>
                            <h4>Alphendale Senior Secondary School</h4>
                            <span className="education-date">Completed: 2021</span>
                            <p>
                                Successfully completed secondary education, building a strong foundation
                                for pursuing higher education in Information and Communication Technology.
                            </p>
                        </div>
                    </div>

                    <div className="certifications">
                        <h3>Certifications</h3>
                        <div className="cert-list">
                            <div className="cert-item">
                                <div className="cert-info">
                                    <span className="cert-title">Developing Interpersonal Skills</span>
                                    <span className="cert-issuer">IBM • Aug 2025</span>
                                    <span className="cert-id">Credential ID: L1BGM164D4A2</span>
                                </div>
                                <a href="https://www.coursera.org/account/accomplishments/verify/L1BGM164D4A2" target="_blank" rel="noopener noreferrer" className="cert-link">Show credential</a>
                            </div>
                            <div className="cert-item">
                                <div className="cert-info">
                                    <span className="cert-title">Introduction to Artificial Intelligence (AI)</span>
                                    <span className="cert-issuer">IBM • Aug 2025</span>
                                    <span className="cert-id">Credential ID: RK4N68EW9USE</span>
                                </div>
                                <a href="https://www.coursera.org/account/accomplishments/verify/RK4N68EW9USE" target="_blank" rel="noopener noreferrer" className="cert-link">Show credential</a>
                            </div>
                            <div className="cert-item">
                                <div className="cert-info">
                                    <span className="cert-title">Introduction to Generative AI</span>
                                    <span className="cert-issuer">Google Cloud • Aug 2025</span>
                                    <span className="cert-id">Credential ID: WNW5WTWFUWNT</span>
                                </div>
                                <a href="https://www.coursera.org/account/accomplishments/verify/WNW5WTWFUWNT" target="_blank" rel="noopener noreferrer" className="cert-link">Show credential</a>
                            </div>
                            <div className="cert-item">
                                <div className="cert-info">
                                    <span className="cert-title">Verbal Communications and Presentation Skills</span>
                                    <span className="cert-issuer">Starweaver • Aug 2025</span>
                                    <span className="cert-id">Credential ID: IP7EFTFASYZ7</span>
                                </div>
                                <a href="https://www.coursera.org/account/accomplishments/verify/IP7EFTFASYZ7" target="_blank" rel="noopener noreferrer" className="cert-link">Show credential</a>
                            </div>
                            <div className="cert-item">
                                <div className="cert-info">
                                    <span className="cert-title">AI For Everyone</span>
                                    <span className="cert-issuer">DeepLearning.AI • Jul 2025</span>
                                    <span className="cert-id">Credential ID: W1YB5CXDWOQ9</span>
                                </div>
                                <a href="https://www.coursera.org/account/accomplishments/verify/W1YB5CXDWOQ9" target="_blank" rel="noopener noreferrer" className="cert-link">Show credential</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>Let's work together!</h3>
                            <p>
                                I'm always interested in new opportunities and exciting projects.
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>
                            <div className="contact-links">
                                <a href="mailto:lifa.mbangata@Capaciti.org.za" className="contact-link">
                                    <span className="contact-icon">✉</span>
                                    lifa.mbangata@Capaciti.org.za
                                </a>
                                <a href="tel:0614295842" className="contact-link">
                                    <span className="contact-icon">📞</span>
                                    061 429 5842
                                </a>
                                <a href="https://www.linkedin.com/in/lifa-mbangata-7b1853290" className="contact-link">
                                    <span className="contact-icon">💼</span>
                                    LinkedIn Profile
                                </a>
                                <a href="https://github.com/Lifa-Mbangata" className="contact-link">
                                    <span className="contact-icon">💻</span>
                                    GitHub Profile
                                </a>
                            </div>
                        </div>

                        <div className="contact-form">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows={5} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Lifa Mbangata. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default App