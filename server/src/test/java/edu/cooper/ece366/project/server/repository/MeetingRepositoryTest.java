package edu.cooper.ece366.project.server.repository;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.TestInstance;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class MeetingRepositoryTest {

    @Test
    void findById() {
    }

    @Test
    void findByRequesterIDAndStatus() {
    }

    @Test
    void findByAddresseeIDAndStatus() {
    }

    @Test
    void findByRequesterIDAndStatusOrAddresseeIDAndStatus() {
    }
}