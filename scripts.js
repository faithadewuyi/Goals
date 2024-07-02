
function updateDateTime() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  const currentTimeUTC = currentDate.getTime();

  document.getElementById("currentDay").textContent = currentDay;
  document.getElementById("currentTimeUTC").textContent = currentTimeUTC;
}
updateDateTime();
setInterval(updateDateTime, 1000);



