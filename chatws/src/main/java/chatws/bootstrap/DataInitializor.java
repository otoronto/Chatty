package chatws.bootstrap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import chatws.message.Message;
import chatws.message.MessageRepository;
import chatws.user.User;
import chatws.user.UserRepository;

@Component
public class DataInitializor implements CommandLineRunner {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private MessageRepository messageRepository;
	
	@Override
	public void run(String... args) throws Exception {
		User user1 = new User();
		user1.setUsername("user1");
		user1.setPassword("P4ssword");
		User savedUser1 = userRepository.save(user1);
		
		User user2 = new User();
		user2.setUsername("user2");
		user2.setPassword("P4ssword");
		User savedUser2 = userRepository.save(user2);
		
		User user3 = new User();
		user3.setUsername("user3");
		user3.setPassword("P4ssword");
		User savedUser3 = userRepository.save(user3);
		
		Message message = new Message();
		message.setSender(savedUser1);
		message.setMessage("Message text");
		messageRepository.save(message);
	}

}
