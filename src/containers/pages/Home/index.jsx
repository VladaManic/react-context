import React, {useContext, useEffect} from 'react';
import ItemsContext from '../../../context/items-context';

import ItemTitle from '../../../shared/components/ItemTitle';

const Home = () => {
	const itemsCtx = useContext(ItemsContext)

	useEffect(() => {
		itemsCtx.getItems()
	}, [itemsCtx])

	return (
		<div>
			<h2>Items</h2>
			<div>
				{itemsCtx.items.map((item) => (
					<ItemTitle key={item.id} singleItem={item} />
				))}
			</div>
		</div>
	)
}

export default Home
