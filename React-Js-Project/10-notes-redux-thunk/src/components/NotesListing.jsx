import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteNoteById,
  deleteNoteById,
  getNotesThunkMethod,
} from "../redux/notesThunk";

function NotesListing({ setEditNotesData }) {
  const { notes: notesData } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [dropdownState, setDropDownState] = useState(null);

  useEffect(() => {
    dispatch(getNotesThunkMethod());
  }, []);

  const favoriteClickHandler = async (singleNote) => {
    dispatch(addFavoriteNoteById(singleNote));
  };

  const deleteNoteHandler = async (singleNote) => {
    dispatch(deleteNoteById(singleNote));
  };

  const onChangeDropdown = (event) => {
    setDropDownState(event.target.value);
  };

  const filterNotesData =
    dropdownState === "true"
      ? notesData.filter((singleNote) => singleNote?.favorite === true)
      : notesData;

  return (
    <>
      <select className="browser-default mt-60" onChange={onChangeDropdown}>
        <option value="" disabled selected>
          Select Favorite Notes
        </option>
        <option value="false">Show All Notes</option>
        <option value="true">Only Favorite Notes</option>
      </select>

      <div className="notesList">
        {filterNotesData?.map((singleNote) => {
          return (
            <div className="note  white" key={singleNote.id}>
              <div className="right-align">
                <i
                  className="material-icons red-text"
                  style={{ cursor: "pointer" }}
                  onClick={() => favoriteClickHandler(singleNote)}
                >
                  {/* favorite */}
                  {singleNote?.favorite ? "favorite" : "favorite_border"}
                </i>
                <i
                  className="material-icons"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteNoteHandler(singleNote)}
                >
                  delete
                </i>
              </div>
              <Link to="">
                <h5 className="black-text">{singleNote?.title}</h5>
              </Link>
              <p className="truncate">{singleNote?.content}</p>
              <div className="right-align">
                <Link to="">
                  <i
                    className="material-icons black-text"
                    style={{ cursor: "pointer" }}
                    onClick={() => setEditNotesData(singleNote)}
                  >
                    edit
                  </i>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NotesListing;
