import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {

  const onViaCallSubmit = () =>{
    console.log("I am from call");
  };
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
          </div>
          <Button onClick={onViaCallSubmit} isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} /> {/* onClick is for click , when clicked it calls the onViaCallSubmit function */}
          <form>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>          
              <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="name">Email</label>          
              <input type="email" name="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="name">Text</label>          
              <textarea name="text" rows="8" />
            </div>
            <div style = {{
              display: "flex",
              justifyContent: "end", /*to make the button move to the right side*/
            }}>
              <Button text="SUBMIT" />
            </div>            
          </form>          
        </div>  
        <div className={styles.contact_image}>
          <img src="/images/contact.svg" alt="contact image" />
        </div>
    </section>
  );
};

export default ContactForm