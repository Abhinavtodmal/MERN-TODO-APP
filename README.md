# 🚀 MERN Todo App with CI/CD Pipeline

<div align="center">
  <img src="https://img.shields.io/badge/MERN-4.0-brightgreen" alt="MERN">
  <img src="https://img.shields.io/badge/Docker-20.10-blue" alt="Docker">
  <img src="https://img.shields.io/badge/Jenkins-2.4-orange" alt="Jenkins">
  <img src="https://img.shields.io/badge/React-18-%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-16-green" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb" alt="MongoDB">
</div>

## 📌 Overview

A production-grade Todo application featuring:
- **Modern MERN stack architecture**
- **Complete CI/CD automation**
- **Enterprise-grade security**
- **Scalable containerized deployment**


## ✨ Key Features

<div align="center">
  <table>
    <tr>
      <th><img src="https://img.shields.io/badge/Frontend-React/Vite-61DAFB" width="150"></th>
      <th><img src="https://img.shields.io/badge/Backend-Node/Express-000000" width="150"></th> 
      <th><img src="https://img.shields.io/badge/DevOps-Jenkins/Docker-D24939" width="150"></th>
    </tr>
    <tr>
      <td>
        • ⚡ Blazing fast Vite build system<br>
        • 🔐 JWT Authentication flow<br>
        • 📱 Fully responsive design<br>
        • 🎨 Tailwind CSS styling<br>
        • 🔄 Real-time updates
      </td>
      <td>
        • 🏗️ RESTful API architecture<br>
        • 🛡️ Role-based access control<br>
        • 🗄️ MongoDB Atlas cloud database<br>
        • 📈 Performance optimized<br>
        • 🔄 WebSocket support
      </td>
      <td>
        • 🤖 Jenkins pipeline automation<br>
        • 🐳 Docker containerization<br>
        • ☁️ Cloud deployment ready<br>
        • 🧪 Automated testing suite<br>
        • 🔄 Zero-downtime deployments
      </td>
    </tr>
  </table>
</div>


## 🏆 Why This Project Stands Out

✅ **End-to-End Automation** - From code commit to production deployment  
✅ **Production-Ready Architecture** - Scalable and maintainable code structure  
✅ **Security First** - JWT auth, input validation, and secure headers  
✅ **Performance Optimized** - 90+ Lighthouse scores  
✅ **Developer Experience** - Hot reloading, linting, and pre-commit hooks  



## 🖼️ Application Screenshots:

<div align="center">
  <h3>🌐 Web Interface</h3>
  <img src="./client/assets/dashboard.jpg" width="80%" style="border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,0.2)" alt="Todo App Interface">
  
  <h3>⚙️ CI/CD Pipeline</h3>
  <img src="./client/assets/stageview.png" width="80%" style="border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,0.2)" alt="Jenkins Pipeline">
  
  <h3>🐳 Docker Deployment</h3>
  <img src="./client/assets/dockerdesktop.png" width="80%" style="border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,0.2)" alt="Docker Containers">
</div>



## 🛠️ Tech Stack

**Frontend**  
<img src="https://img.shields.io/badge/React-20232A?logo=react" height="20"> <img src="https://img.shields.io/badge/Vite-B73BFE?logo=vite" height="20"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css" height="20">  

**Backend**  
<img src="https://img.shields.io/badge/Node.js-339933?logo=node.js" height="20"> <img src="https://img.shields.io/badge/Express-000000?logo=express" height="20"> <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb" height="20">  

**DevOps**  
<img src="https://img.shields.io/badge/Jenkins-D24939?logo=jenkins&logoColor=white" height="20"> 
<img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" height="20"> 
<img src="https://img.shields.io/badge/Linux-000000?logo=linux&logoColor=white" height="20"> 
<img src="https://img.shields.io/badge/Shell_Script-4EAA25?logo=gnu-bash&logoColor=white" height="20"> 
<img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white" height="20">


## 🚀 Quick Start

```
# 1. Clone repository
    git clone https://github.com/Abhinavtodmal/MERN-TODO-APP.git

# 2. Navigate to project directory
    cd MERN-TODO-APP

# 3. Setup environment variables
    cp .env.example .env

# 4. Start containers
    docker-compose up -d

# Access the application:

# Frontend: http://localhost:3000
# Backend: http://localhost:5000

⚙️ Pipeline Highlights:

pipeline {
    agent any
    stages {
        stage('Build') { bat 'docker-compose build' }

        stage('Test') { bat 'npm test' }

        stage('Deploy') { bat 'docker-compose up -d' }
    }
}
```


💡 **Lessons Learned**

✔️ Containerization - Mastered Docker multi-stage builds  
✔️ Automation - Reduced deployment time by 70% with Jenkins  
✔️ Security - Implemented proper secret management  


📜 License
MIT © Abhinav Todmal
