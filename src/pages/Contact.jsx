import React, { useEffect }from 'react';
import { WrapperForm, Form } from '../styles/Styled.Components';
import { useGlobalContext } from '../context/context';
import LoadingSpinner from '../components/LoadingSpinner';

const Contact = () => {

  const { loading, updateContactPage } = useGlobalContext();
  
  useEffect(() => updateContactPage(), []);
  

  if (loading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }

  return (
    <WrapperForm>
    <h2 className="common-heading">
      feel free to contact us at any support
    </h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.209161805212!2d75.47835406460652!3d29.48109515191981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39116458732a4c13%3A0x8891174ba379df60!2z4KSu4KSk4KS-4KSo4KS-IOCkteCkv-CksuClh-CknCDgpLLgpYfgpJU!5e0!3m2!1shi!2sin!4v1659097307093!5m2!1shi!2sin" 
      width="100%" 
      height="450" 
      style={{border: 0}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <Form action='https://formspree.io/f/xjvzbkol' method='POST'>
          <input type="text" name="Name" placeholder="Name" autoComplete="off" required={true} />
          <input type="email" name="Email" placeholder="Email" autoComplete="off" required={true} />
          <textarea name="massage" id="" cols="30" rows="10" placeholder="Massage" autoComplete="off" required={true}></textarea>
          <input type="submit" value="send"/>

      </Form>

    </WrapperForm>
  );
};



export default Contact;