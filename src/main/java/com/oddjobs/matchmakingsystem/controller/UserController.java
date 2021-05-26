package com.oddjobs.matchmakingsystem.controller;

import com.oddjobs.matchmakingsystem.exception.ResourceNotFoundException;
import com.oddjobs.matchmakingsystem.model.User;
import com.oddjobs.matchmakingsystem.model.UserToken;
import com.oddjobs.matchmakingsystem.repository.UserRepository;

import com.oddjobs.matchmakingsystem.service.UserService;
import com.oddjobs.matchmakingsystem.service.UserTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository; //Deprecated

    @Autowired
    private UserService userService;

    @Autowired
    private UserTokenService userTokenService;

//    private Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        System.out.println("Register User");

        userService.saveUser(user);
        return user;

//        String kind = "User";
//        String name = user.getEmail();
//        Key userKey = datastore.newKeyFactory().setKind(kind).newKey(name);
//
//        Entity newUser = Entity.newBuilder(userKey)
//                .set("firstName", user.getFirstName())
//                .set("lastName", user.getLastName())
//                .set("email", user.getEmail())
//                .set("username", user.getUsername())
//                .set("password", user.getPassword())
//                .build();
//
//        datastore.put(newUser);
    }

    @PutMapping("/update")
    public User updateUser(@RequestBody User user) {
        System.out.println("Update User " + user.getId()
                + " with email: " + user.getEmail()
                + " with firstname: " + user.getFirstName()
                + " with lastname: " + user.getLastName()
                + " with address: " + user.getAddress()
                + " with phone: " + user.getPhone());

        userService.updateUser(user);
        return user;
    }

    //TODO Remove for production
    @GetMapping("/all")
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(
                this.userRepository.findAll()
        );
    }

    //TODO redo
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable(value = "id") Long id) {
        User user = this.userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found")
        );

        return ResponseEntity.ok().body(user);
    }

    //TODO redo
    @PutMapping("/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable(value = "id") Long id) {
        return this.userRepository.findById(id)
                .map(user-> {
                    user.setFirstName(newUser.getFirstName());
                    user.setLastName(newUser.getLastName());
                    user.setEmail(newUser.getEmail());
                    user.setUsername(newUser.getUsername());
                    user.setPassword(newUser.getPassword());
                    return this.userRepository.save(user);
                })
                .orElseGet(()-> {
                    newUser.setId(id);
                    return this.userRepository.save(newUser);
                });
    }

    //TODO Redo
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeUser(@PathVariable(value = "id") Long id) {
        User user = this.userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found" + id)
        );

        this.userRepository.delete(user);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/current/delete")
    public ResponseEntity<Void> deleteCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Long currentUserId;
        currentUserId = ((User)principal).getId();

        userService.deleteUserDetailsById(currentUserId);

        //Force log out after deleting the user.
        SecurityContextHolder.getContext().getAuthentication().setAuthenticated(false);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/current")
    public ResponseEntity<String> getCurrentUserDetails() {
        String userDetails;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if(!principal.toString().equals("anonymousUser")) {
            Long currentUserId = ((User)principal).getId();
            userDetails = userService.getUserDetailsById(currentUserId);
            return ResponseEntity.ok(userDetails);
        }
        else {
            return ResponseEntity.ok("User is not signed in");
        }
    }
}
