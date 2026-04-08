const jobHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const jobHours2 = [8, 9, 10, 0, 9];
const calcJobHoursInWeek = function calcJobHoursInWeek(...arrays) {
  const newArr = arrays.flat();
  let total = 0;
  let max = -Infinity;
  let min = Infinity;
  let dayesWorked = 0;
  for (let i = 0; i < newArr.length; i++) {
    const hours = newArr[i];
    if (typeof hours !== "number") continue;
    if (hours > max) max = hours;
    if (hours > 0) {
      dayesWorked++;
      if (hours < min) min = hours;
    }
    total += hours;
  }
  const fullTime = total >= 35;
  const avgDailyHours = Number((total / newArr.length).toFixed(1));
  return {
    totalJobHours: total,
    mostHoursWorked: max === -Infinity ? 0 : max,
    minHoursWorked: min === Infinity ? 0 : min,
    avgDailyHours: avgDailyHours,
    dayesWorked: dayesWorked,
    isFullTime: fullTime,
  };
};
const result = calcJobHoursInWeek(jobHours, jobHours2);
console.log(result.totalJobHours);
console.log(result.mostHoursWorked);
console.log(result.minHoursWorked);
console.log(result.avgDailyHours);
console.log(result.dayesWorked);
console.log(result.isFullTime);
