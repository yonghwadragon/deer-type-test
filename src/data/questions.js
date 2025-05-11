// 설문 게임에 사용될 질문과 선택지 데이터
export const questions = [
  {
    id: 1,
    text: "하루 종일 피곤하고 지쳐있나요?",
    options: [
      { id: "yes", text: "네, 항상 그래요", direction: "left" },
      { id: "no", text: "아니요, 괜찮아요", direction: "right" }
    ],
    voiceText: "하루 종일 피곤하고 지쳐있나요? 왼쪽은 네, 오른쪽은 아니요를 선택해주세요."
  },
  {
    id: 2,
    text: "집중력이 떨어지는 것을 느끼시나요?",
    options: [
      { id: "yes", text: "네, 자주 그래요", direction: "left" },
      { id: "no", text: "아니요, 별로요", direction: "right" }
    ],
    voiceText: "집중력이 떨어지는 것을 느끼시나요? 왼쪽은 네, 오른쪽은 아니요를 선택해주세요."
  },
  {
    id: 3,
    text: "스트레스를 많이 받고 있나요?",
    options: [
      { id: "yes", text: "네, 많이요", direction: "left" },
      { id: "no", text: "아니요, 적당해요", direction: "right" }
    ],
    voiceText: "스트레스를 많이 받고 있나요? 왼쪽은 네, 오른쪽은 아니요를 선택해주세요."
  },
  {
    id: 4,
    text: "잠을 잘 못 주무시나요?",
    options: [
      { id: "yes", text: "네, 잠이 부족해요", direction: "left" },
      { id: "no", text: "아니요, 잘 자요", direction: "right" }
    ],
    voiceText: "잠을 잘 못 주무시나요? 왼쪽은 네, 오른쪽은 아니요를 선택해주세요."
  },
  {
    id: 5,
    text: "면역력이 약하다고 느끼시나요?",
    options: [
      { id: "yes", text: "네, 자주 아파요", direction: "left" },
      { id: "no", text: "아니요, 튼튼해요", direction: "right" }
    ],
    voiceText: "면역력이 약하다고 느끼시나요? 왼쪽은 네, 오른쪽은 아니요를 선택해주세요."
  }
];

// 결과 타입에 따른 제품 추천 데이터
export const results = {
  "exhausted": {
    title: "지친 활력형",
    description: "일상생활에서 활력이 부족하고 지친 상태입니다. 활력을 높여주는 제품이 필요해요.",
    recommendedProduct: {
      name: "바이오닷 활력 제품",
      description: "녹용의 핵심 성분이 신체 활력을 높여주고 피로 회복에 도움을 줍니다.",
      ingredients: ["녹용 추출물", "인삼 추출물", "비타민 B 복합체"],
      benefits: [
        "에너지 레벨 향상",
        "피로 회복 도움",
        "신체 활력 증진"
      ]
    },
    voiceText: "지친 활력형이시군요. 일상생활에서 활력이 부족하고 지친 상태입니다. 바이오닷의 활력 제품이 도움이 될 수 있어요."
  },
  "stressed": {
    title: "스트레스 집중형",
    description: "스트레스가 많고 집중력이 떨어지는 상태입니다. 정신 건강과 집중력을 높이는 제품이 필요해요.",
    recommendedProduct: {
      name: "바이오닷 집중력 제품",
      description: "녹용과 특수 허브 성분이 정신 건강과 집중력을 향상시키는데 도움을 줍니다.",
      ingredients: ["녹용 추출물", "은행잎 추출물", "오메가-3"],
      benefits: [
        "집중력 향상",
        "기억력 증진",
        "스트레스 완화"
      ]
    },
    voiceText: "스트레스 집중형이시군요. 스트레스가 많고 집중력이 떨어지는 상태입니다. 바이오닷의 집중력 제품이 도움이 될 수 있어요."
  },
  "immunity": {
    title: "면역력 부족형",
    description: "면역력이 약하고 쉽게 피로를 느끼는 상태입니다. 면역력을 높이는 제품이 필요해요.",
    recommendedProduct: {
      name: "바이오닷 면역력 제품",
      description: "녹용의 면역 강화 성분이 면역 체계를 지원하고 건강을 유지하는데 도움을 줍니다.",
      ingredients: ["녹용 추출물", "프로폴리스", "비타민 C, D"],
      benefits: [
        "면역력 강화",
        "건강 유지",
        "항산화 작용"
      ]
    },
    voiceText: "면역력 부족형이시군요. 면역력이 약하고 쉽게 피로를 느끼는 상태입니다. 바이오닷의 면역력 제품이 도움이 될 수 있어요."
  },
  "balanced": {
    title: "균형 잡힌 건강형",
    description: "비교적 건강한 상태지만 더 나은 컨디션을 위한 관리가 필요합니다.",
    recommendedProduct: {
      name: "바이오닷 종합 건강 제품",
      description: "녹용의 다양한 영양소와 성분이 전반적인 건강 유지에 도움을 줍니다.",
      ingredients: ["녹용 추출물", "종합 비타민", "미네랄 복합체"],
      benefits: [
        "전반적인 건강 관리",
        "활력 유지",
        "신체 균형 지원"
      ]
    },
    voiceText: "균형 잡힌 건강형이시군요. 비교적 건강한 상태지만 더 나은 컨디션을 위한 관리가 필요합니다. 바이오닷의 종합 건강 제품이 도움이 될 수 있어요."
  }
};

// 응답에 따라 결과를 계산하는 함수
export const calculateResult = (answers) => {
  // 예시 로직: 대답에 따라 점수 계산
  let yesCount = 0;
  
  Object.values(answers).forEach(answer => {
    if (answer === "yes") {
      yesCount++;
    }
  });
  
  // 결과 결정 로직 (간단한 예시)
  if (yesCount >= 4) {
    return "exhausted"; // 매우 지친 상태
  } else if (yesCount >= 3) {
    return "stressed"; // 스트레스 많은 상태
  } else if (yesCount >= 2) {
    return "immunity"; // 면역력 관리 필요
  } else {
    return "balanced"; // 균형잡힌 상태
  }
};
