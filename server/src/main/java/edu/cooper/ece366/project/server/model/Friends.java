//Michael Bentivegna

//Friends POJO that will be stored in the JPA repository

package edu.cooper.ece366.project.server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

//Creating the table
@Entity
@Table(name = "friends", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"requesterID", "addresseeID"})
})
public class Friends {

    //Each variable is its own column in the table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private int requesterID;

    @Column
    private int addresseeID;

    @Column
    private boolean status; //0 for not accepted, 1 for accepted



    public Friends() {
    }

    //Setters and getters
    public void setId(Long id) {
        this.id = id;
    }


    public Long getId() {
        return id;
    }

    public int getRequesterID() {
        return requesterID;
    }

    public void setRequesterID(int requesterID) {
        this.requesterID = requesterID;
    }

    public int getAddresseeID() {
        return addresseeID;
    }

    public void setAddresseeID(int addresseeID) {
        this.addresseeID = addresseeID;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
