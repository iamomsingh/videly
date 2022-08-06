import React  from 'react';
import propTypes from 'prop-types';
import _ from 'lodash';

const pagination = props => {

    const{itemCount,pageSize,currentPage,onPageChange } = props;
    console.log(currentPage);
    const pageCount = Math.ceil(itemCount/pageSize);
    if (pageCount === 1) return null;

    const pages = _.range(1, pageCount + 1);


    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => ( 
                 <li key={page} className= {page === currentPage ?"page-item active":'page-item'}>
                    <a className = "page-link" onClick = {() => onPageChange(page)}> {page} </a>
                 </li>
                ))} 
                
            </ul>
        </nav>
 
     );
};

pagination.propTypes = {
    itemCount: propTypes.number.isRequired, 
    pageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange:propTypes.func.isRequired 
};
  
export default pagination;