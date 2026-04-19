import { useDebouncedCallback } from "use-debounce";
import css from "./SearchBox.module.css";

export default function SearchBox({ onSearch }: any) {
  const debounced = useDebouncedCallback((value) => {
    onSearch(value);
  }, 500);

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={(e) => debounced(e.target.value)}
    />
  );
}