import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef();
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [hasError, setHasError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitLoading(true);
    emailjs
      .sendForm(
        "service_9cjeuvm",
        "template_1rrhuti",
        form.current,
        "oJ3Vi_p31FGPELxID"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitSuccessful(true);
          setIsSubmitLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setHasError(true);
          setIsSubmitLoading(false);
          setTimeout(() => {
            setHasError(false);
          }, 5000);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="contact__email">mischalamoureux7@gmail.com</h5>
            <a
              href="mailto:mischalamoureux7@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>(587) 830-2063</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5878302063"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <ReCAPTCHA sitekey="6LcWqrAlAAAAAIchINR-cIlG9PyRexr3PaKCo75s" />
          <button
            type="submit"
            className={`btn btn-primary ${
              hasError ? "contact__button-error" : "contact__button-success"
            }`}
            disabled={isSubmitLoading || isSubmitSuccessful || hasError}
          >
            {hasError
              ? "Something went wrong! Try again or email me directly."
              : isSubmitSuccessful
              ? "Message Sent!"
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
