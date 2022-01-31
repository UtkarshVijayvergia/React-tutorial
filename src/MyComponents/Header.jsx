import React from 'react';
import PropTypes from 'prop-types';


export default function Header(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        {/* ---------------------------- if-else condition on searchbar with {?:}   -------------------------------------- */}
        { props.searchbar? <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> : "" }
        {/* ----------------------------------------------------------------------------------------------------------- */}

      </div>
    </div>
  </nav>
  </>
  )
}



Header.defaultProps = {
  title: "Your Title Here",
  searchbar: true
}



Header.propTypes = {             // Header is the name of function and not file
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired
}