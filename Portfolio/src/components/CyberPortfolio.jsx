import React, { useState } from 'react';
import { Shield, Code, Lock, Database, Award, Cpu, 
         FileCode, Briefcase, Cloud, Sun, Moon, Users } from 'lucide-react';

const CyberPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  const Section = ({ title, icon: Icon, children }) => (
    <div className={`mb-8 p-6 rounded-lg border ${
      darkMode ? 'bg-zinc-900 border-green-500/30' : 'bg-white border-blue-500/30'
    }`}>
      <div className="flex items-center gap-2 mb-4">
        <Icon className={`w-5 h-5 ${
          darkMode ? 'text-green-500' : 'text-blue-500'
        }`} />
        <h2 className={`text-xl font-mono ${
          darkMode ? 'text-green-500' : 'text-blue-500'
        }`}>
          {title}
        </h2>
      </div>
      {children}
    </div>
  );

  return (
    <div className={`min-h-screen font-mono ${
      darkMode ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'
    }`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 p-2 rounded-full ${
          darkMode ? 'bg-green-500/20' : 'bg-blue-500/20'
        }`}
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-green-500" />
        ) : (
          <Moon className="w-6 h-6 text-blue-500" />
        )}
      </button>

      <header className="border-b border-green-500/20 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4">
            <Shield className={`w-12 h-12 ${
              darkMode ? 'text-green-500' : 'text-blue-500'
            }`} />
            <div>
              <h1 className={`text-4xl font-bold mb-2 ${
                darkMode ? 'text-green-500' : 'text-blue-500'
              }`}>
                MITHLESH SAH
              </h1>
              <p className={darkMode ? 'text-green-400' : 'text-blue-400'}>
                Cybersecurity Specialist & Full-Stack Developer
              </p>
              <p className="text-sm mt-2">
          Highland Heights, KY •{" "}
  <a href="mailto:sahm1@mymail.nku.edu" className="text-green-500' : 'text-blue-500">
    sahm1@mymail.nku.edu
  </a> • 859-628-1803 •{" "}
  <a 
    href="https://github.com/Mithsah1325" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-green-500' : 'text-blue-500"
  >
    GitHub
  </a> •{" "}
  <a 
    href="https://www.linkedin.com/in/mithsah/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-green-500' : 'text-blue-500"
  >
    LinkedIn
  </a>
</p>

            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <Section title="EDUCATION" icon={Award}>
          <div className={`p-4 rounded ${
            darkMode ? 'bg-zinc-900' : 'bg-white'
          }`}>
            <h3 className={`text-lg ${
              darkMode ? 'text-green-400' : 'text-blue-400'
            }`}>
              Northern Kentucky University
            </h3>
            <p>Bachelor of Science in Cybersecurity</p>
            <p className="text-sm">Minor in Computer Science • GPA: 3.6</p>
            <p className="text-sm mt-2">President's List • EDGE Award • Dean's List</p>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Relevant Coursework:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Risk Management Planning",
                  "Unix System",
                  "Software Security",
                  "Risk Analysis",
                  "Software Design",
                  "LINUX Administration",
                  "Database Programming",
                  "Network Security"
                ].map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span>• {course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="TECHNICAL ARSENAL" icon={Code}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`mb-2 ${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Development
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  JavaScript, React.js, Node.js, Python, C/C++
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  SQL, MongoDB, PostgreSQL 
                </li>
              </ul>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`mb-2 ${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Security
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  IDS/IPS, SIEM (Splunk, ELK)
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Security Tools like Wireshark, Metasploit, NMap, Burp Suite
                </li>
              </ul>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`mb-2 ${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Cloud
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  AWS, Azure, Google Cloud
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  Docker, Kubernetes
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="EXPERIENCE" icon={Briefcase}>
          <div className="space-y-4">
            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Secure Web Development Assistant | Northern Kentucky University
              </h3>
              <p className="text-sm">Center for Information Security</p>
              <p className="text-sm">Jun 2024 - Present</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>• Conducted security audits and risk assessments, implementing mitigation strategies in an academic setting.
                </li>
                <li>• Performed NIST SP 800-53-aligned audits, resolving 15+ compliance gaps in firewall configurations and
                network protocols</li>
                <li>• Develop an AI-based secure RAG (Retrieval-Augmented Generation) chatbot for an upper-level Risk Management class, funded by the National Science Foundation (NSF).
                </li>
              </ul>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Cybersecurity Teaching Assistant | Northern Kentucky University
              </h3>
              <p className="text-sm">Aug 2024 - Dec 2024</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>• Utilized strong verbal communication skills to conduct phishing awareness training for 50+ students.
                </li>
                <li>• Led hands-on phishing awareness workshops for 50+ students, achieving a 90% reduction in susceptibility rates through practical simulations.
                </li>
                <li>• Performed NIST SP 800-53-aligned audits, resolving 15+ compliance gaps in firewall configurations and
network protocols.
</li>         
                <li>• Conducted security audits and risk assessments, implementing mitigation strategies in an academic setting.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="PROJECTS" icon={FileCode}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Home Security Lab",
                desc: "Developed a segmented home security lab using VirtualBox, pfSense, and Kali Linux for penetration testing, simulating phishing campaigns and monitoring network traffic with Wireshark and Snort (IDS). Gained hands-on experience in identifying vulnerabilities, responding to attacks, and applied knowledge to improve phishing training and reduce cybersecurity risks in NKU roles."
              },
              {
                title: "Honeypot System",
                desc: "Deployed a PostgreSQL honeypot in an isolated VirtualBox container with Fail2Ban for intrusion detection and Suricata (IDS/IPS/NSM) for real-time network traffic monitoring. Integrated ELK Stack (Elasticsearch, Logstash, Kibana) and Graylog for log aggregation and monitoring."
              },              
              {
                title: "Encryption Suite",
                desc: "Developed an AI-based encryption and decryption system using Streamlit, integrating AES encryption for secure message handling and real-time decryption based on user input.Implemented cryptographic techniques with pycryptodome and base64 encoding to ensure secure transmission and retrieval of encrypted data. Designed an intuitive, user-friendly interface that allows seamless encryption and decryption processes with se cure key management."
              },
              {
                title: "Risk Management Policy Research Project",
                desc: "Conducted in-depth research on Risk Management strategies, focusing on Cognizant's approach to identifying, assessing, and mitigating risks across its operations. Analyzed the company's Risk Management Plan (RMP), including business continuity planning, asset protection, and third-party risk management. Evaluated risk management tools and methods used by major corporations to safeguard against financial, operational, and reputational risks."
              },
              {
                title: "Environmental Knowledge Learning Web App",
                desc: "Developed an Item Categorization Quiz where users classify objects (e.g., bottle, glass jar, banana peels) as compost, trash, or recyclable, with dynamic scoring based on correct or incorrect answers. Built a Chatbot for Item Disposal using OpenAI and Gemini generative AI, enabling users to input an object and receive accurate information about its classification (recyclable, compostable, or trash). Implemented a Plant Identification feature allowing users to upload photos of plants, providing information such as the plant’s name, scientific name, interesting facts, and common locations."
              },
              {
                title: "Cybersecurity Awareness Game",
                desc: "Developed an interactive cybersecurity awareness game to educate users on phishing, social engineering, and malware threats through real-world attack simulations."
              }              
            ].map((project, idx) => (
              <div key={idx} className={`p-4 rounded ${
                darkMode ? 'bg-zinc-900' : 'bg-white'
              }`}>
                <h3 className={`${
                  darkMode ? 'text-green-400' : 'text-blue-400'
                }`}>
                  {project.title}
                </h3>
                <p className="text-sm mt-2">{project.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="CERTIFICATIONS" icon={Award}>
          <div className="space-y-4">
            {[
              {
                title: "Google Cybersecurity Certificate",
                period: "Feb 2025 - Jan 2030"
              },
             {
                title: "CS406: Information Security by Saylor Academy",
                period: "Feb 2025 - Jan 2030"
              },
              {
                title: "Introduction to Generative AI",
                period: "Aug 2024 - Jul 2029"
              },
              {
                title: "CompTIA CYSA+ (CS0-003) by uCertify",
                period: "Mar 2025 - Feb 2030"
              }
            ].map((cert, idx) => (
              <div key={idx} className={`p-4 rounded ${
                darkMode ? 'bg-zinc-900' : 'bg-white'
              }`}>
                <h3 className={`${
                  darkMode ? 'text-green-400' : 'text-blue-400'
                }`}>
                  {cert.title}
                </h3>
                <p className="text-sm mt-1">{cert.period}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="LEADERSHIP" icon={Users}>
          <div className="space-y-4">
            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Kentucky Cybersecurity Forensic Conference
              </h3>
              <p className="text-sm">Publicity Chair</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Coordinated marketing reaching 1000+ professionals</li>
                <li>• Managed social media campaigns</li>
                <li>• Coordinated Cyber Symposium 2024</li>
                <li>• Led AI/Cybersecurity workshops on Securing Your Cloud Environment with 100+ attendees</li>
              </ul>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                NKU Data Science Club
              </h3>
              <p className="text-sm">Executive Board Member</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Led AI/Cybersecurity workshops</li>
                <li>• Organized hackathon with 20+ teams</li>
              </ul>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-green-500/20 py-6 text-center">
        <p className={darkMode ? 'text-green-500/60' : 'text-blue-500/60'}>
          [SECURED BY MITHLESH SAH]
        </p>
      </footer>
    </div>
  );
};

export default CyberPortfolio;
