package com.oddjobs.matchmakingsystem.service;

import com.oddjobs.matchmakingsystem.model.UserToken;
import com.oddjobs.matchmakingsystem.repository.UserTokenRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserTokenService {

    private UserTokenRepository userTokenRepository;

    public void saveUserToken(UserToken userToken) {
        userTokenRepository.save(userToken);
    }

    public void deleteUserToken(Long id) {
        userTokenRepository.deleteById(id);
    }
}
