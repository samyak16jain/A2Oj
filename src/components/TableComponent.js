import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

class TableComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const RenderTable = ({ itemList, itemType }) => {
            return (
                itemList.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <Link to={`/${itemType}/${item.id}`}>
                                    {item.name}
                                </Link>
                            </td>
                        </tr>
                    );
                })
            );
        }

        return (
            <div className='row mt-5'>
                <div className='col-6 offset-md-2'>
                    <h1 className="text-center">
                        {this.props.itemName} Ladder
                </h1>
                </div>
                <div className='col-6 offset-md-2'>
                    <Table bordered>
                        <thead>
                            <tr>
                                <td>#</td>
                                <th>Categories</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RenderTable itemList={this.props.itemList} itemType={this.props.itemType} />
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default TableComponent;