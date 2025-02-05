import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-lt-installed="true">
      <body>
        <header>
          <Header data-lt-installed="true"/>
        </header>
        {children}
        <footer>
          <Footer data-lt-installed="true"/>
        </footer>
      </body>
    </html>
  );
}
