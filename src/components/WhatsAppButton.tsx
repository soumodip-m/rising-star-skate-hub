import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "919999999999"; // Replace with actual number
  const message = encodeURIComponent("Hello! I'd like to know more about RSA programs.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce-slow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
