import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function ApiAxios() {
    const [ data, setData ] = useState([]);
	const [ name, setName ] = useState('');

	useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/character')
        .then((res) => setData(res.data.results));
	}, []);
	console.log(data);
	const chargement = () => {
		if (data.length === undefined || data.length === 0) {
			return (
				<div className="spinner-border text-primary m-5" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			);
		}else {
            return (
                <div className="row">
				{data.filter((item) => item.name.includes(name)).map((item) => (
					<div key={item.id} className="col-md-3">
						<Card dataApi={item} />
					</div>
				))}
			</div>
            )
        }
	};
  return <div>
      <form action="">
				<input
                className='m-4 rounded '
					type="text"
					name=""
					id=""
					placeholder='Ex : morty'
					onChange={(e) => {
						setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
					}}
				/>
				<label htmlFor=""> Recherche par prénom</label>
			</form>
			{chargement()}
  </div>;
}

export default ApiAxios;
