import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FIRST_PAGES_COUNT, LAST_PAGES_COUNT, ACTUAL_PAGES_COUNT } from '../../constants';
import { PaginationContainer, PageNumber } from './styles';

const Pagination = ({ totalPages, page, handleClick }) => {
  const [firstPages, setFirstPages] = useState([]);
  const [lastPages, setLastPages] = useState([]);
  const [actualPages, setActualPages] = useState([]);

  useEffect(() => {
    setFirstPages(getFirstPages());
    setActualPages(getActualPages());
    setLastPages(getLastPages());
  }, [page, totalPages]);

  const getFirstPages = () => {
    if (totalPages <= 0) return [0];

    if (totalPages <= FIRST_PAGES_COUNT + LAST_PAGES_COUNT + ACTUAL_PAGES_COUNT) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    return [...Array(FIRST_PAGES_COUNT)].map((_, i) => i + 1);
  };

  const getLastPages = () => {
    if (totalPages <= 0
      || totalPages <= FIRST_PAGES_COUNT + LAST_PAGES_COUNT + ACTUAL_PAGES_COUNT) return [];

    return [...Array(LAST_PAGES_COUNT)].map((_, i) => i + totalPages - LAST_PAGES_COUNT + 1);
  };

  const getActualPages = () => {
    const firstPageOfTheLastGroup = totalPages - LAST_PAGES_COUNT + 1;
    if (totalPages <= 0
      || totalPages <= FIRST_PAGES_COUNT + LAST_PAGES_COUNT + ACTUAL_PAGES_COUNT) return [];

    const endOfTheFirstGroup = FIRST_PAGES_COUNT + 1;
    const endOfTheLastGroup = totalPages - LAST_PAGES_COUNT - 1;

    const actualPagesStart = Math.max(endOfTheFirstGroup, page - ((ACTUAL_PAGES_COUNT - 1) / 2));
    const actualPagesEnd = Math.min(endOfTheLastGroup, page + ((ACTUAL_PAGES_COUNT - 1) / 2));

    if (page <= endOfTheFirstGroup) {
      return [...Array(ACTUAL_PAGES_COUNT)]
        .map((_, i) => i + endOfTheFirstGroup);
    }

    if (page >= endOfTheLastGroup) {
      return [...Array(ACTUAL_PAGES_COUNT)]
        .map((_, i) => i + firstPageOfTheLastGroup - ACTUAL_PAGES_COUNT);
    }
    return [...Array(actualPagesEnd - actualPagesStart + 1)]
      .map((_, i) => i + actualPagesStart);
  };

  return (
    <PaginationContainer>
      <PageNumber onClick={() => handleClick(1)}>{'<<'}</PageNumber>
      <PageNumber onClick={() => handleClick(page - 1)}>{'<'}</PageNumber>
      {firstPages
        .map((pageNumber, index) => (
          <PageNumber
            onClick={() => handleClick(pageNumber)}
            className={`p${pageNumber}`}
            page={page}
            key={index} // eslint-disable-line
          >
            {pageNumber}
          </PageNumber>
        ))}
      {((firstPages[FIRST_PAGES_COUNT - 1] + 1) === (actualPages[0]) || !actualPages.length)
      || <PageNumber>...</PageNumber>}
      {actualPages
        .map((pageNumber, index) => (
          <PageNumber
            onClick={() => handleClick(pageNumber)}
            className={`p${pageNumber}`}
            page={page}
            key={index} // eslint-disable-line
          >
            {pageNumber}
          </PageNumber>
        ))}
      {((actualPages[ACTUAL_PAGES_COUNT - 1] + 1) === (lastPages[0]) || !actualPages.length)
      || <PageNumber>...</PageNumber>}
      {lastPages
        .map((pageNumber, index) => (
          <PageNumber
            onClick={() => handleClick(pageNumber)}
            className={`p${pageNumber}`}
            page={page}
            key={index} // eslint-disable-line
          >
            {pageNumber}
          </PageNumber>
        ))}
      <PageNumber
        data-testid="nextPage"
        onClick={() => handleClick(page + 1)}
      >
        {'>'}
      </PageNumber>
      <PageNumber onClick={() => handleClick(totalPages)}>{'>>'}</PageNumber>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Pagination;
