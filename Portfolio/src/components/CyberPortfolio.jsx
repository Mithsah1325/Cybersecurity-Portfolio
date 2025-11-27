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
                <a href="mailto:mithlesh.sah1803@gmail.com" className={darkMode ? 'text-green-500' : 'text-blue-500'}>
                  mithlesh.sah1803@gmail.com
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

        <Section title="ABOUT ME" icon={Shield}>
          <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
            <p className="text-base leading-relaxed">
              Information Security Analyst with 2+ years of hands-on experience in threat detection, incident response, and cloud security across enterprise environments, including DeepSeas (Cyber Defense) and Northern Kentucky University. Skilled in SIEM (Splunk, ELK, Devo), Python-based automation, and AWS/Azure security architecture. Improved MTTR by 30% through scalable detection pipelines and security automation. Demonstrated excellence in cross-functional collaboration, risk management, and process improvement to enhance compliance and cyber resilience
            </p>
          </div>
        </Section>

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
              <p className="text-sm">Jun 2025 - Present</p>
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
                Information Technology Assistant | Northern Kentucky University
              </h3>
              <p className="text-sm">Center for Information Security</p>
              <p className="text-sm">Jun 2023 - Jun 2025</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>• Led phishing awareness workshops and hands-on simulations for 50+ students, cutting phishing susceptibility by 90%.
                </li>
                <li>• Delivered lectures, demos, and mentoring to simplify complex cybersecurity concepts and strengthen student learning outcomes.</li>
                <li>• Conducted vulnerability assessments and implemented remediation, reducing campus security incidents by 40%.
                </li>
                <li>• Improved NIST SP 800-53 compliance by resolving 15+ network and firewall gaps, lowering institutional risk exposure.
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
                <li>• Conducted security audits and risk assessments, implementing mitigation strategies in an academic setting.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="PROJECTS & CYBERSECURITY LABS" icon={FileCode}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* Enterprise Log Analysis System */}
    <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <h3 className={`${darkMode ? 'text-green-400' : 'text-blue-400'} flex items-center gap-2`}>
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
        <li>Built a Splunk log analysis system ingesting 5GB+/day from 20+ servers via AWS S3 and Universal Forwarders.</li>
        <li>Created 10+ real-time alerts and dashboards detecting brute-force and access threats; reduced response time by 65%.</li>
        <li>Automated SPL-driven log monitoring and visualization, boosting efficiency by 40% and supporting SOC2 compliance.</li>
      </ul>
    </div>

    {/* Cybersecurity Awareness Training & Labs */}
    <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <h3 className={`${darkMode ? 'text-green-400' : 'text-blue-400'}`}>
        <a href="https://tryhackme.com/p/mithsah1325" target="_blank"
          rel="noopener noreferrer"
          className="underline flex items-center gap-1">Cybersecurity Awareness Training & Hands-on Labs (TryHackMe – Top 3% Ranked)
          <ExternalLink className="w-3 h-3" />
          </a>
      </h3>
      <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
        <li>Ranked in the Top 3% globally with 117+ completed labs in penetration testing, web exploitation, and network defense.</li>
        <li>Earned 21 badges/certificates across Linux, OWASP Top 10, API Security, Metasploit, Burp Suite, and Risk Management.</li>
        <li>Applied skills in real-world attack simulations including EternalBlue, phishing, Endpoint Security, and DevSecOps pipeline security.</li>
      </ul>
    </div>

    {/* Home Security Lab */}
    <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <h3 className={`${darkMode ? 'text-green-400' : 'text-blue-400'}`}>Home Security Lab</h3>
      <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
        <li>Developed a segmented home security lab using VirtualBox, pfSense, and Kali Linux for penetration testing.</li>
        <li>Simulated phishing campaigns and monitored network traffic with Wireshark and Snort (IDS).</li>
        <li>Gained hands-on experience identifying vulnerabilities, responding to attacks, and improving phishing training in NKU roles.</li>
      </ul>
    </div>

    {/* Honeypot System */}
    <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <h3 className={`${darkMode ? 'text-green-400' : 'text-blue-400'}`}>Honeypot System</h3>
      <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
        <li>Deployed a PostgreSQL honeypot in an isolated VirtualBox container with Fail2Ban for intrusion detection.</li>
        <li>Monitored real-time network traffic with Suricata (IDS/IPS/NSM).</li>
        <li>Integrated ELK Stack (Elasticsearch, Logstash, Kibana) and Graylog for log aggregation and monitoring.</li>
      </ul>
    </div>

    {/* Encryption Suite */}
    <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <h3 className={`${darkMode ? 'text-green-400' : 'text-blue-400'}`}>Encryption Suite</h3>
      <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
        <li>Developed an AI-based encryption/decryption system using Streamlit and AES encryption.</li>
        <li>Implemented cryptographic techniques with pycryptodome and base64 encoding for secure data transmission.</li>
        <li>Designed a user-friendly interface for seamless encryption, decryption, and key management.</li>
      </ul>
    </div>

    {/* Risk Management Policy Research Project */}
    <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <h3 className={`${darkMode ? 'text-green-400' : 'text-blue-400'}`}>Risk Management Policy Research Project</h3>
      <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
        <li>Conducted in-depth research on Cognizant’s risk management strategies, including business continuity and third-party risk assessment.</li>
        <li>Evaluated risk management tools and methods to mitigate financial, operational, and reputational risks.</li>
      </ul>
    </div>

    {/* Environmental Knowledge Learning Web App */}
    <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <h3 className={`${darkMode ? 'text-green-400' : 'text-blue-400'}`}>Environmental Knowledge Learning Web App</h3>
      <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
        <li>Built an Item Categorization Quiz for classifying objects as compost, trash, or recyclable with dynamic scoring.</li>
        <li>Developed a Chatbot using OpenAI/Gemini AI for item disposal guidance.</li>
        <li>Added a Plant Identification feature providing plant names, facts, and locations via uploaded photos.</li>
      </ul>
    </div>

    {/* Cybersecurity Awareness Game */}
    <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <h3 className={`${darkMode ? 'text-green-400' : 'text-blue-400'}`}>Cybersecurity Awareness Game</h3>
      <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
        <li>Developed an interactive game educating users on phishing, social engineering, and malware threats.</li>
      </ul>
    </div>


  </div>
</Section>


        <Section title="CERTIFICATIONS" icon={Award}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div className={`p-4 rounded ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <h3 className={`${darkMode ? 'text-green-400' : 'text-blue-400'}`}>
        <a 
          href="https://www.credly.com/badges/12bc16a3-3b39-41c0-9705-bc9cedbb7412/public_url"
        >
          CompTIA Security+
        </a>
      </h3>
      <p className="text-sm mt-1">Issued Nov 2025</p>
      <p className="text-sm">CompTIA</p>
    </div>       
             <div className={`p-4 rounded ${
              darkMode ? 'bg-zinc-900' : 'bg-white'
            }`}>
              <h3 className={`${
                darkMode ? 'text-green-400' : 'text-blue-400'
              }`}>
                Certified in Cybersecurity
              </h3>
              <p className="text-sm mt-1">Issued Nov 2025</p>
              <p className="text-sm">ISC2 • Credential ID: 3176074</p>
            </div>
                   
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
