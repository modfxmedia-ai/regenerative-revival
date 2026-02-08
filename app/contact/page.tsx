import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";

export const metadata = {
  title: "Contact | Regenerative Revival",
  description:
    "Contact Regenerative Revival for expert guidance on your regenerative health journey. Schedule your consultation today.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
