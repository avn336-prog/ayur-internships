import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { usePageMeta } from "@/hooks/use-page-meta";
import { CONTACT } from "@/lib/site";
import { Link } from "react-router";

export default function Terms() {
  usePageMeta({
    title: "Terms of Service",
    description:
      "The terms that govern your use of AyurSetu as a student, guest, or partner organization.",
    path: "/terms",
  });

  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service">
      <LegalSection heading="1. Agreement">
        <p>
          These Terms of Service (“Terms”) govern your access to and use of
          the AyurSetu website and services operated by the AyurSetu
          Foundation, {CONTACT.addressLines[1]}, India. By creating an
          account, submitting a form, or using the platform you agree to these
          Terms and our{" "}
          <Link to="/privacy" className="text-primary underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="2. Eligibility">
        <p>
          You must be at least 18 years old to register. Students of AYUSH
          and allied disciplines (including BAMS, MD Ayurveda, M.Sc
          programmes, Yoga and Naturopathy) may create student profiles;
          organizations may list internships through our partnership flow. By
          registering you confirm that the information you provide is
          accurate.
        </p>
      </LegalSection>

      <LegalSection heading="3. Accounts and security">
        <p>
          Accounts are protected by a one-time passcode sent to your email.
          You are responsible for keeping your email address accessible and
          for activity on your account. To keep the platform safe we apply
          automated rate limits to passcode requests, applications and
          submissions; attempts to circumvent these limits violate these
          Terms.
        </p>
      </LegalSection>

      <LegalSection heading="4. Acceptable use">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Do not misrepresent your identity, qualifications, or organization.</li>
          <li>Do not submit false applications, spam, or abusive content.</li>
          <li>Do not attempt to access another user&apos;s account or data.</li>
          <li>Do not scrape, reverse engineer, or overload the platform.</li>
          <li>Do not use the platform for anything unlawful in India.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Internship listings">
        <p>
          Internship opportunities are posted by third-party organizations.
          AyurSetu curates listings but does not employ interns and does not
          guarantee that any organization will accept, respond to, or honor an
          application. Always verify details such as stipend, duration,
          location and credentials directly with the organization before
          accepting an offer.
        </p>
      </LegalSection>

      <LegalSection heading="6. No guarantee of outcomes">
        <p>
          Match scores are algorithmic suggestions based on the skills and
          interests you declare. They are an estimate only and are not a
          promise of admission, selection, stipend, or employment.
        </p>
      </LegalSection>

      <LegalSection heading="7. Intellectual property">
        <p>
          The AyurSetu name, logo, website design, and original content are
          owned by the AyurSetu Foundation. You may not copy or reuse them for
          commercial purposes without written permission. You retain ownership
          of the content you submit to your own profile.
        </p>
      </LegalSection>

      <LegalSection heading="8. Disclaimers and liability">
        <p>
          The platform is provided “as is” and “as available”. To the maximum
          extent permitted by law, we disclaim warranties of accuracy,
          availability, and fitness for a particular purpose, and our total
          liability for any claim arising out of your use of the platform will
          not exceed the amount you paid us (if any) in the twelve months
          before the claim.
        </p>
      </LegalSection>

      <LegalSection heading="9. Termination">
        <p>
          You may stop using AyurSetu at any time and request account deletion
          as described in our Privacy Policy. We may suspend or terminate
          accounts that violate these Terms, that appear compromised, or that
          abuse the platform&apos;s safety systems.
        </p>
      </LegalSection>

      <LegalSection heading="10. Governing law">
        <p>
          These Terms are governed by the laws of India. Any disputes will be
          subject to the exclusive jurisdiction of the courts of Bengaluru,
          Karnataka. If any provision is found unenforceable, the remaining
          provisions stay in effect.
        </p>
        <p>
          Last updated: 3 September 2026. Questions? Write to{" "}
          {CONTACT.email} or visit our{" "}
          <Link to="/contact" className="text-primary underline underline-offset-2">
            contact page
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
