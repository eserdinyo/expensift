import React from "react";

const EditPage = props => {
  console.log(props);

  return (
      <div>
          ID: {props.match.params.id}
      </div>
  );
};

export default EditPage;
