# 🛡 SAGE — Secure Authentication Graph Engine

### Team Name: SAGE

Slogan: Smarter MFA. Safer Access. Stronger Identity.

---

## 1 | Problem Statement

Traditional MFA systems are reactive and rigid. Attackers increasingly bypass MFA using stolen credentials, spoofed devices, or behavioral mimicry. Current tools lack adaptability and contextual intelligence.

SAGE solves this by:

- Monitoring user authentication patterns (time, location, behavior)
    
- Capturing detailed session data like IP, MAC, and device traits
    
- Using LangGraph-based agents to analyze login context and detect suspicious activity
    
- Simulating user and attacker flows to adapt and evolve policy dynamically
    

---

## 2 | Key Applications

- Securing employee logins on enterprise platforms (e.g., internal dashboards, VPNs)
    
- Preventing account compromise in fintech, healthcare, and critical infrastructure systems
    
- Protecting developer tools like CI/CD platforms and code repositories
    
- Enforcing dynamic trust policies across distributed workforces
    
- Enabling graph-powered analytics for identity and access behavior
    

---

## 3 | What SAGE Tracks

- IP & Location
    
    - Public IP, ISP, ASN, geo-coordinates
        
- Device Metadata
    
    - MAC address, device ID, OS fingerprint, browser agent string
        
- Behavioral Metrics
    
    - Time-of-login, typing cadence, mouse entropy
        
    - Time since last session, and deviation from historic behavior
        
- Session Integrity
    
    - Prior login device match, token reuse, network changes
        
    - User-agent anomalies and concurrent session detection
        

---

## 4 | Tech Stack

- Data Capture: Python-based agent for logging IP, MAC, and device metadata
    
- ML/Behavior Engine: PyTorch and Scikit-learn for LSTM and clustering
    
- Graph Intelligence: Neo4j and LangGraph for session-device-user mapping
    
- API & Backend: FastAPI, Redis queues for async processing
    
- Simulation Engine: SimPy for simulating user and attacker login scenarios
    
- Frontend: React + Tailwind CSS for risk dashboards and alert panels
    
- DevOps: Docker containers, GitHub Actions for CI/CD, local PostgreSQL for logs
    

---

## 5 | Development Roadmap

- Phase 0: Define requirements, privacy guardrails, and ethical guardrails
    
- Phase 1: Develop collector agent to gather IP, MAC, and device data
    
- Phase 2: Implement behavior analysis engine using LSTM anomaly detection
    
- Phase 3: Set up LangGraph agents for session validation and risk scoring
    
- Phase 4: Design backend APIs and establish Neo4j graph schema
    
- Phase 5: Build analyst dashboard for visualizing login patterns and alerts
    
- Phase 6: Simulate login flows and tune detection thresholds
    

---

## 6 | Key Gaps Solved by SAGE

- Binds MFA to physical devices (MAC and OS-level traits), not just IPs
    
- Replaces rule-based logic with adaptive behavior models
    
- Uses graph structure for context-aware scoring and alerting
    
- Continuously learns from synthetic attack simulations (via SimPy)
    
- Embeds real-time feedback into analyst dashboards and triggers step-up authentication
    

---

## 7 | Team Roles

- Agent Engineer: Builds the lightweight workstation agent for IP/MAC tracking
    
- AI & Graph Engineer: Creates behavioral models and LangGraph agents
    
- Backend Engineer: Designs APIs, event queues, and Neo4j data pipeline
    
- Frontend & DevOps Engineer: Implements dashboard UI and handles CI/CD and container setup
    

---

## 8 | Example Scenario

- A user logs in at midnight from a different device
    
- The agent captures a new MAC address and unrecognized IP
    
- LangGraph traverses the graph and sees no prior links to this device
    
- Behavior model flags login as “high deviation” from typical session
    
- System automatically triggers a biometric step-up challenge
    
- The session is either verified or blocked based on outcome
    
- Manager dashboard is updated with incident summary
    

---
## Pictures
![Screenshot 2025-05-18 084646](https://github.com/user-attachments/assets/202e6908-61fe-4938-b1db-520ca3cc8a20)

![Screenshot 2025-05-18 111225](https://github.com/user-attachments/assets/bcdd73d2-1400-4b0f-b4d3-f847f6f3ea2e)


![Screenshot 2025-05-18 111240](https://github.com/user-attachments/assets/87e0f849-1b05-4d65-a52a-6f4907f6dfc2)




![Screenshot 2025-05-18 111305](https://github.com/user-attachments/assets/02341585-7344-484b-b2aa-b886e7c06180)




![Screenshot 2025-05-18 111325](https://github.com/user-attachments/assets/5d66d46a-7b4d-4a15-a73f-71f0b50a53de)






![Screenshot 2025-05-18 111354](https://github.com/user-attachments/assets/e96c4bcc-655e-4281-aa4a-d7cc7a69dbd4)




![Screenshot 2025-05-18 111418](https://github.com/user-attachments/assets/6838ccec-ca33-4e58-9c75-70ee11524cdf)


![Screenshot 2025-05-18 111440](https://github.com/user-attachments/assets/595a41f7-fe9c-429c-bc8f-b808724a89d5)



![Screenshot 2025-05-18 111534](https://github.com/user-attachments/assets/555fb1a8-8054-4cdd-9b86-68b61e908e0e)



![Screenshot 2025-05-18 111605](https://github.com/user-attachments/assets/23158d93-1557-4257-84e1-deb32091b50f)



![Screenshot 2025-05-18 111631](https://github.com/user-attachments/assets/9548f0b4-638a-425d-aa5b-296f789741cd)


![Screenshot 2025-05-18 111656](https://github.com/user-attachments/assets/63540844-8299-493d-a9cf-4e19109988c2)



![Screenshot 2025-05-18 111710](https://github.com/user-attachments/assets/d1a06e1e-c583-4b42-b87c-81226cb02e8f)

## 9 | Flow Map (Mind Map Style)



- * User Login Attempt*  
    → Capture input event (login request)
    
- * Collect Login Metadata*  
    → IP Address  
    → MAC Address  
    → Device ID & Browser Fingerprint  
    → Time & Location
    
- * Extract Behavioral Features*  
    → Time of login vs. historical average  
    → Typing speed / delay patterns  
    → Mouse movement entropy  
    → Session duration anomalies
    
- * LangGraph Risk Analysis*  
    → Traverse session-user-device graph  
    → Compare with previous sessions  
    → Apply anomaly detection model (LSTM / clustering)
    
- * Calculate Risk Score*  
    → If Low Risk →  Access Granted  
    → If Medium Risk →  Step-Up MFA (e.g., OTP, biometric)  
    → If High Risk →  Session Blocked + Alert Security Team
    
## 10 | Flowchart
```mermaid
flowchart TD
    A["User Login Attempt"]
    B["Collect Metadata<br>IP, MAC, Device ID, Geo, OS, Browser"]
    C["Extract Behavior<br>Typing cadence, Mouse entropy, Login time"]
    D["LangGraph Analysis<br>Traverse user-device-session graph"]
    E["Anomaly Detection<br>LSTM + Clustering"]
    F["Calculate Risk Score"]

    F -->|Score &lt; 30| G1["Low Risk<br>Access Granted"]
    F -->|30 ≤ Score &lt; 70| G2["Medium Risk<br>Step-up MFA"]
    F -->|Score ≥ 70| G3["High Risk<br>Block Session + Alert"]

    G1 --> H["Update Logs<br>Neo4j Graph DB"]
    G2 --> H
    G3 --> H

    A --> B --> C --> D --> E --> F

    style A fill:#4CAF50,stroke:#388E3C
    style B fill:#2196F3,stroke:#1976D2
    style C fill:#2196F3,stroke:#1976D2
    style D fill:#9C27B0,stroke:#7B1FA2
    style E fill:#FF9800,stroke:#F57C00
    style F fill:#F44336,stroke:#D32F2F
    style G1 fill:#4CAF50,stroke:#388E3C
    style G2 fill:#FFC107,stroke:#FFA000
    style G3 fill:#F44336,stroke:#D32F2F
    style H fill:#607D8B,stroke:#455A64
'''









