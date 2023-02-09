package chatws.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import chatws.message.Message;
import chatws.message.MessageRepository;
import chatws.user.User;
import chatws.user.UserRepository;


@Controller
@CrossOrigin
@RequestMapping
public class ChatResource {
	
	@Autowired
	private SimpMessagingTemplate messagingTemplate;
	@Autowired
	MessageRepository messageRepository;
	@Autowired
	UserRepository userRepository;
	
	@MessageMapping("/message")
	@SendTo("/chatroom/public")
	public MessageVm sendMessage(@Payload MessageVm message) {
		System.out.println(message);
		if(message.getMessage() !="" && message.getMessage()!=null) {
			
			//FIXME
			//get user with annotation, loggedin user.
				User user = userRepository.findByUsername(message.getSender());
				System.out.println("The user: " + user.getUsername());
				
				Message saveMessage = new Message();
				saveMessage.setSender(user);
				saveMessage.setMessage(message.getMessage());
				
				//TODO
				message.setCreateDate(saveMessage.getCreateDate());
				
				//TODO
//				check if date is auto generated
//				saveMessage.setCreateDate(new Date());
				
				
				messageRepository.save(saveMessage);
		}
		return message;
	}
	
}
