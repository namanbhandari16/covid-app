import React from 'react';

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        <li><button/></li>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} id={number} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li><button/></li>
      </ul>
    </nav>
  );
};

export default Pagination;