import React, { useState } from "react";
import ConditionGroup from "./ConditionGroup";

export type SearchableAttributes = { [key: string]: string };

type ConditionGroupsProps = {
  searchableAttributes: SearchableAttributes;
};

const ConditionGroups: React.FunctionComponent<ConditionGroupsProps> = ({
  searchableAttributes,
}) => {
  const [groups, setGroups] = useState([]);
  const addConditionGroup = (e: MouseEvent) => {
    e.preventDefault();
    setGroups(groups.concat(""));
  };
  return (
    <fieldset>
      <legend>Condition Groups</legend>

      {groups.map((group, index) => (
        <ConditionGroup
          index={index}
          key={index}
          searchableAttributes={searchableAttributes}
        />
      ))}
      <button className="btn" onClick={addConditionGroup}>
        Add Condition Group
      </button>
    </fieldset>
  );
};

export default ConditionGroups;
