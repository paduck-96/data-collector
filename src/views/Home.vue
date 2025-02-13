<script setup lang="ts">
import { ref } from "vue";
import { useMBTIStore } from "@/stores/mbti";
import { useRouter } from "vue-router";
import type { AnswerType } from '@/stores/mbti.ts'

const store = useMBTIStore();
const router = useRouter();
const currentQuestionIndex = ref(-1);
const selectedAnswer = ref("");

const questions = ref([
  { id: 1, text: "배달 시 가격이 중요한가요?", type: ["I", "E"] },
  { id: 2, text: "신메뉴를 도전하는 편인가요?", type: ["S", "N"] },
  { id: 3, text: "음식 선택 시 가성비를 고려하나요?", type: ["T", "F"] },
  { id: 4, text: "배달을 미리 계획하는 편인가요?", type: ["J", "P"] },
]);

const startTest = () => {
  currentQuestionIndex.value = 0;
};

const selectAnswer = (answer: string) => {
  const question = questions.value[currentQuestionIndex.value];
  store.setAnswer(question.id, answer as AnswerType);
  selectedAnswer.value = answer;

  if (currentQuestionIndex.value < questions.value.length - 1) {
    selectedAnswer.value = "";
    currentQuestionIndex.value += 1;
  } else {
    store.calculateResult();
    router.push("/result");
  }
};
</script>

<template>
  <div class="container">
    <div v-if="currentQuestionIndex === -1" class="box content-box">
      <h1 class="title has-text-dark is-1">FBTI 테스트</h1>
      <button @click="startTest" class="button is-primary is-large">시작하기</button>
    </div>

    <div v-else class="box content-box">
      <h2 class="title is-2 has-text-dark">{{ questions[currentQuestionIndex].text }}</h2>
      <div class="answer-section">
        <button
          v-for="answer in questions[currentQuestionIndex].type"
          :key="answer"
          @click="selectAnswer(answer)"
          class="button is-ghost answer-btn"
          :class="{ 'is-selected': selectedAnswer === answer }"
        >
          {{ answer }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 화면 중앙 정렬 */
.container {
  height: 95vh;
}

/* 질문 박스 설정 */
.content-box {
  height: 932px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* 정답 */
.answer-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  z-index: 99;
}

/* 버튼 기본 스타일 */
.answer-btn {
  width: 80%;
  padding: 12px;
  margin-bottom: 10px;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

/* 버튼 호버 스타일 (선택 시 파란색) */
.answer-btn:hover,
.is-selected {
  background-color: hsl(171, 100%, 41%);
  color: white;
  border-color: hsl(171, 100%, 41%);
}
</style>
