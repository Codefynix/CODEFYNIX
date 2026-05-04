"use client";

import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919400035616"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Codefynix on WhatsApp"
      className="floating-whatsapp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
