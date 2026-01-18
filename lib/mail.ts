import { resend } from "./resend";

export function htmlTemplate({ url, host }: { url: string; host: string }) {
  const brandColor = "#8b5cf6";
  return `
  <body style="background: #000; font-family: sans-serif; padding: 40px 0;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background: #09090b; border: 1px solid #27272a; border-radius: 24px; overflow: hidden;">
      <tr>
        <td style="padding: 40px; text-align: center;">
          <h1 style="color: #fff; font-size: 24px; font-weight: bold; margin-bottom: 24px;">Login to ${host}</h1>
          <p style="color: #a1a1aa; font-size: 16px; margin-bottom: 32px;">Click the button below to sign in securely. This link expires in 24 hours.</p>
          <a href="${url}" style="background: ${brandColor}; color: #fff; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: bold; display: inline-block;">Sign in to Dashboard</a>
          <p style="color: #52525b; font-size: 14px; margin-top: 40px;">If you didn't request this email, you can safely ignore it.</p>
        </td>
      </tr>
    </table>
  </body>
  `;
}

export const sendWelcomeEmail = async (email: string, name?: string) => {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: "Welcome aboard! 🚀",
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto;">
        <h1>Welcome${name ? `, ${name}` : ""}!</h1>
        <p>Thanks for joining <strong>Evines</strong>.</p>
        <p>Your account is all set. You can now start exploring your dashboard and building your next big idea.</p>
        
        <div style="margin: 35px 0;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" 
             style="background: #000; color: #fff; padding: 14px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
             Go to Dashboard
          </a>
        </div>

        <p>We're excited to see what you'll create!</p>

        <hr style="margin-top: 40px; border: none; border-top: 1px solid #eaeaea;" />
        <p style="font-size: 12px; color: #666;">
          Need help? Just reply to this email and our team will be happy to assist you.
        </p>
      </div>
    `,
  });
};

export const sendPaymentConfirmationEmail = async (
  email: string,
  planName: string,
) => {
  const formattedPlanName = planName.toUpperCase();

  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: `Payment Confirmed — Welcome to Evines ${formattedPlanName}! 💳`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto;">
        <div style="padding: 20px 0;">
          <h1 style="font-size: 24px; font-weight: bold; tracking: -0.02em;">Payment Successful.</h1>
          <p>Thank you for your trust! Your <strong>${formattedPlanName} Plan</strong> is now active, and you have full access to all premium features.</p>
        </div>

        <div style="background-color: #f9f9f9; border-radius: 12px; padding: 24px; margin: 20px 0; border: 1px solid #eee;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #666; margin-top: 0;">Subscription Summary</h2>
          <p style="margin: 10px 0; font-weight: bold;">Plan: Evines ${formattedPlanName}</p>
          <p style="margin: 10px 0;">Status: <span style="color: #10b981; font-weight: bold;">Active</span></p>
        </div>
        
        <div style="margin: 35px 0;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" 
             style="background: #000; color: #fff; padding: 14px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
             Start Building Now
          </a>
        </div>

        <p style="font-size: 14px; color: #444;">
          You can manage your subscription and download your invoices directly from your 
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/settings" style="color: #000; text-decoration: underline;">billing settings</a>.
        </p>

        <hr style="margin-top: 40px; border: none; border-top: 1px solid #eaeaea;" />
        <p style="font-size: 12px; color: #999;">
          If you didn't authorize this payment or have any questions about your order, please contact our support team immediately.
        </p>
      </div>
    `,
  });
};

export const sendCancellationEmail = async (email: string) => {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: "Subscription Cancelled — We're sorry to see you go",
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto;">
        <div style="padding: 20px 0;">
          <h1 style="font-size: 24px; font-weight: bold; tracking: -0.02em;">Subscription Cancelled.</h1>
          <p>We're confirming that your <strong>Pro Plan</strong> subscription has been cancelled as per your request.</p>
        </div>

        <div style="background-color: #fdf2f2; border-radius: 12px; padding: 24px; margin: 20px 0; border: 1px solid #fee2e2;">
          <p style="margin: 0; color: #b91c1c; font-weight: bold;">Important details:</p>
          <ul style="margin: 10px 0; padding-left: 20px; color: #444;">
            <li>You will not be charged again.</li>
            <li>You will keep your Pro access until the end of your current billing cycle.</li>
            <li>Your data will remain safe, but premium features will be locked after the period ends.</li>
          </ul>
        </div>
        
        <p>We'd love to know how we can improve. If you have a moment, simply reply to this email and let us know why you left.</p>

        <div style="margin: 35px 0;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/settings" 
             style="background: #f4f4f5; color: #18181b; padding: 12px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
             Reactivate Subscription
          </a>
        </div>

        <hr style="margin-top: 40px; border: none; border-top: 1px solid #eaeaea;" />
        <p style="font-size: 12px; color: #999;">
          Changed your mind? You can reactivate your plan at any time from your dashboard. Thanks for having been part of the Evines community.
        </p>
      </div>
    `,
  });
};

export const sendDeletionEmail = async (email: string) => {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: "Account Deleted — Evines",
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto;">
        <div style="padding: 20px 0;">
          <h1 style="font-size: 24px; font-weight: bold; tracking: -0.02em;">Account Successfully Deleted.</h1>
          <p>This email confirms that your <strong>Evines</strong> account has been permanently deleted at your request.</p>
        </div>

        <div style="background-color: #f4f4f5; border-radius: 12px; padding: 24px; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold; color: #444;">What this means:</p>
          <ul style="margin: 10px 0; padding-left: 20px; color: #666;">
            <li>All your personal data has been erased from our active databases.</li>
            <li>Any active subscriptions have been immediately terminated.</li>
            <li>You will no longer receive any automated emails or billing notifications from us.</li>
          </ul>
        </div>
        
        <p>We're sorry to see you go, but we respect your privacy. If you ever decide to come back, you can create a new account anytime at <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="color: #000; text-decoration: underline;">evines.bloomtpl.com</a>.</p>

        <hr style="margin-top: 40px; border: none; border-top: 1px solid #eaeaea;" />
        <p style="font-size: 12px; color: #999;">
          If you did not request this deletion, please contact our security team immediately at support@bloomtpl.com.
        </p>
      </div>
    `,
  });
};

export const sendPlanUpdateEmail = async (email: string, planName: string) => {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: `Plan Updated — Welcome to the ${planName} Plan! 🚀`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto;">
        <div style="padding: 20px 0;">
          <h1 style="font-size: 24px; font-weight: bold; tracking: -0.02em;">Congratulations!</h1>
          <p>Your subscription has been successfully upgraded to the <strong>${planName}</strong> plan.</p>
          <p>You now have immediate access to all the new features and increased limits included in your upgrade.</p>
        </div>

        <div style="background-color: #f0fdf4; border-radius: 12px; padding: 24px; margin: 20px 0; border: 1px solid #dcfce7;">
          <p style="margin: 0; color: #166534; font-weight: bold;">What happens next?</p>
          <ul style="margin: 10px 0; padding-left: 20px; color: #1a2e05;">
            <li>Your new features are already unlocked in your dashboard.</li>
            <li>Any price adjustment will be reflected on your next invoice.</li>
            <li>You can view your updated plan details in your settings anytime.</li>
          </ul>
        </div>
        
        <div style="margin: 35px 0;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" 
             style="background: #000; color: #fff; padding: 14px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
             Explore New Features
          </a>
        </div>

        <p>If you didn't authorize this change or have questions about the new features, just reply to this email. Our team is here to help!</p>

        <hr style="margin-top: 40px; border: none; border-top: 1px solid #eaeaea;" />
        <p style="font-size: 12px; color: #999;">
          Best regards,<br />
          The Evines Team
        </p>
      </div>
    `,
  });
};
