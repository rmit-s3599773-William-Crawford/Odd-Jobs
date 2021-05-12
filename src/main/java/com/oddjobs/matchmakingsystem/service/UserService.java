package com.oddjobs.matchmakingsystem.service;

import com.google.gson.Gson;
import com.oddjobs.matchmakingsystem.exception.ResourceNotFoundException;
import com.oddjobs.matchmakingsystem.model.User;
import com.oddjobs.matchmakingsystem.model.UserToken;
import com.oddjobs.matchmakingsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;
import java.util.Optional;


@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserTokenService userTokenService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public void registerUser(User user) {
        String encryptedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        User registeredUser = userRepository.save(user);
        // user.setEnabled(true);

        UserToken userToken = new UserToken(user);
        userTokenService.saveUserToken(userToken);

        // Skip third party confirmation
        confirmUser(userToken);
    }

    public void confirmUser(UserToken userToken) {
        User user = userToken.getUser();

        user.setEnabled(true);

        userRepository.save(user);

        userTokenService.deleteUserToken(userToken.getId());
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        System.out.println("loadUserByUsername");
        Optional<User> user = userRepository.findByEmail(email);

        if (user.isPresent()) {
            System.out.println("User is present: ");
            System.out.print(user.toString());
            return user.get();
        }
        else {
            throw new UsernameNotFoundException(MessageFormat.format("User {0} cannot be found.", email));
        }
    }

    public String getUserDetailsById(Long id) {
        String userDetails = "";
        User user = userRepository.findById(id).get();

        userDetails = new Gson().toJson(user);

        return userDetails;
    }

    public boolean deleteUserDetailsById(Long id) {

        User user = userRepository.findById(id).get();

        this.userRepository.delete(user);

        return true;
    }
}
