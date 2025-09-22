<template>
  <div :class="lgAndUp ? 'chart' : 'chart2'">
    <div class="bar" style="height: 60px"></div>
    <div class="bar" style="height: 15px"></div>
    <div class="bar" style="height: 20px"></div>
    <div class="bar" style="height: 15px"></div>
    <div class="bar" style="height: 20px"></div>
    <div class="bar" style="height: 25px"></div>
    <div class="bar" style="height: 15px"></div>
    <div class="bar" style="height: 20px"></div>
    <div class="bar active" style="height: 80px"></div>
    <div class="bar" style="height: 28px"></div>
    <div class="bar" style="height: 34px"></div>
    <div class="bar" style="height: 28px"></div>
    <div class="bar" style="height: 30px"></div>
    <div class="bar" style="height: 40px"></div>
    <div class="bar" style="height: 50px"></div>
    <div class="bar" style="height: 85px"></div>
    <div class="bar" style="height: 70px"></div>
    <div class="bar" style="height: 61px"></div>
    <div class="bar" style="height: 58px"></div>
    <div class="bar" style="height: 55px"></div>
    <div class="bar" style="height: 60px"></div>
    <div class="bar" style="height: 80px"></div>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";

// Destructure only the keys you want to use
const { lgAndUp } = useDisplay();
</script>

<style scoped>
.chart {
  display: flex;
  align-items: flex-end;
  /* align bars to bottom */
  gap: 5px;
  /* margin between bars */
  height: 150px;
  /* chart container height */
  padding: 10px;

  width: 200px;
  height: 80px;
  margin-left: 250px;
  margin-top: -75px;
}
.chart2 {
  display: flex;
  align-items: flex-end;
  /* align bars to bottom */
  gap: 5px;
  /* margin between bars */
  height: 150px;
  /* chart container height */
  padding: 10px;

  width: 200px;
  height: 80px;
  margin-left: 150px;
  margin-top: -75px;
}

.bar {
  width: 5px;
  background-color: #f1f0f6;
  border-radius: 2px;
}

.bar.active {
  background-color: #5d5ee1;
}
</style>
