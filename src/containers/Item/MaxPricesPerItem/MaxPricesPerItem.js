import React, { Component } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Item from '../../../components/ItemComponents/Item/Item';

import { connect } from 'react-redux';
import * as repositoryActions from '../../../store/actions/repositoryActions';

class MaxPricesPerItem extends Component {
    componentDidMount = () => {
        let url = '/api/GetMaxPricedItems';
        this.props.onGetData(url, { ...this.props });
    }

    render() {
        let items = [];
        if (this.props.data && this.props.data.length > 0) {
            items = this.props.data.map((item) => {
                return (
                    <Item key={item.id} item={item} {...this.props} />
                )
            })
        }

        return (
            <Aux>
                <br />
                <Row>
                    <Col className="offset-md-0" md={8}>
                        <p className={'pageInfo'}>
                            These are the highest price/cost of each item by name
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <Table responsive striped>
                            <thead>
                                <tr>
                                    <th>Item Id</th>
                                    <th>Item Name</th>
                                    <th>Item Cost</th>
                                    <th>Details</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                    <th>Max Price For This Item Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(MaxPricesPerItem);