import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

type SendEmailParams = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

export async function sendEmail({ to, subject, text, html }: SendEmailParams) {
  const fromEmail = process.env.FROM_EMAIL || "notifications@example.com";
  
  const params = {
    Source: fromEmail,
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: "UTF-8",
      },
      Body: {
        Text: {
          Data: text,
          Charset: "UTF-8",
        },
        Html: {
          Data: html,
          Charset: "UTF-8",
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);
    return { success: true, messageId: result.MessageId };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}

export function generateUserConfirmationEmail(name: string) {
  const text = `
Hello ${name || "there"},

Thank you for joining the iLost waiting list! We're excited to have you on board.

We'll notify you as soon as we launch our service.

Best regards,
The iLost Team
`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #4f46e5; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #f9fafb; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to iLost!</h1>
    </div>
    <div class="content">
      <p>Hello ${name || "there"},</p>
      <p>Thank you for joining the iLost waiting list! We're excited to have you on board.</p>
      <p>We'll notify you as soon as we launch our service.</p>
      <p>Best regards,<br>The iLost Team</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} iLost. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  return {
    subject: "Welcome to the iLost Waiting List",
    text,
    html,
  };
}

export function generateAdminNotificationEmail(email: string, name?: string) {
  const text = `
New Waiting List Sign-up

Email: ${email}
Name: ${name || "Not provided"}
Date: ${new Date().toLocaleString()}
`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #4f46e5; color: white; padding: 10px; text-align: center; }
    .content { padding: 20px; background-color: #f9fafb; }
    .data-row { margin-bottom: 10px; }
    .label { font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Waiting List Sign-up</h2>
    </div>
    <div class="content">
      <div class="data-row">
        <span class="label">Email:</span> ${email}
      </div>
      <div class="data-row">
        <span class="label">Name:</span> ${name || "Not provided"}
      </div>
      <div class="data-row">
        <span class="label">Date:</span> ${new Date().toLocaleString()}
      </div>
    </div>
  </div>
</body>
</html>
`;

  return {
    subject: "New iLost Waiting List Sign-up",
    text,
    html,
  };
}
