//Michael Bentivegna

//This class controls all the API endpoints needed regarding a user

package edu.cooper.ece366.project.server.controller;

import edu.cooper.ece366.project.server.Server;
import edu.cooper.ece366.project.server.exception.ResourceNotFoundException;
import edu.cooper.ece366.project.server.model.User;
import edu.cooper.ece366.project.server.repository.UserRepository;
import edu.cooper.ece366.project.server.security.CurrentUser;
import edu.cooper.ece366.project.server.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.validation.Valid;
import java.util.List;
import java.util.Locale;

@RestController
public class UserController {

    //Initialize user list
    @Autowired
    private UserRepository userRepository;

    //Get logged in user
    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

    //Update users information
    @PostMapping("/user/update")
    public User updateCurrentUser(@CurrentUser UserPrincipal userPrincipal,
                                  @Valid @RequestBody User inputUser) {
        User updateUser = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));

        updateUser.setSkillsList(inputUser.getSkillsList());
        updateUser.setBio(inputUser.getBio());
        updateUser.setBirthday(inputUser.getBirthday());
        updateUser.setStateLocated(inputUser.getStateLocated());
        updateUser.setCareer(inputUser.getCareer());
        updateUser.setName(inputUser.getName());

        User user = userRepository.save(updateUser);
        return updateUser;
    }

    //Search for list of users given input parameters of name and skills list
    @PostMapping("/user/list")
    public List<User> filterCurrentUsers(@CurrentUser UserPrincipal userPrincipal,
                                         @Valid @RequestBody User filterUser) {

        List<User> filtered = userRepository.findAll();
        String[] skills = filterUser.getSkillsList().split("[,]", 0);;

        filtered.removeIf(val -> (val.getId() == userPrincipal.getId()));

        for (int i = 0; i < skills.length; i++) {
            int finalI = i;
            filtered.removeIf(value -> (!(value.getSkillsList().contains(skills[finalI])) || !(value.getName().toLowerCase().contains(filterUser.getName().toLowerCase()))));
        }

        return filtered;
    }

}

