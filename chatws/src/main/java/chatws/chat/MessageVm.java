package chatws.chat;

import java.sql.Timestamp;

import chatws.message.Message;
import lombok.Data;

@Data
public class MessageVm {
	
	private String id;
	//TODO //FIXME
	private String sender;
	
	private String message;
	
	private Timestamp createDate;
	
	public MessageVm() {
		
	}
	public MessageVm(Message message) {
		
		this.setId(message.getId());
		this.setSender(message.getSender().getUsername());
		this.setMessage(message.getMessage());
		this.setCreateDate(message.getCreateDate());
		
	}

}
