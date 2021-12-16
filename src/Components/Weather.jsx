import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '3be4a59490bd19b22f63c9eb0f02c5d8',
        type: 'auto',
        lat: '25.114349',
        lon: '55.138100',
        lang: 'en',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });

      const customStyles = {
        fontFamily: 'Fjalla One, sans-serif',
        gradientStart:  '#6b8abd',
        gradientMid:  '#6081b8',
        gradientEnd:  '#415F91',
        locationFontColor:  '#FFF',
        locationLetterSpacing: '0px',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#FFF',
        todayRangeFontColor:  '##FFF',
        todayDescFontColor:  '##FFF',
        todayInfoFontColor:  '#FFF',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#FFF',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#96967d',
        forecastDescColor:  '#96967d',
        forecastRangeColor:  '#96967d',
        forecastIconColor:  '#5377B2',
    };

    return (
      <ReactWeather
        theme={customStyles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Dubai"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    );
  }

  export default Weather;