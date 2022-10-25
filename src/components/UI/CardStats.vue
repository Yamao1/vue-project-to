<template >
  <div class="card-stats">
    <div class="one-third" v-for="(item, index) in CardStats" :key="index">
      <div class="stat-value">{{item.value }}</div>
      <div class="stat">{{item.title }}</div>
    </div>
  </div>
</template>
<script>


export default {
  props: {
    CardStats: {
      type: Array,
      required:true
    },

  },


}
</script>


