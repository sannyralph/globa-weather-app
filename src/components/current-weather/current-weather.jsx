import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Abuja</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img src="icons/01d.png" alt="wether" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temerature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Deatails</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">17°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 mh</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">pressure</span>
            <span className="parameter-value">15hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
