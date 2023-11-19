package com.codeboard.jwt.service;
import java.util.Properties;
import org.hibernate.annotations.common.util.impl.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
@Service
public class Springbootmailservice
{
	@Autowired
	JavaMailSender mailSender;
	public   void sendEmail(String fromEmail,String toEmail,String subject,String body) {
		SimpleMailMessage mailMessage=new SimpleMailMessage();
		mailMessage.setFrom(fromEmail);
		mailMessage.setTo(toEmail);
		mailMessage.setSubject(subject);
		mailMessage.setText(body);
		mailSender.send(mailMessage);
	}
}
	
            		 
            		 
            		 
            		 
            		 
            		 
            		 
            		 
            		 
            		 
            		 
            		 
            		 
            		 
            		 
            		 
            		 