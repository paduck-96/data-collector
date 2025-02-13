import { beforeEach, describe, it, expect } from "vitest";
import { useMBTIStore } from '../../stores/mbti'
import { createPinia, setActivePinia } from 'pinia'

describe("MBTI Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("MBTI 결과 계산이 정확해야 한다", () => {
    const store = useMBTIStore();
    store.setAnswer(1, "I");
    store.setAnswer(2, "S");
    store.setAnswer(3, "T");
    store.setAnswer(4, "J");
    store.calculateResult();
    expect(store.result).toBe("ISTJ");
  });
});
