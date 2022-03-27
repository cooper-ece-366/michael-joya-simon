package edu.cooper.ece366.project.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import edu.cooper.ece366.project.server.config.AppProperties;


import org.springframework.web.bind.annotation.RequestMapping;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication(scanBasePackages = {
        "edu.cooper.ece366.project.server"
})
@EnableConfigurationProperties(AppProperties.class)
public class Server {
    private static final Logger LOGGER = LoggerFactory.getLogger(Server.class);

    public static void main(String[] args) {
        LOGGER.info("Example log from {}", Server.class.getSimpleName());
        System.out.println("The Server says hello!");
        SpringApplication.run(Server.class, args);
    }

}
