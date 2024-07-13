import Image from "next/image";
import styles from "./contact.module.css"

export const metadata = {
  title: "Contact Page",
  description: 'Next.js starter app description',
}

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" alt="" fill/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname"/>
          <input type="text" placeholder="Email Address"/>
          <input type="text" placeholder="Phone Number (Optional)"/>
          <textarea type="text" placeholder="Message"/>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;