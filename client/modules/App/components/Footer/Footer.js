import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>
        &copy; 2017 &middot;
        <a class="footer-links" href="https://github.com/imguss" target="_Blank">Gus</a>,
        <a class="footer-links" href="https://github.com/ivan-jorge001" target="_Blank">Ivan</a>,
        <a class="footer-links" href="https://github.com/migmaldonado" target="_Blank">Miguel</a>
        &amp;
        <a class="footer-links" href="https://github.com/sherwino" target="_Blank">Sherwino </a>
        &middot; Made @ Ironhack
      </p>
    </div>
  );
}

export default Footer;
