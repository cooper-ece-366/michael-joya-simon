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

    @GetMapping(path = "/api/user", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getMessage() throws JsonProcessingException{
         TestUser sample = new TestUser("Michael", 551);
         String sampleString = objectMapper.writeValueAsString(sample) ;
         return sampleString;
    }
}
