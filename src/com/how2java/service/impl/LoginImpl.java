package com.how2java.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.how2java.mapper.UserMapper;
import com.how2java.pojo.User;
import com.how2java.service.Login;

@Service
public class LoginImpl  implements Login{
	@Autowired
	private UserMapper usermapper;
	
	public String list(){
		return "";
	};
	public User getUserByName(String username) {
		User user = usermapper.getByUsername(username);
		return user;
	}
}
