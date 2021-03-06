import React from 'react'
import CompleteCartSingleDish from './CompleteCartSingleDish'
import SingleVendorCartFooter from './SingleVendorCartFooter.component'
import { connect } from 'react-redux'

const SingleVendorCart = ({ dishes, vendor, vendorId, totalPrice }) => {
  const renderSingleDish = () => {
    return dishes.map((dish, index) => {
      let selectableText = ''
      dish.selectables.forEach(selectable => {
        selectableText += selectable.name
        selectableText += ' - '
        selectable.option.forEach(op => {
          selectableText += op.name
          selectableText += ' '
        })
      })
      return (
        <CompleteCartSingleDish
          key={index}
          selectableText={selectableText}
          dish={dish}
          vendorId={vendorId}
        />
      )
    })
  }

  return (
    vendor ? (
      <>
        <div className="vendorRow">
          <img src={vendor.logo} alt={vendor.name} />
          <span>{vendor.name}</span>
          <span className="dishCategory"> {dishes.length} types of items </span>
        </div>

        <div className="dishInCartContainer">
          {renderSingleDish()}
          <SingleVendorCartFooter
            totalPrice={totalPrice}
            vendorId={vendorId}
          />
        </div>
      </>
    ) :
    <div> Loading ...</div>
      
  )
}


const mapStateToProps = (state, ownProps) => {

  let vendor = null;
  if (state.firestore.ordered.vendors && state.firestore.ordered.vendors.length > 0) {
    vendor = state.firestore.ordered.vendors.find(vendor => vendor.id === ownProps.vendorId)
  }
  return {
    vendor: vendor
  }
}
export default connect(mapStateToProps)(SingleVendorCart)
