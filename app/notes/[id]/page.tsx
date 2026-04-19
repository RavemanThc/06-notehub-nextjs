// Тут НЕМАЄ "use client", тому це Server Component
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client"; // Імпортуємо клієнтський компонент

export default async function NotesPage() {
  const queryClient = new QueryClient();

  // Виконуємо запит прямо на сервері
  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, 12, "", undefined],
    queryFn: () => fetchNotes({ page: 1, perPage: 12, search: "", tag: undefined }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* Передаємо керування клієнтському компоненту */}
      <NotesClient />
    </HydrationBoundary>
  );
}