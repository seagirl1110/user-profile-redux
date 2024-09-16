import styles from './styles.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../../redux/actions';
import PropTypes from 'prop-types';

function UserForm({ name, status, setUserData }) {
  const [user, setUser] = useState({ name: '', status: '' });

  useEffect(() => {
    setUser({ name, status });
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setUserData(user);
  };

  return (
    <div>
      <h2>Edit User Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            value={user.name}
            onChange={handleChange}
            type="text"
            name="name"
          />
        </label>
        <label>
          Status:
          <input
            value={user.status}
            onChange={handleChange}
            type="text"
            name="status"
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

const mapDispatchToProps = (dispatch) => ({
  setUserData: (userData) => dispatch(setUserInfo(userData)),
});

UserForm.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  setUserData: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
