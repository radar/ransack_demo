import React, { useState } from "react";
import Condition from "./Condition";
import { SearchableAttributes } from "./ConditionGroups";

type ConditionGroupProps = {
  index: number;
  searchableAttributes: SearchableAttributes;
  removeGroup: (index) => void;
};

const ConditionGroup: React.FunctionComponent<ConditionGroupProps> = ({
  index,
  searchableAttributes,
  removeGroup,
}) => {
  const [conditions, setConditions] = useState([]);

  const remove = (e: MouseEvent) => {
    e.preventDefault();
    removeGroup(index);
  };

  const addCondition = (e: MouseEvent) => {
    e.preventDefault();
    setConditions(conditions.concat(""));
  };

  const allOrAny = (
    <select>
      <option>all</option>
      <option>any</option>
    </select>
  );

  return (
    <fieldset>
      <legend>
        Match {allOrAny} conditions{" "}
        <button className="btn" onClick={remove}>
          Remove
        </button>
      </legend>

      {conditions.map((condition) => (
        <Condition searchableAttributes={searchableAttributes} />
      ))}

      <button className="btn" onClick={addCondition}>
        Add Condition
      </button>
    </fieldset>
  );
};

export default ConditionGroup;
("");
