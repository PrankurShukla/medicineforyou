import React,{useRef} from 'react';
import "./ContactSection.css";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l7vzowh', 'template_csplphh', form.current, 'tPipdppoyoABabEYM')
      .then((result) => {
          //  console.log(result.text);
          alert("Your Application was Sent to Company");
      }, (error) => {
          // alert(error.text);
          alert("Error Occured During application submission!!")
      });
      form.current.reset();

  };
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Contact</h2>
            <h3><span>Contact Us</span></h3>
            <p>Get in Touch: Reach Out to Us for Any Inquiries or Assistance</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>Ganga Nagar Colony - Farrukhabad - 209625</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box mb-4">
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>shuklaprankur27@gmail.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box mb-4">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+91 8470891623</p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6">
            <iframe className='mb-4 mb-lg-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.3809412127645!2d79.59313628293422!3d27.38904858026157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e305216d41d13%3A0xa1319858a9a7e499!2sKadrigate%2C%20Farrukhabad%2C%20Uttar%20Pradesh%20209625!5e0!3m2!1sen!2sin!4v1726925108844!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{ border: 0, width: '100%', height: '384px' }} allowFullScreen></iframe>
            </div>

            <div className="col-lg-6">
              
              <form ref={form} onSubmit={sendEmail} action="forms/contact.php" method="post" role="form" className="php-email-form">
              <h2>Want to work with us?</h2>
                <div className="row">
                  <div className="col form-group">
                    <input type="text" name="user_name" className="form-control" id="name" placeholder="Enter Your Name" required />
                  </div>
                  <div className="col form-group">
                    <input type="email" className="form-control" name="user_mail" id="email" placeholder="Enter Your Valid Email" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="user_subject" id="subject" placeholder="Enter the Subject of your application" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="user_message" rows="5" placeholder="Tell Us Something More About You and Your Location where you can available for us" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Application</button></div>
              </form>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
