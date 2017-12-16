import React from 'react';
import { connect } from 'react-redux';

import Counter from '../../../components/Counter';
import Controller from '../../../components/Controller';

// Gatsby Page View
const DefaultLayout = () => (
  <div className="container mb-3">
    <div className="row">
      <div className="col-12">
        <h2>Redux 例子</h2>
        <ConnectedCounter />
        <ConnectedController />
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ count }) => ({ count });

const ConnectedCounter = connect(mapStateToProps)(Counter);

const mapDispatchToProps = dispatch =>
  ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  });

const ConnectedController = connect(null, mapDispatchToProps)(Controller);

export default DefaultLayout;
