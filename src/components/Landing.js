import React, {useState} from 'react';
import restaurants from '../sample-restaurants';
import PropTypes from 'prop-types';

 const Landing = (props) => {

  const [display, setDisplay] = useState(false)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  // state = {
  //   display: false,
  //   title: '',
  //   url: '',
  // }

  // displayList = () =>{
  //   const {display} = this.state
  //   this.setState({display: !display})
  // }

  const displayList = () =>{
    setDisplay(!display)
  }
  
  // getTitle = (restauran) => {
  //   const {title, url} = restauran
  //   this.setState({title: title, url: url, display: false})
  // }

  const getTitle = (restauran) => {
    const {title, url} = restauran
    setTitle(title)
    setUrl(url)
    setDisplay(false)
  }

  // goToReataurant = () => {
  //   const {url} = this.state
  //   this.props.history.push(`/restaurant/${url}`)
  // }

  const goToReataurant = () => {
    props.history.push(`/restaurant/${url}`)
  }

    return (
      <div className='restaurant_select'>
        <div className='restaurant_select_top'>
          <div className='restaurant_select_top-header font-effect-outline' onClick={displayList}>{title ? title : "Выбери ресторан"}</div>
          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>
        {display ? <div className="restaurant_select_bottom">
          <ul>
            {
              restaurants.map(restauran => {
                return <li onClick={() => getTitle(restauran)} key={restauran.id}>{restauran.title}</li>
              })
            }
          </ul>
        </div> : null}
        {title && !display ? (<button onClick={goToReataurant}>перейти в ресторан</button>) : null}
      </div>

    )
 }

 Landing.propTypes = {
   history: PropTypes.object
 }

export default Landing;