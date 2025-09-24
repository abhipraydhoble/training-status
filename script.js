// Full syllabus: Day 1 to Day 50
const syllabus = {
  "Day 1": [
    "Introduction Software Industry",
    "SDLC - Waterfall and Agile Model",
    "Explain DevOps Syllabus",
    "Introduction to API, its types, and use cases",
    "What is Frontend vs backend",
    "Stages of application development [developer/tester/db/devops teams]"
  ],
  "Day 2": [
    "Introduction to SCM tool",
    "Difference Between Centralise-VCS and Distributed-VCS",
    "Introduction to GIT",
    "Explain Lifecycle of GIT",
    "GIT CLI instalation",
    "GIT Command (work on local-repo)",
    "git init, add, commit, logs, revert, restore, status"
  ],
  "Day 3": [
    "git branch, common types of branches, checkout, diff, merge",
    "Introduction to Remote Repo (GitHub)",
    "git clone, pull, push commands",
    "git init, config, remote"
  ],
  "Day 4": [
    "GITHUB DASHBOARD",
    "Difference between Public and Private Repo",
    "How to Search Public Repos",
    "Fork and Pull Requests",
    "Authentication methods (HTTP, SSH)"
  ],
  "Day 5": [
    "Difference between Github and Gitlab",
    "Difference between CE and EE Gitlab",
    "How to merge repo branches in gitlab",
    "How to resolve conflicts",
    "Explain IDE, install visual studio code, Auto Git",
    "Revision Session(ONLY SATURDAY) - Recap of all key concepts of GIT, GITHUB, GITLAB"
  ],
  "Day 6": [
    "Difference between Monolithic and MicroServices",
    "Difference between Traditional, Virtualization, and Containerization Deployment",
    "Intriduction to Containerization, Container, Image",
    "Introduction to Docker",
    "Difference between Docker CE and Docker EE",
    "Install Docker engine",
    "Run first container"
  ],
  "Day 7": [
    "Explain docker container commands",
    "Essential Commands for Container Management using Docker",
    "Experiment with Docker Containers - Create, Start, Stop, and Run",
    "Expose applications to the World",
    "Interact with Containers using 'exec'",
    "Inspects and Troubleshooting Steps in Docker",
    "docker run (-d, -p, -P, -e, --name), create, start, stop, rm, ps (-aq), exec (-it), inspect, cp, logs, stats"
  ],
  "Day 8": [
    "Introduction to docker images and its naming",
    "Introduction to Dockerhub and ECR",
    "docker image commands",
    "docker pull, login, push",
    "docker commit, tag, image rm, rmi, save, load, prune"
  ],
  "Day 9": [
    "Introduction to Docker Network",
    "Explain different network drivers",
    "docker network commands",
    "create, delete, run (--network)"
  ],
  "Day 10": [
    "Introduction to Docker Volume",
    "docker volume commands",
    "Create, delete, run (-v)"
  ],
  "Day 11": [
    "Introduction to Dockerfile",
    "FROM, LABEL, RUN, CMD, ENTRYPOINT, ENV, ARG, COPY, ADD, EXPOSE, USER, WORKDIR",
    "Docker build, push, pull"
  ],
  "Day 12": [
    "Create docker file for frontend and backend application",
    "Deploy three tier application deployment example"
  ],
  "Day 13": [
    "Brief Introduction to Docker Compose",
    "Deploy three tier application using Docker Compose",
    "Revision Session(ONLY SATURDAY) - Recap of all key concepts of Docker"
  ],
  "Day 15": [
    "Intriduction to Kubernetes",
    "Why we need orchestration tool",
    "Why kubernetes",
    "Architecture of kubernetes",
    "Lifecycle of the pods",
    "Enlist Cluster creation methods (minikube, kind, kubeadm, EKS, GKE, AKS, etc)"
  ],
  "Day 16": [
    "Create cluster using EKS",
    "Install kubectl, access EKS cluster",
    "Introduction to Pods, and service",
    "Main Container and Side Car Containers",
    "Run first Pod by kubectl run",
    "Expose pod using kubectl expose"
  ],
  "Day 17": [
    "Kubernetes network (intra-pod and inter-pod communication) with examples",
    "Pod IP, Container Port, Node Ip, Node Port, Loadbalancer"
  ],
  "Day 18": [
    "Introduction to YAML scripts",
    "Write manifest files for Pods and Services",
    "Explain concept of Namespace, ReplicationController, ReplicaSet"
  ],
  "Day 19": [
    "Deployments vs StatefulSet",
    "Write Manifests for Deployments and StatefulSet",
    "Explain DaemonSet"
  ],
  "Day 20": [
    "Store variables using ConfigMap and Secrets",
    "Achive Persistent Storage using PV and PVC, Dynamic Volume using EBS"
  ],
  "Day 21": [
    "Types of AutoScaling in k8s",
    "Write Manifests for HPA"
  ],
  "Day 22": [
    "Introduction to Ingress",
    "Install Nginx Ingress Controller using Menifests",
    "Write Manifest for Ingress (Path based routing and Name based routing)"
  ],
  "Day 23": [
    "Write manifests to deploy three tier application: HPA, Deployment, Service, Ingress",
    "Revision Session(ONLY SATURDAY) - Recap of all key concepts of Kubernetes",
    "HALF SYLLABUS EXAM(ONLY SATURDAY)"
  ],
  "Day 24": [
    "Introduction to IAC",
    "Why we need IAC (Difference between Shell Script, Ansible, and IAC tool)",
    "Introduction to Terraform",
    "Terraform Language (Basic Syntax)",
    "Enlist the Blocks used in Terraform Language"
  ],
  "Day 25": [
    "Install Terraform in Linux system",
    "Write first Terraform script to deploy EC2 instance",
    "Explain Terraform lifecycle",
    "Explain different files that are created in terraform lifecycle"
  ],
  "Day 26": [
    "Write terraform script to deploy Security Group",
    "Explain HEREDOC concept un UserData",
    "Explain (Provider, Resource, Variable, Data, Output) blocks in above example"
  ],
  "Day 27": [
    "Write a terraform script to deploy LoadBalancer and Autoscaling"
  ],
  "Day 28": [
    "Explain module concept",
    "Write module for VPC, Subnet, and EC2 instance",
    "Explain types of dependencies",
    "Explain Blocks (terraform, module, output)"
  ],
  "Day 29": [
    "Storing tfstate file on remote location",
    "Create multi environment script using .tfvar file"
  ],
  "Day 30": [
    "Explain concept of terraform workspace (Theory)",
    "Explain Loops (count, for-each, for)"
  ],
  "Day 31": [
    "Terraform Commands (Taint, Import, Destroy -t)",
    "Terraform Provisioners (remote, local, file)"
  ],
  "Day 32": [
    "Write a Terraform script to deploy eks cluster",
    "Terraform Revision (only Saturday)"
  ],
  "Day 33": [
    "Introduction to CI process",
    "Difference between continuous Delivery and Deployment",
    "Introduction to Jenkins",
    "Install Jenkins server"
  ],
  "Day 34": [
    "Create first free style job",
    "Install GIT plugin",
    "Create freestyle job to pull the source code"
  ],
  "Day 35": [
    "Install SSH Build Agent Plugin",
    "Create and add attach SSH agents to Master Jenkins",
    "Explain JOB Configuration, Parameterize Jobs"
  ],
  "Day 36": [
    "Install Pipeline plugin",
    "Scripted Pipeline vs Declarative Pipeline",
    "Write a basic 4 stage pipeline",
    "Add Pull stage"
  ],
  "Day 37": [
    "Install Maven",
    "Show creating Maven Project",
    "Explain Maven Dir Hierarchy, pom.xml file",
    "Explain Maven Phases",
    "Maven Clean Package to build .war artifact"
  ],
  "Day 38": [
    "Intgrate maven in jenkins",
    "Add Build Stage to Maven"
  ],
  "Day 39": [
    "Explain Sonarqube",
    "Explain QA Result (bugs, vulnerabilities, code smell, etc)",
    "Create sonarqube server",
    "Scan Project using maven",
    "Create Quality Gate to explain code QA Failure"
  ],
  "Day 40": [
    "Inegrate sonarqube with Jenkins",
    "Add Test stage",
    "create webhook with Sonarqube for qualigate wait"
  ],
  "Day 41": [
    "Store artifact (.war) to s3",
    "Add deploy stage"
  ],
  "Day 42": [
    "Create Infrastructure Pipeline with Pull, Test (tf plan), Deploy (tf apply) stage",
    "Create above pipeline to deploy EKS cluster"
  ],
  "Day 43": [
    "Deploy three tier application using pipeline on eks"
  ],
  "Day 44": [
    "Revision Session(ONLY SATURDAY) - Recap of all Key concepts covered Jenkins, Maven, Sonarqube"
  ],
  "Day 45": [
    "Introduction to Datadog",
    "Installing the Datadog Agent on Linux, Docker",
    "Introduction to the Datadog UI",
    "Introduction to Infrastructure Monitoring",
    "Monitoring Hosts",
    "Monitoring Docker and Kubernetes"
  ],
  "Day 46": [
    "Setting up Datadog agent on Kubernetes",
    "Host Maps and Container Maps",
    "Basic Integrations with AWS",
    "Understanding metrics in Datadog",
    "Types of metrics (gauge, counter, histogram)",
    "Collecting and visualizing metrics"
  ],
  "Day 47": [
    "Sending custom metrics to Datadog",
    "Building basic dashboards for metrics",
    "Creating custom dashboards",
    "Timeboards and Screenboards"
  ],
  "Day 48": [
    "Collecting logs with the Datadog agent",
    "Introduction to alerting in Datadog",
    "Creating monitors and alerts"
  ],
  "Day 49": [
    "Revision Session(ONLY SATURDAY) - Comprehensive Q&A to cover remaining doubts and final concepts review"
  ],
  "Day 50": [
    "EXAM(ONLY SATURDAY)"
  ]
};

// Populate day dropdown
const daySelect = document.getElementById('day');
Object.keys(syllabus).forEach(day => {
  const option = document.createElement('option');
  option.value = day;
  option.text = day;
  daySelect.appendChild(option);
});

// Populate topics checkboxes based on selected day
function populateTopics() {
  const day = document.getElementById('day').value;
  const topicsDiv = document.getElementById('topics');
  topicsDiv.innerHTML = '';

  if(day && syllabus[day]) {
    syllabus[day].forEach((topic, i) => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `topic${i}`;
      checkbox.value = topic;

      const label = document.createElement('label');
      label.htmlFor = `topic${i}`;
      label.innerText = topic;

      topicsDiv.appendChild(checkbox);
      topicsDiv.appendChild(label);
      topicsDiv.appendChild(document.createElement('br'));
    });
  }
}

// Generate the training update card
function generateUpdate() {
  const trainer = "Abhipray Dhoble";
  const batch = "OnCDEC-b29";
  const mode = "Online";
  const date = new Date().toISOString().split('T')[0];
  const day = document.getElementById('day').value;

  if(!day) { alert("Please select a day"); return; }

  const module = day; 

  // Get selected topics
  const topics = [];
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => topics.push(cb.value));

  if(topics.length === 0) { alert("Select at least one topic"); return; }

  const html = `
    <h1>📚 CDEC Training Update</h1>
    <p>📅 <strong>Training date:</strong> ${date}</p>
    <p>👨‍🏫 <strong>Instructor name:</strong> ${trainer}</p>
    <p>👥 <strong>Batch name:</strong> ${batch}</p>
    <p>💻 <strong>Training mode:</strong> ${mode}</p>
    <p>📖 <strong>Course module:</strong> ${module}</p>
    <p>📑 <strong>Module section:</strong> ${day}</p>
    <p>✅ <strong>Attendance:</strong> 19/30 students</p>

    <h3>📋 Topics Covered:</h3>
    <ul>
      ${topics.map(t => `<li>${t}</li>`).join('')}
    </ul>

    <footer>_Generated by CDEC Training Management System_</footer>
  `;

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = html;
  outputDiv.style.display = 'block';
}
