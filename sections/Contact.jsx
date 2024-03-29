'use client';

import ReCAPTCHA from 'react-google-recaptcha';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import styles from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    setLoading(true);

    emailjs.send(
      'service_0678yaq',
      'template_r6vmoho',
      {
        from_name: form.name,
        to_name: 'Brad Johnson',
        from_email: form.email,
        to_email: 'brad@bigjohnsonsoldwood.com',
        message: form.message,
      },
      'NMlq6imWrYH2oszGg',
    )
      .then(() => {
        setLoading(false);
        alert('Thank you for your submission! We will get back to you within 24 hours.');

        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong. Please try again.');
      });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden" id="contact">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-primary-darkbrown p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-gray-500`}>Let's make it happen</p>
        <h3 className={styles.sectionHeadText}>Send us your idea!</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-primary-lightbrown py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-primary-lightbrown py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-primary-lightbrown py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <ReCAPTCHA sitekey="6Lc2VFwpAAAAANJXF7Y6RFjwSnX2ehuW3EQDOQn9" onChange={handleRecaptchaChange} />

          <button
            type="submit"
            className="bg-primary-lightbrown py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
