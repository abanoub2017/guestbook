<template>
  <div class="container">
    <form @submit.prevent="addEditBook()" class="w-50 m-auto py-4 my-5">
      <div class="row mb-3">
        <div class="form-floating mb-3">
          <input v-model="book.name" type="text" class="form-control" id="floatingInput" />
          <label for="floatingInput">Book Title</label>
        </div>
      </div>
      <div class="row mb-3">
        <div class="form-floating">
          <textarea v-model="book.message"  class="form-control" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">{{$route.params.id ? 'Edit Book': "Add Book"}}</button>
    </form>
  </div>
</template>

<script>
import guestBookServices from '@/services/guestBook.js'
export default {
    data() {
        return {
            book:{
                name:'',
                message:''
            }
        }
    },
    methods: {
        async addEditBook(){
            if (this.$route.params.id) {
                await guestBookServices.updateGuestBook(this.$route.params.id,this.book).then(res => {
                    console.log(res.statusText);
                    this.book.name = ''
                    this.book.message = ''
                        this.$router.push('/')
                }).catch((error) => {
                    console.log(error);
                    })
            } else {
                await guestBookServices.addGuestBook(this.book).then(res => {
                    console.log(res.statusText);
                    this.book.name = ''
                    this.book.message = ''
                   this.$router.push('/')
    
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        async getGuestBookDetails(id){
            await guestBookServices.getGuestBookDetails(id).then(res => {
                    this.book.name = res.data.name
                this.book.message = res.data.message
                console.log(res.data);
            //    this.$router.push('/')

            }).catch((error) => {
                console.log(error);
                })
        },
    },
    created() {
        if(this.$route.params.id){
             this.getGuestBookDetails(this.$route.params.id)
        }
    },
    mounted() {
        
    },

};
</script>

<style>
</style>