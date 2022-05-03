import React from "react";
import PropTypes from 'prop-types';

class EditBurgerForm extends React.Component {

  static propTypes = {
    burger: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string
    }),
    index: PropTypes.string,
    updateBurger: PropTypes.func,
    deleteBurger: PropTypes.func
  }

  handelChenge = (e) => {
    const updatedBurger = {
      ...this.props.burger,
      [e.currentTarget.name]: e.currentTarget.name === 'price' ? parseFloat(e.currentTarget.value) : e.currentTarget.value
    };
    
    this.props.updateBurger(this.props.index, updatedBurger)

    
  }
  
  render() {
    return(
      <div className="burger-edit">
        <input onChange={this.handelChenge} name="name" type="text" value={this.props.burger.name}/>
        <input onChange={this.handelChenge}  name="price" type="text" value={this.props.burger.price}/>
        <select onChange={this.handelChenge} name="status" type="select" className="status" value={this.props.burger.status}>
          <option value="available">Доступно</option>
          <option value="unavailable">Убрать из меню</option>
        </select>
        <textarea onChange={this.handelChenge} name="desc" value={this.props.burger.desc}/>
        <input onChange={this.handelChenge} name="image" type="text" value={this.props.burger.image}/>
        <button onClick={() => this.props.deleteBurger(this.props.index)} type="submit">Удалить из меню</button>
      </div>
    )
  }
}

export default EditBurgerForm;