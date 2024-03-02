import io from "socket.io-client";
export default{
data(){
	return{
	joined:false,
	text:"",
	currentUser:"",
	messages: [],
	showLikeButton:true,
    msgNotif:true,
	};
},

methods:{
	hideChat(){
this.msgNotif = !this.msgNotif;
	},
	showHide(){
   this.showLikeButton = this.text.length === 0;
	},
	async sendMessage(){
	this.addMessage();
  this.text = "";
  this.showLikeButton = !this.showLikeButton;
	},
	
join(){
	this.joined = true;
	this.socketInstance = io("http://localhost:3000");

	this.socketInstance.on(
"message:recieved", (data) => {
this.messages = this.messages.concat(data);
}
	)
},
addMessage(){
	const message = {
	id: new Date().getTime(),
	text:this.text,
	user: this.currentUser,
	};
	this.messages = this.messages.concat(message);
	this.socketInstance.emit('message',message);
	},

},



}
