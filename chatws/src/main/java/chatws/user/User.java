package chatws.user;

import java.util.Set;

import chatws.base.BaseEntity;
import chatws.message.Message;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "users")
@Data
@EqualsAndHashCode(callSuper = false)
public class User extends BaseEntity {
	
	private String username;
	
	private String password;
	
	@OneToMany
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private Set<Message> messages;
	
	
}
