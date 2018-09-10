import React, { Component } from 'react';

class IndianMarket extends React.Component {
	render() {
		return (
		<div className="market">
			<img src="media/eat/market/noun_cart_1177234_000000.svg" class="shopping-cart" />
			<h1>Indian Market</h1>
			<p>Shop for Indian foods and spices.</p>
			<ul class="market-items">
				<li class="item">
					<img src='media/eat/market/india/lal-mirchi-powder.jpg' />
					<span class="item-name">Lal Mirchi</span>
					<span class="price-meta">Price:&nbsp;</span><span class="item-price">$2.99</span><span class="price-meta">&nbsp;/&nbsp;kg</span>
					<button class="primary-button">Add to cart</button>
				</li>
				<li class="item">
					<img src='media/eat/market/india/turmeric-powder.jpg' />
					<span class="item-name">Haldi</span>
					<span class="price-meta">Price:&nbsp;</span><span class="item-price">$2.99</span><span class="price-meta">&nbsp;/&nbsp;kg</span>
					<button class="primary-button">Add to cart</button>
				</li>
				<li class="item">
					<img src='media/eat/market/india/hari-elaichi.jpg' />
					<span class="item-name">Hari Elaichi</span>
					<span class="price-meta">Price:&nbsp;</span><span class="item-price">$3.99</span><span class="price-meta">&nbsp;/&nbsp;kg</span>
					<button class="primary-button">Add to cart</button>
				</li>
				<li class="item">
					<img src='media/eat/market/india/sabut-jeera.jpg' />
					<span class="item-name">Sabut Jeera</span>
					<span class="price-meta">Price:&nbsp;</span><span class="item-price">$3.99</span><span class="price-meta">&nbsp;/&nbsp;kg</span>
					<button class="primary-button">Add to cart</button>
				</li>
			</ul>
		</div>
    );
  }
}

export default IndianMarket;