import React, { Component } from 'react';

class List extends Component {
  render() {
    const list = this.props.list;
    return (
      <div className="list-template">

        {list.map((list) => {
          return (
            <div className="eachOrganisation">
              <div className="organisation name"><a href={list.website}>{list.organisation}</a></div>
                <div className="organisation tel"><strong className="prop-definition">tel: </strong>{list.tel?list.tel:<span className="no-props">Tell does not exist</span>}</div>
                <div className="organisation process"><strong className="prop-definition">process: </strong>{list.process?list.process:<span className="no-props">Process does not exist</span>}</div>
                <div className="organisation area"><strong className="prop-definition">area: </strong>{list.area?list.area:<span className="no-props">Area does not exist</span>}</div>
                <div className="organisation clients"><strong className="prop-definition">clients: </strong>{list.clients?list.clients:<span className="no-props">Client does not exist</span>}</div>
                <div className="organisation day"><strong className="prop-definition">day: </strong>{list.day?list.day:<span className="no-props">Day does not exist</span>}</div>
                <div className="organisation services"><strong className="prop-definition">services: </strong>{list.services?list.services:<span className="no-props">Services does not exist</span>}</div>
                <div className="organisation borough"><strong className="prop-definition">borough: </strong>{list.borough?list.borough:<span className="no-props">Borough does not exist</span>}</div>
                <div className="organisation type"><strong className="prop-definition">type: </strong>{list.type?list.type:"Type does not exist"}</div>

            </div>
          )
        })}
      </div>
    )
  }
}

export default List;
 /*

 "website": "http://999club.org/our-services/advice-and-support/",
 "email\r": "office@999club.org",
 "tel": "020 8694 5797",
 "area": "South",
 "process": "Drop-in 10.30am Mon- Fri",
 "organisation": "999 Club",
 "clients": "Homeless/Hostel/Risk of eviction",
 "services": "Benefits Advice",
 "borough": "Deptford",
 "type": "Benefits",
 "day": "Mon - Fri"
 */
