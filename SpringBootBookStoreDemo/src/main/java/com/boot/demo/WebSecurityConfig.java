package com.boot.demo;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.boot.demo.model.UserEntity;
import com.boot.demo.repo.BookRepo;
import com.boot.demo.repo.UserEntityRepo;


// https://www.baeldung.com/spring-deprecated-websecurityconfigureradapter
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

	
//	@Autowired
//	private JwtFilter jwtfilter;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// for JWT authentication
		http.csrf().disable().cors()
		.and()
		.authorizeRequests().anyRequest().permitAll();
//		http.csrf().disable()//.authorizeRequests().anyRequest().permitAll();
//	
//		.authorizeRequests().antMatchers("/","/auth","/rest/**").permitAll()
//		.antMatchers( "/employees/**").hasAnyAuthority("ADMIN","USER")
//		//.antMatchers("/admin").hasAnyAuthority("ADMIN")
//		.anyRequest().authenticated()
//		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//
//		http.cors();
//		http.addFilterBefore(jwtfilter, UsernamePasswordAuthenticationFilter.class);
	}


	@Bean
	public PasswordEncoder encoder()
	{
		return new BCryptPasswordEncoder();
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/h2-console/**");
	}
	@Autowired
	private UserEntityRepo userEntityRepo;
	
	@Autowired
	private BookRepo bookrepo;
	@Bean
	public void initialize1()
	{
		userEntityRepo.save(new UserEntity("abc",encoder().encode("abc"),"abc@test.com","1212121212"));
		userEntityRepo.save(new UserEntity("pqr",encoder().encode("pqr"),"pqr@test.com","3434343434"));
		
	}
	
}




