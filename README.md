# Immigration Statistics Dashboard
 Repo link (GitHub): https://github.com/christodollars1-beep/WebDev-Final-project
 Live site (github.io): https://christodollars1-beep.github.io/WebDev-Final-project/
 A two-page web app that displays immigration statistics from the openimmigration.us open data API.

## Pages
1. Overview (index.html): summary statistics for all cases, such as
  total cases, pending cases, and asylum outcomes.
2. Yearly Trends (trends.html): filings, grants, and denials by year,
  with a search box to filter the table by year.
3. The metadata uses HIDDEN_KEYS to skip metadata fields.

## How to Use
1. Open the live site's index.html page (https://christodollars1-beep.github.io/WebDev-Final-project/).
2. Use the navbar to switch between Overview and Yearly Trends.
3. On the Yearly Trends page, type a year in the search box to filter the table. Clear the box to show all years.

## API
- Endpoint 1: https://www.openimmigration.us/data/stats.json
  (overall statistics, used by overview.js)
- Endpoint 2: https://www.openimmigration.us/data/yearly-trends.json
  (yearly data, used by trends.js)
- Both endpoints are public. No API key or authentication is required.

## Third-Party Tools
- Bootstrap 5.3.3 (CSS framework), loaded from cdn.jsdelivr.net
- Data source: DOJ EOIR FOIA case data, via openimmigration.us

## Files
- index.html, overview.js: overview page
- trends.html, trends.js: yearly trends page
- README.md: this documentation.

## How to Handle Errors
1. If a request fails, the page shows a red Bootstrap alert.
2. When no year matches, the table shows a blue “No years match that search.” message.