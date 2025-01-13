const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const generateHTML = require("../utils/generateHTML");

class EmailService {
  constructor(emailUser, emailPass) {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });
  }

  loadSentEmails(sentEmailsPath) {
    if (fs.existsSync(sentEmailsPath)) {
      return JSON.parse(fs.readFileSync(sentEmailsPath, "utf-8"));
    }
    return [];
  }

  async sendEmail(hr) {
    const mailOptions = {
      from: `"Raj Kumar" <${process.env.EMAIL_USER}>`,
      to: hr.email,
      subject: `Application for Raj!`,
      text: `Hello ${hr.name},\n\n
      I hope this email finds you well. My name is Raj Kumar, and I am reaching out to explore opportunities within your Organisation where I can contribute my expertise as a React.js/MERN stack.\n\n
      I am a Front End Engineer with over five years of hands-on experience in designing and building user-centric, scalable web applications. My technical toolkit includes React.js, Next.js, JavaScript, AWS, and Node.js, among others. I have a proven track record of delivering projects that enhance user engagement and system performance, along with accolades such as "Star Performer of the Month" and winning corporate hackathons.\n\n
      Attached is my resume for your consideration. I would welcome the opportunity to discuss how my expertise aligns with you organisation's goals and vision. Please feel free to contact me at 9570296763 or email me at rajkumardev075@gmail.com.\n\n
      Thank you for taking the time to review my application. I look forward to the possibility of contributing to your team.\n\n
      Warm regards,\n
      Raj Kumar\n
      Phone: +91-9570296763\n
      Email: rajkumardev075@gmail.com`,
      html: generateHTML(hr),
      attachments: [
        {
          filename: "Raj-Kumar-Resume.pdf",
          path: path.join(__dirname, "..", "resume.pdf"),
        },
      ],
    };

    await this.transporter.sendMail(mailOptions);
  }
}

module.exports = EmailService;
