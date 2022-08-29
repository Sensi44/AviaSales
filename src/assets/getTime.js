const getTime = (date, duration) => {
  const result = [];
  let firstDate = new Date(date);
  let hours = firstDate.getHours();
  let minutes = firstDate.getMinutes();
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  result.push(`${hours}:${minutes}`);

  firstDate = new Date(new Date(date).getTime() + duration * 60000);
  hours = firstDate.getHours();
  minutes = firstDate.getMinutes();
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  result.push(`${hours}:${minutes}`);

  const hoursDur = Math.trunc(duration / 60);
  const minutesDur = duration % 60;
  result.push(
    `${hoursDur < 10 ? `0${hoursDur}` : hoursDur} : ${
      minutesDur < 10 ? `0${minutesDur}` : minutesDur
    }`
  );
  return result;
};

export default getTime;
