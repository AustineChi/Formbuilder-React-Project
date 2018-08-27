import React from 'react';

const SideBar = (props) => {
  return (
<div className="block-height">
<div className="space1"> </div>
<div className="d-flex flex-row mt-2">
  <ul
    className="nav nav-tabs nav-tabs--vertical nav-tabs--left"
    role="navigation"
  >
    <li className="nav-item">
      <a
        href="#lorem"
        className="nav-link active"
        data-toggle="tab"
        role="tab"
        aria-controls="lorem"
      >
        <span className="glyphicon glyphicon-th-large">
          blocks
        </span>
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#ipsum"
        className="nav-link"
        data-toggle="tab"
        role="tab"
        aria-controls="ipsum"
      >
        <span className="glyphicon glyphicon-cog">design</span>
      </a>
    </li>
  </ul>
  <div className="tab-content">
    <div
      className="tab-pane fade show active"
      id="lorem"
      role="tabpanel"
    >
      <div className="card bg-light text-dark">
        <div className="card-body" onClick={this.shortText}>
          Short Text
        </div>
      </div>

      <div className="card bg-light text-dark">
        <div className="card-body" onClick={this.longText}>
          Long Text
        </div>
      </div>

      <div className="card bg-light text-dark">
        <div className="card-body" onClick={this.yesNo}>
          Yes/No
        </div>
      </div>

      <div className="card bg-light text-dark">
        <div className="card-body" onClick={props.multipleChoice}>
          Multiple Choice
        </div>
      </div>

      <div className="card bg-light text-dark">
        <div className="card-body" onClick={props.email}>
          Email
        </div>
      </div>

      <div className="card bg-light text-dark">
        <div className="card-body" onClick={props.bvn}>
          BVN Number
        </div>
      </div>

      <div className="card bg-light text-dark">
        <div className="card-body" onClick={props.number}>
          Phone Number
        </div>
      </div>

      <div className="card bg-light text-dark">
        <div className="card-body" onClick={props.picture}>
          Picture
        </div>
      </div>
      <div className="card bg-light text-dark">
        <div className="card-body" onClick={props.signature}>
          Signature
        </div>
      </div>
    </div>
    <div className="tab-pane fade" id="ipsum" role="tabpanel">
      <div>
        <input
          type="number"
          placeholder="font size"
          className=" form-control"
          onChange={props.fontSizeSetting}
        />
      </div>

      <div className="card bg-light text-dark">
        <div className="card-body" onClick={props.colorSetting}>

          background color setting
        </div>
      </div>
      <div id="colorSet">
        {this.state.showResults ? backgroundColorPicker : null}
      </div>
      <div className="card bg-light text-dark">
        <div
          className="card-body"
          onClick={props.fontColorSetting}
        >
          Font color setting
        </div>
      </div>
      <div id="colorSet">
        {this.state.showResult2 ? fontColorPicker : null}
      </div>
      <div />
    </div>
  </div>
</div>
</div>

)
}
 
export default SideBar;