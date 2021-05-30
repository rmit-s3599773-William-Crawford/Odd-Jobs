package com.oddjobs.matchmakingsystem.controller;

import com.oddjobs.matchmakingsystem.exception.ResourceNotFoundException;
import com.oddjobs.matchmakingsystem.model.User;
import com.oddjobs.matchmakingsystem.repository.UserRepository;
import com.oddjobs.matchmakingsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository; //Deprecated

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        System.out.println("Register User");

        userService.saveUser(user);
        return user;
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

    //TODO redo
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable(value = "id") Long id) {
        User user = this.userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found")
        );

        return ResponseEntity.ok().body(user);
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

        userService.deleteUserById(currentUserId);

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
