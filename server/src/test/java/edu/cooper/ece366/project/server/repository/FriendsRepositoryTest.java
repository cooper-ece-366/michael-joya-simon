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

    @BeforeAll
    void setup(){
    }

    @Test
    void findByRequesterIDAndStatus() {
        assertNotNull(friendsRepository.findByRequesterIDAndStatus(0,false));
    }

    @Test
    void findByAddresseeIDAndStatus() {
    }

    @Test
    void findByRequesterIDAndAddresseeID() {
    }

    @Test
    void findByRequesterIDAndStatusOrAddresseeIDAndStatus() {
    }
}