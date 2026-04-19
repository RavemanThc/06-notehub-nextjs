import axios from "axios";
import type { Note, Tag } from "../types/note";

// Створюємо інстанс axios з базовими налаштуваннями
const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

interface FetchNotesProps {
  search?: string;
  page: number;
  perPage?: number;
  sortBy?: "created" | "updated";
  tag?: Tag;
}

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

/**
 * Отримання списку нотаток з пагінацією та фільтрами
 */
export const fetchNotes = async ({
  search,
  tag,
  page,
  perPage,
  sortBy,
}: FetchNotesProps): Promise<NotesResponse> => {
  const params: Record<string, string | number> = { page };

  if (search) params.search = search;
  if (tag) params.tag = tag;
  if (sortBy) params.sortBy = sortBy;
  if (typeof perPage === "number") params.perPage = perPage;

  const response = await api.get<NotesResponse>("/notes", { params });
  return response.data;
};

/**
 * Отримання однієї нотатки за ID (нова функція для HW-06)
 */
export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
};

/**
 * Видалення нотатки
 */
export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await api.delete<Note>(`/notes/${id}`);
  return data;
};

/**
 * Створення нової нотатки
 */
export const createNote = async (note: {
  title: string;
  content: string;
  tag: Tag;
}): Promise<Note> => {
  const { data } = await api.post<Note>("/notes", note);
  return data;
};