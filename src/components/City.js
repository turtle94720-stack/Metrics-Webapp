import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import citiesData from '../redux/citiesData';
import { fetchCities } from '../redux/city/citiesSlice';
import cloudy from '../assets/cloudy.png';

const City = () => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCities(keyword));
    setKeyword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search City"
          required
          value={keyword}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <section>
        {!cities
        && citiesData.map((city) => (
          <Link
            key={city.country}
            to={{
              pathname: `/detail/${city.name}/${city.lat}/${city.lon}`,
            }}
          >
            <div className="city">
              <div className="city-img"><img src={cloudy} alt="country map" /></div>
              <div className="city-info">
                <h2>{city.name}</h2>
                <p className="coordinate">
                  <span>Lat: </span>
                  <span>{city.lat}</span>
                </p>
                <p className="coordinate">
                  <span>Long: </span>
                  <span>{city.lon}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
        {cities && cities.coord && (
          <Link
            key={cities.id}
            to={{
              pathname: `/detail/${cities.name}/${cities.coord.lat}/${cities.coord.lon}`,
            }}
          >
            <div className="city">
              <img src={cloudy} alt="weather icon" />
              <div className="city-info">
                <h2>{cities.name}</h2>
                <p className="coordinate">
                  <span>Lat: </span>
                  <span>{cities.coord.lat}</span>
                </p>
                <p className="coordinate">
                  <span>Long: </span>
                  <span>{cities.coord.lon}</span>
                </p>
              </div>
            </div>
          </Link>
        )}
        {cities && cities.cod && (
          <>
            <h1>{cities.message}</h1>
          </>
        )}
      </section>
    </>
  );
};

export default City;
