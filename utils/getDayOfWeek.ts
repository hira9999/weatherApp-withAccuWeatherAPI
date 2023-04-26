function getDayOfWeek(dateString: string) {
  // 입력한 날짜와 시간을 Date 객체로 변환
  const date = new Date(dateString);

  // 요일을 문자열로 변환
  const dayOfWeek = new Intl.DateTimeFormat('ko-KR', {
    weekday: 'long',
  }).format(date);

  // 출력할 문자열 생성
  const today = new Date();
  const todayString = new Intl.DateTimeFormat('ko-KR', {
    weekday: 'long',
  }).format(today);
  const dayString = dayOfWeek === todayString ? '오늘' : dayOfWeek.charAt(0);

  return dayString;
}

export default getDayOfWeek;
