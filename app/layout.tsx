export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Adobe Fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/nzy8bvv.css" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Geographic meta tags for local SEO */}
        <meta name="geo.region" content="ES-CN" />
        <meta
          name="geo.placename"
          content="Las Palmas de Gran Canaria, Canarias"
        />
        <meta name="geo.position" content="28.1248;-15.4300" />
        <meta name="ICBM" content="28.1248, -15.4300" />
        <meta name="theme-color" content="#176161" />
        <meta name="application-name" content="Galaga" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Galaga" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
