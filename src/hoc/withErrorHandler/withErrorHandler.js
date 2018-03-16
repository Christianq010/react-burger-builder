import React, {Component} from 'react';

import Aux from './../Aux/Aux';
import Modal from './../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount () {
            // this clears errors when before sending requests
            this.reqInterceptor = axios.interceptors.response.use(req => {
                this.setState({error: null});
                return req;
            })
            // forget our response and if error change error state
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }
        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        // executed when the component isnt required anymore
        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }


        render () {
            return (
                <Aux>
                    <Modal show={this.state.error}
                            modalClosed={this.errorConfirmedHandler}
                    >
                        <p>{this.state.error ? this.state.error.message : null}</p>
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;