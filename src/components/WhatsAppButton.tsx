import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919824234663"; // WhatsApp number in international format without + or spaces
  const message = "Hi! I'm interested in learning more about RSA-Rising Stars Academy roller skating programs.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:right-24 z-40 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
        Chat with us on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
