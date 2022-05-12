import React from "react";
import SelectionComponent from "../components/SelectionComponent";
import "../styles/selection.css";

function Selection() {
  return (
    <div>
      <h1 className="title">Notre sélection TOP 5</h1>
      <div className="selectionComponent">
        <SelectionComponent />
      </div>
    </div>
  );
}

export default Selection;
