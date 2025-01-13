const generateHTML = ({ name, position, company }) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            color: #333;
        }

        .email-container {
            max-width: 700px;
            margin: 40px auto;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .email-header {
            background-color: #003580;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }

        .email-header h1 {
            margin: 0;
            font-size: 24px;
        }

        .email-header p {
            margin: 5px 0 0;
            font-size: 14px;
        }

        .email-body {
            padding: 30px;
        }

        .email-body h2 {
            font-size: 20px;
            margin-bottom: 10px;
            color: #003580;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 5px;
        }

        .email-body ul {
            padding: 0;
            list-style: none;
        }

        .email-body ul li {
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 1.6;
            display: flex;
            align-items: flex-start;
        }

        .email-body ul li::before {
            content: '•';
            color: #003580;
            font-size: 20px;
            font-weight: bold;
            margin-right: 10px;
            line-height: 1;
        }

        .email-body p {
            font-size: 16px;
            margin-bottom: 20px;
            line-height: 1.6;
        }

        .email-footer {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #777;
        }

        .email-footer a {
            color: #003580;
            text-decoration: none;
            font-weight: bold;
        }

        .job-title {
            font-weight: bold;
            margin-top: 15px;
            font-size: 18px;
            color: #333;
        }

        .job-duration {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <!-- Header Section -->
        <div class="email-header">
            <h1>Raj Kumar</h1>
            <p><a style="color: #ffffff; text-decoration: underline;" href="tel:+919570296763">+91 9570296763</a> | New Delhi, 110018 |
                <a  href="mailto:rajkumardev075@gmail.com"
                    style="color: #ffffff; text-decoration: underline;">rajkumardev075@gmail.com</a> | <a
                    style="color: #ffffff; text-decoration: underline;"
                    href="https://www.linkedin.com/in/raj-kumar-dev075/" target="_blank">LinkedIn</a> |
                <a style="color: #ffffff; text-decoration: underline;"
                    href="https://rajkumar-portfolio-five.vercel.app/" target="_blank">Portfolio</a>
            </p>
        </div>

        <!-- Body Section -->
        <div class="email-body">
            <p>Hi${name ? ` ${name}` : ""},</p>
            <p>
                I am reaching out to express my interest in the ${
                  position || "React.js/MERN Stack"
                } position at your esteemed organization.
                Below is a detailed overview of my experience and skills:
            </p>


            <h2>Skills</h2>
            <ul>
                <li><strong>Frontend:</strong> HTML, CSS, JavaScript, ReactJS, Redux, Tailwind</li>
                <li><strong>Backend:</strong> Node.js, Express.js, RESTful APIs</li>
                <li><strong>Database:</strong> SQL, MongoDB</li>
                <li><strong>DevOps:</strong> AWS (EC2, S3, RDS, Lambda), Docker, Redis</li>
            </ul>

            <h2>Professional Experience</h2>

            <div>
                <p class="job-title">Senior Associate Consultant</p>
                <p class="job-duration">Infosys | Gurugram (Mar 2022 – Present)</p>
                <ul>
                    <li>Developed web applications using microfrontend architecture, improving load times by 20%.</li>
                    <li>Collaborated with stakeholders to align design strategies with business objectives.</li>
                    <li>Reviewed pull requests and conducted knowledge transfer sessions for team members.</li>
                </ul>
            </div>

            <div>
                <p class="job-title">Software Development Engineer</p>
                <p class="job-duration">Callsmaster Services LLP | New Delhi (Feb 2020 – Mar 2022)</p>
                <ul>
                    <li>Built scalable web and mobile applications using React.js, Node.js, and AWS services.</li>
                    <li>Implemented CI/CD pipelines, improving deployment workflows by 30%.</li>
                    <li>Designed a role-based dashboard to enhance resource management efficiency.</li>
                </ul>
            </div>

            <div>
                <p class="job-title">Project Intern</p>
                <p class="job-duration">Callsmaster Services LLP | New Delhi (July 2019 – Dec 2019)</p>
                <ul>
                    <li>Developed a Coupons and Deals platform using Next.js, React.js, and MongoDB.</li>
                </ul>
            </div>

            <h2>Education</h2>
            <p>Bachelor of Computer Applications, S N S R K S College, Saharsa (Jan 2020)</p>

            <h2>Accomplishments</h2>
            <ul>
                <li>Rise Insta Award at Infosys (Sep 2022, Aug 2024)</li>
                <li>Star Performer of the Month at Infosys (Feb 2024)</li>
                <li>Hackathon Winner (May 2024)</li>
            </ul>

            <p>
                Thank you for taking the time to review my application. I am eager to bring my skills to your team and
                contribute
                to the success of your organization. I look forward to the opportunity to discuss my application
                further.
            </p>
        </div>

        <!-- Footer Section -->
        <div class="email-footer">
            <p>Let’s connect:</p>
            <p>
                <a href="https://www.linkedin.com/in/raj-kumar-dev075/" target="_blank">LinkedIn</a> |
                <a href="https://rajkumar-portfolio-five.vercel.app/" target="_blank">Portfolio</a>
            </p>
            <p>Contact: <a href="tel:+919570296763">+91 9570296763</a> |
                <a href="mailto:rajkumardev075@gmail.com">rajkumardev075@gmail.com</a>
            </p>
        </div>
    </div>
</body>

</html>
`;

module.exports = generateHTML;
