import React from "react";
import PropTypes from 'prop-types'

const Header = (props) => (
    <header className="top">
      <div className="wrap">
        <div className="header-content">
          <div className="header-rating">
            <div className="header-rating_tag">Райтинг</div>
            <div className="header-rating_icon">&#10057; &#10057; &#10057; &#10057;</div>
          </div>
          <div className="header-divider"></div>
          <h1 className="font-effect-fire-animation">{props.title}</h1>
          <h3>
            <span>
              Быстрая доставка горячиx<span className="sub-header"> бургеров
              </span>
            </span>
          </h3>
        </div>
      </div>
    </header>
  )


// class Header extends React.Component {

//   render() {
    // return(
    //   <header className="top">
    //     <div className="wrap">
    //       <div className="header-content">
    //         <div className="header-rating">
    //           <div className="header-rating_tag">Райтинг</div>
    //           <div className="header-rating_icon">&#10057; &#10057; &#10057; &#10057;</div>
    //         </div>
    //         <div className="header-divider"></div>
    //         <h1 className="font-effect-fire-animation">{this.props.title}</h1>
    //         <h3>
    //           <span>
    //             Быстрая доставка горячиx<span className="sub-header"> бургеров
    //             </span>
    //           </span>
    //         </h3>
    //       </div>
    //     </div>
    //   </header>
    // )
//   }
// }


Header.prototype ={ 
  title: PropTypes.string.isRequired
}

export default Header