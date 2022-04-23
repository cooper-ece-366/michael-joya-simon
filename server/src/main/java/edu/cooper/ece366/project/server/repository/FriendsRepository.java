package edu.cooper.ece366.project.server.repository;

import edu.cooper.ece366.project.server.model.Friends;
import edu.cooper.ece366.project.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface FriendsRepository extends JpaRepository<Friends, Long>{

    List<Friends> findByRequesterIDAndStatus(int id, boolean stat);
    List<Friends> findByAddresseeIDAndStatus(int id, boolean stat);
    List<Friends> findByRequesterIDAndAddresseeID(int id1, int id2);

}
