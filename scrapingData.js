const puppeteer = require('puppeteer');

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Website 1
  await page.goto('https://www.mountainwatch.com/australia/mt-hotham/weather/');

  const snowForecastData1 = await page.evaluate(() => {
    const forecastGraph = document.querySelector('#forecast-graph-87');

    // Extract temperatures
    const minMaxTempElements = forecastGraph.querySelectorAll('.minMaxTemp');
    const temperatures = Array.from(minMaxTempElements).map(element => {
      const minTemp = element.querySelector('.minTemp').textContent.trim();
      const maxTemp = element.querySelector('.maxTemp').textContent.trim();
      return { minTemp, maxTemp };
    });

    // Extract snow forecast information
    const snowElements = forecastGraph.querySelectorAll('.forecast-chart-snow');
    const snowForecasts = Array.from(snowElements).map(element => {
      const date = element.querySelector('.date').textContent.trim();
      const snowfall = element.querySelector('.snowfall').textContent.trim();
      const conditions = element.querySelector('.conditions').textContent.trim();
      return { date, snowfall, conditions };
    });

    return { temperatures, snowForecasts };
  });

  // Website 2
  await page.goto('https://www.example.com/website2');

  const snowForecastData2 = await page.evaluate(() => {
    // Scrape and process data for Website 2
    // ...

    return { temperatures, snowForecasts };
  });

  // Website 3
  await page.goto('https://www.example.com/website3');

  const snowForecastData3 = await page.evaluate(() => {
    // Scrape and process data for Website 3
    // ...

    return { temperatures, snowForecasts };
  });

  await browser.close();

  // Display data for Website 1
  displayData('website1', snowForecastData1);

  // Display data for Website 2
  displayData('website2', snowForecastData2);

  // Display data for Website 3
  displayData('website3', snowForecastData3);
}

function displayData(websiteId, data) {
  const temperatureDataElement = document.getElementById(`temperatureData${websiteId}`);
  const snowForecastDataElement = document.getElementById(`snowForecastData${websiteId}`);

  // Display temperature data
  const temperatureTable = createTable(data.temperatures, ['Min Temp', 'Max Temp']);
  temperatureDataElement.innerHTML = '';
  temperatureDataElement.appendChild(temperatureTable);

  // Display snow forecast data
  const snowForecastTable = createTable(data.snowForecasts, ['Date', 'Snowfall', 'Conditions']);
  snowForecastDataElement.innerHTML = '';
  snowForecastDataElement.appendChild(snowForecastTable);
}

function createTable(data, headers) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create table headers
  const headerRow = document.createElement('tr');
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // Create table rows
  data.forEach(rowData => {
    const row = document.createElement('tr');
    Object.values(rowData).forEach(cellData => {
      const cell = document.createElement('td');
      cell.textContent = cellData;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}

// Check if it's the scheduled time (e.g., 6 AM)
function isScheduledTime() {
  const now = new Date();
  const scheduledHour = 6; // Set the desired hour for scraping (e.g., 6 AM)
  return now.getHours() === scheduledHour;
}

// Run the scraping logic if it's the scheduled time
function runScrapingLogic() {
  if (isScheduledTime()) {
    scrapeData();
  }
}

// Run the code every minute
setInterval(runScrapingLogic, 60 * 1000); // 60 seconds * 1000 milliseconds

