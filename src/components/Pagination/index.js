import React from 'react';

import Link from 'gatsby-link';

import { getMaxPages } from '../../api';

import { handlePreviousPage, handleNextPage } from '../../api/url';

const PageItem = ({ number, content, url }) => (
  <li className={`page-item ${number < 0 ? 'disabled' : ''}`}>
    <Link
      className="page-link"
      to={`${typeof content === 'string' ? url : `/page/${number}`}`}
      href={`${typeof content === 'string' ? url : `/page/${number}`}`}
    >{content || number}
    </Link>
  </li>
);

const Pagination = () => (
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <PageItem
        number={handlePreviousPage()}
        content="上一頁"
        url={handlePreviousPage()}
      />
      <PageItem number={1} />
      <PageItem number={2} />
      <PageItem number={-1} content="..." />
      <PageItem number={getMaxPages() - 1} />
      <PageItem number={getMaxPages()} />
      <PageItem
        number={handleNextPage()}
        content="下一頁"
        url={handleNextPage()}
      />
    </ul>
  </nav>
);

export default Pagination;
