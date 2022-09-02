import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const dateTimeDuration = (date: Date | string) => {
  const parsedDate = dayjs(date);
  let [value, unit] = parsedDate.toNow(true).split(" ");

  if (value === "a" || value === "an") value = "1";

  if (unit === "days" || unit === "day") {
    if (Number(value) >= 7) {
      const num = Math.floor(Number(value) / 7);
      return `${num}w`;
    }
    return `${value}d`;
  } else {
    if (unit === "few") return `${value}s`;
    if (unit === "years" || unit === "year") unit = "yr";
    if (unit === "months" || unit === "month") unit = "mo";
    if (unit === "hours" || unit === "hour") unit = "h";
    if (unit === "minutes" || unit === "minute") unit = "m";
    if (unit === "seconds" || unit === "second") unit = "s";
    return `${value}${unit}`;
  }
};
