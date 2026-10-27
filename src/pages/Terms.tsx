import { contact } from "../data/content";
import { PageShell } from "./PageShell";

export function Terms() {
  return (
    <PageShell
      title="Terms and Conditions | Meesho Seller Growth AI"
      description="Terms and conditions for using the Meesho Seller Growth AI website, blog content and services."
      eyebrow="Legal"
      heading="Terms and Conditions"
      subheading="Last updated: 27 October 2026"
    >
      <p>
        These Terms and Conditions ("Terms") govern your use of the Meesho Seller Growth AI website, blog and related
        services. By accessing or using the Website, you agree to these Terms. If you do not agree, please do not use the
        Website.
      </p>

      <h2>1. About the Service</h2>
      <p>
        Meesho Seller Growth AI provides information, educational content and AI-assisted growth tools and consulting for
        online marketplace sellers in India. Some features shown on the Website are under development or offered on a
        pre-order or demo basis; final features, pricing and availability will be confirmed with you before purchase.
      </p>

      <h2>2. Independent Service</h2>
      <p>
        We are an independent service provider. We are <strong>not owned by, affiliated with, endorsed by or sponsored
        by Meesho</strong> or Fashnear Technologies Private Limited. "Meesho" and related marks are trademarks of their
        respective owner and are used on this Website only to describe the marketplace our services relate to.
      </p>

      <h2>3. Use of the Website</h2>
      <ul>
        <li>You must use the Website only for lawful purposes and in accordance with these Terms.</li>
        <li>You must not attempt to gain unauthorised access to the Website, interfere with its operation, or use automated tools to scrape it excessively.</li>
        <li>You must not use our content or services to violate any marketplace's seller policies or any law.</li>
        <li>You are responsible for the accuracy of the information you share with us.</li>
      </ul>

      <h2>4. Account Security</h2>
      <p>
        We will never ask for your marketplace password or OTP. Do not share login credentials, OTPs or banking details
        with anyone claiming to represent us. Please report any such request to{" "}
        <a href={"mailto:" + contact.email}>{contact.email}</a>.
      </p>

      <h2>5. Content and Intellectual Property</h2>
      <p>
        All text, graphics, design and code on this Website, including blog articles, are owned by us or our licensors
        and are protected by applicable intellectual property laws. You may read and share links to our content for
        personal or internal business use. You may not copy, republish or sell our content without written permission.
      </p>

      <h2>6. No Guarantee of Results</h2>
      <p>
        Sales, profit, visibility and other figures shown on the Website, including dashboard previews and benefit
        metrics, are illustrative examples only. Marketplace results depend on many factors outside our control,
        including product quality, pricing, competition, demand and marketplace policies. We do not guarantee any
        particular sales, ranking or profit outcome.
      </p>

      <h2>7. Payments</h2>
      <p>
        Where paid plans are offered, pricing, billing cycle, taxes and refund terms will be shared with you in writing
        before payment. Any applicable GST will be charged as per law.
      </p>

      <h2>8. Third-Party Links and Advertising</h2>
      <p>
        The Website may display advertisements served by third parties such as Google AdSense and may contain links to
        third-party websites. We do not control and are not responsible for third-party content, products or services.
        Please see our <a href="/privacy-policy">Privacy Policy</a> for information about advertising cookies.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, the Website and its content are provided "as is" without warranties of
        any kind. We will not be liable for any indirect, incidental or consequential losses, including loss of profit,
        revenue or data, arising from your use of the Website or reliance on its content.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update these Terms at any time by posting the revised version on this page. Continued use of the Website
        after changes means you accept the updated Terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the
        courts of Surat, Gujarat.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these Terms can be sent to <a href={"mailto:" + contact.email}>{contact.email}</a> or{" "}
        <a href={contact.phoneHref}>{contact.phone}</a>.
      </p>
    </PageShell>
  );
}
