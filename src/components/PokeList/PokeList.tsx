import { useEffect, useState } from "react";
import { usePokeListContext } from "../../utils/hooks/usePokeListContext";
import { PokeListItem, PokeListPagination } from "./";
import { LoadingSpinner } from "../common";
import { SingleRecord } from "../../utils/types/pokeList";
import { PokeListWrapper } from "../../style/styled-components";

import { useNavigate, useLocation } from "react-router-dom";

const PokeList = () => {
  const { allSingleRecords } = usePokeListContext();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? parseInt(pageParam) : 1;

  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const recordsPerPage = 48; // 18 for prod, final version is 48
  const totalPages = Math.ceil(allSingleRecords.length / recordsPerPage);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("page", currentPage.toString());
    navigate({ search: newSearchParams.toString() });
    if (!allSingleRecords) {
      setIsLoading(true);
      setHasError(false);
    } else {
      setIsLoading(false);
    }
  }, [allSingleRecords, currentPage, navigate, location.search]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = allSingleRecords.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  return (
    <>
      <PokeListWrapper>
        {isLoading ? (
          <LoadingSpinner />
        ) : currentRecords.length !== 0 ? (
          <>
            {currentRecords.map((props: SingleRecord) => (
              <PokeListItem key={props.id} {...props} currentPageAt={currentPage}/>
            ))}
          </>
        ) : (
          <p>Empty data</p>
        )}
        {hasError && <p>An error has occurred...</p>}
      </PokeListWrapper>
      <PokeListPagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
      />
    </>
  );
};

export default PokeList;