import React from 'react';
import './contacts.css';

function Contacts() {
  return (
   <section id="contact" class="contact-section">
              <div class="contact-section-header">
                  <h2>Let's work together...</h2>
                  <p>How do you take your coffee?</p>
              </div>
              <div class="contact-links">
                  <a
                      href="https://facebook.com/freecodecamp"
                      rel='noopener'
                      class="btn contact-details"
                  ><i class="fab fa-facebook-square"></i> Facebook</a
                  >
                  <a
                      id="profile-link"
                      href="https://github.com/freecodecamp"
                      rel='noopener'
                      class="btn contact-details"
                  ><i class="fab fa-github"></i> GitHub</a
                  >
                  <a
                      href="https://twitter.com/freecodecamp"
                      rel='noopener'
                      class="btn contact-details"
                  ><i class="fab fa-twitter"></i> Twitter</a
                  >
                  <a href="/cdn-cgi/l/email-protection#e7829f868a978b82a7829f868a978b82c984888a" class="btn contact-details">
                    <i class="fas fa-at">
                    </i> Send a mail</a
                  >
                  <a href="tel:555-555-5555" class="btn contact-details"
                  ><i class="fas fa-mobile-alt"></i> Call me</a
                  >
              </div>
        </section>
  );
};

export default Contacts;
