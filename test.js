const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);

const now = dayjs(dayjs().format());
const now1 = dayjs(dayjs().format());
const date = dayjs("2022-08-30T07:55:36+01:00");

const printDate = () => {
  const duration = date.toNow(true);
  console.log("duration", duration);
  let [number, unit] = duration.split(" ");

  if (number === "a") number = 1;

  if (unit === "days" || unit === "day") {
    if (number >= 7) {
      const num = Math.floor(number / 7);
      return `${num}w`;
    }
    return `${number}d`;
  } else {
    if (unit === "few") return `<${number}s`;
    if (unit === "years" || unit === "year") unit = "yr";
    if (unit === "months" || unit === "month") unit = "mo";
    if (unit === "hours" || unit === "hour") unit = "h";
    if (unit === "minutes" || unit === "minute") unit = "m";
    if (unit === "seconds" || unit === "second") unit = "s";

    return `${number}${unit}`;
  }
};

const diff = printDate();
console.log(diff);
