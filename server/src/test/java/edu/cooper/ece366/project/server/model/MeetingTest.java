package edu.cooper.ece366.project.server.model;
import org.junit.jupiter.api.Test;

import junit.framework.TestCase;
import junit.framework.TestSuite;
import static org.junit.jupiter.api.Assertions.*;

class MeetingTest {

    Meeting meeting = new Meeting();

    @Test
    void Id() {
        meeting.setId((long) 2);
        System.out.println("Checking Meeting ID...");
        assertEquals(2, meeting.getId());
    }

    @Test
    void AddresseeID() {
        meeting.setAddresseeID(3);
        System.out.println("Checking Meeting Addressee...");
        assertEquals(3, meeting.getAddresseeID());
    }

    @Test
    void RequesterID() {
        meeting.setRequesterID(4);
        System.out.println("Checking Meeting Requester...");
        assertEquals(4, meeting.getRequesterID());
    }

    @Test
    void Status() {
        meeting.setStatus(true);
        System.out.println("Checking Meeting Status...");
        assertEquals(true, meeting.isStatus());
    }

    @Test
    void Memo() {
        meeting.setMemo("testing");
        System.out.println("Checking Meeting Memo...");
        assertEquals("testing", meeting.getMemo());
    }

    @Test
    void StartTime() {
        meeting.setStartTime("testing start time");
        System.out.println("Checking Meeting Start Time...");
        assertEquals("testing start time", meeting.getStartTime());
    }

    @Test
    void EndTime() {
        meeting.setEndTime("testing end time");
        System.out.println("Checking Meeting End Time...");
        assertEquals("testing end time", meeting.getEndTime());
    }
}