# 1. Eye of the Typhoon

Next.js GraphQL를 기반
아큐웨더 APIs 데이터 소스를 이용하여 ios16 날씨앱을 구현했습니다.

### [사이트 바로가기](https://eyeofthetyphoon.vercel.app/)

# 2. 기술스택

[Next.js](https://nextjs.org)
[Graphql]() [Typescript]()

# 3. 특징

- AccuWeather API 데이터를 시각화 및 분석결과를 보여준다. (12시간예보, 5일간예보, 현재날씨)

- airKorea 현재 위치를 기반 대기질 지수를 range input으로 시각화하여 보여준다.

- 날씨 소품을 사용하여 구름, 비, 눈, 태양 데이터를 토대로 움직이는 생생한 배경소품을 사용했음.

- 사용자 접속시 쿠키통신으로 불필요한 직렬패치를 줄여 FCP효율을 높임.

- 그리드를 누를시 설명이 포함된 관련된 툴팁이 표시되는기능.

- graphql서버통신으로 외부 중복 패치 데이터량을 줄이고, 클라이언트가 필요로 하는 데이터만 로드하여 트래픽을 줄임.

# 4. 미리보기

PC
![PC](/public/weatherApp-1200x630.png)
Mobile
![Mobile](/public/weatherApp-mobile.jpg)

## 5. 세부사항
