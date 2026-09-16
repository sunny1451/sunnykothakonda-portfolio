export const skillsData = {
  resumeCategorized: [
    {
      category: "Penetration Testing",
      skills: ["Reconnaissance", "Enumeration", "Vulnerability Assessment", "Network Scanning", "Port Scanning"]
    },
    {
      category: "Web Application Security",
      skills: ["OWASP Top 10", "SQL Injection", "Cross-Site Scripting (XSS)", "Web Application VAPT", "Burp Suite"]
    },
    {
      category: "Security Tools",
      skills: ["Nmap", "Burp Suite", "Wireshark", "OpenVAS / Greenbone"]
    },
    {
      category: "Programming",
      skills: ["Python", "Object-Oriented Programming", "Data Structures & Algorithms"]
    },
    {
      category: "Networking",
      skills: ["TCP/IP", "Network Scanning", "Port Scanning", "Service Enumeration", "Cisco Packet Tracer"]
    },
    {
      category: "Operating Systems & Development",
      skills: ["Linux", "Git", "GitHub", "VirtualBox"]
    }
  ],
  primaryTools: [
    { name: "Burp Suite", category: "Web App VAPT", level: "Primary", highlight: true },
    { name: "Nmap", category: "Network Recon", level: "Primary", highlight: true },
    { name: "Wireshark", category: "Traffic Analysis", level: "Proficient", highlight: true },
    { name: "OpenVAS / Greenbone", category: "Vuln Scanning", level: "Proficient", highlight: true },
    { name: "Python", category: "Security Automation", level: "Proficient", highlight: true },
    { name: "Linux / Kali", category: "OS & Tooling", level: "Proficient", highlight: true }
  ],
  methodology: [
    {
      step: "01",
      title: "Reconnaissance & OSINT",
      desc: "Scoping target perimeter, active & passive discovery, service enumeration, and attack surface mapping."
    },
    {
      step: "02",
      title: "Network & Port Scanning",
      desc: "Nmap TCP/IP host discovery, banner grabbing, service identification, and protocol analysis."
    },
    {
      step: "03",
      title: "Vulnerability Assessment",
      desc: "OWASP Top 10 evaluation, SQLi/XSS parameters analysis, and OpenVAS/Greenbone automated scans."
    },
    {
      step: "04",
      title: "Exploitation & PoC",
      desc: "Controlled vulnerability verification in authorized lab setups using Burp Suite and custom scripts."
    },
    {
      step: "05",
      title: "Reporting & Evidence",
      desc: "Documenting findings with risk ratings, clear reproduction steps, and actionable technical evidence."
    },
    {
      step: "06",
      title: "Remediation Guidance",
      desc: "Providing concrete mitigation guidance to harden systems against potential attack vectors."
    }
  ]
};
