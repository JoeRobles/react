import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch, history }) => (
  <tr>
    <td>{description}</td>
    <td>{amount}</td>
    <td>{createdAt}</td>
    <td>
      <Link to={`/edit/${id}`}>Edit</Link>
    </td>
  </tr>
);

export default connect()(ExpenseListItem);