import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Badge } from "reactstrap";
import * as productActions from "../../../redux/actions/productActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = category => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id)
  };

  render() {
    return (
      <div className="container">
        <h3>
          <span>Categories</span>
        </h3>
       
        <div className="container bg-white py-4" >
          <div className="container mx-auto">
          <div className="">
          {this.props.categories.map(category => (
             
            <div 
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              <button className="flex flex-row group gap-y-2 transition hover:bg-purple-50 items-center text-center "> 
              <img className="w-12 h-12 rounded border border-gray-200" src={category.image} />
              {category.categoryName}
             </button>
              
            </div>
            
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
    categories: state.categoryListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
