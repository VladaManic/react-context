import React, {useContext} from 'react'

import ItemsContext from '../../../context/items-context';

const Home = () => {
	const itemsCtx = useContext(ItemsContext);

	return (
		<div>
			<h2>Home</h2>
			<div>
				{itemsCtx.items.map((item) => (
					<p>{item.title}</p>
				))}
			</div>
		</div>
	)
}

export default Home
