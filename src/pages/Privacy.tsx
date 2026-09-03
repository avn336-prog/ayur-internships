import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { usePageMeta } from "@/hooks/use-page-meta";
import { CONTACT } from "@/lib/site";
import { Link } from "react-router";

export default function Privacy() {
  usePageMeta({
    title: "Privacy Policy",
    description:
      "How AyurSetu collects, uses and protects your personal information as a student or partner organization.",
    path: "/privacy",
  });

  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy">
      <LegalSection heading="1. Who we are">
        <p>
          AyurSetu is operated by the AyurSetu Foundation, a not-for-profit
          initiative supporting the AYUSH education ecosystem in India. This
          policy explains what information we collect when you use the
          AyurSetu website and services, why we collect it, and the choices
          you have.
        </p>
        <p>
          Registered address: {CONTACT.addressLines.join(", ")}. For any
          privacy question, write to {CONTACT.email}.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information we collect">
        <p>
          <strong>Information you give us.</strong> When you create an account
          we collect your email address; if you choose to continue as a guest
          we store an anonymous account identifier. When you build your
          student profile we store your name, university, degree, year,
          skills, interests, preferred location, experience and optional bio.
          When you contact us through the contact form we store your name,
          email, optional organization and message.
        </p>
        <p>
          <strong>Information we create.</strong> We record your internship
          applications, match scores, and application statuses so that you and
          the hosting organizations can track them.
        </p>
        <p>
          <strong>Technical information.</strong> With your consent we use
          Microsoft Clarity to understand how visitors use the site. Clarity
          may collect anonymized usage behavior, session recordings and
          aggregated device/network information. If you decline optional
          cookies, no analytics tooling runs.
        </p>
      </LegalSection>

      <LegalSection heading="3. How we use your information">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>To authenticate you with one-time passcodes and keep your account secure.</li>
          <li>To match your skills and interests against internship opportunities and process applications.</li>
          <li>To let partner organizations review your profile and application responses.</li>
          <li>To respond to enquiries and improve our services.</li>
          <li>To comply with legal obligations and prevent abuse (for example, through rate limiting).</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. How we share information">
        <p>
          Your profile and applications are shared only with the organizations
          whose internships you apply to, and with service providers that host
          and operate the platform on our behalf (such as cloud and email
          providers). We never sell your personal information. We may disclose
          information where the law requires us to do so.
        </p>
      </LegalSection>

      <LegalSection heading="5. Cookies and analytics">
        <p>
          We use strictly necessary storage to keep you signed in and to
          remember your cookie choice. Optional analytics (Microsoft Clarity)
          are loaded only after you accept non-essential cookies via the
          cookie banner shown on your first visit, and can be declined at any
          time by clearing the banner preference in your browser. See the{" "}
          <Link to="/terms" className="text-primary underline underline-offset-2">
            Terms of Service
          </Link>{" "}
          for more on acceptable use.
        </p>
      </LegalSection>

      <LegalSection heading="6. Retention and security">
        <p>
          We keep your account and profile data for as long as your account is
          active. Rate-limiting counters and authentication codes are deleted
          automatically when they expire. We use encryption in transit,
          signed-in access controls on our backend, and rate limiting to
          protect accounts from abuse.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your rights">
        <p>
          You may correct your profile at any time from the dashboard. To
          export or delete your account data, email us at {CONTACT.email} from
          the address registered on your account and we will respond within 30
          days. You may also withdraw consent to optional analytics at any
          time.
        </p>
      </LegalSection>

      <LegalSection heading="8. Minors">
        <p>
          AyurSetu is intended for students aged 18 or above. If you are under
          18, you may use the platform only with the involvement of a parent
          or guardian who accepts this policy on your behalf. If we learn that
          we have collected data from a child without consent, we will delete
          it promptly.
        </p>
      </LegalSection>

      <LegalSection heading="9. Changes to this policy">
        <p>
          We may update this policy from time to time. Material changes will be
          announced on the website before they take effect. Continued use of
          the platform after changes means you accept the updated policy.
        </p>
        <p>
          Last updated: 3 September 2026. Questions? Contact our grievance
          officer at {CONTACT.email} or write to {CONTACT.addressLines[0]},{" "}
          {CONTACT.addressLines[1]}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
