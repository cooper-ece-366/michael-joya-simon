package edu.cooper.ece366.project.server.controller;

import edu.cooper.ece366.project.server.Server;
import edu.cooper.ece366.project.server.exception.ResourceNotFoundException;
import edu.cooper.ece366.project.server.model.Meeting;
import edu.cooper.ece366.project.server.model.MeetingView;
import edu.cooper.ece366.project.server.model.User;
import edu.cooper.ece366.project.server.model.Friends;
import edu.cooper.ece366.project.server.repository.FriendsRepository;
import edu.cooper.ece366.project.server.repository.MeetingRepository;
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
public class MeetingController {

    @Autowired
    private FriendsRepository friendsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MeetingRepository meetingRepository;

    @PostMapping("/meeting/add")
    @PreAuthorize("hasRole('USER')")
    public Meeting addMeeting(@CurrentUser UserPrincipal userPrincipal, @Valid @RequestBody Meeting tmpMeeting) {

        Meeting addMeet = new Meeting();

        addMeet.setStatus(false);
        addMeet.setRequesterID(((Long)userPrincipal.getId()).intValue());
        addMeet.setAddresseeID(tmpMeeting.getAddresseeID());
        addMeet.setMemo(tmpMeeting.getMemo());
        addMeet.setStartTime(tmpMeeting.getStartTime());
        addMeet.setEndTime(tmpMeeting.getEndTime());

        meetingRepository.save(addMeet);
        return addMeet;
    }

    @GetMapping("/meeting/accept/{id}")
    @PreAuthorize("hasRole('USER')")
    public Meeting acceptMeeting(@PathVariable(name = "id") long id, @CurrentUser UserPrincipal userPrincipal) {

        if (meetingRepository.findById(id) == null)
        {
            Meeting met = new Meeting();
            return met;
        }
        else {
            Meeting acceptMeet = meetingRepository.findById(id).get(0);
            acceptMeet.setStatus(true);
            meetingRepository.save(acceptMeet);
            return acceptMeet;
        }

    }

    @GetMapping("/meeting/remove/{id}")
    @PreAuthorize("hasRole('USER')")
    public Meeting removeMeeting(@PathVariable(name = "id") long id, @CurrentUser UserPrincipal userPrincipal) {

        if (meetingRepository.findById(id) == null)
        {
            Meeting meetDNE = new Meeting();
            return meetDNE;
        }
        else {
            Meeting declineMeet = meetingRepository.findById(id).get(0);
            meetingRepository.delete(declineMeet);
            return declineMeet;
        }
    }

    @GetMapping("/meeting/outgoing")
    @PreAuthorize("hasRole('USER')")
    public List<MeetingView> outgoingMeeting(@CurrentUser UserPrincipal userPrincipal) {

        List<Meeting> requested = meetingRepository.findByRequesterIDAndStatus(((Long)userPrincipal.getId()).intValue(), false);
        List<MeetingView> requestedMeetingView = new ArrayList<>();

        for (int i = 0; i < requested.size(); i++)
        {
            MeetingView meetView = new MeetingView();
            meetView.setId(requested.get(i).getId());
            meetView.setNameWith(userRepository.findById((long)requested.get(i).getAddresseeID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())).getName());
            meetView.setImgUrl(userRepository.findById((long)requested.get(i).getAddresseeID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())).getImageUrl());
            meetView.setMemo(requested.get(i).getMemo());
            meetView.setStartTime(requested.get(i).getStartTime());
            meetView.setEndTime(requested.get(i).getEndTime());
            requestedMeetingView.add(meetView);
        }

        return requestedMeetingView;
    }

    @GetMapping("/meeting/incoming")
    @PreAuthorize("hasRole('USER')")
    public List<MeetingView> incomingMeeting(@CurrentUser UserPrincipal userPrincipal) {

        List<Meeting> incoming = meetingRepository.findByAddresseeIDAndStatus(((Long)userPrincipal.getId()).intValue(), false);
        List<MeetingView> incomingMeetingView = new ArrayList<>();

        for (int i = 0; i < incoming.size(); i++)
        {
            MeetingView meetView = new MeetingView();
            meetView.setId(incoming.get(i).getId());
            meetView.setNameWith(userRepository.findById((long)incoming.get(i).getRequesterID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())).getName());
            meetView.setImgUrl(userRepository.findById((long)incoming.get(i).getRequesterID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())).getImageUrl());
            meetView.setMemo(incoming.get(i).getMemo());
            meetView.setStartTime(incoming.get(i).getStartTime());
            meetView.setEndTime(incoming.get(i).getEndTime());
            incomingMeetingView.add(meetView);
        }

        return incomingMeetingView;
    }


    //Get working regardless of requester or addressee
    @GetMapping("/meeting/meet")
    @PreAuthorize("hasRole('USER')")
    public List<MeetingView> Meeting(@CurrentUser UserPrincipal userPrincipal) {

        List<Meeting> meet = meetingRepository.findByRequesterIDAndStatusOrAddresseeIDAndStatus(((Long)userPrincipal.getId()).intValue(), true, ((Long)userPrincipal.getId()).intValue(), true);
        List<MeetingView> meetList = new ArrayList<>();

        for (int i = 0; i < meet.size(); i++)
        {
            if(meet.get(i).getAddresseeID() == userPrincipal.getId()) //we are the addressee
            {
                MeetingView meetView = new MeetingView();
                meetView.setId(meet.get(i).getId());
                meetView.setNameWith(userRepository.findById((long)meet.get(i).getRequesterID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())).getName());
                meetView.setImgUrl(userRepository.findById((long)meet.get(i).getRequesterID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())).getImageUrl());
                meetView.setMemo(meet.get(i).getMemo());
                meetView.setStartTime(meet.get(i).getStartTime());
                meetView.setEndTime(meet.get(i).getEndTime());
                meetList.add(meetView);
            }
            else
            {
                MeetingView meetView = new MeetingView();
                meetView.setId(meet.get(i).getId());
                meetView.setNameWith(userRepository.findById((long)meet.get(i).getAddresseeID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())).getName());
                meetView.setImgUrl(userRepository.findById((long)meet.get(i).getAddresseeID()).orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId())).getImageUrl());
                meetView.setMemo(meet.get(i).getMemo());
                meetView.setStartTime(meet.get(i).getStartTime());
                meetView.setEndTime(meet.get(i).getEndTime());
                meetList.add(meetView);
            }

        }

        return meetList;
    }

}
