import React, { Component } from 'react';
import './addList.css'

class AddList extends Component {
  render() {
    return (
      <div className="adding">
        <form onSubmit={this.props.onAddList}>
          <div>name<input type="text" onChange={this.props.addObj} name="organisation" className="orgName"/></div>
          <div>tel<input type="text" onChange={this.props.addObj} name="tel" className="orgTell"/></div>
          <div>process<input type="text" onChange={this.props.addObj} name="process" className="orgProcess"/></div>
          <div>area<input type="text" onChange={this.props.addObj} name="area" className="orgArea"/></div>
          <div>clients<input type="text" onChange={this.props.addObj} name="client" className="orgClient"/></div>
          <div>day<input type="text" onChange={this.props.addObj} name="day" className="orgDay"/></div>
          <div>services<input type="text" onChange={this.props.addObj} name="services" className="orgServices"/></div>
          <div>borough<input type="text" onChange={this.props.addObj} name="borough" className="orgBorough"/></div>
          <div>type<input type="text" onChange={this.props.addObj} name="type" className="orgType"/></div>
          <div><input type="submit" value="Add"/></div>
        </form>
      </div>
    );
  }
}
export default AddList;
