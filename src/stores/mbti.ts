import { defineStore } from "pinia";

export type AnswerType = "I" | "E" | "S" | "N" | "T" | "F" | "J" | "P";

export const useMBTIStore = defineStore("mbti", {
  state: () => ({
    answers: {} as Record<number, AnswerType>,
    result: "",
  }),

  actions: {
    setAnswer(questionId: number, answer: AnswerType) {
      this.answers[questionId] = answer;
    },

    calculateResult() {
      const result =
        (this.answers[1] || "I") +
        (this.answers[2] || "S") +
        (this.answers[3] || "T") +
        (this.answers[4] || "J");
      this.result = result;
    },
  },
});
