import React from "react";
import { styled } from "styled-components";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
};


const PaginationWrapper = styled.div`
  position: sticky;
  bottom: 0;
  height: 50px;
  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

const PaginationButton = styled.button`
  background-color: #e0e8f0;
  border: 1px solid #cbd5e0;
  color: #2a4365;
  padding: 8px 12px;
  margin: 0 2px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #b8c7d9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ActivePaginationButton = styled(PaginationButton)`
  background-color: #4299e1;
  border-color: #4299e1;
  color: #fff;
  font-weight: bold;

  &:hover {
    background-color: #3182ce;
  }
`;

const PokeListPagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  handlePrevPage,
  handleNextPage,
  handlePageClick,
}) => {
  return (
    <PaginationWrapper>
      <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>Previous</PaginationButton>
      <div className="target-page-buttons">
        {Array.from({ length: totalPages }, (_, index) => (
          <React.Fragment key={index}>
            {currentPage === index + 1 ? (
              <ActivePaginationButton onClick={() => handlePageClick(index + 1)}>
                {index + 1}
              </ActivePaginationButton>
            ) : (
              <PaginationButton onClick={() => handlePageClick(index + 1)}>
                {index + 1}
              </PaginationButton>
            )}
          </React.Fragment>
        ))}
      </div>
      <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>Next</PaginationButton>
    </PaginationWrapper>
  );
};

export default PokeListPagination;