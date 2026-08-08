const citySearch = document.getElementById('citySearch');
const searchButton = document.getElementById('searchButton');

const weatherData = {
  'San Francisco': {
    city: 'San Francisco, CA',
    temp: '72°',
    condition: 'Partly Cloudy',
    humidity: '61%',
    wind: '8 mph',
    uv: 'Moderate'
  },
  'New York': {
    city: 'New York, NY',
    temp: '68°',
    condition: 'Clear',
    humidity: '55%',
    wind: '10 mph',
    uv: 'Low'
  },
  'London': {
    city: 'London, UK',
    temp: '63°',
    condition: 'Rainy',
    humidity: '78%',
    wind: '12 mph',
    uv: 'Low'
  }
};

function updateDashboard(city) {
  const selectedCity = city.trim();
  const currentCity = weatherData[selectedCity] || {
    city: `${selectedCity}, Local`,
    temp: '70°',
    condition: 'Sunny',
    humidity: '60%',
    wind: '7 mph',
    uv: 'Moderate'
  };

  document.querySelector('.location-name').textContent = currentCity.city;
  document.querySelector('.temperature').textContent = currentCity.temp;
  document.querySelector('.condition-badge').textContent = currentCity.condition;
  document.querySelector('.temp-subtitle').textContent = `Feels like ${currentCity.temp}`;

  const metricValues = document.querySelectorAll('.metric-value');
  metricValues[0].textContent = currentCity.humidity;
  metricValues[1].textContent = currentCity.wind;
  metricValues[2].textContent = currentCity.uv;
}

searchButton.addEventListener('click', () => {
  updateDashboard(citySearch.value);
});

citySearch.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    updateDashboard(citySearch.value);
  }
});
