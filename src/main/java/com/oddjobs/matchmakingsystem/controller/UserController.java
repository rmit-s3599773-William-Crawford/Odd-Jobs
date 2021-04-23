package com.oddjobs.matchmakingsystem.controller;

import com.oddjobs.matchmakingsystem.exception.ResourceNotFoundException;
import com.oddjobs.matchmakingsystem.model.User;
import com.oddjobs.matchmakingsystem.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Key;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {
    private UserRepository userRepository;
    private Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/save")
    public User saveUser(@RequestBody User user) {
//        String kind = "User";
//        String name = "firstuser1";
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

        return this.userRepository.save(user);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(
                this.userRepository.findAll()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable(value = "id") Long id) {
        User user = this.userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found")
        );

        return ResponseEntity.ok().body(user);
    }

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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeUser(@PathVariable(value = "id") Long id) {
        User user = this.userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found" + id)
        );

        this.userRepository.delete(user);
        return ResponseEntity.ok().build();
    }

}