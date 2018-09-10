import React, { Component } from 'react';

class IndianMarket extends React.Component {
	render() {
		return (
		<div className="market">
			<h1>Indian Market</h1>
			<p>Shop for Indian foods and spices.</p>
			<img src='media/eat/market/india/indian-market.jpg' />
			<ul class="market-items">
				<li class="item">
					<img src='media/eat/market/india/chickpeas.jpg' />
					<span class="item-name">Chickpeas</span>
					<span class="price-meta">Price:&nbsp;</span><span class="item-price">$3</span>
					<button class="primary-button">Add to cart</button>
				</li>
				<li class="item">
					<img src='media/eat/market/india/chickpeas.jpg' />
					<span class="item-name">Chickpeas</span>
					<span class="price-meta">Price:&nbsp;</span><span class="item-price">$3</span>
					<button class="primary-button">Add to cart</button>
				</li>
				<li class="item">
					<img src='media/eat/market/india/chickpeas.jpg' />
					<span class="item-name">Chickpeas</span>
					<span class="price-meta">Price:&nbsp;</span><span class="item-price">$3</span>
					<button class="primary-button">Add to cart</button>
				</li>
				<li class="item">
					<img src='media/eat/market/india/chickpeas.jpg' />
					<span class="item-name">Chickpeas</span>
					<span class="price-meta">Price:&nbsp;</span><span class="item-price">$3</span>
					<button class="primary-button">Add to cart</button>
				</li>
			</ul>
		</div>
    );
  }
}

export default IndianMarket;