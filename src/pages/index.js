import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Logo from '../assets/Logo';
import SearchBar from '../components/SearchBar';
import ErrorModal from '../components/ErrorModal';


/* fetch data */
// export async function getStaticProps() {
//   const res = await fetch('https://api.sendbeacon.com/team/schools');
//   const schools = await res.json();

//   return {
//     props: {
//       schools,
//     },
//   }
// }


/* Home component */
export default function Home() {
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const res = fetch('https://api.sendbeacon.com/team/schools');
    const { schools } = res.json();
    setSchools(schools);
  }, []);

  /* search change handlers */
  const handleChange = ({ target }) => {
    setQuery(target.value);
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Return') {
      schools.schools.filter((school) => {
        if (school.name.includes(query)) {
          setSchool(school.name);
        } else {
          setError('School not found. Try another search.');
          setShowModal(true);
        }
      });
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

      {/* Error modal shows if school cannot be found */}
      {showModal === true &&
        <ErrorModal
          styles={styles}
          error={error}
          setError={setError}
          setShowModal={setShowModal}
        />
      } 

      <div className={styles.mainListContainer}>
        {/* List */}
          <ul className={styles.list}>
            {schools.map((school) => (
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
