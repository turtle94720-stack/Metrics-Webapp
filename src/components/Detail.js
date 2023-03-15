import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../redux/detail/detailsSlice';

const Detail = () => {
  const { lat, lon, name } = useParams();
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail({ lat, lon }));
  }, []);

  if (!details) {
    return (
      <>
        <h1>loading</h1>
      </>
    );
  }

  return (
    <>
      <h1>{name}</h1>
      <div>
        <h2>Coordinates</h2>
        <p>
          <span>Latitude</span>
          <span>{details.coord.lat}</span>
        </p>
        <p>
          <span>Longitude</span>
          <span>{details.coord.lon}</span>
        </p>
      </div>
      <div>
        <h2>Weather</h2>
        <p>
          <span>Main</span>
          <span>{details.weather[0].main}</span>
        </p>
        <p>
          <span>Description</span>
          <span>{details.weather[0].description}</span>
        </p>
      </div>
      <div>
        <h2>Base Station</h2>
        <p>
          <span>Temperature</span>
          <span>{details.main.temp}</span>
        </p>
        <p>
          <span>Feels Like</span>
          <span>{details.main.feels_like}</span>
        </p>
        <p>
          <span>Humidity</span>
          <span>{details.main.humidity}</span>
        </p>
        <p>
          <span>Pressure</span>
          <span>{details.main.pressure}</span>
        </p>
      </div>
      <div>
        <h2>Visibility</h2>
        <p>
          <span>Visible</span>
          <span>{details.visibility}</span>
        </p>
      </div>
      <div>
        <h2>Wind</h2>
        <p>
          <span>Speed</span>
          <span>{details.wind.speed}</span>
        </p>
        <p>
          <span>Degree</span>
          <span>{details.wind.deg}</span>
        </p>
      </div>
      <div>
        <h2>Clouds</h2>
        <p>
          <span>Cover</span>
          <span>{details.clouds.all}</span>
        </p>
      </div>
    </>
  );
};

export default Detail;
