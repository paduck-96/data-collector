<script setup lang="ts">
import { useMBTIStore } from "@/stores/mbti";
import { useRouter } from "vue-router";

const store = useMBTIStore();
const router = useRouter();
</script>

<template>
  <div class="container">
    <div class="box content-box">
      <h1 class="title is-1">당신의 식BTI</h1>
      <div>
        <p class="is-size-2">{{ store.result }}</p>
        <p class="is-size-4" v-if="store.result === 'ISTJ'">"늘 먹던 걸 먹고 할인 쿠폰을 챙긴다!"</p>
        <p class="is-size-4" v-if="store.result === 'ENFP'">"배달앱 신메뉴를 보며 랜덤 선택!"</p>
      </div>
      <button @click="router.push('/')" class="button is-primary is-large">다시 하기</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 95vh;
}

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
</style>
