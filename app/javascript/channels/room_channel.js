import consumer from "./consumer"

// All the code here is run in this event listener because 
// we want to make sure it has all loaded as needed before moving on.
document.addEventListener("turbolinks:load", () => {
  const room_element = document.getElementById('room-id');
  const room_id = Number(room_element.getAttribute('data-room-id'));

  // removes all subscriptions so we can start anew when you enter a new room
  consumer.subscriptions.subscriptions.forEach((subscription) => {
    consumer.subscriptions.remove(subscription)
  })
  // Subscribes to the current channel based on the information stored in the div in rooms view: index.html.erb
  consumer.subscriptions.create({ channel: "RoomChannel", room_id: room_id }, {
    connected() {
      console.log("Connected to " + room_id);
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
      // console.log("Disconnected.")
    },
  
    received(data) {
      // Called when there's incoming data on the websocket for this channel
      let html;
      // Identifies whether or not the current user has sent the information
      const user_element = document.getElementById('user-id');
      const user_id = Number(user_element.getAttribute('data-user-id'));
      // The html is formatted differently to include a different class if the message
      // is from the current user or not. This is for the sake of arranging the messages
      // on the left or right of the chatroom as one would expect.
      if (user_id === data.message.user_id) {
        html = data.mine
      } else {
        html = data.theirs
      }
      // here we append the html that we have created to the end of the chatroom
      const messageContainer = document.getElementById('messages')
      messageContainer.innerHTML = messageContainer.innerHTML + html 
    }
  });  
})
