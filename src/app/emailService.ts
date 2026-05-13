import emailjs from '@emailjs/browser';

// Configure these with your EmailJS credentials
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'YOUR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'YOUR_PUBLIC_KEY';

export async function sendCardNotification(card: {
  number: number;
  title: string;
  description: string;
}) {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      card_number: card.number,
      card_title: card.title,
      card_description: card.description,
    },
    PUBLIC_KEY
  );
}
