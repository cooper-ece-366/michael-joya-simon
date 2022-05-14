//Michael Bentivegna

//Testing class for Friends POJO

package edu.cooper.ece366.project.server.model;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FriendsTest {

Friends friend = new Friends();

    @Test
    void ID(){
        friend.setId((long) 2);
        System.out.println("Checking Friend ID...");
        assertEquals(2, friend.getId());
    }

    @Test
    void Requester() {
        friend.setRequesterID(3);
        System.out.println("Checking Friend Requester...");
        assertEquals(3, friend.getRequesterID());
    }

    @Test
    void Addressee() {
        friend.setAddresseeID(4);
        System.out.println("Checking Friend Addressee...");
        assertEquals(4, friend.getAddresseeID());

    }

    @Test
    void status() {
        friend.setStatus(true);
        System.out.println("Checking Friend Status...");
        assertEquals(true, friend.isStatus());

    }
}