import React from "react";
import PropTypes from 'prop-types';

class AddBurgerForm extends React.Component {

  static propTypes = {
    addBurger: PropTypes.func
  }
 
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createBurger = (e) => {
    e.preventDefault()
    const burger = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    }

    this.props.addBurger(burger)
    e.currentTarget.reset()

  }

  render() {
    return(
      <form className="burger-edit" onSubmit={this.createBurger}>
        <input ref={this.nameRef} name="name" type="text" placeholder="Name" autoComplete="off"/>
        <input ref={this.priceRef} name="price" type="text" placeholder="Price" autoComplete="off" required/>
        <select ref={this.statusRef} name="status" type="select" className="status">
          <option value="available">Доступно</option>
          <option value="unavailable">Убрать из меню</option>
        </select>
        <textarea ref={this.descRef} name="desc" placeholder="desc" />
        <input ref={this.imageRef} name="image" type="text" placeholder="image" autoComplete="off"/>
        <button type="submit">Добавить в меню</button>
      </form>
    )
  }
}

export default AddBurgerForm