import { useEffect } from "react";
import Script from "next/script";
import useCustomCursor from "../js/useCustomCursor";

export default function Home() {
  useEffect(() => {
    // Firebase script
    const firebaseScript = document.createElement("script");
    firebaseScript.src = "/OssieLin.github.io/js/firebase.js";
    firebaseScript.defer = true;
    document.body.appendChild(firebaseScript);

    // Update Visitor Count script
    const visitorScript = document.createElement("script");
    visitorScript.src = "/OssieLin.github.io/js/updateVisitorCount.js";
    visitorScript.defer = true;
    document.body.appendChild(visitorScript);

    // Custom Cursor script
    const cursorScript = document.createElement("script");
    cursorScript.src = "/OssieLin.github.io/js/useCustomCursor.js";
    cursorScript.defer = true;
    document.body.appendChild(cursorScript);
  }, []);
    
  useCustomCursor();

  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const fetchAndUpdateVisitorCount = async () => {
      const count = await updateVisitorCount(); // Call the function
      if (count !== null) setVisitorCount(count); // Update state
    };

    fetchAndUpdateVisitorCount();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Osmond Yu-Wei Lin</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        {/* Firebase SDKs */}
        <script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"></script>
        <script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js"></script>
      </Head>

      <div className="custom-cursor">
        <i className="fa-regular fa-hand" style={{ color: 'white' }}></i>
      </div>

      <div id="welcome-overlay">
        <div id="welcome-text">
          Hello! This is Osmond 😃
          <br />
          <br />
          <div id="dynamic-text"></div>
          <br />
          say hi to me <span className="waving-hand">👋🏻</span>
        </div>
      </div>

      <div className="header-container">
        <div className="profile-section">
          <div className="profile-frame">
            <img
              src="https://raw.githubusercontent.com/OssieLin/OssieLin.github.io/main/public/pfp2.jpg"
              alt="Osmond Yu-Wei Lin"
              onLoad={() => console.log('Image loaded successfully')}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = './public/pfp2.jpg';
                console.log('Falling back to local image');
              }}
            />
          </div>
          <div className="name-quote">
            <div className="name">
              <a
                href="https://ossielin.github.io/assets/resume_yuwei.pdf"
                title="CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Osmond Yu-Wei Lin</p>
              </a>
            </div>
            <div className="quote">"Turn on, Tune in, Drop out."</div>
            <div className="social-links">
              <a href="mailto:osmond0629@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope icon"></i>
              </a>
              <a href="https://github.com/OssieLin" title="GitHub" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/osmondlin007/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin icon"></i>
              </a>
              <a
                href="https://ossielin.github.io/assets/resume_yuwei.pdf"
                title="CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-address-book"></i>
              </a>
              <a
                href="https://open.spotify.com/user/ccdfx5qdxq8agmuczj50um7ao?si=9b9ad671cc204ae0"
                title="Spotify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-spotify icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="status">currently {"->"} applying to college</div>

      <div className="visitor-counter">
        {/* Dynamically display visitor count */}
        <span id="visitor-count">
          {visitorCount !== null ? visitorCount : 'Loading...'}
        </span> people have said hi to me

        <svg className="sparkline" width="60" height="30" stroke="#28a745" fill="none" strokeWidth="2">
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.2" />
            </filter>
          </defs>
          <rect
            x="0"
            y="0"
            width="60"
            height="30"
            fill="rgba(255,255,255,0.1)"
            filter="url(#shadow)"
            rx="4"
          />
          <line x1="5" y1="25" x2="55" y2="25" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
          <line x1="5" y1="5" x2="5" y2="25" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
          <path className="line" d="M5,20 15,18 25,22 35,15 45,17 55,12" stroke="#28a745" fill="none" />
        </svg>
      </div>

      <div className="time" id="taipei-time"></div>
      <div className="time" id="sf-time"></div>

      <div className="content-section">
        <div className="section-title">Projects</div>
        <div className="content-grid-container">
          <div className="content-card">
            <a
              href="https://github.com/OssieLin/Visualization-of-Taylor-Series"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Visualization of Taylor Series</h3>
              <p>Shows how more terms of Taylor Polynomials can approximate a function better</p>
              <p className="card-date">Jun 2024</p>
            </a>
          </div>
          <div className="content-card">
            <a
              href="https://github.com/OssieLin/Comparative-Analysis-of-Primality-Testing-Algorithms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Primality Tests</h3>
              <p>Comparison of different primality tests & Reducing pseudoprimes</p>
              <p className="card-date">Mar 2024</p>
            </a>
          </div>
        </div>
      </div>

      <div className="content-section">
        <a href="blog/blog.html" className="section-title-link">
          <div className="section-title">Blog</div>
        </a>
        <div className="content-grid-container">
          <a href="#" className="content-card">
            <h3>About me</h3>
            <p>it's just about me</p>
            <p className="card-date">Jan 2025</p>
          </a>
        </div>
      </div>

      <div className="content-section">
        <div className="section-title">Other</div>
        <div className="content-grid-container">
          <a href="#" className="content-card">
            <h3>developing...</h3>
            <p>potentially some learning resources</p>
          </a>
        </div>
      </div>
    </>
  );
}
