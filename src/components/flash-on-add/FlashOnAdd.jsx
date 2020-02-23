import React, { PureComponent, Fragment } from 'react'
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

class FlashOnAdd extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			active: false,
			counter: this.props.counter
		}

		this.audioRef = React.createRef();
	}

	componentDidUpdate(prevProps, prevState) {
		const { counter } = this.props;
		const { counter: prevCounter } = prevState;
		if (counter !== prevCounter) {
			this.setState({
				active: counter > prevCounter,
				counter,
			}, () => {
				const { active } = this.state;
				if (active) {
					setTimeout(() => {
						this.setState({
							active: false
						})
					}, 1500)
				}
			});
		}
	}

	generateRandomPosition = () => Math.floor(Math.random() * 100) + 1;

	render() {
		const { active } = this.state;
		return (
			<Fragment>
				<Flash
					className="flash"
					pose={active ? 'visible' : 'hidden'}
					x={this.generateRandomPosition()}
				/>
			</Fragment>
		)
	}
}


const mapStateToProps = createStructuredSelector({
	counter: selectCartItemsCount
})

export default connect(mapStateToProps)(FlashOnAdd)