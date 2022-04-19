<template>
  <div class="w-50 m-auto">
    <h1>list Guest Book</h1>
     <div class="add text-right">
       <router-link class="add btn btn-primary my-2" to="/add-book/" >Add Book</router-link>
     </div>
    <ul class="list-unstyled">
      <li v-for="book of listGuestBook" :key="book.id" >
        <div class="card mb-3" >

          <div class="card-body">

            <h5 class="card-title text-black"><span>Name: </span>{{ book.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Message:  {{ book.message }}</h6>
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <form>
              <input type="text" name="replay">
              <button type="submit" class="btn btn-primary">Add Message Replay</button>
            </form>

            <div class="actions">
              <router-link class="edit btn btn-secondary mx-2" :to="{ path: '/edit-book/'+ book.id}" >Edit</router-link>
              <button class="remove-book btn btn-danger" @click="deleteGuestBook(book.id)">Delete</button>
            </div>

          </div>

        </div>

      </li>
    </ul>
  </div>
</template>

<script>
import guestBookServices from '../services/guestBook.js'
export default {
  name: "listGuestBook",
  data() {
    return {
      listGuestBook: [],
      ListReply:[]
    };
  },
   methods: {
    getAllGuestBook(){
        guestBookServices.getAllGuestBook().then(res => {
          this.listGuestBook= res.data
        }).catch((error) => {
            console.log(error);
        })
    },
    deleteGuestBook(id){
        guestBookServices.deleteGuestBook(id).then(res => {
          this. getAllGuestBook()
        }).catch((error) => {
            console.log(error);
        })
    },
    getAllReplyBook(){
        guestBookServices.getAllReplyBook().then(res => {
          this.ListReply = res.data
            
          console.log(this.ListReply);
        }).catch((error) => {
            console.log(error);
        })
    },
   },
  created(){
    this.getAllGuestBook();
    this.getAllReplyBook()
  },
};
</script>

<style scoped>
.actions{
      position: absolute;
    top: 0;
    right: 0px;
    padding: 15px;
}
</style>