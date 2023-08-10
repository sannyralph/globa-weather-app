import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const ForecastWeather = ({ data }) => {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dainInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dainInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dainInWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    src={`icons/${item.weather[0].icon}.png`}
                    className="icon-small"
                  />
                  <label className="day" htmlFor="">
                    {forecastDays[idx]}
                  </label>
                  <label className="description" htmlFor="">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max" htmlFor="">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label htmlFor="">Pressure</label>
                  <label className="daily-details" htmlFor="">
                    {item.main.pressure}hpa
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Humidity</label>
                  <label className="daily-details" htmlFor="">
                    {item.main.humidity}
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">clouds</label>
                  <label className="daily-details" htmlFor="">
                    {item.clouds.all}%
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Wind Speed</label>
                  <label className="daily-details" htmlFor="">
                    {item.wind.speed}m/s
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Feels like</label>
                  <label className="daily-details" htmlFor="">
                    {item.main.feels_like}°C
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">See level</label>
                  <label className="daily-details" htmlFor="">
                    {item.main.see_level}°C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastWeather;
