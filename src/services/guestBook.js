import globalAxios from '@/services/global-axios'
class guestBookManageServices {
  ////////////////////////////////////
  // Get All GuestBook
  static getAllGuestBook() {
    return globalAxios.get('books')
  }
  // Delete  GuestBook
  static deleteGuestBook(id) {
    return globalAxios.delete(`books/${id}`)
  }
  // Get GuestBook Details 
  static getGuestBookDetails(id) {
    return globalAxios.get(`books/${id}`)
  }
  // Add GuestBook 
  static addGuestBook(data) {
    return globalAxios.post(`books` , data)
  }
  // update GuestBook 
  static updateGuestBook(id , data) {
    return globalAxios.put(`books/${id}` , data)
  }

    // Get All ReplyBook
    static getAllReplyBook() {
      return globalAxios.get('reply')
    }
    // Delete  ReplyBook
    static deleteReplyBook(id) {
      return globalAxios.delete(`reply/${id}`)
    }
    // Get ReplyBook Details 
    static getReplyBookDetails(id) {
      return globalAxios.get(`reply/${id}`)
    }
    // Add ReplyBook 
    static addReplyBook(data) {
      return globalAxios.post(`reply` , data)
    }
    // update ReplyBook 
    static updateReplyBook(id , data) {
      return globalAxios.put(`reply/${id}` , data)
    }
}
export default guestBookManageServices
