import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../redux/detail/detailsSlice';
import cloud from '../assets/cloud-background.png';
import cloudDesktop from '../assets/cloud-desktop.png';

const Detail = () => {
  const { name, lat, lon } = useParams();
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail({ lat, lon }));
  }, [lat, lon, dispatch]);

  if (!details) {
    return (
      <>
        <h1 className="loading">loading</h1>
      </>
    );
  }

  const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

  return (
    <div className="detail-container">
      <div className="cloud-img">
        <img src={cloud} alt="cloud-background" />
      </div>
      <div className="cloud-desktop">
        <img src={cloudDesktop} alt="cloud-background" />
      </div>
      <div className="detail">
        <h1>{name}</h1>
        <p className="temp">
          {kelvinToCelsius(details.main.temp)}
          °
        </p>
        <p className="description">{details.weather[0].description}</p>
        <p className="max-min">
          <span>
            H:
            {kelvinToCelsius(details.main.temp_max)}
            °
          </span>
          <span>
            L:
            {kelvinToCelsius(details.main.temp_min)}
            °
          </span>
        </p>
        <div className="flex-card">
          <div className="weather-card">
            <h2>Coordinates</h2>
            <p>
              <span>Latitude</span>
              <span>
                {details.coord.lat}
                °
              </span>
            </p>
            <p>
              <span>Longitude</span>
              <span>
                {details.coord.lon}
                °
              </span>
            </p>
          </div>
          <div className="weather-card">
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
        </div>
        <div className="weather-card">
          <h2>Base Station</h2>
          <p>
            <span>Temperature</span>
            <span>
              {kelvinToCelsius(details.main.temp)}
              °
            </span>
          </p>
          <p>
            <span>Feels Like</span>
            <span>
              {kelvinToCelsius(details.main.feels_like)}
              °
            </span>
          </p>
          <p>
            <span>Humidity</span>
            <span>
              {details.main.humidity}
              %
            </span>
          </p>
          <p>
            <span>Precipitation</span>
            <span>
              {details.rain === undefined ? '' : details.rain['1h']}
              &nbsp;
              mm
            </span>
          </p>
        </div>
        <div className="flex-card">
          <div className="weather-card">
            <h2>Pressure</h2>
            <p>
              <span>Pressure</span>
              <span>
                {details.main.pressure}
                &nbsp;
                hPa
              </span>
            </p>
            <p>
              <span>Sea level</span>
              <span>
                {details.main.sea_level}
                &nbsp;
                hPa
              </span>
            </p>
            <p>
              <span>Ground level</span>
              <span>
                {details.main.grnd_level}
                &nbsp;
                hPa
              </span>
            </p>
          </div>
          <div className="weather-card">
            <h2>Wind</h2>
            <p>
              <span>Speed</span>
              <span>
                {details.wind.speed}
                &nbsp;
                m/s
              </span>
            </p>
            <p>
              <span>Direction</span>
              <span>
                {details.wind.deg}
                °
              </span>
            </p>
            <p>
              <span>Gust</span>
              <span>
                {details.wind.gust}
                &nbsp;
                m/s
              </span>
            </p>
          </div>
        </div>
        <div className="flex-card">
          <div className="weather-card">
            <h2>Visibility</h2>
            <p>
              <span>Visible</span>
              <span>
                {details.visibility}
                &nbsp;
                mi
              </span>
            </p>
          </div>
          <div className="weather-card">
            <h2>Clouds</h2>
            <p>
              <span>Cover</span>
              <span>
                {details.clouds.all}
                %
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
