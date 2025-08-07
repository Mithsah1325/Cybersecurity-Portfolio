import React, { useState } from 'react';
import { Shield, Code, Lock, Database, Award, Cpu, 
         FileCode, Briefcase, Cloud, Sun, Moon, Users, ExternalLink } from 'lucide-react';

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
                Highland Heights, KY •{' '}
                <a href="mailto:sahm1@mymail.nku.edu" className={darkMode ? 'text-green-500' : 'text-blue-500'}>
                  sahm1@mymail.nku.edu
                </a>{' '}• 859-628-1803 •{' '}
                <a 
                  href="https://github.com/Mithsah1325" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={darkMode ? 'text-green-500' : 'text-blue-500'}
                >
                  GitHub
                </a>{' '}•{' '}
                <a 
                  href="https://www.linkedin.com/in/mithsah/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={darkMode ? 'text-green-500' : 'text-blue-500'}
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
            {/* Development */}
            <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <h3 className={`mb-2 ${darkMode ? 'text-green-400' : 'text-blue-400'}`}>
                Development
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• JavaScript, React.js, Node.js, Python, C/C++, Bash</li>
                <li>• SQL, MongoDB, PostgreSQL, Firebase</li>
                <li>• Terraform, GitLab CI/CD, Google Cloud SDK</li>
              </ul>
            </div>

            {/* Security */}
            <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <h3 className={`mb-2 ${darkMode ? 'text-green-400' : 'text-blue-400'}`}>
                Security
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• SIEM: Splunk, ELK, Devo, Microsoft Sentinel</li>
                <li>• EDR: CrowdStrike, SentinelOne, Carbon Black, Defender for Endpoint</li>
                <li>• MITRE ATT&CK, Threat Research, Detection Engineering</li>
                <li>• Security Tools: Wireshark, Metasploit, NMap, Burp Suite, Snort</li>
              </ul>
            </div>

            {/* Cloud & Infrastructure */}
            <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
              <h3 className={`mb-2 ${darkMode ? 'text-green-400' : 'text-blue-400'}`}>
                Cloud & Infrastructure
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• AWS, Azure, Google Cloud Platform (GCP)</li>
                <li>• Docker, Kubernetes, Linux Workloads</li>
                <li>• Automating deployments with Terraform, GitLab CI/CD</li>
                <li>• Cloud Control Plane Threat Research</li>
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
                Threat Detection Co-Op | DeepSeas
              </h3>
              <p className="text-sm">Jun 2025 - Present · 3 mos</p>
              <p className="text-sm">San Diego, California, United States · Remote</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>• Build virtual labs in AWS to simulate attacks and test detection rules across SentinelOne, Carbon Black, and CrowdStrike, improving threat coverage and reducing false positives.</li>
                <li>• Create Devo (SIEM) dashboards and automate reports to visualize threat trends, detection gaps, and optimize response workflows.</li>
              </ul>
            </div>

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
            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              } flex items-center gap-2`}>
                <a
                  href="https://github.com/Mithsah1325/splunk-aws-log-analysis.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline flex items-center gap-1"
                >
                  Enterprise Log Analysis System using Splunk & AWS
                  <ExternalLink className="w-3 h-3" />
                </a>
              </h3>
              <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                <li>Built Splunk log analysis system ingesting 5GB+/day from 20+ servers via AWS S3 and Universal Forwarders.</li>
                <li>Created 10+ real-time alerts and dashboards detecting brute-force and access threats; cut response time by 65%.</li>
                <li>Automated SPL-driven log monitoring and visualization, boosting efficiency by 40% and supporting SOC2 compliance.</li>
              </ul>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Home Security Lab
              </h3>
              <p className="text-sm mt-2">Developed a segmented home security lab using VirtualBox, pfSense, and Kali Linux for penetration testing, simulating phishing campaigns and monitoring network traffic with Wireshark and Snort (IDS). Gained hands-on experience in identifying vulnerabilities, responding to attacks, and applied knowledge to improve phishing training and reduce cybersecurity risks in NKU roles.</p>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Honeypot System
              </h3>
              <p className="text-sm mt-2">Deployed a PostgreSQL honeypot in an isolated VirtualBox container with Fail2Ban for intrusion detection and Suricata (IDS/IPS/NSM) for real-time network traffic monitoring. Integrated ELK Stack (Elasticsearch, Logstash, Kibana) and Graylog for log aggregation and monitoring.</p>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Encryption Suite
              </h3>
              <p className="text-sm mt-2">Developed an AI-based encryption and decryption system using Streamlit, integrating AES encryption for secure message handling and real-time decryption based on user input. Implemented cryptographic techniques with pycryptodome and base64 encoding to ensure secure transmission and retrieval of encrypted data. Designed an intuitive, user-friendly interface that allows seamless encryption and decryption processes with secure key management.</p>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Risk Management Policy Research Project
              </h3>
              <p className="text-sm mt-2">Conducted in-depth research on Risk Management strategies, focusing on Cognizant's approach to identifying, assessing, and mitigating risks across its operations. Analyzed the company's Risk Management Plan (RMP), including business continuity planning, asset protection, and third-party risk management. Evaluated risk management tools and methods used by major corporations to safeguard against financial, operational, and reputational risks.</p>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Environmental Knowledge Learning Web App
              </h3>
              <p className="text-sm mt-2">Developed an Item Categorization Quiz where users classify objects (e.g., bottle, glass jar, banana peels) as compost, trash, or recyclable, with dynamic scoring based on correct or incorrect answers. Built a Chatbot for Item Disposal using OpenAI and Gemini generative AI, enabling users to input an object and receive accurate information about its classification (recyclable, compostable, or trash). Implemented a Plant Identification feature allowing users to upload photos of plants, providing information such as the plant's name, scientific name, interesting facts, and common locations.</p>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Cybersecurity Awareness Game
              </h3>
              <p className="text-sm mt-2">Developed an interactive cybersecurity awareness game to educate users on phishing, social engineering, and malware threats through real-world attack simulations.</p>
            </div>
          </div>
        </Section>

        <Section title="CERTIFICATIONS" icon={Award}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Splunk: A SIEM Tool Bootcamp
              </h3>
              <p className="text-sm mt-1">Issued Aug 2025</p>
              <p className="text-sm">Thinkcloudly • Credential ID: TC-082025-5Y2KT68-4075</p>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Google Cybersecurity Certificate
              </h3>
              <p className="text-sm mt-1">Feb 2025 - Jan 2030</p>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                CS406: Information Security by Saylor Academy
              </h3>
              <p className="text-sm mt-1">Feb 2025 - Jan 2030</p>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Introduction to Generative AI
              </h3>
              <p className="text-sm mt-1">Aug 2024 - Jul 2029</p>
            </div>

            <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                CompTIA CYSA+ (CS0-003) by uCertify
              </h3>
              <p className="text-sm mt-1">Mar 2025 - Feb 2030</p>
            </div>
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