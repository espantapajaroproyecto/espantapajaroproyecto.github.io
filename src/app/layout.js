// import "./globals.css";

export const metadata = {
  title: "Mi App",
  description: "Descripción...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
