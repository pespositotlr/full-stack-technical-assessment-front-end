import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import CurrencyFormat from 'react-currency-format';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class ItemDetails extends Component {
    componentDidMount = () => {
        let id = this.props.match.params.id;
        let url = '/api/GetItem/' + id;
        this.props.onGetData(url, { ...this.props })
    }
    
    render() {
        const item = this.props.data;

        return (
            <Aux>
                <br/>
                <Container>
                    <Row>
                        <Col md={3}>
                            <strong>Item Id:</strong>
                        </Col>
                        <Col md={3}>
                            {item.id}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <strong>Item Name:</strong>
                        </Col>
                        <Col md={3}>
                            {item.itemName}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <strong>Item Cost:</strong>
                        </Col>
                        <Col md={3}>
                            <CurrencyFormat value={item.cost} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </Col>
                    </Row>
                </Container>
            </Aux>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);