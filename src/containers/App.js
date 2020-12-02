import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserAndRepos } from '../actions';
// import Picker from '../components/Picker';
import User from '../components/User';

var _ = require('lodash');


class App extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const { dispatch } = this.props;
        dispatch(fetchUserAndRepos());
    }

    componentWillMount(){
        this.handleSubmit();
    }

    render() {
        const { finalUserData } = this.props;
        const { userData } = finalUserData;
        return (
            <div>
                <h1>Jay Kshatriya's Project | User Details</h1>
                {/* <Picker onSubmit={this.handleSubmit} /> */}

                {/* {console.log("Test ", userData.results)} */}

                {finalUserData.isFetching && <h2>Loading...</h2>}
                {!finalUserData.isFetching && <User
                            finalUserData={userData.results}
                        />
                }
            </div>
        );
    }
}

// App.propTypes = {
//     currentUser: PropTypes.string.isRequired,
//     dispatch: PropTypes.func.isRequired,
// };

function mapStateToProps(state) {
    const { finalUserData } = state;
    return {
        
        finalUserData
    };
}

export default connect(mapStateToProps)(App);
