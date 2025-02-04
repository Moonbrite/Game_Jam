import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
      <header>
        <Header />
      </header>
        {children}
      </body>
    </html>
  );
}
