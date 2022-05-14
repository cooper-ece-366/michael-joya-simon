//Michael Bentivegna

//Testing class for the JPA functions in the MeetingRepository that connect with the MySQL database

package edu.cooper.ece366.project.server.repository;

import edu.cooper.ece366.project.server.model.Friends;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import edu.cooper.ece366.project.server.model.Meeting;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class MeetingRepositoryTest {

    @Autowired
    private MeetingRepository meetingRepository;

    Meeting meeting = new Meeting();

    //Create new meeting
    @BeforeAll
    void setup(){
        meeting.setId((long)1);
        meeting.setRequesterID(111);
        meeting.setAddresseeID(222);
        meeting.setStatus(false);
    }

    //Ensure that the JPA function finds the meeting and doesn't return null
    @Test
    void CheckRequesterIDAndStatus() {
        System.out.println("Checking Meeting Get By Requester and Status...");
        assertNotNull(meetingRepository.findByRequesterIDAndStatus(111, false));

    }

    @Test
    void CheckAddresseeIDAndStatus() {
        System.out.println("Checking Meeting Get By Addressee and Status...");
        assertNotNull(meetingRepository.findByAddresseeIDAndStatus(222, false));
    }

    @Test
    void CheckRequesterIDAndStatusOrAddresseeIDAndStatus() {
        System.out.println("Checking Meeting by Requester and Status or Addressee and Status...");
        assertNotNull(meetingRepository.findByRequesterIDAndStatusOrAddresseeIDAndStatus(111, false, 222, false));
    }
}