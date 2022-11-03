import React from 'react';
import SearchLogo from '../assets/SearchLogo';

function SearchBar ({ styles, query, handleChange, handleKeyDown }) {

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
              value={query} 
              id='search' 
              name='search'
              placeholder='Search for your school....'
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              />
        </div>
        <div className={styles.searchbarspan}></div>
      </div>
    );
}
 
export default SearchBar;