import React from "react";

/**
 * Functional react component for congrats message
 * @function
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is true)
 */
export default (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span test-data="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};