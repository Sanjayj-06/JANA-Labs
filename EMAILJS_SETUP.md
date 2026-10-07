# EmailJS setup

1. Create an EmailJS service connected to the mailbox that will send applications.
2. Create a template for team applications.
3. Set the template's **To Email** field to:

   `director.janalabs@gmail.com, sanjayjayakumar91@gmail.com`

4. Add these template variables:

   - `{{from_name}}`
   - `{{reply_to}}`
   - `{{role}}`
   - `{{portfolio}}`
   - `{{message}}`

5. Copy `.env.example` to `.env.local` and replace each placeholder with the Service ID, Team Template ID, and Public Key from EmailJS.
6. Restart the Vite development server after changing `.env.local`.

The public key is safe to expose in a frontend application. Keep private email-service credentials inside EmailJS and never commit `.env.local`.
