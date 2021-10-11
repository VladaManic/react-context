import React, {useContext, useEffect} from 'react';
import ItemsContext from '../../../context/items-context';

import ItemTitle from '../../../shared/components/ItemTitle';
import Loader from '../../../assets/loader.gif'

const Home = () => {
	const itemsCtx = useContext(ItemsContext)

	useEffect(() => {
		itemsCtx.getItems()
	}, [itemsCtx])

	return (
		<div>
			<h2>Items</h2>
			{itemsCtx.loading ? <img src={Loader} alt='' /> :
			<div>
				{itemsCtx.items.map((item) => (
					<ItemTitle key={item.id} singleItem={item} />
				))}
			</div>}
		</div>
	)
}

export default Home
