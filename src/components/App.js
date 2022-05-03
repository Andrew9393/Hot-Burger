import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import Burger from './Burger'
import sampleBurgers from '../sample-burgers';
import base from "../base";
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import SignIn from "./Auth/SignIn";



class App extends React.Component {

    static propTypes = {
      match: PropTypes.object
    }

  state = {
    burgers: {},
    order: {}
  }

  componentDidMount() {
    const { params } = this.props.match
    const localStorageRef = localStorage.getItem(params.restaurantId)
    if(localStorageRef){
      this.setState({order: JSON.parse(localStorageRef)})
    }

    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: 'burgers'
    })
  }

  componentDidUpdate() {
    const { params } = this.props.match

    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order))
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addBurger = (burger) => {
  //  1 делаем копию state
  const burgers = {...this.state.burgers};
  // 2 добавить новый бургер в переменную бургерс
  burgers[`burger${Date.now()}`] = burger
  // 3 записываем наш новый объект в стейт
  this.setState({burgers: burgers})
  
  }

  updateBurger = (key, updatedBurger) => {
    const burgers = {...this.state.burgers};
    // обновляем нужный бургер
    burgers[key] = updatedBurger;
    this.setState({burgers})
  }

  deleteBurger = key => {
    const burgers = {...this.state.burgers};
    // 2. удаляем бургер
    burgers[key] = null;
    // 3записать обновленный в стате
    this.setState({burgers: burgers})
  }

  deleteFromOrder = key => {
    const order = {...this.state.order};
    // 2. удаляем из заказа
    delete order[key];
    // 3записать обновленный в стате
    this.setState({order: order})
  }

  loadSampleBurgers = () =>{
    this.setState({burgers: sampleBurgers})
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order: order})
  }

  handleLogout = async () => {
    await firebase.auth().signOut();
    window.location.reload();
  }

  render() {

    return(
      <SignIn>
        <div className="burger-paradise">
          <div className="menu">
            <Header title="Veri Hot Burger"/>
            <ul className="burgers">
              {Object.keys(this.state.burgers).map(key => {
                return <Burger 
                          key={key}
                          index={key}
                          addToOrder={this.addToOrder}
                          details={this.state.burgers[key]}
                        />
              })}
            </ul>
          </div>
          <Order burgers={this.state.burgers} order={this.state.order} deleteFromOrder={this.deleteFromOrder}/>
          <MenuAdmin 
            addBurger={this.addBurger} 
            loadSampleBurgers={this.loadSampleBurgers}
            burgers={this.state.burgers}
            updateBurger={this.updateBurger}
            deleteBurger={this.deleteBurger}
            handleLogout={this.handleLogout}/>
        </div>
      </SignIn>
    )
  }
}

export default App