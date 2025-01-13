# Email Automation Project

This project automates sending personalized emails to HR contacts using Node.js. It is designed with SOLID principles to ensure scalability, maintainability, and readability.

## Features

- Sends personalized emails to HR contacts.
- Prevents duplicate emails by tracking previously sent emails.
- Uses modular and reusable services for email and contact management.
- Logs operations for easier debugging and monitoring.
- Supports Gmail as the email service.

## Project Structure

```plaintext
.
├── server.js                 # Main entry point for sending emails
├── services
│   ├── EmailService.js       # Handles email sending logic
│   ├── HRContactService.js   # Manages HR contact data
├── utils
│   ├── Logger.js             # Logging utility for debug and error messages
├── data
│   ├── hrDetails.json        # List of HR contacts with names and emails
│   ├── sentMails.json        # Tracks emails that have already been sent
├── resume.pdf                # Resume file to be sent as an attachment
├── generateHTML.js           # Generates HTML content for the email body
└── .env                      # Environment variables (e.g., email credentials)
```

## Prerequisites

- Node.js installed on your system.
- A Gmail account for sending emails.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the `.env` file:
   Create a `.env` file in the root directory and add the following:

   ```env
   EMAIL_USER=<your-gmail-address>
   EMAIL_PASS=<your-gmail-password>
   ```

4. Prepare the data files:

   - Add HR contact details in `data/hrDetails.json` with the following format:
     ```json
     [
       { "name": "John Doe", "email": "john.doe@example.com" },
       { "name": "Jane Smith", "email": "jane.smith@example.com" }
     ]
     ```
   - Ensure `data/sentMails.json` exists (create an empty array if it does not):
     ```json
     []
     ```

## Usage

Run the script to send emails:

```bash
node server.js
```

## Design Highlights

- **SOLID Principles:**

  - **Single Responsibility:** Separated responsibilities into distinct services (e.g., EmailService, HRContactService).
  - **Open/Closed:** Easy to extend email functionality without modifying existing code.
  - **Liskov Substitution:** Swappable implementations for email transport if needed.
  - **Interface Segregation:** Focused on minimal and specific interfaces for each service.
  - **Dependency Inversion:** Services depend on abstractions, not concretions.

- **Efficiency:** Writes to the `sentMails.json` file only once after sending all emails.

## Logs

- Logs are printed to the console for each email sent and in case of errors.

## Example HR Contact Data

Example `data/hrDetails.json`:

```json
[
  { "name": "Alice Johnson", "email": "alice.johnson@example.com" },
  { "name": "Bob Brown", "email": "bob.brown@example.com" }
]
```
