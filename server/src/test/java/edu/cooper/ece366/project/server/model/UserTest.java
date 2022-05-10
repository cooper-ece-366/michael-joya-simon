package edu.cooper.ece366.project.server.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    User user = new User();

    @Test
    void Id() {
        user.setId((long) 2);
        System.out.println("Checking User ID...");
        assertEquals(2, user.getId());
    }

    @Test
    void Name() {
        user.setName("test name");
        System.out.println("Checking User Name...");
        assertEquals("test name", user.getName());
    }

    @Test
    void Email() {
        user.setEmail("test email");
        System.out.println("Checking User Email...");
        assertEquals("test email", user.getEmail());
    }

    @Test
    void ImageUrl() {
        user.setImageUrl("test image url");
        System.out.println("Checking User Image Url...");
        assertEquals("test image url", user.getImageUrl());
    }

    @Test
    void EmailVerified() {
        user.setEmailVerified(true);
        System.out.println("Checking User Email Verified...");
        assertEquals(true, user.getEmailVerified());
    }

    @Test
    void SkillsList() {
        user.setSkillsList("test skill set");
        System.out.println("Checking User Skill Set...");
        assertEquals("test skill set", user.getSkillsList());
    }

    @Test
    void Password() {
        user.setPassword("test password");
        System.out.println("Checking User Password...");
        assertEquals("test password", user.getPassword());
    }

    @Test
    void Career() {
        user.setCareer("test career");
        System.out.println("Checking User Career...");
        assertEquals("test career", user.getCareer());
    }

    @Test
    void Birthday() {
        user.setBirthday("testing birthday");
        System.out.println("Checking User Birthday...");
        assertEquals("testing birthday", user.getBirthday());
    }

    @Test
    void Bio() {
        user.setBio("testing bio");
        System.out.println("Checking User Bio...");
        assertEquals("testing bio", user.getBio());
    }

    @Test
    void StateLocated() {
        user.setStateLocated("testing state located");
        System.out.println("Checking User State Located...");
        assertEquals("testing state located", user.getStateLocated());
    }
}