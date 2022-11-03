<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <router-link
          :to="{
            name: 'detail',
            query: {
              id: item.id,
              title: item.title
            }
          }"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageList: [
        { id: '0001', title: 'aaaaaaaaaa' },
        { id: '0002', title: 'bbbbbbbbbb' },
        { id: '0003', title: 'cccccccccc' },
        { id: '0004', title: 'dddddddddd' }
      ]
    }
  }
}
</script>

<style></style>
