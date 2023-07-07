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
    <div className={styles.footer_icon}><FacebookIcon/> <a className={styles.footer_link} href="https://www.facebook.com/subhash.jaiswal.9699" target="_blank"> Connect with us on FB</a></div>
    <div className={styles.footer_icon}><TwitterIcon/> <a className={styles.footer_link} href="https://www.twitter.com" target="_blank"> Follow us on Twiiter</a></div>
    <div className={styles.footer_icon}><InstagramIcon/> <a className={styles.footer_link} href="https://www.instagram.com/subhash.jaiswal.9699" target="_blank"> Follow us on Instagram</a></div>
    </div>
    <div className={styles.footer_content}>
      <h3>Contact info</h3>
      <div className={styles.footer_icon}><CallIcon/> <a className={styles.footer_link} href="tel:+91 8133933438"> +91 8133933438</a></div>
      <div className={styles.footer_icon}> <EmailIcon/> <a className={styles.footer_link} href="mailto:subhashkjaiswal333@gmail.com">subhashkjaiswal333@gmail.com</a></div>
    <div className={styles.footer_icon}><HomeIcon/> <span>Guwahati 781007</span></div></div>
    </div>
    <div className={styles.footer_icon}>&#169;2023 E-store website. All rights reserved</div>
  </footer>
  )
}

export default Footer