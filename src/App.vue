<script setup>
import AdModal from "@/components/AdModal.vue";
</script>

<template>
    <div class="content-container">
      <router-view />
    </div>
    <AdModal />ㄴ
</template>

<style>
/* 💡 전체 배경을 하얗게 유지 */
body, html {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 📌 중앙 컨텐츠 영역 */
.content-container {
  max-width: 500px;
  display: flex;
  flex-direction: column;
}


@media screen {
  .content-container {
    width: 500px;
  }
}
/* 📌 반응형 (모바일 최적화) */
@media (max-width: 768px) {
  .content-container {
    width: 100%;
    min-height: 90vh;
  }
}
</style>
