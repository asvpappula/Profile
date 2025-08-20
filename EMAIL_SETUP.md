# Email Setup for Contact Form

The contact form now sends emails directly to your Gmail account. Follow these steps to set it up:

## 1. Enable 2-Factor Authentication
First, make sure 2-factor authentication is enabled on your Gmail account:
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled

## 2. Generate App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "2-Step Verification"
3. Scroll down and click on "App passwords"
4. Select "Mail" as the app and "Other" as the device
5. Enter "Portfolio Contact Form" as the device name
6. Copy the generated 16-character password

## 3. Update Environment Variables
1. Open the `.env.local` file in your project root
2. Replace `your_gmail_app_password_here` with the app password you just generated
3. Make sure `EMAIL_USER` is set to `pappula.asv@gmail.com`

## 4. Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your Gmail inbox for the message

## Security Notes
- Never commit the `.env.local` file to version control
- The app password is different from your regular Gmail password
- If you suspect the app password is compromised, revoke it and generate a new one

## Troubleshooting
- If emails aren't being sent, check the browser console and server logs for errors
- Make sure the app password is exactly 16 characters with no spaces
- Verify that 2-factor authentication is enabled on your Google account