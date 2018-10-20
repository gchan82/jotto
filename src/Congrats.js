import React from "react";
import PropTypes from 'prop-types';

/**
 * Functional react component for congrats message
 * @function
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is true)
 */
export default (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-text="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
