package com.how2java.controller;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.xml.ws.spi.http.HttpContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.how2java.pojo.User;
import com.how2java.service.Login;

// 告诉spring mvc这是一个控制器类
@Controller
@RequestMapping("")
public class CategoryController1 {
	@Autowired
	private Login loginService;

	private String seccss = "1";
	//如果发送的为简单的json 直接转换
	//如果发送的为json数组，需要使用@RequestBody，并且提交的ajax提交的数据必须为一个Json串，而不能使一个Json对象，否则会没有反应
	//@ResponseBody 将返回的对象转化为相应的对象返回，在 前端就可以直接获取
	@RequestMapping("listCategory1")
	public String listCategory(HttpServletRequest req){
		HttpSession session = req.getSession(false);
		System.out.println(session.getAttribute("user"));
		ModelAndView mav = new ModelAndView();
		mav.setViewName("listCategory1");
		return "aaa";
	}

}
