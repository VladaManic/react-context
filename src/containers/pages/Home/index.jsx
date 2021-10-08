import React, {useContext, useEffect} from 'react'

import ItemsContext from '../../../context/items-context';

const Home = () => {
	const itemsCtx = useContext(ItemsContext);

	useEffect(() => {
		itemsCtx.getItems()
	}, [])

	return (
		<div>
			<h2>Home</h2>
			<div>
				{itemsCtx.items.map((item) => (
					<div key={item.id}>
						{item.title}
						{item.text}
					</div>
				))}
			</div>
		</div>
	)
}

export default Home
