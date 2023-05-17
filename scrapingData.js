const puppeteer = require('puppeteer');

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.mountainwatch.com/australia/mt-hotham/weather/');

  const snowForecastData = await page.evaluate(() => {
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

  console.log(snowForecastData); // Output the scraped data

  await browser.close();
}

// Function to check if the current time matches the scheduled time
function isScheduledTime() {
  const now = new Date();
  const scheduledHour = 6; // Set the desired hour for scraping (e.g., 6 AM)
  return now.getHours() === scheduledHour;
}

// Function to run the scraping logic at the scheduled time
function runScrapingLogic() {
  if (isScheduledTime()) {
    scrapeData();
  }
}

// Run the code every minute
setInterval(runScrapingLogic, 60 * 1000); // 60 seconds * 1000 milliseconds
