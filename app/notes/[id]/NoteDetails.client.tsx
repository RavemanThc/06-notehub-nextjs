"use client"; // ОБОВ'ЯЗКОВО першим рядком

import { useState } from "react"; // Тепер useState працюватиме
import { useQuery } from "@tanstack/react-query";
import { useDebouncedCallback } from "use-debounce";
// ... інші імпорти

export default function NotesClient() {
  const [page, setPage] = useState(1); // Працює!
  const [search, setSearch] = useState(""); // Працює!
  
  // Весь інший код з useState та useQuery...
  
  return (
    // Ваш JSX з кнопками onClick та іншим
  );
}