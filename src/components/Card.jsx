import React from 'react';

function Card({ dataApi }) {
    //console.log(dataApi);

	return (
		<div className="card m-3" style={{ width: '18rem' }}>
			<img src={dataApi.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{dataApi.name}</h5>
				<p>Espece : {dataApi.species}</p>
				<p className="card-text">Saison : {dataApi.location.name}</p>
			</div>
		</div>
	);
}

export default Card;
