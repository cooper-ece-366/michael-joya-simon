package edu.cooper.ece366.project.server.controller;

import edu.cooper.ece366.project.server.exception.ResourceNotFoundException;
import edu.cooper.ece366.project.server.model.User;
import edu.cooper.ece366.project.server.repository.UserRepository;
import edu.cooper.ece366.project.server.security.CurrentUser;
import edu.cooper.ece366.project.server.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
}

