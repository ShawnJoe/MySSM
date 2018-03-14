package com.how2java.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class index {
	
	@RequestMapping("index")
	public ModelAndView showIndex() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("index");
		return mav;
	} 
	@RequestMapping("")
	public ModelAndView showIndex2() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("index");
		return mav;
	} 
}
