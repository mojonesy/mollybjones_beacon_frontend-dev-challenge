import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Logo from '../assets/Logo';
import SearchBar from '../components/SearchBar';
import ErrorModal from '../components/ErrorModal';
import useGeoLocation from '../utils/useGeoLocation';


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
  const [showSchools, setShowSchools] = useState(true);

  const [singleSchool, setSingleSchool] = useState({});
  const [showSingleSchool, setShowSingleSchool] = useState(false);

  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');

  const location = useGeoLocation();


  useEffect(() => {
    async function loadSchools() {
      const res = await fetch('https://api.sendbeacon.com/team/schools');
      const { schools } = await res.json();
      setSchools(schools);
      setShowSchools(true);
    }

    loadSchools();
  }, []);

  /* search change handlers */
  const handleChange = ({ target }) => {
    setQuery(target.value);
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Return') {
      
      schools.filter((school) => {
        if (school.name.includes(query)) {
          setShowSchools(false);
          setSingleSchool(school);
          setShowSingleSchool(true);
        } else {
          setError('School not found. Try another search.');
          setShowModal(true);
        }
      });
    } else {
      setShowSchools(true);
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
          setShowSchools={setShowSchools}
        />
      } 

      <div className={styles.mainListContainer}>
        {/* List */}
          {showSchools &&
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
          }

          {showSingleSchool &&
            <div className={styles.list}>
              <div key={singleSchool.id} className={styles.listItem}>
                <div className={styles.schoolLetter}>
                  <p>{singleSchool.name.slice(0, 1)}</p>
                </div>
                <div className={styles.schoolText}>
                  <p className={styles.schoolName}>{singleSchool.name}</p>
                  <p className={styles.county}>{singleSchool.county}</p>
                </div>
              </div>
            </div>
          }
      </div>
    </div>
  )
}
