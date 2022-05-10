package edu.cooper.ece366.project.server.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MeetingViewTest {

    MeetingView meetingView = new MeetingView();

    @Test
    void Id() {
        meetingView.setId((long) 2);
        System.out.println("Checking Meeting View ID...");
        assertEquals(2, meetingView.getId());
    }

    @Test
    void NameWith() {
        meetingView.setNameWith("test name");
        System.out.println("Checking Meeting View Name...");
        assertEquals("test name", meetingView.getNameWith());
    }

    @Test
    void ImgUrl() {
        meetingView.setImgUrl("test image url");
        System.out.println("Checking Meeting View Image Url...");
        assertEquals("test image url", meetingView.getImgUrl());
    }

    @Test
    void Memo() {
        meetingView.setMemo("test memo");
        System.out.println("Checking Meeting View Memo...");
        assertEquals("test memo", meetingView.getMemo());
    }

    @Test
    void StartTime() {
        meetingView.setStartTime("testing start time");
        System.out.println("Checking Meeting View Start Time...");
        assertEquals("testing start time", meetingView.getStartTime());
    }

    @Test
    void EndTime() {
        meetingView.setEndTime("testing end time");
        System.out.println("Checking Meeting View End Time...");
        assertEquals("testing end time", meetingView.getEndTime());
    }
}