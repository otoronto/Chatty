package chatws.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
	
	@Autowired
	MessageRepository messageRepository;
	
	public Page<Message> getAllMessages(Pageable page){
		
		return messageRepository.findAll(page);
	}

}
