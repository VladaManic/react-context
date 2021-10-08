import React from 'react'
import { Link } from 'react-router-dom';

const ItemTitle = (props) => {
	return (
		<Link to={`/single/${props.singleItem.id}`}>
			<h2>{props.singleItem.title}</h2>
		</Link>
	)
}

export default ItemTitle
