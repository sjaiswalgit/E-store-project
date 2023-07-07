import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from './footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footer_container}>
    <div className={styles.footer_content}><h3>About Company</h3><p> The is just a website 
      of psuedo company created for personal project puspose.</p></div>
    <div className={styles.footer_content}><h3>Our Social media </h3> 
    <div className={styles.footer_icon}><FacebookIcon/> <span> Connect with us on FB</span></div>
    <div className={styles.footer_icon}><TwitterIcon/> <span> Follow us on Twiiter</span></div>
    <div className={styles.footer_icon}><InstagramIcon/> <span> Follow us on Instagram</span></div>
    </div>
    <div className={styles.footer_content}>
      <h3>Contact info</h3>
      <div className={styles.footer_icon}><CallIcon/> <span> +91 8133933438</span></div>
      <div className={styles.footer_icon}> <EmailIcon/> <span>subhashkjaiswal333@gmail.com</span></div>
    <div className={styles.footer_icon}><HomeIcon/> <span>Guwahati 781007</span></div></div>
    </div>
    <div className={styles.footer_icon}>&#169;2023 E-store website. All rights reserved</div>
  </footer>
  )
}

export default Footer