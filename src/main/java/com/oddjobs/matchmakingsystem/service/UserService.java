package com.oddjobs.matchmakingsystem.service;

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

    public String getUserDetailByIdAndField(Long id, String value) {

        switch (value) {
            case "all":
                return userRepository.findById(id).get().toString();
            case "username":
            case "email":
                return userRepository.findById(id).get().getUsername();
            case "firstname":
                return userRepository.findById(id).get().getFirstName();
            case "lastname":
                return userRepository.findById(id).get().getLastName();
            case "name":
                String name;
                name = userRepository.findById(id).get().getFirstName()
                        + " "
                        + userRepository.findById(id).get().getLastName();
                return name;
            case "expertise":
                return userRepository.findById(id).get().getExpertise();
            case "address":
                return userRepository.findById(id).get().getAddress();
            case "phone":
                return userRepository.findById(id).get().getPhone();
        }
        return "Value " + value + " is undefined";
    }


}
