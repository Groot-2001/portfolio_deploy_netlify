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
                      href="https://facebook.com/#"
                      rel='noopener'
                      class="btn contact-details"
                  ><i class="fab fa-facebook-square"></i> Facebook</a
                  >
                  <a
                      id="profile-link"
                      href="https://github.com/Groot-2001"
                      rel='noopener'
                      class="btn contact-details"
                  ><i class="fab fa-github"></i> GitHub</a
                  >
                  <a
                      href="https://twitter.com/#"
                      rel='noopener'
                      class="btn contact-details"
                  ><i class="fab fa-twitter"></i> Twitter</a
                  >
                  <a href="mailto:shivasilmawala841@gmail.com" class="btn contact-details">
                    <i class="fas fa-at">
                    </i> Send a mail</a
                  >
                  <a href="tel:7039568123" class="btn contact-details"
                  ><i class="fas fa-mobile-alt"></i> Call me</a
                  >
              </div>
        </section>
  );
};

export default Contacts;
