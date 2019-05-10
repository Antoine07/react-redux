import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    handleIncrement = (event) => {
        this.props.increment();
    }

    handleDrecrement = (event) => {
        this.props.decrement();
    }

    render() {
        const { count } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{count}
                            </h5>
                            <button onClick={this.handleIncrement}> Incrémente </button>
                            <button onClick={this.handleDrecrement}> Décrémente </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {

    return {
        increment: () => dispatch({ type: 'INCREMENT_COUNTER' }),
        decrement: () => dispatch({ type: 'DECREMENT_COUNTER' }),
    }
};

// Permet de lire (lecture uniquement) les props directement dans notre component App ou dans un autre component ...
const mapStateToProps = (state) => {

    return {
      count : state.count
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App) ;