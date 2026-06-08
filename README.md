# Cloud-Based Student Data And File Management System

## Project Overview

The Cloud-Based Student Data And File Management System is a web-based application developed to securely store, manage, and access student information along with uploaded files using cloud computing technologies. The project integrates modern web development tools with Amazon Web Services (AWS) to provide a scalable, reliable, and efficient platform for student data and file management.

The system allows users to register, log in securely, submit student information, upload files to cloud storage, and access stored records through a centralized dashboard. By utilizing cloud services, the system ensures data availability, durability, and remote accessibility.

---

## Features

* User Registration and Login Authentication
* Secure Password Encryption using Bcrypt
* Student Information Management
* Cloud-Based File Upload and Storage
* Dashboard for Viewing Stored Records
* Amazon S3 Integration for File Storage
* Amazon DynamoDB Integration for Data Storage
* Secure Access Control
* Responsive and User-Friendly Interface

---

## Technology Stack

### Frontend

* HTML
* CSS

### Backend

* Node.js
* Express.js

### Cloud Services

* Amazon S3
* Amazon DynamoDB
* Amazon Web Services (AWS)

### Dependencies

| Package    | Purpose                               |
| ---------- | ------------------------------------- |
| Express.js | Backend web framework                 |
| Bcrypt     | Password hashing and encryption       |
| Multer     | File upload handling                  |
| Multer-S3  | Direct file upload to Amazon S3       |
| AWS SDK    | AWS cloud service integration         |
| Dotenv     | Environment variable management       |
| CORS       | Cross-Origin Resource Sharing support |

---

## System Workflow

1. Users visit the Home Page and explore available services.
2. Users can access the About Us page to learn about the institution and platform.
3. Interested users register by providing the required details.
4. Registered users log in using valid credentials.
5. After successful authentication, users are redirected to the Dashboard.
6. Users can fill out the student information form.
7. Users can upload files along with the submitted information.
8. Uploaded files are stored securely in Amazon S3.
9. Student information and file metadata are stored in Amazon DynamoDB.
10. Users can view submitted records and file links through the dashboard.

---

## Project Objectives

* To provide secure storage of student information.
* To implement cloud-based file management.
* To improve data accessibility and reliability.
* To demonstrate practical cloud computing implementation.
* To reduce dependency on local storage systems.
* To provide a scalable and efficient data management solution.

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/aaqib2005/Major-Project.git
cd Major-Project
```

### Install Required Packages

```bash
npm install express bcrypt multer multer-s3 aws-sdk dotenv cors
```

Or install all dependencies directly from package.json:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root directory and add:

```env
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=ap-south-1
```

---

## Running the Application

Start the server using:

```bash
node server.js
```

If a start script is configured in package.json:

```bash
npm start 
```
## Verify Installation

After starting the server, open your web browser and visit:

```text
http://localhost:3000
```

If the application is running successfully:

* The Home Page will be displayed.
* Users can navigate to the About Us page.
* New users can register an account.
* Registered users can log in using valid credentials.
* Users can submit student information through the form.
* Uploaded files will be stored in Amazon S3.
* Student information and file metadata will be stored in Amazon DynamoDB.
* Submitted records can be viewed through the dashboard interface.

You can also verify that the server is running by checking the terminal output for a successful startup message.



## Project Structure

```text
Major-Project/
│
├── homepage.html
├── about.html
├── login.html
├── signup.html
├── dashboard.html
├── form.html
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── uploads/
```

---

## Cloud Services Used

### Amazon S3

Amazon S3 is used to store uploaded files securely in the cloud. It provides high availability, scalability, and durability for file storage.

### Amazon DynamoDB

Amazon DynamoDB is used as a NoSQL database for storing user information and file metadata. It offers fast performance and seamless scalability.

---

## Security Features

* Password Encryption using Bcrypt
* Authentication-Based Access Control
* Secure Cloud Storage
* Environment Variable Configuration using Dotenv
* Restricted Access to Authorized Users

---

## Future Enhancements

* Multi-Factor Authentication (MFA)
* Admin Dashboard
* Real-Time Notifications
* Advanced Reporting and Analytics
* Improved User Interface using Modern Frameworks
* Deployment on AWS EC2
* Role-Based Access Control

---

## Conclusion

This project demonstrates the integration of frontend technologies, backend development, and cloud computing services to create a secure and scalable student management platform. The use of AWS services ensures reliable file storage, efficient data management, and improved scalability. The project serves as a practical implementation of cloud computing concepts and provides a foundation for future enhancements.

---

## Author

**Mohammad Aaqib**

Bachelor of Computer Applications (Cloud and Security)

---

## License

This project is developed for educational and academic purposes.
