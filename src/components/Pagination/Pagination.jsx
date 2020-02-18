import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PaginationWrapper, PageNumber } from './styles';

const Pagination = ({ totalPages, page, handleClick }) => {
  const [firstPages, setFirstPages] = useState([]);
  const [lastPages, setLastPages] = useState([]);
  const [actualPages, setActualPages] = useState([]);
  const firstPagesCount = 3;
  const lastPagesCount = 3;
  const actualPagesCount = 3;

  useEffect(() => {
    setFirstPages(getFirstPages());
    setActualPages(getActualPages());
    setLastPages(getLastPages());
  }, [page, totalPages]);

  const getFirstPages = () => {
    if (totalPages <= 0) return [0];

    if (totalPages <= firstPagesCount + lastPagesCount + actualPagesCount) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    return [...Array(firstPagesCount)].map((_, i) => i + 1);
  };

  const getLastPages = () => {
    if (totalPages <= 0
      || totalPages <= firstPagesCount + lastPagesCount + actualPagesCount) return [];

    return [...Array(lastPagesCount)].map((_, i) => i + totalPages - lastPagesCount + 1);
  };

  const getActualPages = () => {
    const firstPageOfTheLastGroup = totalPages - lastPagesCount + 1;
    if (totalPages <= 0 || page < firstPagesCount || page > firstPageOfTheLastGroup
      || totalPages <= firstPagesCount + lastPagesCount + actualPagesCount) return [];

    const endOfTheFirstGroup = firstPagesCount + 1;
    const endOfTheLastGroup = totalPages - lastPagesCount - 1;

    const actualPagesStart = Math.max(endOfTheFirstGroup, page - ((actualPagesCount - 1) / 2));
    const actualPagesEnd = Math.min(endOfTheLastGroup, page + ((actualPagesCount - 1) / 2));


    if (page <= endOfTheFirstGroup) {
      return [...Array(actualPagesCount)]
        .map((_, i) => i + endOfTheFirstGroup);
    }

    if (page >= endOfTheLastGroup) {
      return [...Array(actualPagesCount)]
        .map((_, i) => i + firstPageOfTheLastGroup - actualPagesCount);
    }

    return [...Array(actualPagesEnd - actualPagesStart + 1)]
      .map((_, i) => i + actualPagesStart);
  };

  return (
    <PaginationWrapper>
      <PageNumber onClick={() => handleClick(1)}>{'<<'}</PageNumber>
      <PageNumber onClick={() => handleClick(page - 1)}>{'<'}</PageNumber>
      {firstPages
        .map((pageNumber, index) => (
          <PageNumber
            onClick={() => handleClick(pageNumber)}
            className={`p${pageNumber}`}
            page={page}
            key={index}
          >
            {pageNumber}
          </PageNumber>
        ))}
      {actualPages.length ? <PageNumber>...</PageNumber> : ''}
      {actualPages
        .map((pageNumber, index) => (
          <PageNumber
            onClick={() => handleClick(pageNumber)}
            className={`p${pageNumber}`}
            page={page}
            key={index}
          >
            {pageNumber}
          </PageNumber>
        ))}
      {lastPages.length ? <PageNumber>...</PageNumber> : ''}
      {lastPages
        .map((pageNumber, index) => (
          <PageNumber
            onClick={() => handleClick(pageNumber)}
            className={`p${pageNumber}`}
            page={page}
            key={index}
          >
            {pageNumber}
          </PageNumber>
        ))}
      <PageNumber onClick={() => handleClick(page + 1)}>{'>'}</PageNumber>
      <PageNumber onClick={() => handleClick(totalPages)}>{'>>'}</PageNumber>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Pagination;
