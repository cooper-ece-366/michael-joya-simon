//Michael Bentivegna

//Testing class for the JPA functions that connect with the MySQL database

package edu.cooper.ece366.project.server.repository;

import edu.cooper.ece366.project.server.exception.ResourceNotFoundException;
import edu.cooper.ece366.project.server.model.Friends;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;

import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class FriendsRepositoryTest {

    @Autowired
    private FriendsRepository friendsRepository;

    Friends friend = new Friends();

    //Create new friend before testing
    @BeforeAll
    void setup(){
        friend.setId((long)0);
        friend.setRequesterID(111);
        friend.setAddresseeID(222);
        friend.setStatus(false);
    }

    //Make sure a null isn't returned since a friend should be found
    @Test
    void RequesterStatusCheck() {
        System.out.println("Checking Friends Get By Requester and Status...");
        assertNotNull(friendsRepository.findByRequesterIDAndStatus(111,false));
    }

    @Test
    void AddresseeStatusCheck() {
        System.out.println("Checking Friends Get By Addressee and Status...");
        assertNotNull(friendsRepository.findByAddresseeIDAndStatus(222,false));
    }

    @Test
    void RequesterAndAddresseeCheck() {
        System.out.println("Checking Friends Get By Requester and Addressee...");
        assertNotNull(friendsRepository.findByRequesterIDAndAddresseeID(111,222));
    }

    @Test
    void EitherRequesterOrAddresseeCheck() {
        System.out.println("Checking Friends Get By Requester and Status or Addressee and Status...");
        assertNotNull(friendsRepository.findByRequesterIDAndStatusOrAddresseeIDAndStatus(111,false, 222, false));
    }
}