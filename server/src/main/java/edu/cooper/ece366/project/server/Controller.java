package edu.cooper.ece366.project.server;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.naming.ldap.Control;
import java.io.IOException;

@RestController
public class Controller {
    private ObjectMapper objectMapper = new ObjectMapper();
    TestUser[] users = new TestUser[3];

    @GetMapping(path = "/api/user", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getMessage() throws JsonProcessingException{
        TestUser sample = new TestUser("Michael", 551);
        String sampleString = objectMapper.writeValueAsString(sample) ;
        return sampleString;
    }

    @GetMapping(path = "/api/help/{user}")
    public String printUserName(@PathVariable(name = "user") String named) throws JsonProcessingException{

        TestUser sample;
        users[0] = new TestUser("Michael", 551);
        users[1] = new TestUser("Joey", 588);
        users[2] = new TestUser("Randy", 524);

        if (named.equals("michael"))
        {
            sample = users[0];
        }
        else if (named.equals("joey")){
            sample = users[1];
        }
        else if (named.equals("randy")){
            sample = users[2];
        }
        else
            sample = new TestUser("default name", -1);

        String sampleString = objectMapper.writeValueAsString(sample);
        return sampleString;
    }
}
