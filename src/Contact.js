import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

const styles = {
  container: {
    overflowY: 'auto',
    maxHeight: '100vh'
  }
}

const ContactContainer = styled.div`
  padding: 4rem 5%;
  background: url('/stars1.png') no-repeat center center, #d1d1d1;
  background-size: cover;
  min-height: 100vh;
`;

const MainHeader = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
`;

const ContactHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const SocialContacts = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #333;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const serviceID = 'service_im5zfw7'
    const templateID = 'template_mw6u7ta'
    const publicKey = 'akv4E0IXoaIJBmAVF'

    var templateParams = {
      name: formData.name,
      message: formData.message,
      email: formData.email
  };
    
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(function(response) {
        if(response.status == '200') {
          Swal.fire(
            'Success!',
            'Email was sent!',
            'success'
          )
        }
        else {
          Swal.fire(
            'Error',
            'Email could not be sent please try again later',
            'error'
          )
        }
      }, function(error) {
        Swal.fire(
          'Error',
          'Email could not be sent please try again later',
          'error'
        )
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
<ContactContainer style={styles.container} id="contactMeSection">
      <MainHeader>Contact Me</MainHeader>
      <ContactHeader>Contact</ContactHeader>
      <ContactForm onSubmit={handleFormSubmit}>
        <FormInput
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <FormTextarea
          name="message"
          rows="5"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
    </ContactForm>
    <SocialContacts>
  <SocialIcon href="https://www.instagram.com/moechamas/?hl=en" target="_blank" rel="noopener noreferrer">
    <ion-icon name="logo-instagram"></ion-icon>
  </SocialIcon>
  <SocialIcon href="https://www.linkedin.com/in/moe-chamas-48845b21b/" target="_blank" rel="noopener noreferrer">
    <ion-icon name="logo-linkedin"></ion-icon>
  </SocialIcon>
  <SocialIcon href="https://github.com/moechamas" target="_blank" rel="noopener noreferrer">
    <ion-icon name="logo-github"></ion-icon>
  </SocialIcon>
</SocialContacts>
  </ContactContainer>
  );
};

export default Contact;
