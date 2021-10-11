import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import ItemsContext from '../../../context/items-context';

import DeleteBtn from '../../../shared/components/DeleteBtn'

const Single = () => {
	//getting param from URL
	const { id } = useParams()
	const itemsCtx = useContext(ItemsContext)
	const [ singleItem, setSingleItem ] = useState({id: '', text: '', title: ''})

	useEffect(() => {
		// fetch(
		// 	`https://react-context-9849b-default-rtdb.firebaseio.com/items/${id}.json`
		// ).then((response) => {
		// 	return response.json()
		// }).then((data) => {
		// 	setSingleItem(data)
		// })
		const newObj = itemsCtx.items.filter(obj => obj.id === id)
		setSingleItem(newObj[0]);
	}, [id])

	//Enabling editing input fields in form
	function handleInputChange(e){
		const target = e.target
		const value = target.value
		const name = target.name
		setSingleItem({...singleItem, [name]: value})
	}

	const onSubmit = (e) => {
		e.preventDefault()
		const text = singleItem.text
		const title = singleItem.title
		const createdItem = {text, title}
		itemsCtx.updateItem({id, createdItem})
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div>
					<input type="text" value={singleItem !== undefined && singleItem.title} name="title" onChange={(e) => handleInputChange(e)} />
				</div>
				<div>
					<textarea value={singleItem !== undefined && singleItem.text} name="text" onChange={(e) => handleInputChange(e)} />
				</div>
				<div>
					<input type="submit" value="Update" />
					<DeleteBtn id={id} />
				</div>
			</form>
		</div>
	)
}

export default Single
