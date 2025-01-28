import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* External stylesheet for Font Awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            integrity="sha384-jQSYlRrYts8F0UHF9U+9KcYPtAqAf7MI"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Firebase SDKs */}
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
