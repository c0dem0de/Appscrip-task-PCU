import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP */}
      <div className="container footer-top">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettà muse.</p>

          <div className="subscribe">
            <input placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h4>CONTACT US</h4>
          <p className="contact-line">+44 221 133 5360</p>
          <p className="contact-line">customercare@mettamuse.com</p>

          <h4 className="mt">CURRENCY</h4>
          <div className="currency">
            <img src="/us.png" alt="us" />
            <span>• USD</span>
          </div>

          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* BOTTOM */}
      <div className="container footer-bottom">
        <div className="footer-group">
          <h4 className="footer-title">mettà muse</h4>
          <div className="footer-links">
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
        </div>

        <div className="footer-group">
          <h4 className="footer-title">QUICK LINKS</h4>
          <div className="footer-links">
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div className="footer-group">
          <h4 className="footer-title">FOLLOW US</h4>

          <div className="social-icons">
            <img src="/instagram.png" alt="Instagram" />
            <img src="/linkedin.png" alt="LinkedIn" />
          </div>

          <h4 className="mt">mettà muse ACCEPTS</h4>
          <div className="payments">
            <img src="/payment/gpay.png" alt="gpay" />
            <img src="/payment/mastercard.png" alt="mastercard" />
            <img src="/payment/paypal.png" alt="paypal" />
            <img src="/payment/amex.png" alt="amex" />
            <img src="/payment/applepay.png" alt="applepay" />
            <img src="/payment/opay.png" alt="opay" />
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
