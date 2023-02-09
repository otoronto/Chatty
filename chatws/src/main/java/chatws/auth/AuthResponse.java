package chatws.auth;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import chatws.user.User;
import lombok.Data;

@Data
public class AuthResponse {

	private String token;
	
	@JsonIgnoreProperties({"password","messages","createDate","lastModifiedDate"})
	private User user;
}
