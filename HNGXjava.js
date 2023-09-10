// script.js
// JavaScript to update real-time data
// You can use JavaScript to fetch and update real-time data here

// Function to get the current day of the week
function getCurrentDayOfWeek() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
}

// Function to get the current UTC time in milliseconds
function getCurrentUTCTime() {
  return new Date().getTime();
}

// Example: Updating Slack username, profile picture, current day of the week, UTC time, Track, and GitHub URL
const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
const slackImageElement = document.querySelector('[data-testid="slackDisplayImage"]');
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
const myTrackElement = document.querySelector('[data-testid="myTrack"]');
const githubURLElement = document.querySelector('[data-testid="githubURL"]');


setTimeout(() => {
    const currentDayOfWeek = getCurrentDayOfWeek();
  currentDayElement.textContent = `Today is ${currentDayOfWeek}`;
  const currentUTCTime = getCurrentUTCTime();
  currentUTCTimeElement.textContent = `Current UTC Time (ms): ${currentUTCTime}`;
}, 5000);