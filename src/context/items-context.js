import { createContext, useState } from 'react';

const ItemsContext = createContext({
	items: [],
	addItem: (item) => {},
});

export function ItemsContextProvider(props){
	const [currentItems, setCurrentItems] = useState([{
		id: 1,
		title: 'title 1',
		text: 'some text 1'
	},
	{
		id: 2,
		title: 'title 2',
		text: 'text 2'
	}])

	function addItemHandler(currentItem){
		setCurrentItems((prevCurrentItems) => {
			return prevCurrentItems.concat(currentItem);
		});
	}

	const context = {
		items: currentItems,
		addItem: addItemHandler,
	} 

	return (
		<ItemsContext.Provider value={context}>
			{props.children}
		</ItemsContext.Provider>
	);
}

export default ItemsContext;