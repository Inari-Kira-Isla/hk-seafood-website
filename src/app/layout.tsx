import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The [locale] layout provides <html> and <body> with proper lang attribute
  return children;
}
