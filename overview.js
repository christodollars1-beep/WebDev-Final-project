const API_URL = "https://www.openimmigration.us/data/stats.json";
const STAT_LABEL = {
   "totalCases": "Total Individuals Tracked",
   "pendingCases": "People Awaiting Decisions",
   "completedProceedings": "Resolved Legal Journeys",
   "totalProceedings": "Total Sessions Conducted",
   "asylumGranted": "Safe Havens Awarded",
   "asylumDenied": "Protection Requests Refused",
   "removalOrders": "Compelled Removals",
   "voluntaryDeparture": "Self-Elected Departures",
   "adminClosure": "Indefinitely Suspended",
   "inAbsentia": "Unattended Hearings",
   "representationRate": "Legal Representation Access",
   "totalJudges": "Adjudicating Officials",
   "totalCourts": "Justice Centers",
   "totalNationalities": "Global Diversity Count",
   "completedCases": "Closed Files"
};
const statsContainer = document.getElementById("statsContainer");
const HIDDEN_KEYS = ["dataSource", "lastUpdated", "generatedAt"];
async function loadStats() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const stats = await response.json();

    if (!statsContainer) {
      console.warn("Element with id 'statsContainer' was not found.");
      return;
    }
   
    statsContainer.innerHTML = Object.entries(stats)
    .filter(([key]) => !HIDDEN_KEYS.includes(key))
    .map(([key, value]) => `
    <div class="col-md-4 mb-3">
          <div class="card p-3">
            <h5>${STAT_LABEL[key] || key}</h5>
            <p>${key === "representationRate" ? (value).toFixed(1) + "%" : (typeof value === "number" ? value.toLocaleString() : value)}</p>
          </div>
        </div>`)
      .join("");
  } catch (error) {
    if (statsContainer) {
      statsContainer.innerHTML =`
      <div class="col-12">
          <div class="alert alert-danger">Sorry, the statistics could not be loaded. Please try again later.</div>
        </div>`;
    }
    console.log("Something went wrong:", error);
  }
}

loadStats();