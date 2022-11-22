import totalData from '../Data/cartData.json'

function Cart(){
    return(
        <div id = "cartPage" className = "disgrid">
        <div className = "FILLER-DIV"></div>
        <div id = "cp-mid-div">
          <div id = "cp-sectionOne">
            <div id = "cp-titlebar" className = "">
              <li id = "cp-outercontainer" className = "disgrid font-sizesml-n">
                <ul>PRODUCT</ul>
                <ul>PRICE</ul>
                <ul>QTY</ul>
                <ul>UNIT PRICE</ul>
              </li>
            </div>
          </div>
          <div id = "cp-sectionTwo"></div>
          <div id = "cp-sectionThree" className = "disgrid">
            <div id = "cp-bill-one">
              <div id = "voucherbox" className = "disgrid">
                <input type = "text" className = "font-sizesml" value = "Voucher Code"/>
                <div id = "reedembtn" className = "font-sizesml disflex Vcenter">Redeem</div>
              </div>
            </div>
            <div className = "FILLER-DIV"></div>
            <div id = "cp-bill-two" className = "disgrid font-sizesml">
              <li className = "disgrid">
                <ul id = "subtotal"><p id = "st-title">Subtotal</p><p className = "bill-num">{totalData.map(data => {return(data.price)})}</p></ul>
                <ul id = "shipping"><p id = "st-title">Shipping</p><p className = "bill-num">{totalData.map(data => {return(data.shippingFee)})}</p></ul>
                <ul id = "coupon"><p id = "st-title">Coupon</p><p className = "bill-num">{totalData.map(data => {return(data.coupon)})}</p></ul>
              </li>
              <div id = "total" className = 'font-sizebig-m'>
                <p>TOTAL</p>
                <p className = "bill-num">
                  {totalData.map(data => {return(data.total)})}
                </p>
              </div>
              <div id = "checkoutbtn" className = "disflex Vcenter">Check Out</div>
            </div>
          </div>
        </div>
        <div className = "FILLER-DIV"></div>
      </div>
    )
}