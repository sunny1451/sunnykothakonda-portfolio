export const projectsData = [
  {
    id: "custom-vapt-lab",
    number: "01",
    name: "Custom VAPT Lab",
    category: "Penetration Testing / VAPT Lab",
    badge: "ISOLATED DEFENSIVE LAB",
    role: null,
    shortDescription: "Custom intentionally vulnerable laboratory environment designed for practicing network and web application VAPT in an isolated environment.",
    features: [
      "Built an isolated penetration-testing laboratory using vulnerable virtual machines for security assessment practice.",
      "Performed reconnaissance, host discovery, port scanning, service enumeration, and vulnerability identification.",
      "Practiced structured VAPT workflows from target discovery through security analysis in a controlled environment.",
      "Used Linux-based security tooling to analyze exposed services and understand common attack surfaces."
    ],
    technologies: ["Linux", "VirtualBox", "Nmap", "Vulnerable VMs", "Burp Suite", "OpenVAS"],
    githubUrl: "https://github.com/sunny1451/custom-vapt-lab",
    liveUrl: null,
    notice: "Strictly designed for authorized, isolated offline practice. Never exposed to public networks.",
    terminalSnippet: {
      command: "nmap -sV -sC -O 192.168.56.101 (Isolated VM)",
      output: [
        "[*] Host discovery active on host-only subnet",
        "[+] Target IP: 192.168.56.101 (Ubuntu 20.04 Lab VM)",
        "[+] Open ports: 21 (FTP), 22 (SSH), 80 (HTTP), 5000 (Flask)",
        "[✓] Identified misconfigured service banners & weak auth vectors",
        "[!] Controlled PoC executed safely within sandbox"
      ]
    },
    gradient: "linear-gradient(135deg, #1b092b, #381258)",
    accentColor: "#c77dff",
    borderColor: "rgba(199, 125, 255, 0.4)"
  },
  {
    id: "python-vapt-scanner",
    number: "02",
    name: "Python VAPT Scanner",
    category: "VAPT / Network Security",
    badge: "AUTOMATED NETWORK RECON",
    role: null,
    shortDescription: "Python-based security scanner developed to automate basic network reconnaissance and vulnerability assessment tasks.",
    features: [
      "Developed a Python-based security scanner to automate basic network reconnaissance and vulnerability assessment tasks.",
      "Integrated Nmap for host discovery, port scanning, and service enumeration.",
      "Automated repetitive scanning activities and organized scan results for security analysis.",
      "Applied Python scripting to improve efficiency in basic penetration-testing workflows."
    ],
    technologies: ["Python", "Nmap", "Linux", "Network Recon", "HTML Reporting"],
    githubUrl: "https://github.com/sunny1451/python-vapt-scanner",
    liveUrl: null,
    terminalSnippet: {
      command: "python3 vapt_scanner.py --target 192.168.1.0/24 --mode quick",
      output: [
        "[*] Initiating automated network reconnaissance scan...",
        "[+] Nmap host discovery completed: 8 active hosts found",
        "[+] Service enumeration: SSH, HTTP, HTTPS, SMB detected",
        "[✓] Automated scan output formatted into HTML report",
        "[!] Log generated: vapt_scan_report.html"
      ]
    },
    gradient: "linear-gradient(135deg, #091a24, #123447)",
    accentColor: "#00d2d3",
    borderColor: "rgba(0, 210, 211, 0.4)"
  },
  {
    id: "password-strength-tester",
    number: "03",
    name: "Password Strength Tester",
    category: "Cybersecurity / Security Tool",
    badge: "PASSWORD SECURITY ASSESSMENT",
    role: null,
    shortDescription: "Python-based password security assessment tool to evaluate password robustness and identify weak password characteristics.",
    features: [
      "Developed a Python-based password security assessment tool to identify weak password characteristics.",
      "Implemented checks for password length, character diversity, numbers, special characters, and common weak-password patterns.",
      "Calculates Shannon entropy to evaluate cryptographic randomness.",
      "Generated user-friendly feedback and recommendations for creating stronger passwords."
    ],
    technologies: ["Python", "Entropy Heuristics", "Pattern Detection", "CLI", "JSON/TXT"],
    githubUrl: "https://github.com/sunny1451/password-strength-tester",
    liveUrl: null,
    terminalSnippet: {
      command: "python3 password_tester.py --audit --entropy",
      output: [
        "[*] Evaluating password complexity and entropy heuristics...",
        "[+] Shannon Entropy: 4.82 bits/char (High)",
        "[+] Pattern analysis: No sequential or keyboard walk patterns",
        "[✓] Strength Score: 92/100 (Strong)",
        "[!] Recommendations & report generated"
      ]
    },
    gradient: "linear-gradient(135deg, #1f0808, #3b1010)",
    accentColor: "#ff4d4d",
    borderColor: "rgba(255, 77, 77, 0.4)"
  },
  {
    id: "secure-wipe-ai",
    number: "04",
    name: "SecureWipe AI",
    category: "Cybersecurity / Data Security / SIH",
    badge: "1ST PRIZE — SMART INDIA HACKATHON",
    role: "Team Leader",
    shortDescription: "1st Prize winning Smart India Hackathon project focused on secure data wiping for trustworthy IT asset recycling.",
    features: [
      "Secured 1st Prize at the college-level Smart India Hackathon.",
      "Led the team in developing and presenting a Secure Data Wiping project.",
      "Coordinated technical development, team activities, and project presentation.",
      "Engineered automated wiping workflows with verifiable cryptographic PDF certificate generation."
    ],
    technologies: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Express", "jsPDF"],
    githubUrl: "https://github.com/RoshanKumarJha18/Secure_wipe",
    liveUrl: null,
    terminalSnippet: {
      command: "npm run dev (device-wiping-frontend) & node server.js",
      output: [
        "[*] SecureWipe AI Sanitization Gateway active",
        "[+] Target storage detected: Multi-pass overwrite initiated",
        "[✓] Cryptographic wiping verification confirmed",
        "[!] Verifiable certificate created: SIH_Wipe_Cert.pdf"
      ]
    },
    gradient: "linear-gradient(135deg, #221206, #42240b)",
    accentColor: "#ffa502",
    borderColor: "rgba(255, 165, 2, 0.4)"
  },
  {
    id: "agrishield",
    number: "05",
    name: "AgriShield",
    category: "AI / Agriculture / Technology",
    badge: "AI CROP PROTECTION",
    role: null,
    shortDescription: "AI-powered agricultural crop protection platform providing proactive threat detection, field sensor analytics, and farmer authentication.",
    features: [
      "Field sensor data aggregation across weather, soil, and environmental metrics.",
      "AI-driven proactive crop anomaly and threat detection.",
      "Secure farmer registration and credential authentication via Firebase Auth.",
      "Cloud-synced farmer profile management using Cloud Firestore."
    ],
    technologies: ["React 18", "Vite", "Tailwind CSS", "Firebase Auth", "Cloud Firestore"],
    githubUrl: "https://github.com/sunny1451/Agrisheild",
    liveUrl: null,
    terminalSnippet: {
      command: "npm run dev (agrishield-ai)",
      output: [
        "[*] Vite ready in 218ms",
        "[+] Firebase Authentication initialized",
        "[✓] Sensing module telemetry synced"
      ]
    },
    gradient: "linear-gradient(135deg, #072213, #0f3d23)",
    accentColor: "#2ed573",
    borderColor: "rgba(46, 213, 115, 0.4)"
  },
  {
    id: "warehouse",
    number: "06",
    name: "Warehouse",
    category: "Software / Web Application",
    badge: "INVENTORY & LOGISTICS",
    role: null,
    shortDescription: "Interactive web-based warehouse management application featuring worker authentication, dock state monitoring, and product catalog management.",
    features: [
      "Warehouse worker authentication and role access portal.",
      "Interactive dock state tracking interface with visual occupancy indicators.",
      "Product catalog management and detailed item specification viewer.",
      "Responsive client-side architecture with modular HTML5 and modern CSS3."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM API", "Responsive Layout"],
    githubUrl: "https://github.com/sunny1451/warehouse",
    liveUrl: null,
    terminalSnippet: {
      command: "http-server ./warehouse -p 8080",
      output: [
        "[*] Serving /warehouse on port 8080",
        "[+] Dock State Monitor: Active",
        "[✓] Product Catalog: Loaded"
      ]
    },
    gradient: "linear-gradient(135deg, #1f1807, #3e300c)",
    accentColor: "#ffd166",
    borderColor: "rgba(255, 209, 102, 0.4)"
  }
];
