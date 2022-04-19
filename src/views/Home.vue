<template>
  <div class="home">
    <listGuestBook />
  </div>
</template>

<script>
// @ is an alias to /src
import listGuestBook from '@/components/listGuestBook.vue'

export default {
  name: 'Home',
  components: {
    listGuestBook
  }
}
</script>
