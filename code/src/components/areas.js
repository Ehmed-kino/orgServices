import React, { Component } from 'react';
import './components.css'

class Areas extends Component {
  render() {
    const areas = this.props.areas;
    console.log(areas);
    return (
      <div>
        {areas.map((val) => {
          return (
            <div className="buttons">
              <button onClick={() => {this.props.onClick(val)}}>{val}</button>
            </div>
          )
        })}
      </div>
    );
  }
}
export default Areas;
