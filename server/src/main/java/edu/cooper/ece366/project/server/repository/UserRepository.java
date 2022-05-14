//Michael Bentivegna

//Create JPA repository with all necessary functions to communicate with the users database

package edu.cooper.ece366.project.server.repository;

import edu.cooper.ece366.project.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);

}
