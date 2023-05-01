const modalContent = {
  Precipitation: { title: '강수량', 강수량에_관하여: '강수량에 관하여' },
  Pressure: {
    title: '기압',
    기압에_관하여:
      '기압의 급격한 변화는 날씨 변화를 예측하는 지표로 사용됩니다. 예를 들어, 기압이 떨어지면 눈이나 비가 내릴 것으로 예상할 수 있고, 반대로 기압이 올라가면 날씨가 맑아질 것으로 예상할 수 있습니다. 기압은 기압계상의 압력 또는 대기압으로도 불립니다.',
  },
  Humidity: {
    title: '습도',
    상새_습도에_관하여:
      '일반적으로 습도라고 알려진 상대 습도는 공기가 최대로 포함할 수 있는 수증기량과 실제 공기 중의 수증기량을 비교한 값입니다. 공기는 기온이 높을수록 더 많은 수증기를 함유할 수 있습니다. 상대 습도가 100%에 가깝다는 것은 이슬이나 안개가 있을 수 있음을 의미합니다.',
    이슬점에_관하여:
      '이슬점은 기온이 내려가면서 이슬이 맺히는 온도입니다. 이는 공기가 얼마나 습한지를 알 수 있는 유용한 지표가 될 수 있습니다. 이슬점이 높을수록 공기가 더 습하게 느껴집니다. 이슬점이 현재 온도와 일치하면 상대 습도가 100%임을 의미하며 이슬이나 안개가 있을 수 있습니다.',
  },
  ApparentTemp: {
    title: '체감 온도',
    체감_온도에_관하여:
      '체감 온도는 습도와 바람의 영향으로 인해 실제 온도보다 더 따뜻하거나 더 춥게 느껴지는 온도로, 실제 온도와는 차이가 있을 수 있습니다.',
  },
  Visibility: {
    title: '가시거리',
    가시거리에_관하여:
      '가시거리는 건물이나 언덕과 같은 사물을 얼마나 멀리까지 볼 수 있는지를 말합니다. 이는 공기의 투명도를 측정하는 것으로 햇빛의 양이나 장애물의 존재를 고려하지는 않습니다. 가시거리가 10Km 이상이면 좋은 것으로 간주합니다.',
  },
  Sun: {
    title: '일몰/일출',
  },
  Wind: {
    title: '바람',
    풍속과_돌풍에_관하여:
      '풍속은 짧은 기간 동안의 평균을 사용하여 계산됩니다. 돌풍은 이 평균 이상의 짧은 거센 바람으로 지속 시간은 보통 20초 미만입니다.',
  },
  UVI: {
    title: '자외선 지수',
    자외선_지수에_관하여:
      '세계보건기구의 자외선 지수(UVI)는 자외선을 측정합니다. UVI가 높을수록 손상을 입을 가능성이 커지며 더 빠른 속도로 진행될 숭 있습니다. UVI는 태양으로부터 언제 자신을 보호해야 하고 언제 외부에 있는 것을 피해야 하는지를 결정하는 데 도움을 줄 수 있습니다. 세계보건기구는 자외선 지수가 3 이상일 때 그늘막, 자외선 차단제, 모자, 보호복을 사용할 것을 권고합니다.',
  },
};

export default modalContent;
