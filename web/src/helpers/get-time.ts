export function getTime(type: "START_TIME" | "END_TIME"): string {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 30) {
    minutes = 30;
  } else {
    minutes = 0;
    hours += 1;
    if (hours === 24) {
      hours = 0;
    }
  }

  if (type === "END_TIME") {
    minutes += 30;
    if (minutes >= 60) {
      minutes -= 60;
      hours += 1;
      if (hours === 24) {
        hours = 0;
      }
    }
  }

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
}
