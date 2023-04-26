function timeConv(datetime: string, isMinutes?: boolean) {
  const date = new Date(datetime);
  const nowHour = new Date().getHours();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const time = hour < 12 ? '오전' : '오후'; // 오전/오후 구분
  const convertedHour = hour > 12 ? hour - 12 : hour; // 12시간 기준으로 변경

  if (isMinutes)
    return `${time} ${convertedHour}:${minutes < 10 ? '0' + minutes : minutes}`;
  return nowHour == hour ? '지금' : `${time} ${convertedHour}시`;
}
export default timeConv;
