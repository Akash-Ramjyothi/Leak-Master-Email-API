<h1 align="center">Leak Master - Email API</h1>

<p align="center">
<img src="https://github.com/Akash-Ramjyothi/Leak-Master-Email-API/assets/54114888/83d7eaed-1af1-4f6e-a716-ad8b6810d058" width="180" height="180">
</p>

## 📜 Description:
Developed a Microservice-based Emailing-API that excels in rapid response, dispatching Alert notification emails to recipients within just 5 seconds of gas leak detection. These emails contain a precise server time stamp, offering indisputable evidence for insurance, warranty claims, investigations, etc. Triggerable via Postman or other clients, it ensures swift integration. Presently, the Leak-Master application initiates this API through the Android App for quick gas leak notifications.

## 📽 Sample Demo:
https://github.com/Akash-Ramjyothi/Leak-Master-Email-API/assets/54114888/028808d6-6b4c-468b-84d9-74b6466f45ff

## 🌎 Deployed Website:
```https://leak-master-email-api.onrender.com/send-email```

## 📱Leak Master App:
```https://github.com/Akash-Ramjyothi/Leak-Master-App```

## 🧠 Working of Project:
<p align="center">
<img src="https://github.com/Akash-Ramjyothi/Leak-Master-Email-API/assets/54114888/b0f50940-6625-40aa-a65e-4a822b3bc235" width="800">
</p>

## 🏗 Built With:
- Node.JS
- Express
- NodeMailer
- Render to deploy
- Microservice Architecture
- Postman to test standalone API

## 🧪 Steps to Use:
- Clone the repo.
- Use **```npm install```** to install all required packages.
- Use **```node index.js```** to run the API continuously on port 3000 (by default)
- In Postman, make a **POST** request to the url **```https://localhost:3000/send-emailsend-email```**.
- Make sure to give the request Body as,
```
{
  "recipientName": "<Name>",
  "recipientEmail": "<Valid Gmail address>"
}
```
- Click on Send in Postman.
- Change POST URL to **```https://leak-master-email-api.onrender.com/send-email```** to use deployed API.

## 💥 How to Contribute?

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) 

- Take a look at the Existing [Issues](https://github.com/Akash-Ramjyothi/Leak-Master-Email-API/issues) or create your own Issues!
- Wait for the Issue to be assigned to you after which you can start working on it.
- Fork the Repo and create a Branch for any Issue that you are working upon.
- Create a Pull Request which will be promptly reviewed and suggestions would be added to improve it.
- Add Screenshots to help me know what this Code is all about.

## 👦 Developed By:
<h2 align="center">Akash Ramjyothi</h2>
<p align="center">
  <a href="https://github.com/Akash-Ramjyothi"><img src="https://github.com/Akash-Ramjyothi/Leak-Master-Email-API/assets/54114888/ab473d4c-b456-42b3-a112-c35c875de989" width="150px" height="150px"/></a> 
    
<p align="center">
  <a target="_blank"href="https://www.linkedin.com/in/akash-ramjyothi/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="mailto:akash.ramjyothi@gmail.com?subject=Hello%20Akash,%20From%20Github"><img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.instagram.com/akash.ramjyothi/"><img src="https://img.shields.io/badge/instagram-%23D14836.svg?&style=for-the-badge&logo=instagram&logoColor=pink" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
  ☎️ PH:+91 8939928002.
</p>

## 🌐 References Used:
- https://www.youtube.com/watch?v=abw96dX-3bs
- https://www.youtube.com/watch?v=RnA4TdTGy5I
- https://www.youtube.com/watch?v=9zPZ9yJML6E
- https://www.youtube.com/watch?v=L46FwfVTRE0
