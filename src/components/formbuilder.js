import React, { Component } from "react";
import { SketchPicker, CompactPicker } from "react-color";
import FontPicker from "font-picker-react";
import FormContainer from "./formContainer";
import SideBar from "./sideBar"

var uniqueId = 1;

class Formbuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: [{ id: 1, item: "", label: "", displayInputElement: "" }],
      choice_option: "",
      choice_inputs: [],
      showResults: false,
      showResult2: false,
      background: "#fff",
      font_color: "#333",
      activeFont: "Open Sans",
      font_size: "13px"
    };

    this.shortText = this.shortText.bind(this);
    this.longText = this.longText.bind(this);
    this.email = this.email.bind(this);
    this.number = this.number.bind(this);
    this.yesNo = this.yesNo.bind(this);
    this.picture = this.picture.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRadioInputChange = this.handleRadioInputChange.bind(this);
    this.colorSetting = this.colorSetting.bind(this);
    this.fontColorSetting = this.fontColorSetting.bind(this);
    this.fontSizeSetting = this.fontSizeSetting.bind(this);
  }

  colorSetting() {
    this.setState(prev => ({ showResults: !prev.showResults }));
  }

  fontColorSetting() {
    this.setState(prev => ({ showResult2: !prev.showResult2 }));
  }
  handleBackgroundColorChange = color => {
    this.setState({ background: color.hex });
    console.log(this.state.background);
    console.log(this.state.activeFont);
  };

  handleFontColorChange = color => {
    this.setState({ font_color: color.hex });
    console.log(this.state.font_color);
  };
  fontSizeSetting = e => {
    this.setState({ font_size: e.target.value + "px" });

    console.log(this.state.font_size);
  };

  handleTextChange = e => {
    let id = e.target.id;
    let selectedInput = this.state.input[id];
    selectedInput.label = e.target.value;
    this.state.input[id] = selectedInput;
    this.setState({ input: this.state.input });
  };

  handleRadioInputChange = e => {
    const choice_option = e.target.value;
  };

  shortText() {
    const input = this.state.input;
    const item = (
      <input
        type="text"
        placeholder="Enter text here"
        id={uniqueId++}
        className="InputDiv form-control"
        onChange={this.handleTextChange.bind(this)}
      />
    );
    const displayInputElement = (
      <input
        type="text"
        placeholder="Type your answer here"
        className=" form-control"
      />
    );
    const label = this.state.label;
    const id = uniqueId;
    this.setState({
      input: input.concat({ item, label, displayInputElement, id })
    });
    console.log(this.state.input);
  }

  longText() {
    const input = this.state.input;
    const item = (
      <input
        type="text"
        placeholder="Enter text here"
        id={uniqueId++}
        className="InputDiv form-control"
        onChange={this.handleTextChange.bind(this)}
      />
    );
    const displayInputElement = (
      <textarea className="form-control" placeholder="Type your answer here" />
    );
    const label = this.state.label;
    const id = uniqueId;
    this.setState({
      input: input.concat({ item, label, displayInputElement, id })
    });
  }

  email() {
    const input = this.state.input;
    const item = (
      <input
        type="text"
        placeholder="Enter text here"
        id={uniqueId++}
        className="InputDiv form-control"
        onChange={this.handleTextChange.bind(this)}
      />
    );
    const displayInputElement = (
      <input
        type="email"
        placeholder="type your answer here"
        className=" form-control"
      />
    );
    const label = this.state.label;
    const id = uniqueId;
    this.setState({
      input: input.concat({ item, label, displayInputElement, id })
    });
  }

  number() {
    const input = this.state.input;
    const item = (
      <input
        type="text"
        placeholder="Could you please send us your phone number?"
        id={uniqueId++}
        className="InputDiv form-control"
        onChange={this.handleTextChange.bind(this)}
      />
    );
    const displayInputElement = (
      <input
        type="number"
        placeholder=" +234 080 0000 0000"
        className=" form-control"
      />
    );
    const label = this.state.label;
    const id = uniqueId;
    this.setState({
      input: input.concat({ item, label, displayInputElement, id })
    });
  }

  yesNo() {
    const input = this.state.input;
    const item = (
      <input
        type="text"
        placeholder="Enter your question here"
        id={uniqueId++}
        className="InputDiv form-control"
        onChange={this.handleTextChange.bind(this)}
      />
    );
    const displayInputElement = (
      <div>
        <p>
          <span className="radio-style">
            <input type="radio" className="" name="yes_no" value="Yes" />
            Yes
          </span>
        </p>
        <p>
          <span className="radio-style">
            <input type="radio" className="" name="yes_no" value="No" />
            No
          </span>
        </p>
      </div>
    );
    const label = this.state.label;
    const id = uniqueId;
    this.setState({
      input: input.concat({ item, label, displayInputElement, id })
    });
  }

  picture() {
    const input = this.state.input;
    const item = (
      <input
        type="text"
        placeholder="Could you please send us a picture of yourself?"
        id={uniqueId++}
        className="InputDiv form-control"
        onChange={this.handleTextChange.bind(this)}
      />
    );
    const displayInputElement = (
      <input
        className="form-control-file"
        type="file"
        name="pic"
        accept="image/*"
      />
    );
    const label = this.state.label;
    const id = uniqueId;
    this.setState({
      input: input.concat({ item, label, displayInputElement, id })
    });
    console.log(this.state.input);
  }

  render() {
    const backgroundColorPicker = (
      <SketchPicker
        color={this.state.background}
        onChangeComplete={this.handleBackgroundColorChange}
      />
    );
    const fontColorPicker = (
      <CompactPicker
        color={this.state.background}
        onChangeComplete={this.handleFontColorChange}
      />
    );

    const displayStyle = {
      background: this.state.background,
      fontSize: this.state.font_size,
      fontFamily: this.state.activeFont,
      color: this.state.font_color
    };

    return (
      <div className="App">
        <header className="" />

        <div className="topMenu">
          <button className="btn btn-info float-right" type="button">
            Save
          </button>
        </div>

        <div className="row container2">
          <div className="col-sm-3">
        <SideBar />
          </div>
          <div className="col-sm-4 form-height" id="forms">
            <div className="collection" id="kiki">
              {this.state.input.map(input => (
                <div> {input.item} </div>
              ))}
            </div>
          </div>
          <div className="col-sm-5">
            <div className="collection" style={displayStyle}>
              <form id="preview">
                {this.state.input.map(input => (
                  <FormContainer
                    label={input.label}
                    displayInputElement={input.displayInputElement}
                  />
                ))}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Formbuilder;
