import { contact } from "../data/content";
import { PageShell, SITE_URL } from "./PageShell";

const EFFECTIVE_DATE = "27 October 2026";

export function PrivacyPolicy() {
  return (
    <PageShell
      title="Privacy Policy | Meesho Seller Growth AI"
      description="Read how Meesho Seller Growth AI collects, uses, shares and protects your information, including cookies and Google AdSense advertising."
      eyebrow="Legal"
      heading="Privacy Policy"
      subheading={<>Effective date: {EFFECTIVE_DATE} · Last updated: {EFFECTIVE_DATE}</>}
    >
      <p>
        This Privacy Policy explains how <strong>Meesho Seller Growth AI</strong> ("we", "us" or "our") collects, uses,
        shares and protects information when you visit <a href={SITE_URL}>{SITE_URL.replace("https://", "")}</a> (the
        "Website"), read our blog, or contact us about our services. By using the Website, you agree to the practices
        described in this policy. If you do not agree, please do not use the Website.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>a) Information you provide to us</h3>
      <p>We only collect personal information that you choose to share with us, for example when you:</p>
      <ul>
        <li>Contact us by WhatsApp, phone or email to request a demo, pricing or support;</li>
        <li>Share your name, phone number, email address, business name or city;</li>
        <li>Share details about your Meesho business such as catalog size, product categories or sample listings so we can recommend a setup.</li>
      </ul>
      <p>
        We do not ask for and you should never send us your marketplace account passwords, OTPs, bank account numbers,
        card details or any government identification numbers through this Website or chat.
      </p>
      <h3>b) Information collected automatically</h3>
      <p>
        When you visit the Website, our hosting provider and analytics and advertising partners may automatically
        collect limited technical information, such as your IP address, browser type, device type, operating system,
        referring page, pages visited, approximate location (city or country level) and the date and time of your visit.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to your enquiries and provide demos, pricing and onboarding support;</li>
        <li>To provide, operate, maintain and improve the Website and our services;</li>
        <li>To understand how visitors use the Website so we can improve content and user experience;</li>
        <li>To display advertising through Google AdSense that helps keep our content free;</li>
        <li>To detect, prevent and address fraud, abuse, security or technical issues;</li>
        <li>To comply with applicable laws and respond to lawful requests from authorities.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>3. Cookies and Similar Technologies</h2>
      <p>
        Cookies are small text files stored on your device by your web browser. We and our third-party partners may use
        cookies, web beacons and similar technologies to remember preferences, measure traffic and serve and measure
        advertisements. You can control or delete cookies through your browser settings. Disabling cookies may affect
        how some parts of the Website work and the relevance of the ads you see.
      </p>

      <h2>4. Google AdSense and Advertising</h2>
      <p>We use Google AdSense to display advertisements on this Website. In connection with this:</p>
      <ul>
        <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this Website or other websites.</li>
        <li>
          Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit
          to this Website and/or other sites on the Internet.
        </li>
        <li>
          You may opt out of personalised advertising by visiting{" "}
          <a href="https://adssettings.google.com" target="_blank" rel="noreferrer">Google Ads Settings</a>. Alternatively,
          you can opt out of some third-party vendors' use of cookies for personalised advertising by visiting{" "}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer">www.aboutads.info/choices</a>.
        </li>
        <li>
          Other third-party vendors or ad networks may also serve ads on the Website, and they may use cookies to do so.
          You can learn more and opt out at the websites of those vendors or at{" "}
          <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noreferrer">www.youronlinechoices.eu</a> (for users in Europe).
        </li>
      </ul>
      <p>
        To learn how Google uses information from sites that use its services, please read{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
          How Google uses information from sites or apps that use our services
        </a>{" "}
        and the <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a>.
        Where required by law (for example, for visitors from the European Economic Area, the United Kingdom or
        Switzerland), consent for personalised ads is requested through a Google-certified consent message.
      </p>

      <h2>5. Analytics</h2>
      <p>
        We use Vercel Web Analytics to understand aggregate traffic, such as page views and referring websites. Vercel
        Web Analytics is designed to be privacy-friendly and does not use cookies to identify individual visitors. See
        the <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">Vercel Privacy Policy</a> for
        details.
      </p>

      <h2>6. Third-Party Services and Links</h2>
      <p>The Website relies on or links to third-party services, each governed by its own privacy policy, including:</p>
      <ul>
        <li><strong>Vercel</strong> – website hosting and analytics;</li>
        <li><strong>Google</strong> – AdSense advertising and Google Fonts;</li>
        <li><strong>WhatsApp (Meta)</strong> – when you choose to chat with us using the WhatsApp buttons.</li>
      </ul>
      <p>
        Our blog and pages may link to external websites, including marketplace websites. We are not responsible for
        the content or privacy practices of those websites, and we encourage you to read their privacy policies.
      </p>

      <h2>7. Sharing of Information</h2>
      <p>We may share information only in the following situations:</p>
      <ul>
        <li>With service providers who help us operate the Website (such as hosting, analytics and advertising partners), under appropriate confidentiality obligations;</li>
        <li>When required by law, court order or a lawful request from a government authority;</li>
        <li>To protect our rights, users, property or safety, or to investigate fraud or misuse;</li>
        <li>In connection with a merger, acquisition or sale of assets, with notice where required by law;</li>
        <li>With your consent.</li>
      </ul>

      <h2>8. Data Retention</h2>
      <p>
        We keep personal information only for as long as necessary to respond to your enquiry, provide our services,
        meet legal, tax and accounting obligations and resolve disputes. When information is no longer needed, we delete
        or anonymise it.
      </p>

      <h2>9. Data Security</h2>
      <p>
        We use reasonable technical and organisational measures to protect information, including HTTPS encryption for
        the Website. However, no method of transmission over the Internet or electronic storage is completely secure,
        and we cannot guarantee absolute security.
      </p>

      <h2>10. Your Rights and Choices</h2>
      <p>
        Subject to applicable law, including India's Digital Personal Data Protection Act, 2023, and where applicable the
        EU/UK General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), you may have the
        right to:
      </p>
      <ul>
        <li>Access the personal information we hold about you;</li>
        <li>Request correction or updating of inaccurate information;</li>
        <li>Request deletion of your personal information;</li>
        <li>Withdraw consent you previously gave, without affecting earlier lawful processing;</li>
        <li>Opt out of personalised advertising using the links in Section 4;</li>
        <li>Raise a grievance with us, and, where applicable, with the relevant data protection authority.</li>
      </ul>
      <p>
        To exercise these rights, email us at <a href={"mailto:" + contact.email}>{contact.email}</a>. We will respond
        within a reasonable time and in any case within the period required by law.
      </p>

      <h2>11. Children's Privacy</h2>
      <p>
        The Website and our services are intended for businesses and adult users. We do not knowingly collect personal
        information from children under 18 years of age. If you believe a child has provided us with personal
        information, please contact us and we will delete it.
      </p>

      <h2>12. International Visitors</h2>
      <p>
        We are based in India. If you access the Website from outside India, your information may be processed in India
        or in other countries where our service providers operate, which may have different data protection laws.
      </p>

      <h2>13. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new
        "Last updated" date. Please review this page periodically.
      </p>

      <h2>14. Contact Us / Grievance Officer</h2>
      <p>If you have any questions, requests or complaints about this Privacy Policy, please contact:</p>
      <ul>
        <li><strong>Name:</strong> Abhi Movaliya (Grievance Officer)</li>
        <li><strong>Email:</strong> <a href={"mailto:" + contact.email}>{contact.email}</a></li>
        <li><strong>Phone / WhatsApp:</strong> <a href={contact.phoneHref}>{contact.phone}</a></li>
        <li><strong>Location:</strong> Gujarat, India</li>
      </ul>
    </PageShell>
  );
}
