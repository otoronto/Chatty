package chatws.message;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import chatws.chat.MessageVm;

@RestController
@RequestMapping("/api/v1.0")
public class MessageResource {
	
	@Autowired
	MessageRepository messageRepository;

	@GetMapping("/messages")
	public Page<MessageVm> getAllMessages(@PageableDefault(sort="createDate", direction=Direction.DESC) Pageable page){
//	public List<MessageVm> getAllMessages(){
		
		Page<MessageVm> messageList = messageRepository.findAll(page).map(MessageVm::new);
		
		return messageList;
	}
}
