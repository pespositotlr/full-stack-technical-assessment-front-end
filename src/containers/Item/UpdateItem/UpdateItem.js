import React, { Component } from 'react';
import { Form, Container, Button, FormGroup, Row, Col } from 'react-bootstrap';
import { returnInputConfiguration } from '../../../Utility/InputConfiguration';
import * as formUtilityActions from '../../../Utility/FormUtility';
import Input from '../../../UI/Inputs/Input';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';
import { connect } from 'react-redux';
import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';

class UpdateItem extends Component {
    state = {
        itemForm: {},
        isFormValid: true,
    }
    
    componentDidMount = () => {
        this.setState({ itemForm: returnInputConfiguration() });
        const id = this.props.match.params.id;
        const url = '/api/GetItem/' + id;
        this.props.onGetItemById(url, { ...this.props });
    }

    componentWillReceiveProps = (nextProps) => {
            const updatedItemForm = { ...this.state.itemForm };
            let nameObject = { ...updatedItemForm.itemName };
            let costObject = { ...updatedItemForm.cost };

            nameObject.value = nextProps.data.itemName;
            nameObject.valid = true;
            costObject.value = nextProps.data.cost;
            costObject.valid = true;

            updatedItemForm['itemName'] = nameObject;
            updatedItemForm['cost'] = costObject;
            this.setState({ itemForm: updatedItemForm });
    }

    handleChangeEvent = (event, id) => {
        const updatedItemForm = { ...this.state.itemForm };
        updatedItemForm[id] = formUtilityActions.executeValidationAndReturnFormElement(event, updatedItemForm, id);

        const counter = formUtilityActions.countInvalidElements(updatedItemForm);

        this.setState({ itemForm: updatedItemForm, isFormValid: counter === 0 })
    }

    redirectToItemList = () => {
        this.props.history.push('/item-list');
    }

    updateItem = (event) => {
        event.preventDefault();

        const itemToUpdate = {
            id: parseInt(this.props.match.params.id, 10),
            itemName: this.state.itemForm.itemName.value,
            cost: parseInt(this.state.itemForm.cost.value, 10)
        }

        const url = "/api/UpdateItem/";

        this.props.onUpdateItem(url, itemToUpdate, {...this.props});
    }

    render() {
        const formElementsArray = formUtilityActions.convertStateToArrayOfFormObjects({ ...this.state.itemForm });
        return (
            <Container>
                <br />
                <Form horizontal onSubmit={this.updateItem}>
                    {
                        formElementsArray.map(element => {
                            return <Input key={element.id}
                                elementType={element.config.element}
                                id={element.id} label={element.config.label}
                                type={element.config.type} value={element.config.value}
                                changed={(event) => this.handleChangeEvent(event, element.id)}
                                errorMessage={element.config.errorMessage}
                                invalid={!element.config.valid}
                                shouldValidate={element.config.validation}
                                touched={element.config.touched}
                                blur={(event) => this.handleChangeEvent(event, element.id)} />
                        })
                    }
                    <br />
                    <FormGroup>
                        <Container>
                            <Row>
                                <Col className="offset-md-1" md={1}>
                                    <Button type='submit' className="btn btn-info" disabled={!this.state.isFormValid}>Update</Button>
                                </Col>
                                <Col className="offset-md-2" md={2}>
                                    <Button className="btn btn-danger" onClick={this.redirectToItemList}>Cancel</Button>
                                </Col>
                            </Row>
                        </Container>
                    </FormGroup>
                </Form>
                <SuccessModal show={this.props.showSuccessModal} modalHeaderText={'Success message'} 
                    modalBodyText={'Action completed successfylly'}
                    okButtonText={'OK'} 
                    successClick={() => this.props.onCloseSuccessModal('/item-List', { ...this.props })} />
                <ErrorModal show={this.props.showErrorModal} modalHeaderText={'Error message'} 
                    modalBodyText={this.props.errorMessage}
                    okButtonText={'OK'} 
                    closeModal={() => this.props.onCloseErrorModal()} />
            </Container>
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
        onUpdateItem: (url, item, props) => dispatch(repositoryActions.putData(url, item, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItem);