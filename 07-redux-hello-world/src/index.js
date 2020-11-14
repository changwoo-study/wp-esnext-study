import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import './redux-hello-world.css'

const reduxHelloWorld = Object.assign(
    {},
    window.hasOwnProperty('reduxHelloWorld') ? window.reduxHelloWorld : {
        ajaxUrl: '',
        nonce: '',
        initial: {value: 0}
    }
);


function reducer(state = {value: 0}, action) {
    switch (action.type) {
        case 'wes07/increase':
            return {value: state.value + 1};

        case 'wes07/decrease':
            return {value: state.value - 1};

        case 'wes07/set':
            return {value: action.value};

        default:
            return state;
    }
}

const store = createStore(reducer)

class ReduxHelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }

    componentDidMount() {
        store.subscribe(() => this.setState({value: store.getState().value}))
        store.dispatch({
            type: 'wes07/set',
            value: this.props.initialValue
        })
    }

    render() {
        return (
            <form action={reduxHelloWorld.ajaxUrl} method="post">
                <fieldset>
                    <legend>Redux Hello World</legend>
                    <div>
                        <label htmlFor="decrease-value" className="screen-reader-text">감소</label>
                        <input
                            id="decrease-value"
                            type="button"
                            className="button"
                            value="-"
                            onClick={() => store.dispatch({type: 'wes07/decrease'})}
                        />
                    </div>
                    <div>
                        <label htmlFor="increase-value" className="screen-reader-text">증가</label>
                        <input
                            id="increase-value"
                            type="button"
                            className="button"
                            value="+"
                            onClick={() => store.dispatch({type: 'wes07/increase'})}
                        />
                    </div>
                    <div>
                        {this.state.value}
                    </div>
                </fieldset>
            </form>
        )
    }
}

ReduxHelloWorld.defaultProps = {
    initialValue: 0
}

ReactDOM.render(<ReduxHelloWorld
    initialValue={reduxHelloWorld.initial.value}/>, document.getElementById('redux-hello-world'))