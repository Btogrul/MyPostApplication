import { getPagesArray } from "../../../utils/pages";



const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={p === page ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;