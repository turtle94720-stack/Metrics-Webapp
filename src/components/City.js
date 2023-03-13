import { Link } from 'react-router-dom';
import citiesData from '../redux/citiesData';

const City = () => (
  <section>
    {
                citiesData.map((city) => (
                  <Link
                    key={city.country}
                    to={{
                      pathname: `/${city.name}/${city.lat}/${city.lon}`,
                    }}
                  >
                    <div>
                      <h2>{city.name}</h2>
                      <p>{city.lat}</p>
                      <p>{city.lon}</p>
                    </div>
                  </Link>
                ))
            }
  </section>
);

export default City;
