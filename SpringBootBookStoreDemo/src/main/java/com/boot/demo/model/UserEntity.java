package com.boot.demo.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserEntity {

	@Id
	private String username;
	private String password;
	private String email;
	private String phone;
	@ElementCollection
	@JoinTable(name = "wishlist", joinColumns = @JoinColumn(name="username"))
	@Column(name="bookid")
	private List<Integer> wishlist;
	@ElementCollection
	@JoinTable(name = "completed", joinColumns = @JoinColumn(name="username"))
	@Column(name="bookid")
	private List<Integer> completed;
	public UserEntity(String username, String password, String email, String phone) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.phone = phone;
	}
	
	
}
