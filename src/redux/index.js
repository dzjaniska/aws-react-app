import {applyMiddleware, createStore} from 'redux'
import rootReducer from './rootReducer'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';


export function configureStore(initialState) {
    return createStore(
            rootReducer,
            initialState,
            composeWithDevTools(
                    applyMiddleware(
                            thunk,
                            promise
                    )
            )
    );
}

