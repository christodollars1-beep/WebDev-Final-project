const API_URL = "https://www.openimmigration.us/data/yearly-trends.json";
const trendsTableBody = document.getElementById("trendsTableBody");
const yearSearch = document.getElementById("yearSearch");

let records = [];

function renderRows(list) {
  trendsTableBody.innerHTML = "";
  list.forEach((record) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${record.year}</td>
      <td>${record.filed}</td>
      <td>${record.grants}</td>
      <td>${record.denials}</td>`;
    trendsTableBody.appendChild(row);
  });
}

yearSearch.addEventListener("input", () => {
  const term = yearSearch.value.trim();
  renderRows(records.filter((record) => String(record.year).includes(term)));
});

async function loadTrends() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    records = await response.json();
    renderRows(records);
  } catch (error) {
    trendsTableBody.innerHTML = `
      <tr>
        <td colspan="4">
          <div class="alert alert-danger">Sorry, the statistics could not be loaded. Please try again later.</div>
        </td>
      </tr>`;
    console.log("Something went wrong:", error);
  }
}

loadTrends();