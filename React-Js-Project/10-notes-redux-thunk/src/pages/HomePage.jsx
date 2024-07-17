import React, { useState } from "react";
import NotesListing from "../components/NotesListing";
import AddNotes from "../components/AddNotes";
import CustomSpinner from "../components/CustomSpinner/CustomSpinner";
import { useSelector } from "react-redux";

function HomePage() {
  const [editNotesData, setEditNotesData] = useState(null);
  const { loading: reduxNotesLoader } = useSelector((state) => state.notes);

  return (
    <div className="container">
      <CustomSpinner loading={reduxNotesLoader} />

      <div className="row center-align">
        <div className="col s7">
          <AddNotes
            editNotesData={editNotesData}
            setEditNotesData={setEditNotesData}
          />
        </div>
        <div className="col s5">
          <NotesListing setEditNotesData={setEditNotesData} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
