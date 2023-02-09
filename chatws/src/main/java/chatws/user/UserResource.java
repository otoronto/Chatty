package chatws.user;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserResource {
	
	@Autowired
	private UserService userService;
	
	private ModelMapper modelMapper = new ModelMapper();

	@PostMapping("/v1.0/users")
	public User create(@RequestBody UserCreationDTO userDto) {
		User user = modelMapper.map(userDto,User.class);
		return userService.create(user);
//		return null;
	}
	
	
}
