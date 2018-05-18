package com.pinyougou.manager.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

	/**
	 * 获取用户名
	 */
	@RequestMapping("/getName")
	public Map<String, String> getName(){
		Map<String, String> map = new HashMap<String, String>();
		//基于security框架获取用户名
		String username = SecurityContextHolder.getContext().getAuthentication().getName();
		map.put("loginName", username);
		return map;
	}
	
}
