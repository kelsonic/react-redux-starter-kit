import React from 'react';
import Header from '../../components/Header/Header.jsx';
import classes from './CoreLayout.scss';
import '../../styles/core.scss';

const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
};

export default CoreLayout;
