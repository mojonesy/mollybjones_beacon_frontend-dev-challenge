import SearchLogo from '../assets/SearchLogo';

function SearchBar ({ styles }) {
    return (
      <div className={styles.heading}>
        <h1 className={styles.title}>Pick Your School</h1>
        <div className={styles.search}>
          <div className={styles.eyeglass}>
            <SearchLogo />
          </div>
            <input 
              className={styles.searchText}
              type='text' 
              id='search' 
              name='search'
              placeholder='Search for your school....'/>
        </div>
        <div className={styles.searchbarspan}></div>
      </div>
    );
}
 
export default SearchBar;