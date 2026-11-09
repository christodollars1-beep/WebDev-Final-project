# Immigration Statistics Dashboard

A two-page web app that displays immigration statistics from the
openimmigration.us open data API.

## Pages
- **Overview (index.html):** summary statistics for all cases, such as
  total cases, pending cases, and asylum outcomes.
- **Yearly Trends (trends.html):** filings, grants, and denials by year,
  with a search box to filter the table by year.

## How to Use
1. Open the site's index.html page (or the github.io link).
2. Use the navbar to switch between Overview and Yearly Trends.
3. On the Yearly Trends page, type a year in the search box to filter the table. Clear the box to show all years.

## API
- **Endpoint 1:** https://www.openimmigration.us/data/stats.json
  (overall statistics, used by overview.js)
- **Endpoint 2:** https://www.openimmigration.us/data/yearly-trends.json
  (yearly data, used by trends.js)
- Both endpoints are public. No API key or authentication is required.

## Third-Party Tools
- Bootstrap 5.3.3 (CSS framework), loaded from cdn.jsdelivr.net
- Data source: DOJ EOIR FOIA case data, via openimmigration.us

## Files
- index.html, overview.js: overview page
- trends.html, trends.js: yearly trends page
- README.md: this documentation