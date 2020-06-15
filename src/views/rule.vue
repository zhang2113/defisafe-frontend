<template>
  <div class="rule">
      <div class="r-title tc">协议标题</div>
      <div class="r-content">协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容协议内容</div>
      <div class="foot tc">
          <button @click="goUser">Accept</button>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        goUser() {
            this.$router.replace("/");
        }
    }
}
</script>

<style lang="scss" scoped>
    .rule {
        padding: 50px;
        .r-title {
            font-size: 22px;
            color: #333;
            margin-bottom: 20px;
        }
        .r-content {
            font-size: 18px;
            color: #666;
            margin-bottom: 20px;
        }
        .foot {
            button {
                border: 1px solid #666;
                border-radius: 6px;
                padding: 6px 12px;
            }
        }
    }
</style>