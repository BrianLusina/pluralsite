import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

ManageCoursePage.propTypes = {

};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
