import React, {useContext} from 'react'

import ItemsContext from '../../../context/items-context';

const Home = () => {
	const itemsCtx = useContext(ItemsContext);

	return (
		<div>
			<h2>Home</h2>
			<div>
				{itemsCtx.items.map((item) => (
					<div key={item.id}>
						<p>{item.id}</p>
						<p>{item.title}</p>
						<p>{item.text}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Home
