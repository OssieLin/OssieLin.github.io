import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ✅ Fix Font Awesome Link (Removed integrity) */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            crossOrigin="anonymous"
          />

          {/* ✅ Global CSS - Ensuring correct path for GitHub Pages */}
          <link rel="stylesheet" href="/OssieLin.github.io/styles/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* ✅ Fix JS Paths - Ensure correct GitHub Pages path */}
          <script src="/OssieLin.github.io/utils/firebase.js" defer></script>
          <script src="/OssieLin.github.io/utils/updateVisitorCount.js" defer></script>
          <script src="/OssieLin.github.io/hooks/useCustomCursor.js" defer></script>

          {/* ✅ Firebase SDK - Ensure it loads after other scripts */}
          <script
            src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"
            defer
          ></script>
          <script
            src="https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js"
            defer
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
