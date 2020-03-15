import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import posed from "react-pose";
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { ReactComponent as Baker } from '../../assets/baker.svg'

const Flash = posed(Baker)({
	visible: {
		y: 10,
		x: ({ x }) => `${x}%`,
		transition: {
			type: 'spring',
			duration: 400,
			stiffness: 100,
			damping: 13
		}
	},
	hidden: {
		y: 100,
		transition: {
			duration: 700,
		}
	}
});

const FlashOnAdd = ({ counter }) => {

	const [active, setActive] = useState(false);
	const [counterState, setCounterState] = useState(counter);

	useEffect(() => {
		if (!active) {
			if (counter > counterState) {
				setActive(true);
			}
			setCounterState(counter);
		}
	}, [setCounterState, counter, counterState, active]);

	if (active) {
		setTimeout(() => {
			setActive(false);
		}, 1500)
	}

	const generateRandomPosition = () => Math.floor(Math.random() * 100) + 1;

	return (
		<Fragment>
			<Flash
				className="flash"
				pose={active ? 'visible' : 'hidden'}
				x={generateRandomPosition()}
			/>
		</Fragment>
	)
}

export default connect(
	createStructuredSelector({
		counter: selectCartItemsCount
	})
)(FlashOnAdd)