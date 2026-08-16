import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "../../i18n/useLanguage";

const content = {
  ta: {
    message:
      "வணக்கம் Nalan Catering! எனது நிகழ்விற்கு Catering Service பற்றி தகவல் வேண்டும்.",
  },
  en: {
    message:
      "Hello Nalan Catering! I'd like some information about catering service for my event.",
  },
};

function WhatsAppButton() {
  const t = useTranslations(content);
  const phoneNumber = "918925059589";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
      aria-label="Contact Nalan Catering on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default WhatsAppButton;
