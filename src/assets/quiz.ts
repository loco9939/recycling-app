export interface Quiz {
  id: number;
  title: string;
  choice: { A: string; B: string; C: string; D: string };
  answer: string;
}

export const quiz: Quiz[] = [
  {
    id: 1,
    title: `다음 중 플라스틱 분리수거 방법으로 알맞지 <span style="color:red; text-decoration:underline">않은</span> 것은?`,
    choice: {
      A: "페트병 용기에 든 내용물은 깨끗이 비우고 버린다.",
      B: "라벨과 뚜껑 등 다른 재질로 된 부분도 같이 버린다.",
      C: "플라스틱 내부에 여러 재질이 섞여 분리가 어려운 제품은 종량제 봉투에 버린다.",
      D: "부피가 큰 플라스틱의 경우 최대한 압축해서 버린다.",
    },
    answer: "B",
  },
  {
    id: 2,
    title: "다음 중 비닐류를 버리는 방법으로 적절한 것은?",
    choice: {
      A: "음식물과 함께 버린다.",
      B: "이물질 제거가 어려운 경우 종량제 봉투에 버린다.",
      C: "검정색 비닐봉투는 내용물이 보이지 않으므로 종량제 봉투에 버린다.",
      D: "검정색 비닐류, 투명한 비닐류, 불투명 비닐류에 따라 버리는 방법이 다르다.",
    },
    answer: "B",
  },
  {
    id: 3,
    title: `다음 중 스티로폼을 버리는 방법으로 적절하지 <span style="color:red; text-decoration:underline">않은</span> 것은?`,
    choice: {
      A: "라면 국물이 밴 컵라면 용기는 음식물 찌꺼기를 헹군 후 버린다.",
      B: "농축산물 포장에 사용된 스티로폼은 내용물을 완전히 비우고 버린다.",
      C: "이물질이 많이 묻었다면 스티로폼을 쪼개서 종량제봉투에 버린다.",
      D: "스티로폼이 대량으로 버려야하는 경우 태워서 버린다.",
    },
    answer: "D",
  },
  {
    id: 4,
    title: `음식물 쓰레기를 올바르게 처리하기 위해 사용되는 것은?`,
    choice: {
      A: "녹색 봉투",
      B: "흰색 봉투",
      C: "파란색 봉투",
      D: "검은색 봉투",
    },
    answer: "A",
  },
  {
    id: 5,
    title: `과일 및 채소류의 부산물을 분리수거할 때 적절한 것은?`,
    choice: {
      A: "부산물은 모두 일반 쓰레기로 버려야 합니다.",
      B: "오직 과일 껍질과 채소 잔해만 분리수거해야 합니다.",
      C: "종이로 포장된 과일 및 채소 포장재도 함께 분리수거해야 합니다.",
      D: "과일 및 채소 부산물은 매일 땅에 묻어서 처리해야 합니다.",
    },
    answer: "C",
  },
  {
    id: 6,
    title: `종이 박스를 버릴 때 적절한 것은?`,
    choice: {
      A: "종이 박스 속 내용물에 상관없이 함께 버린다.",
      B: "종이 박스에 붙어있는 스티커, 테이프 등을 제거하고 버린다.",
      C: "개봉하지 않은 종이 박스는 그대로 버린다.",
      D: "종이 박스는 부피를 줄이기 위해 태워서 버린다. ",
    },
    answer: "B",
  },
  {
    id: 7,
    title: `비닐 및 투명 페트병 분리수거에 대해 적절한 것은?`,
    choice: {
      A: "단독주택이나 상가는 목, 금요일에 배출한다.",
      B: "공동주택, 아파트는 월, 수, 금요일에 배출한다.",
      C: "투명 페트병은 검정색 봉투에 담아서 배출한다.",
      D: "투명 페트병과 유색 페트병을 같이 배출한다.",
    },
    answer: "A",
  },
  {
    id: 8,
    title: `다음 분리수거 방법 중 잘못된 것은?`,
    choice: {
      A: "향수, 샴푸 등 펌핑식 용기는 부속품(노즐, 스프링)은 분리해 배출하고 본체는 세척 후 배출한다.",
      B: "배달음식물 중 수분이 적고 딱딱한 음식물은 일반 쓰레기에 버려도 된다.",
      C: "배달음식과 함께 사용된 일회용 랩, 비닐은 분리해서 배출한다.",
      D: "의류수거함에 이불이나 가방을 배출한다.",
    },
    answer: "D",
  },
  {
    id: 9,
    title: `젤 아이스팩, 친환경 아이스팩을 배출하는 방법으로 적절한 것은?`,
    choice: {
      A: "젤 아이스팩은 분리수거가 어려우므로 공공기관에 신고 후 배출한다.",
      B: "젤 아이스팩은 종량제 봉투에 그대로 버린다.",
      C: "친환경 아이스팩은 종량제 봉투에 그대로 버린다.",
      D: "젤 아이스팩과 친환경 아이스팩은 녹으면 자연 분해되므로 땅에 묻어도 된다.",
    },
    answer: "B",
  },
  {
    id: 10,
    title: `옷을 분리수거 하는 방법으로 적절한 것은?`,
    choice: {
      A: "옷은 땅에 묻거나 태워서 버린다.",
      B: "옷은 세탁하여 깨끗하게 만든 후 버린다.",
      C: "옷은 부피를 줄이기 위해 잘게 잘라서 버린다.",
      D: "옷은 종량제 봉투에 버린다.",
    },
    answer: "B",
  },
];
