import { createContext, useState } from 'react';
import axios from 'axios'

const ItemsContext = createContext({
	loading: true,
	items: [],
	getItems: () => {},
	addItem: (item) => {},
	updateItem: (obj) => {},
	deleteItem: (id) => {},
});

export function ItemsContextProvider(props){
	const [currentLoading, setCurrentLoading] = useState(true)
	const [currentItems, setCurrentItems] = useState([])

	const getItemsHandler = () => {
		axios({
			method: 'GET',
			url: 'https://react-context-9849b-default-rtdb.firebaseio.com/items.json'
		}).then((res) => {
			const newItems = [];
			for(const key in res.data){
				const newItem = {
					id: key,
					...res.data[key]
				}
				newItems.push(newItem)
			}
			setCurrentItems(newItems);
			setCurrentLoading(false)
		})
	}

	const addItemHandler = (currentItem) => {
		axios({
			method: 'POST',
      url: 'https://react-context-9849b-default-rtdb.firebaseio.com/items.json',
      data: currentItem
		})
		setCurrentItems((prevCurrentItems) => {
			return prevCurrentItems.concat(currentItem);
		});
		setCurrentLoading(true)
	}

	const updateItemHandler = (obj) => {
		axios({
			method: 'PUT',
      url: `https://react-context-9849b-default-rtdb.firebaseio.com/items/${obj.id}.json`,
      data: obj.createdItem
		})
		setCurrentItems(
      currentItems.map((current) =>
        current.id === obj.id ? { ...current, text: obj.createdItem.text, title: obj.createdItem.title } : current
      )
    )
		setCurrentLoading(true)
	}

	const deleteItemHandler = (id) => {
		axios({
			method: 'DELETE',
      url: `https://react-context-9849b-default-rtdb.firebaseio.com/items/${id}.json`
		})
		setCurrentItems((prevCurrentItems) => {
			return prevCurrentItems.filter(item => item.id !== id);
		});
		setCurrentLoading(true)
	}

	const context = {
		loading: currentLoading,
		items: currentItems,
		getItems: getItemsHandler,
		addItem: addItemHandler,
		updateItem: updateItemHandler,
		deleteItem: deleteItemHandler,
	} 

	return (
		<ItemsContext.Provider value={context}>
			{props.children}
		</ItemsContext.Provider>
	);
}

export default ItemsContext;