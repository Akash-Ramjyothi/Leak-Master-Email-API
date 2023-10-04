const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email service provider (e.g., 'Gmail', 'Outlook', 'SMTP', etc.)
  auth: {
    user: "leak.master.no.reply@gmail.com", // Your email address
    pass: "ziln fmsy sttj razq", // Your email password (or generate an app-specific password)
  },
});

// To get correct Time format
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
};

// Define dynamic data
const recipientName = "Akash R"; // Replace with the recipient's name
const gasLeakTime = new Date().toLocaleString("en-US", options); // Get the current date and time

// Construct the email body as a string
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
  to: "ar6781@srmist.edu.in", // Recipient's email address
  subject: "ALERT! Gas Leak Detected - Leak Master", // Email subject
  text: emailBody, // Email content
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
