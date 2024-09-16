import styles from './styles.module.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function User({ name, status }) {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

User.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
};

export default connect(mapStateToProps)(User);
