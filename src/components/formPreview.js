import React, { Component } from 'react';


class FormPreview extends Component {


componentDidMount = () =>{

}

  render() {

    return (
      <div className="container">

<div  dangerouslySetInnerHTML={{ __html: this.state.data.form }} />

        </div>
    );

  }
}

export default FormPreview;
