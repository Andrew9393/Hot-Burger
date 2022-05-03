import React from "react";
import PropTypes from 'prop-types'

class Shipment extends React.Component {

  static propTypes = {
    total: PropTypes.number,
  }

render() {
  const { total } = this.props;
  const shipping = total > 0 && total < 500 ? 350 : 99;
  const shippindNeon = shipping === 99 ? (
    <span className="font-effect-neon total_wpar-cheap">{shipping} &#x20b4; </span>
  ) : (
    <span>{shipping} &#x20b4;</span>
  )
  return(
        <div className="total">
          <div className="total_wrap">
            <div>
              <div>
                Доставка : {total > 0 ? shippindNeon : null}
              </div>
              <div className="total_wrap-free">
                {total < 500 ? `Закажите еще на ${500 - total} для доставки за 99` : null}
              </div>
            </div>
            <div className="total_wrap-final">
              Итого : {total} &#x20b4;
            </div>
          </div>
        </div>
        )
  }

}

export default Shipment