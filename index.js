const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/send-email", (req, res) => {
  const { recipientName, recipientEmail } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your email service provider (e.g., 'Gmail', 'Outlook', 'SMTP', etc.)
    auth: {
      user: "leak.master.no.reply@gmail.com", // Your email address
      pass: "ziln fmsy sttj razq", // Your email password (or generate an app-specific password)
    },
  });

  // To get the correct Time format
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  // Construct the email body as a string
  const gasLeakTime = new Date().toLocaleString("en-US", options);
  const emailBody = `
    Dear ${recipientName},
    Leak Master Sensor has detected "Gas Leak" in your appliance. Please take precautions.
    
    Gas Leak Time: ${gasLeakTime}
    
    --
    Thank You,
    Leak Master Team.
  `;

  // Email data
  const mailOptions = {
    from: "leak.master.no.reply@gmail.com", // Sender's email address
    to: recipientEmail, // Recipient's email address
    subject: "ALERT! Gas Leak Detected - Leak Master", // Email subject
    text: emailBody, // Email content
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Email sending failed" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
