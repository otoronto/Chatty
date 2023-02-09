package chatws.auth;

import java.util.Optional;

import org.hibernate.proxy.HibernateProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import chatws.error.NotFoundException;
import chatws.user.User;
import chatws.user.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.transaction.Transactional;

@Service
public class AuthService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public AuthResponse authenticate(Credentials credentials) {
		User inDB = userRepository.findByUsername(credentials.getUsername());
		if(inDB == null)
			throw new AuthException();
//		boolean matches = passwordEncoder.matches(credentials.getPassword(), inDB.getPassword());
		boolean matches = inDB.getPassword().equals(credentials.getPassword()); 
		if(!matches)
			throw new AuthException();
		String token = Jwts.builder().setSubject("" + inDB.getId()).signWith(SignatureAlgorithm.HS512, "chat").compact();
		AuthResponse response = new AuthResponse();
		response.setUser(inDB);
		response.setToken(token);
		return response;
	}
	
//	@Transactional
	public UserDetails getUserDetails(String token) {
		JwtParser parser = Jwts.parser().setSigningKey("chat");
		try {
			parser.parse(token);
			Claims claims = parser.parseClaimsJws(token).getBody();
			@SuppressWarnings("deprecation")
			String userId = claims.getSubject();
			System.out.println(userId);
			User user = userRepository.findById(userId).orElseThrow(() -> new NotFoundException());
//			User actualUser = (User)((HibernateProxy)user).getHibernateLazyInitializer().getImplementation();
			return new UserDetailsImpl(user);
		}catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}	

}
