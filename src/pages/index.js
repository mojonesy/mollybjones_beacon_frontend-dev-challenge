import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Logo from '../assets/Logo';
import SearchBar from '../components/SearchBar';


/* fetch data */
export async function getStaticProps() {
  const res = await fetch('https://api.sendbeacon.com/team/schools');
  const schools = await res.json();

  return {
    props: {
      schools,
    },
  }
}

/* Home component */
export default function Home({ schools }) {

  const [query, setQuery] = useState('');
  const [school, setSchool] = useState([]);

  const handleChange = ({ target }) => {
    setQuery(target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(query);
    }
  }

  return (
    <div>
      {/* Logo */}
      <div className={styles.logo}>
        <Logo />
        <div className={styles.logotext}>
          BEACON
        </div>
      </div>

      {/* Search */}
      <SearchBar 
        styles={styles}
        query={query}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown} 
      />

      <div className={styles.mainListContainer}>
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
