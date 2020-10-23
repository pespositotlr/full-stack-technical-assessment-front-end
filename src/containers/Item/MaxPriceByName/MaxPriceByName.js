import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { connect } from 'react-redux';
import * as repositoryActions from '../../../store/actions/repositoryActions';

class MaxPriceByName extends Component {

    componentDidMount = () => {
        let itemName = this.props.match.params.itemName;
        let url = '/api/GetMaxPriceByItemName/' + itemName;
        this.props.onGetData(url, { ...this.props });
    }

    render() {

        if (!isNaN(this.props.data)) {
            const cost = this.props.data;
            const itemName = this.props.match.params.itemName;
            return (
                <Aux>
                    <br />
                    <Row>
                        <Col className="offset-md-0">
                            <p className='pageInfo'>
                                This the highest price/cost for the item named "{itemName}" is: {cost}
                            </p>
                        </Col>
                    </Row>
                </Aux>
            )
        } else {
            return (
                <Aux>
                    <br />
                    <Row>
                        <Col className="offset-md-0">
                            <p className='pageInfo'>
                                Loading...
                            </p>
                        </Col>
                    </Row>
                </Aux>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.repository.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetData: (url, props) => dispatch(repositoryActions.getData(url, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MaxPriceByName);