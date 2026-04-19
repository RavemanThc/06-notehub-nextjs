import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

export default function Pagination({ page, totalPages, onPageChange }: any) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={page - 1}
      onPageChange={(e) => onPageChange(e.selected + 1)}
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
}