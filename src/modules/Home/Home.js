import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from '../../redux/appSelector';
import { setAuth } from '../../redux/appActions';

const Home = () => {
    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Page Home</h1>
              status auth {auth ? 'Sudah login' : 'Belum Login'}
        </div>
    );
};


Home.propTypes = {

};


export default Home;
