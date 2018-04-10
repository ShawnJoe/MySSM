package com.how2java.service;


import com.how2java.pojo.Category;
import com.how2java.pojo.User;

public interface Login {

	public String list();
	public User getUserByName(String username);
}
