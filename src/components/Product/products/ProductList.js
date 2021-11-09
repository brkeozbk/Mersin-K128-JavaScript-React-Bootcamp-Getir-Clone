import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../../redux/actions/productActions";
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import * as cartActions from "../../../redux/actions/cartAction";
import { Table } from "reactstrap";
import alertify from "alertifyjs"
import {Link} from "react-router-dom"

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product)=>{
    this.props.actions.addToCart({quantity:1,product})
    alertify.success(product.productName + " sepete eklendi")
  }
  render() {
    return (
      <div>
        <h3>
          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color">Products</span>
     
          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color"><BsArrowRightShort size={22} />
            {this.props.currentCategory.categoryName }     
          </span>
        </h3>
      
        <div className="bg-white py-4">
           <div className="container mx-auto">
               <h3 className="text-sm font-semibold mb-3"></h3>
               <div className="grid grid-cols-10 flex flex-col" >
          
            {this.props.products.map(product => (
              <tr key={product.id}>
               <div className="flex flex-col items-center">
                
                <img src={product.img} />
                <span>{product.unitPrice}</span>
                <span className="flex items-center">{product.title}</span>
                <span>{product.unitsInStock}</span>
               
                <td>
                  <Button color="success" onClick={()=>this.addToCart(product)}>
                    Sepete ekle
                  </Button>
                </td>
                </div>
              </tr>
            ))}
          
          </div>
           </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
