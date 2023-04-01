import React from 'react'
//rfc
import PropTypes from 'prop-types'
//imtp 
import { Link } from 'react-router-dom';

export default function NavBar(props) 
{

  return (
    <>
    <div className="Navigation">{props.title}</div>
    </>
)}

//Defining and Validations
NavBar.propTypes = {title: PropTypes.string.isRequired};

//Default Values to Props.
NavBar.defaultProps = { title: "Add Title Here" }
