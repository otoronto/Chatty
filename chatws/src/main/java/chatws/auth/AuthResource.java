package chatws.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthResource {
	
	@Autowired
	private AuthService authService;
	
	@PostMapping("/v1.0/auth")
	AuthResponse handleAuthentication(@RequestBody Credentials credentials){
		return authService.authenticate(credentials);
	}

}
