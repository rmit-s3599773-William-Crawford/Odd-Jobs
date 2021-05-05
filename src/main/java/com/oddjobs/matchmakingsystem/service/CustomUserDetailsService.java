//package com.oddjobs.matchmakingsystem.service;
//
//import com.oddjobs.matchmakingsystem.exception.ResourceNotFoundException;
//import com.oddjobs.matchmakingsystem.model.User;
//import com.oddjobs.matchmakingsystem.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.Optional;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) {
//        User user = this.userRepository.findById(1L).orElseThrow(
//                ()-> new ResourceNotFoundException("User not found")
//        );
//
//        System.out.println(user.toString());
//        return user;
//    }
//
////    @Transactional
////    public User loadUserById(Long id){
////        User user = userRepo.getById(id);
////
////        if(user==null) throw new UsernameNotFoundException("User not found");
////        return user;
////
////    }
//
//}
