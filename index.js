require("dotenv").config();
const path = require("path");
const fs = require("fs");
const HRContactService = require("./services/HRContactService");
const EmailService = require("./services/EmailService");
const Logger = require("./utils/Logger");

async function main() {
  const hrService = new HRContactService();
  const emailService = new EmailService(
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  );
  const sentEmailsPath = path.join(__dirname, "data", "sentMails.json");

  // Load previously sent emails
  const sentEmails = emailService.loadSentEmails(sentEmailsPath);

  // Get HR contacts
  const hrContacts = hrService.getHRContacts();

  // Filter out already sent emails
  const unsentContacts = hrService.getUnsentContacts(hrContacts, sentEmails);

  // Send emails
  const newlySentEmails = [];
  for (const hr of unsentContacts) {
    try {
      await emailService.sendEmail(hr);
      Logger.log(`Email successfully sent to ${hr.name} (${hr.email})`);
      newlySentEmails.push(hr.email);
    } catch (error) {
      Logger.error(`Error sending email to ${hr.email}:`, error);
    }
  }

  // Save all sent emails at once
  const updatedSentEmails = [...sentEmails, ...newlySentEmails];
  fs.writeFileSync(sentEmailsPath, JSON.stringify(updatedSentEmails, null, 2));

  Logger.log("All emails processed and saved.");
}

main().catch((error) => {
  Logger.error("An error occurred in the main process:", error);
  process.exit(1);
});
