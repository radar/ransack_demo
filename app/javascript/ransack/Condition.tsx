import React from "react";
import { SearchableAttributes } from "./ConditionGroups";

type ConditionProps = {
  searchableAttributes: SearchableAttributes;
};

const Condition: React.FunctionComponent<ConditionProps> = ({
  searchableAttributes,
}) => {
  const attributeSelect = (
    <select>
      {searchableAttributes.map()}
      <option>Hello</option>
    </select>
  );
  return <div>{attributeSelect}</div>;
};

export default Condition;
