package com.how2java.mapper;
 
import java.util.List;

import com.how2java.pojo.Category;
import com.how2java.pojo.User;
 
public interface UserMapper {
 
      
    public int add(UserMapper user);  
       
      
    public void delete(int id);  
       
      
    public User get(int id);  
     
    public User getByUsername(String username); 
    
    public int update(UserMapper User);   
       
      
    public List<UserMapper> list();
    
      
    public int count();  
    
    
    
}