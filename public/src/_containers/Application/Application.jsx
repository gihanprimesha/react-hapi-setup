import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavigatiobBar from '../../_components/Common/NavigationBar';

class Application extends Component {
    componentDidMount() {
        const { sampleActionRequest } = this.props;
        sampleActionRequest('Dispathing sample');
    }

    render() {
        const { application, sample } = this.props;

        return (
            <>
                <NavigatiobBar />
                <div className="ui-x"></div>

                <div className="main">
                    {/*<div>{application.author}</div>*/}
                    <h1>{application.description}</h1>
                    <h2>Update with Epic dispatching {sample.name}</h2>
                    <div className="main-logos">
                        <img
                            src={
                                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
                            }
                        />
                    </div>
                </div>
            </>
        );
    }
}

Application.propTypes = {
    application: PropTypes.object.isRequired,
    sample: PropTypes.object.isRequired,
    sampleActionRequest: PropTypes.func.isRequired,
};

export default Application;
