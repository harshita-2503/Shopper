import React from 'react'

import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">

        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122)
        </div>

      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform where goods and services are bought and sold over the internet. It allows businesses to reach a global audience and provides customers with the convenience of shopping from anywhere at any time. These websites typically feature a catalog of products, detailed descriptions, images, and prices, as well as secure payment gateways and shipping options. E-commerce websites can range from small niche stores to large marketplaces like Amazon and eBay, offering a wide variety of items such as clothing, electronics, home goods, and digital products.</p>
        <p>The primary goal of an e-commerce website is to provide a seamless, user-friendly shopping experience that encourages customers to make purchases and return for future transactions.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
