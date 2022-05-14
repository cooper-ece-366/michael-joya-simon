//Michael Bentivegna

//Create JPA repository with all necessary functions to communicate with the meetings database

package edu.cooper.ece366.project.server.repository;

import edu.cooper.ece366.project.server.model.Meeting;
import edu.cooper.ece366.project.server.model.Friends;
import edu.cooper.ece366.project.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long>{

    List<Meeting> findById(long id);
    List<Meeting> findByRequesterIDAndStatus(int req, boolean status);
    List<Meeting> findByAddresseeIDAndStatus(int ad, boolean status);
    List<Meeting> findByRequesterIDAndStatusOrAddresseeIDAndStatus(int id1, boolean bool1, int id2, boolean bool2);
}
