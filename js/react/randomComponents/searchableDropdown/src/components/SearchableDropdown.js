import React from "react";
import Proptypes from "prop-types";

class SearchableDropdown extends React.Component {
  render() {
    const { options, defaultValue } = this.props;
    return (
      <>
        <input list="searchable-dd" value={defaultValue} />
        <datalist id="searchable-dd">
          {options.map((option) => {
            return <option value={option.value} />;
          })}
        </datalist>
      </>
    );
  }
}

SearchableDropdown.defaultProps = {
  defaultValue: ""
};

export default SearchableDropdown;
