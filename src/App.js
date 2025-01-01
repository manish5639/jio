import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Facebook Pixel Code
    !function(f, b, e, v, n, t, s) {
      if(f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if(!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '544415217985018');
    fbq('track', 'PageView');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Pay Mobile Recharge Plans</h1>
      </header>

      <main>
        <section className="plans-section">
          <h2>Recharge Plans</h2>
          <div className="plans-container">
            <div className="plan">
              <h3>₹199 Plan</h3>
              <p>1.5GB/day for 28 days</p>
              <button>Recharge Now</button>
            </div>
            <div className="plan">
              <h3>₹399 Plan</h3>
              <p>2GB/day for 56 days</p>
              <button>Recharge Now</button>
            </div>
            <div className="plan">
              <h3>₹599 Plan</h3>
              <p>3GB/day for 84 days</p>
              <button>Recharge Now</button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Powered by Google Pay</p>
      </footer>
    </div>
  );
}

export default App;