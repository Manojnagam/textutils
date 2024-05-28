import React from "react";

function Alert(props) {
    const capitalize = (word) => {
        if (typeof word !== 'string') return ''; // Ensure word is a string before processing
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} warning alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
      </div>
    )
  );
}

export default Alert;
