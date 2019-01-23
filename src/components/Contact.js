import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Contact extends Component {

  state = {
    showContactInfo: true
  };

  onShowClick = (e) =>{
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }

  render() {
      const { name, email, phone } = this.props.contact;
      const showContactInfo = this.state.showContactInfo;
    return (
      <div className="card card-body mb-3">
        <h4>{ name }{'  '} 
        <i onClick = {this.onShowClick.bind(this)} 
        className="fas fa-sort-down" style={{cursor: 'pointer'}}/>
        </h4>
        {showContactInfo ? ( 
          <ul className="list-group"> 
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ): null}
        
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

