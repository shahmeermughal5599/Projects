import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotesThunk,
  getNotesThunkMethod,
  updateNotesThunk,
} from "../redux/notesThunk";

function AddNotes({ editNotesData, setEditNotesData }) {
  const { loading: reduxNotesLoader } = useSelector((state) => state.notes);
  const [inputFields, setInputFields] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editNotesData) {
      setInputFields({
        title: editNotesData?.title,
        content: editNotesData?.content,
      });
    }
  }, [editNotesData]);

  const onChangeCommonInputStateHandler = (event) => {
    event.preventDefault();
    const currentElement = event.target;

    setInputFields({
      ...inputFields,
      [currentElement.name]: currentElement.value,
    });
  };

  const addNoteHandler = async (event) => {
    event.preventDefault();
    if (!inputFields?.title || !inputFields?.content) {
      alert("Please Fill The Input Fileds");
      return;
    }
    const payload = {
      ...inputFields,
      favorite: false,
    };

    if (editNotesData) {
      const updatepayload = {
        ...editNotesData,
        ...inputFields,
      };
      dispatch(updateNotesThunk(updatepayload));
      setEditNotesData(null);
    } else {
      dispatch(addNotesThunk(payload));
    }

    setInputFields({
      title: "",
      content: "",
    });
    dispatch(getNotesThunkMethod());
  };

  return (
    <div className="section form-container" onSubmit={addNoteHandler}>
      <form className="white">
        <h5 className="grey-text text-darken-3">
          {/* Create Note */}
          {editNotesData ? "UpdateNotes" : "CreateNotes"}
        </h5>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="note_title"
              type="text"
              className="validate"
              name="title"
              onChange={onChangeCommonInputStateHandler}
              value={inputFields?.title}
            />
            <label className="active">Title</label>
          </div>
        </div>

        <div className="input-field col s12">
          <textarea
            id="note_content"
            className="materialize-textarea"
            name="content"
            onChange={onChangeCommonInputStateHandler}
            value={inputFields?.content}
          ></textarea>
          <label>Content</label>
        </div>
        <button className="btn green" type="submit" disabled={reduxNotesLoader}>
          {/* Create Note */}
          {editNotesData ? "UpdateNotes" : "CreateNotes"}
        </button>
      </form>
    </div>
  );
}

export default AddNotes;
