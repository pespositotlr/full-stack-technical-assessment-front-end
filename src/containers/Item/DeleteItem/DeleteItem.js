import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';
import { connect } from 'react-redux';
import { Container, Button, Col, Row, Form } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';

class DeleteItem extends Component {
    componentDidMount = () => {
        const id = this.props.match.params.id;
        const url = '/api/GetItem/' + id;
        this.props.onGetItemById(url, { ...this.props });
    }

    redirectToItemList = () => {
        this.props.history.push('/item-list');
    }

    deleteItem = (event) => {
        event.preventDefault();

        const url = "/api/DeleteItem/" + this.props.data.id;

        this.props.onDeleteItem(url, { ...this.props });
    }

    render() { 
        let item = {...this.props.data};
        return ( 
            <Aux>
                <br/>
                <Row>
                    <Col md={10}>
                        <Container>
                            <Row>
                                <Col md={3}>
                                    <Form.Label htmlFor='id'>Item Id:</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <span name='name'>{item.id}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Label htmlFor='itemName'>Item Name:</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <span name='name'>{item.itemName}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Form.Label htmlFor='cost'>Cost:</Form.Label>
                                </Col>
                                <Col md={7}>
                                    <span name='cost'><CurrencyFormat value={item.cost} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Container>
                        <Row>
                            <Col className="offset-md-1" md={1}>
                                <Button type='submit' className="btn btn-info" onClick={this.deleteItem}>Delete</Button>
                            </Col>
                            <Col className="offset-md-2" md={2}>
                                <Button className="btn btn-danger" onClick={this.redirectToItemList}>Cancel</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <SuccessModal show={this.props.showSuccessModal} modalHeaderText={'Success message'}
                    modalBodyText={'Action completed successfylly'}
                    okButtonText={'OK'}
                    successClick={() => this.props.onCloseSuccessModal('/item-list', { ...this.props })} />
                <ErrorModal show={this.props.showErrorModal} modalHeaderText={'Error message'}
                    modalBodyText={this.props.errorMessage}
                    okButtonText={'OK'}
                    closeModal={() => this.props.onCloseErrorModal()} />
            </Aux>
         )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.repository.data,
        showSuccessModal: state.repository.showSuccessModal,
        showErrorModal: state.errorHandler.showErrorModal,
        errorMessage: state.errorHandler.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetItemById: (url, props) => dispatch(repositoryActions.getData(url, props)),
        onDeleteItem: (url, item, props) => dispatch(repositoryActions.deleteData(url, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);