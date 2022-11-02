import styles from '../styles/Home.module.css'
import Logo from '../assets/Logo';
import Search from '../assets/Search';

export default function Home() {

  return (
    <div className={styles.container}>

      {/* LOGO */}
      <div className={styles.logo}>
        <Logo />
        <div className={styles.logotext}>
          BEACON
        </div>
      </div>

      <div className={styles.main}>
      {/* Search */}
        <h1 className={styles.title}>Pick Your School</h1>
        <div className={styles.search}>
          <div className={styles.eyeglass}>
            <Search />
          </div>
          <div className={styles.searchtext}>
            Search for your school
          </div>
        </div>
        <div className={styles.searchbarspan}></div>

        {/* List */}
      </div>

    </div>
  )
}
