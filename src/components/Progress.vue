<template>
  <div class="progress">
    <div class="box">
      <div class="bar" :style="{width: value + '%'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .progress {
    width: 100%;
    height: 100%;
    display: inline-block;
    .box {
      display: inline-block;
      width: 100%;
      height: 12px;
      background: #3a2200;
      border-radius: 12px;
      .bar {
        border-radius: 12px;
        background: #f7580c;
        width: 20%;
        height: 100%;
      }
    }
  }
</style>
