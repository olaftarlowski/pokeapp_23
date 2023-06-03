import { useEffect, useState } from "react";
import { usePokeListContext } from "../../utils/hooks/usePokeListContext";
import { PokeListItem } from "./";
import { LoadingSpinner } from "../common";
import { SingleRecord } from "../../utils/types/pokeList";
import { PokeListWrapper } from "../../style/styled-components";

const PokeList = () => {
    const { allSingleRecords } = usePokeListContext();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasError, setHasError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const recordsPerPage = 48;
    const totalPages = Math.ceil(allSingleRecords.length / recordsPerPage);

    console.log(allSingleRecords);


    useEffect(() => {
        if (!allSingleRecords) {
            setIsLoading(true);
            setHasError(false);
        } else {
            setIsLoading(false);
        }
    }, [allSingleRecords]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = allSingleRecords.slice(
        indexOfFirstRecord,
        indexOfLastRecord
    );

    return (
        <PokeListWrapper>
            {isLoading ? (
                <LoadingSpinner />
            ) : currentRecords.length !== 0 ? (
                <>
                    {currentRecords.map((props: SingleRecord) => (
                        <PokeListItem key={props.id} {...props} />
                    ))}
                </>
            ) : (
                <p>Empty data</p>
            )}
            {hasError && <p>An error has occurred...</p>}
            <div>
                {currentPage !== 1 && (
                    <button onClick={handlePrevPage}>Previous</button>
                )}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
                {currentPage !== totalPages && (
                    <button onClick={handleNextPage}>Next</button>
                )}
            </div>
        </PokeListWrapper>
    );
};

export default PokeList;
