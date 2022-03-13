package edu.cooper.ece366.project.server;

public class TestUser {
    private String name;
    private int id;

    public TestUser(String Name, int ID) {
        name = Name;
        id = ID;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;

    }

    public String getName() {
        return name;

    }
}
