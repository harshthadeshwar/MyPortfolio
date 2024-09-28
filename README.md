My Portfolio Web Application
Welcome to my portfolio! This web application showcases my work, skills, and projects. It’s built with HTML, CSS, and JavaScript, and is Dockerized for easy deployment and portability.

Features
Display of my skills, projects, and contact information
Responsive design for mobile and desktop
Simple and clean UI

Getting Started
Prerequisites
To run the project locally or using Docker, you need:

Git to clone the repository
Docker (if you want to run the app inside a Docker container)
Clone the Repository
To get started, clone the repository:
git clone https://github.com/harshthadeshwar/my-portfolio.git
cd my-portfolio

Running the App with Docker
This application is Dockerized, so you can run it in a container without worrying about dependencies or environment setup.

Pull the Docker Image from DockerHub
First, pull the pre-built Docker image from DockerHub:
docker pull harshthadeshwar/my-portfolio-app:latest

Run the Docker Container
Once the image is pulled, you can run it using this command:
docker run -d -p 5000:80 harshthadeshwar/my-portfolio-app:latest

This will start the app inside a Docker container and map port 80 in the container to port 5000 on your machine. You can access the portfolio at:
http://localhost:5000

License
This project is open-source and available under the MIT License.
