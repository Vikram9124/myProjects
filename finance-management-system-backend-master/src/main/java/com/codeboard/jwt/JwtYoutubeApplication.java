package com.codeboard.jwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

import com.codeboard.jwt.service.Springbootmailservice;

@SpringBootApplication
public class JwtYoutubeApplication {

    public static void main(String[] args) {
       
        
       SpringApplication.run(JwtYoutubeApplication.class, args);
        
       
        
    }
}
