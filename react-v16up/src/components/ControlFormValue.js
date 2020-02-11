import React from "react";

class MyFormControl extends React.Component {
  static availableOptions = [
    "apple",
    "grape",
    "orange",
    "cherry",
    "pear",
    "peach"
  ];
  state = { multiline: "", commaSeparated: "", multiSelect: [] };
  handleCommaSeparatedChange = event => {
    const { value } = event.target;
    const allVals = value
      .split(",")
      .map(v => v.trim())
      .filter(Boolean);
    this.setState({
      commaSeparated: value,
      multiline: allVals.join("\n"),
      multiSelect: allVals.filter(v =>
        MyFormControl.availableOptions.includes(v),
      ),
    });
  };
  handleMultilineChange = event => {
    const { value } = event.target;
    const allVals = value.split("\n").map(v => v.trim()).filter(Boolean);
    this.setState({
      multiline: value,
      commaSeparated: allVals.join(","),
      multiSelect: allVals.filter(v =>
        MyFormControl.availableOptions.includes(v),
      ),
    });
  };
  handleMultiSelectChange = event => {
    const allVals = Array.from(event.target.selectedOptions,).map(
      options => options.value
    )
    this.setState({
      multiSelect: allVals,
      multiline: allVals.join("\n"),
      commaSeparated: allVals.join(","),
    })
  };
  render() {
    const { commaSeparated, multiline, multiSelect } = this.state;
    return (
      <form>
        <div>
          <label>
            Comma separated values:
            <br />
            <input
              type="text"
              value={commaSeparated}
              onChange={this.handleCommaSeparatedChange}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Multiline values:
            <br />
            <textarea
              rows={MyFormControl.availableOptions.length}
              value={multiline}
              onChange={this.handleMultilineChange}
            />
          </label>
        </div>
        <div>
          <label>
            MultiSelect values:
            <br />
            <select
              multiple
              value={multiSelect}
              size={MyFormControl.availableOptions.length}
              onChange={this.handleMultiSelectChange}
            >
              {MyFormControl.availableOptions.map(optionValue => (
                <option key={optionValue} value={optionValue}>
                  {optionValue}
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>
    );
  }
}
export default MyFormControl;
