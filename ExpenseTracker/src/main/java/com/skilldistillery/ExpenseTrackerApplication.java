package com.skilldistillery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ExpenseTrackerApplication extends SpringBootServletInitializer{
	
	@Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(ExpenseTrackerApplication.class);
	  }
	
	public static void main(String[] args) {
		SpringApplication.run(ExpenseTrackerApplication.class, args);
	}

}
//Original Below
//@SpringBootApplication
//public class ExpenseTrackerApplication {
//
//	public static void main(String[] args) {
//		SpringApplication.run(ExpenseTrackerApplication.class, args);
//	}