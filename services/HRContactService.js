const fs = require("fs");
const path = require("path");

class HRContactService {
  constructor() {
    this.hrContactsPath = path.join(__dirname, "..", "data", "hrDetails.json");
  }

  getHRContacts() {
    if (!fs.existsSync(this.hrContactsPath)) {
      throw new Error("HR contacts file not found");
    }
    return JSON.parse(fs.readFileSync(this.hrContactsPath, "utf-8"));
  }

  getUnsentContacts(hrContacts, sentEmails) {
    return hrContacts.filter(
      (hr) => hr.email && !sentEmails.includes(hr.email)
    );
  }
}

module.exports = HRContactService;
