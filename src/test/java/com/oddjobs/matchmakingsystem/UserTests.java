package com.oddjobs.matchmakingsystem;

import com.oddjobs.matchmakingsystem.model.User;
import com.oddjobs.matchmakingsystem.repository.UserRepository;

import org.junit.Assert;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class UserTests {

    //Below is a basic testing template taken from https://medium.com/swlh/spring-boot-and-react-js-fullstack-application-7ad99139e95c
    //TODO Needs to be done to match the new program architecture, tests are currently useless

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testSaveUser(){
        User user = new User("John","Doe","john.doe@email.com","strong-password");
        userRepository.save(user);
        userRepository.findById(new Long(1))
                .map(newUser ->{
                    Assert.assertEquals("John",newUser.getFirstName());
                    return true;
                });
    }

    @Test
    public void getUser(){
        User user = new User("John","Doe","john.doe@email.com","strong-password");
        User user2 = new User("Daniel","Marcus","daniel@daniel.com","super_strong_password");
        userRepository.save(user);

        userRepository.save(user2);

        userRepository.findById(new Long(1))
                .map(newUser ->{
                    Assert.assertEquals("danie",newUser.getUsername());
                    return true;
                });

    }

    @Test
    public void getUsers(){
        User user = new User("John","Doe","john.doe@email.com","strong-password");
        User user2 = new User("Daniel","Marcus","daniel@daniel.com","super_strong_password");
        userRepository.save(user);
        userRepository.save(user2);

        Assert.assertNotNull(userRepository.findAll());
    }

    @Test
    public void deleteUser(){
        User user = new User("John","Doe","john.doe@email.com","strong-password");
        userRepository.save(user);
        userRepository.delete(user);
        Assert.assertTrue(userRepository.findAll().isEmpty());
    }
}
