import React from 'react';

export const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M16.95 14.4c-.45-.22-2.58-1.29-2.98-1.44-.39-.15-.68-.22-.96.22-.29.45-1.11 1.44-1.36 1.74-.25.29-.5.33-.95.11-.45-.22-1.92-.71-3.66-2.26-1.35-1.2-2.27-2.69-2.54-3.15-.27-.45-.03-.7.19-.92.21-.2.45-.53.68-.79.23-.27.3-.45.45-.75.15-.29.08-.56-.04-.79-.12-.23-1-2.4-1.37-3.29-.36-.88-.73-.76-1-.77-.26-.01-.55-.01-.84-.01-.29 0-.76.11-1.16.54-.4.43-1.52 1.48-1.52 3.61s1.56 4.2 1.78 4.49c.22.29 3.06 4.68 7.42 6.55 2.76 1.18 3.82 1.05 5.19.92 1.52-.14 3.46-1.41 3.95-2.78.49-1.37.49-2.54.34-2.78-.14-.24-.53-.38-.98-.6z" />
  </svg>
);

export const MenuIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
