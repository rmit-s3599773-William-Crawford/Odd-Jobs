package com.oddjobs.matchmakingsystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebMainController {
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/about")
    public String about() {
        return "about";
    }

    @RequestMapping(value = "/login")
    public String login() {
        return "login";
    }

    @RequestMapping(value = "/contact")
    public String contact() {
        return "contact";
    }

    @RequestMapping(value = "/register")
    public String register() {
        return "register";
    }

    @RequestMapping(value = "/profile")
    public String profile() {
        return "profile";
    }

    @RequestMapping(value = "/job")
    public String job() {
        return "job";
    }
     
    @RequestMapping(value = "/inbox")
    public String inbox() {
        return "inbox";
    }

    @RequestMapping(value = "/editprofile")
    public String editProfile() {
        return "edit_profile";
    }    

    @RequestMapping(value = "/viewJobs")
    public String viewJobs() {
        return "viewJob";
    }  

    @RequestMapping(value = "/jobListResult")
    public String jobListResult() {
        return "jobList";
    }  
}
