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
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;


@RestController
public class FriendsController {

    @Autowired
    private FriendsRepository friendsRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/friends/requester")
    @PreAuthorize("hasRole('USER')")
    public List<User> getRequester(@CurrentUser UserPrincipal userPrincipal) {

        List<Friends> requested = friendsRepository.findByRequesterIDAndStatus(((Long)userPrincipal.getId()).intValue(), false);
        List<User> requestedUsers = new ArrayList<>();

        for (int i = 0; i < requested.size(); i++)
        {
            requestedUsers.add(userRepository.findById((long)requested.get(i).getAddresseeID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())));
        }


        return requestedUsers;
    }

    @GetMapping("/friends/addressee")
    @PreAuthorize("hasRole('USER')")
    public List<User> getAddressee(@CurrentUser UserPrincipal userPrincipal) {

        List<Friends> incoming = friendsRepository.findByAddresseeIDAndStatus(((Long)userPrincipal.getId()).intValue(), false);
        List<User> incomingUsers = new ArrayList<>();

        for (int i = 0; i < incoming.size(); i++)
        {
            incomingUsers.add(userRepository.findById((long)incoming.get(i).getRequesterID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())));
        }


        return incomingUsers;
    }

    @GetMapping("/friends/add/{num}")
    @PreAuthorize("hasRole('USER')")
    public String addFriend(@PathVariable(name = "num") int num, @CurrentUser UserPrincipal userPrincipal) {

        //Check if duplicate or sent in other direction
        if(friendsRepository.findByRequesterIDAndAddresseeID(((Long)userPrincipal.getId()).intValue(), num).size() != 0 || friendsRepository.findByRequesterIDAndAddresseeID(num, ((Long)userPrincipal.getId()).intValue()).size() != 0){
            return "Already Exists!";
        }
        Friends newFriend = new Friends();
        newFriend.setStatus(false);
        newFriend.setRequesterID(((Long)userPrincipal.getId()).intValue());
        newFriend.setAddresseeID(num);
        friendsRepository.save(newFriend);

        return "New Friend";
    }

    @GetMapping("/friends/friend")
    @PreAuthorize("hasRole('USER')")
    public List<User> getAllFriends(@CurrentUser UserPrincipal userPrincipal) {

        List<Friends> friends = friendsRepository.findByRequesterIDAndStatusOrAddresseeIDAndStatus(((Long)userPrincipal.getId()).intValue(), true, ((Long)userPrincipal.getId()).intValue(), true);
        List<User> userFriends = new ArrayList<>();


        for (int i = 0; i < friends.size(); i++)
        {
            if(friends.get(i).getAddresseeID() == userPrincipal.getId()) {
                userFriends.add(userRepository.findById((long) friends.get(i).getRequesterID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())));
            }
            else {
                userFriends.add(userRepository.findById((long) friends.get(i).getAddresseeID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())));
            }
        }

        return userFriends;
    }

    @GetMapping("/friends/accept/{num}")
    @PreAuthorize("hasRole('USER')")
    public String acceptFriend(@PathVariable(name = "num") int num, @CurrentUser UserPrincipal userPrincipal) {
        if(friendsRepository.findByRequesterIDAndAddresseeID(num, ((Long)userPrincipal.getId()).intValue()).size() != 0)
        {
            List<Friends> tmp = friendsRepository.findByRequesterIDAndAddresseeID(num, ((Long)userPrincipal.getId()).intValue());
            Friends updatedFriend = tmp.get(0);
            updatedFriend.setStatus(true);
            friendsRepository.save(updatedFriend);
            return "Accepted";
        }

        return "Does not exist";
    }

    //change get requests to return list of users instead of list of friends
}
