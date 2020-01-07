import { Header, Segment, Button, Icon } from 'semantic-ui-react'

function CartItemList() {

	const user = false
	return (

		<Segment secondary color="teal" inverted textAlign="center" placeholder>
			<Header icon>
				<Icon name="shopping basket"/>
				No Products in your cart! 
			</Header>
				<div>
					{user ? (
						<Button color="orange">
							View products
						</Button>
					):(
						<Button color="blue">
							Login to add products
						</Button>
					)}
				</div>
		</Segment>
	)
}

export default CartItemList;