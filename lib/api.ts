import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const fetchNotes = async (search = "", page = 1) => {
  const { data } = await instance.get("/notes", {
    params: { search, page, perPage: 12 },
  });
  return data;
};

export const createNote = async (note: any) => {
  const { data } = await instance.post("/notes", note);
  return data;
};

export const deleteNote = async (id: string) => {
  const { data } = await instance.delete(`/notes/${id}`);
  return data;
};

export const fetchNoteById = async (id: string) => {
  const { data } = await instance.get(`/notes/${id}`);
  return data;
};