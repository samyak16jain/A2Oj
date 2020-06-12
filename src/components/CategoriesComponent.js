import React,{Component } from 'react';
import {Link} from 'react-router-dom';
import { Table } from 'reactstrap';

class Category extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const RenderCategories = ({categoryList})=> {
            return (
                categoryList.map((category) => {
                    return (
                        <tr key = {category.id}>
                            <td>{category.id}</td>
                            <td>
                            <Link to={`/categories/${category.id}`}>
                            {category.name}
                            </Link>
                            </td>
                        </tr>
                    );
                })
            );
        }
        return (
            <div className='row'>
            <div className='col-6 offset-md-2'>
                <h1 className= "text-center">
                     CATEGORY LADDER 
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
                        <RenderCategories  categoryList = {this.props.categoryList}/>
                    </tbody>
                </Table>
            </div>
            </div>
        );
    }
}

export default Category;