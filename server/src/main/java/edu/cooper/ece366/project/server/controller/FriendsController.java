package edu.cooper.ece366.project.server.controller;

import edu.cooper.ece366.project.server.Server;
import edu.cooper.ece366.project.server.exception.ResourceNotFoundException;
import edu.cooper.ece366.project.server.model.User;
import edu.cooper.ece366.project.server.model.Friends;
import edu.cooper.ece366.project.server.repository.FriendsRepository;
import edu.cooper.ece366.project.server.repository.UserRepository;
import edu.cooper.ece366.project.server.security.CurrentUser;
import edu.cooper.ece366.project.server.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.Valid;
import java.util.List;
import java.util.Locale;


@RestController
public class FriendsController {

    @Autowired
    private FriendsRepository friendsRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/friends/requester/{num}")
    @PreAuthorize("hasRole('USER')")
    public List<Friends> getRequester(@PathVariable(name = "num") int num, @CurrentUser UserPrincipal userPrincipal) {

        return friendsRepository.findByRequesterIDAndStatus(num, false);
    }

    @GetMapping("/friends/addressee/{num}")
    @PreAuthorize("hasRole('USER')")
    public List<Friends> getAddressee(@PathVariable(name = "num") int num, @CurrentUser UserPrincipal userPrincipal) {

        return friendsRepository.findByAddresseeIDAndStatus(num, false);
    }


    @PostMapping("/friends/add")
    @PreAuthorize("hasRole('USER')")
    public Friends addFriend(@CurrentUser UserPrincipal userPrincipal,
                             @Valid @RequestBody Friends newFriend) {

        //Check if duplicate before saving
        if(friendsRepository.findByRequesterIDAndAddresseeID(newFriend.getRequesterID(), newFriend.getAddresseeID()).size() != 0){
            return newFriend;
        }

        friendsRepository.save(newFriend);

        return newFriend;
    }
    
    //Get accept logic to work
    //get Friends to work (status = true)
}
