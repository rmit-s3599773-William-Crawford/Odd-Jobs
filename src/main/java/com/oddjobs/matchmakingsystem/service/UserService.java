package com.oddjobs.matchmakingsystem.service;

import com.google.gson.Gson;
import com.oddjobs.matchmakingsystem.model.User;
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
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public void saveUser(User user) {
        String encryptedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);
        user.setEnabled(true);

        userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(email);

        if (user.isPresent()) {
            return user.get();
        }
        else {
            throw new UsernameNotFoundException(MessageFormat.format("User {0} cannot be found.", email));
        }
    }

    public boolean updateUser(User user) {
        Long id = user.getId();
        User savedUser = new User();
        if(userRepository.findById(id).isPresent())
            savedUser = userRepository.findById(id).get();

        //If an attribute of the new User is empty, do not replace it.
        if(!user.getEmail().equals(""))
            savedUser.setEmail(user.getEmail());
        if(!user.getPassword().equals("")) {
            String encryptedPassword = bCryptPasswordEncoder.encode(user.getPassword());
            user.setPassword(encryptedPassword);
        }
        if(!user.getFirstName().equals(""))
            savedUser.setFirstName(user.getFirstName());
        if(!user.getLastName().equals(""))
            savedUser.setLastName(user.getLastName());
        if(!user.getAddress().equals(""))
            savedUser.setAddress(user.getAddress());
        if(!user.getPhone().equals(""))
            savedUser.setPhone(user.getPhone());

        userRepository.save(savedUser);

        return true;
    }

    public String getUserDetailsById(Long id) {
        String userDetails = "";
        User user = new User();
        if(userRepository.findById(id).isPresent())
            user = userRepository.findById(id).get();

        userDetails = new Gson().toJson(user);

        return userDetails;
    }

    public boolean deleteUserById(Long id) {
        User user = new User();
        if(userRepository.findById(id).isPresent())
            user = userRepository.findById(id).get();

        this.userRepository.delete(user);

        return true;
    }
}
