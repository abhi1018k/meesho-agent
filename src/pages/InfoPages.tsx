import { Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "../data/content";
import { whatsappLink } from "../utils/whatsapp";
import { PageShell } from "./PageShell";

export function Disclaimer() {
  return (
    <PageShell
      title="Disclaimer | Meesho Seller Growth AI"
      description="Disclaimer for Meesho Seller Growth AI: independent service, not affiliated with Meesho; educational content and illustrative results."
      eyebrow="Legal"
      heading="Disclaimer"
      subheading="Last updated: 27 October 2026"
    >
      <h2>Not affiliated with Meesho</h2>
      <p>
        Meesho Seller Growth AI is an independent tool and service for online sellers. We are{" "}
        <strong>not owned by, affiliated with, authorised by, endorsed by or sponsored by Meesho</strong> or Fashnear
        Technologies Private Limited. All product names, logos and brands are the property of their respective owners and
        are used only for identification and descriptive purposes.
      </p>

      <h2>Educational information only</h2>
      <p>
        The articles, guides and examples on this Website are published for general educational purposes. Marketplace
        fees, shipping charges, policies and advertising options can change at any time. Always confirm current rules in
        your official seller dashboard before making business decisions. Nothing on this Website is legal, tax or
        financial advice; please consult a qualified professional for advice specific to your business.
      </p>

      <h2>Illustrative numbers</h2>
      <p>
        Metrics, charts, dashboard previews and percentage improvements displayed on this Website are illustrative
        examples to explain how the product works. They are not promises or guarantees of results. Your actual results
        will depend on your products, pricing, competition, operations and market conditions.
      </p>

      <h2>Advertising</h2>
      <p>
        This Website may display advertisements from Google AdSense and other partners. We do not control the specific
        ads shown and do not endorse advertised products or services. See our <a href="/privacy-policy">Privacy Policy</a>{" "}
        for details on advertising cookies and how to opt out.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this disclaimer, email <a href={"mailto:" + contact.email}>{contact.email}</a>.
      </p>
    </PageShell>
  );
}

export function About() {
  return (
    <PageShell
      title="About Us | Meesho Seller Growth AI"
      description="Learn about Meesho Seller Growth AI, an Indian team building AI tools and guides that help marketplace sellers grow profitably."
      eyebrow="About"
      heading="About Meesho Seller Growth AI"
      subheading="Helping Indian marketplace sellers grow with clear data, better listings and smarter pricing."
    >
      <p>
        Meesho Seller Growth AI is built in Gujarat, India, for the lakhs of small manufacturers, suppliers, resellers and
        home-based entrepreneurs who sell on online marketplaces. Many of these sellers run their business from a phone,
        spending hours every day checking prices, writing listings, tracking stock and guessing which ads work.
      </p>
      <p>
        Our goal is simple: turn that daily confusion into a short, clear list of actions. We combine practical
        marketplace experience with AI to help sellers improve product titles and attributes, calculate real profit,
        reduce returns, plan inventory and spend advertising money more carefully.
      </p>

      <h2>What we do</h2>
      <ul>
        <li><strong>AI growth tools</strong> for listings, pricing, competitor tracking, ads, inventory and profit reporting.</li>
        <li><strong>Free seller education</strong> through our <a href="/blog">blog</a>, with practical guides written for Indian sellers.</li>
        <li><strong>Onboarding support</strong> over WhatsApp, so sellers can get started without technical knowledge.</li>
      </ul>

      <h2>Our principles</h2>
      <ul>
        <li><strong>Profit over vanity metrics</strong> – sales only matter if they leave money in the seller's pocket.</li>
        <li><strong>Honest listings</strong> – accurate products and images build ratings and reduce returns.</li>
        <li><strong>Simple language</strong> – advice that any seller can act on today.</li>
        <li><strong>Seller privacy</strong> – we never ask for marketplace passwords or OTPs.</li>
      </ul>

      <h2>Independent service</h2>
      <p>
        We are an independent company and are not affiliated with or endorsed by Meesho. Read our{" "}
        <a href="/disclaimer">Disclaimer</a> for more information.
      </p>

      <h2>Get in touch</h2>
      <p>
        Have a question or want a demo? Visit our <a href="/contact">Contact page</a> or email{" "}
        <a href={"mailto:" + contact.email}>{contact.email}</a>.
      </p>
    </PageShell>
  );
}

export function Contact() {
  const cards = [
    { icon: Mail, label: "Email", value: contact.email, href: "mailto:" + contact.email },
    { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: whatsappLink("Contact page") },
  ];
  return (
    <PageShell
      title="Contact Us | Meesho Seller Growth AI"
      description="Contact Meesho Seller Growth AI by email, phone or WhatsApp for demos, pricing, support and privacy requests."
      eyebrow="Contact"
      heading="Contact Us"
      subheading="We usually reply within one business day (Monday to Saturday, 10:00 AM – 7:00 PM IST)."
    >
      <div className="not-prose grid gap-4 sm:grid-cols-3">
        {cards.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={label === "WhatsApp" ? "_blank" : undefined}
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-brand-200 hover:shadow-md"
            style={{ textDecoration: "none" }}
          >
            <Icon className="h-6 w-6 text-brand-600" />
            <p className="mt-3 text-sm font-bold text-ink">{label}</p>
            <p className="mt-1 break-all text-sm font-medium text-slate-600">{value}</p>
          </a>
        ))}
      </div>

      <h2>How we can help</h2>
      <ul>
        <li>Product demos and pricing for Starter, Growth and Agency plans</li>
        <li>Questions about our blog articles and seller guides</li>
        <li>Privacy requests, such as access or deletion of your data</li>
        <li>Partnership and advertising enquiries</li>
      </ul>

      <h2>Business details</h2>
      <ul>
        <li><strong>Name:</strong> Meesho Seller Growth AI</li>
        <li><strong>Contact person:</strong> Abhi Movaliya</li>
        <li><strong>Email:</strong> <a href={"mailto:" + contact.email}>{contact.email}</a></li>
        <li><strong>Phone:</strong> <a href={contact.phoneHref}>{contact.phone}</a></li>
        <li><strong>Location:</strong> Surat, Gujarat, India</li>
      </ul>
      <p>
        For your safety, never share marketplace passwords, OTPs or bank details with anyone, including people claiming
        to be from our team.
      </p>
    </PageShell>
  );
}

export function NotFound() {
  return (
    <PageShell
      title="Page Not Found | Meesho Seller Growth AI"
      description="The page you are looking for could not be found."
      heading="Page not found"
      subheading="The page you are looking for may have moved or no longer exists."
    >
      <p>
        Go back to the <a href="/">home page</a> or browse our <a href="/blog">seller guides</a>.
      </p>
    </PageShell>
  );
}
