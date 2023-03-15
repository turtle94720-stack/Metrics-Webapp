import { Link } from 'react-router-dom';
import citiesData from '../redux/citiesData';

const City = () => (
  <section>
    {citiesData.map((city) => (
      <Link
        key={city.country}
        to={{
          pathname: `/detail/${city.name}/${city.lat}/${city.lon}`,
        }}
      >
        <div className="city">
          <img src={city.img} alt="country map" />
          <div className="city-info">
            <h2>{city.name}</h2>
            <p className="latitude">
              <span>Lat: </span>
              <span>{city.lat}</span>
            </p>
            <p className="longitude">
              <span>Long: </span>
              <span>{city.lon}</span>
            </p>
          </div>
        </div>
      </Link>
    ))}
  </section>
);

export default City;
