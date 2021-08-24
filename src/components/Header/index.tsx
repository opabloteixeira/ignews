/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

export const Header = () => (
  <>
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav> 
      </div>
    </header>
  </> 
)  