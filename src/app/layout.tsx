// app/layout.tsx
import { ReactNode } from 'react';
import '../app/globals.css';

const geistSans = 'Geist Sans, sans-serif';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Customer Management</title>
        <style>
          {`
            body {
              font-family: ${geistSans};
            }
          `}
        </style>
      </head>
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
