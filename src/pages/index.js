import styles from '../styles/Home.module.css'
import Logo from '../assets/Logo';
import Search from '../assets/Search';

export async function getStaticProps() {
  const res = await fetch('https://api.sendbeacon.com/team/schools');
  const schools = await res.json();

  return {
    props: {
      schools,
    },
  }
}

export default function Home({ schools }) {


  return (
    <div>
      {/* Logo */}
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
            <input 
              className={styles.searchText}
              type='text' 
              id='search' 
              name='search'
              placeholder='Search for your school....'/>
        </div>
        <div className={styles.searchbarspan}></div>

        {/* List */}
        <ul className={styles.list}>
          {schools.schools.map((school) => (
            <li key={school.id} className={styles.listItem}>
              <div className={styles.schoolLetter}>
                <p>{school.name.slice(0, 1)}</p>
              </div>
              <div className={styles.schoolText}>
                <p className={styles.schoolName}>{school.name}</p>
                <p className={styles.county}>{school.county}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
