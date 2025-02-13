<script setup>
import { ref, onMounted } from "vue";

const showAdModal = ref(true); // 초기 모달 표시 여부
const showAdDock = ref(false); // 닫으면 Dock으로 이동
const isHidden = ref(false);
let dockTimeout = null;

// 모달 닫기 -> Dock으로 이동
const closeAd = () => {
  showAdModal.value = false;
  showAdDock.value = true;
  resetDockTimeout();
};

// Dock 닫기 -> 숨기기
const hideDock = () => {
  isHidden.value = true;
  resetDockTimeout();
};

// 30초 후 Dock 다시 보이게 하기
const resetDockTimeout = () => {
  clearTimeout(dockTimeout);
  dockTimeout = setTimeout(() => {
    isHidden.value = false;
  }, 30000);
};

onMounted(() => {
  resetDockTimeout();
});
</script>

<template>
  <div>
    <!-- 광고 모달 (초기 표시) -->
    <div v-if="showAdModal" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content box ad-modal-content">
        <!-- 닫기 버튼 (우상단 X 표시) -->
        <button class="delete close-button" @click="closeAd"></button>
        <p class="ad-text">여기에 애드센스 광고를 넣으세요.</p>
      </div>
    </div>

    <!-- 광고 Dock (최하단) -->
    <div
      v-if="showAdDock"
      class="ad-dock box has-text-centered"
      :class="{ 'is-hidden': isHidden }"
    >
      <!-- 닫기 버튼 (우상단 X 표시) -->
      <button class="delete close-button" @click="hideDock"></button>
      <p class="ad-text">여기에 애드센스 광고를 넣으세요.</p>
    </div>
  </div>
</template>

<style scoped>
/* 💡 모달 광고 스타일 */
.ad-modal-content {
  position: relative;
  width: 500px;
  max-width: 100%;
  height: 941px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* 📌 광고 텍스트 중앙 정렬 */
.ad-text {
  font-size: 1.2rem;
  font-weight: bold;
}

/* 📌 닫기 버튼 (우상단 X 버튼 스타일) */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* 💡 최하단 Dock 스타일 */
.ad-dock {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  max-width: 100%;
  background-color: white;
  padding: 15px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

/* 📌 Dock도 X 버튼 우상단 배치 */
.ad-dock .close-button {
  position: absolute;
  top: 5px;
  right: 5px;
}

/* 숨겨질 때 */
.is-hidden {
  transform: translateY(100%);
}

@media (max-width: 768px) {
  .ad-modal-content {
    width: 100%;
  }

  .ad-dock {
    width: 100%;
  }
}
</style>
