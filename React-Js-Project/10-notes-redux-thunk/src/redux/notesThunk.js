import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const getNotesThunkMethod = createAsyncThunk("getNotes", async () => {
  try {
    let notes = 0;
    await getDocs(collection(db, "notes")).then((querySnapshot) => {
      const notesDataResponse = querySnapshot.docs?.map((singleDocument) => {
        return {
          id: singleDocument.id,
          ...singleDocument.data(),
        };
      });
      console.log(notesDataResponse, "notesDataResponse");
      notes = notesDataResponse;
    });
    return notes;
  } catch (error) {
    console.log(error, "error");
  }
});

export const addFavoriteNoteById = createAsyncThunk(
  "favoriteNotes",
  async (singleNote, { dispatch }) => {
    try {
      const documentReference = doc(db, "notes", singleNote?.id);

      await updateDoc(documentReference, {
        ...singleNote,
        favorite: !singleNote?.favorite,
      });
      dispatch(getNotesThunkMethod());
    } catch (error) {
      console.log(error, "error");
    }
  }
);

export const deleteNoteById = createAsyncThunk(
  "deleteNotes",
  async (singleNote, { dispatch }) => {
    try {
      const documentReference = doc(db, "notes", singleNote?.id);

      await deleteDoc(documentReference);

      dispatch(getNotesThunkMethod());
    } catch (error) {
      console.log(error, "error");
    }
  }
);

export const addNotesThunk = createAsyncThunk(
  "addNotes",
  async (payload, { dispatch }) => {
    try {
      await addDoc(collection(db, "notes"), payload);
      dispatch(getNotesThunkMethod());
    } catch (error) {
      console.log(error, error);
    }
  }
);

export const updateNotesThunk = createAsyncThunk(
  "updateNotes",
  async (updatepayload, { dispatch }) => {
    const documentReference = doc(db, "notes", updatepayload?.id);
    await updateDoc(documentReference, updatepayload);
    dispatch(getNotesThunkMethod());
  }
);
