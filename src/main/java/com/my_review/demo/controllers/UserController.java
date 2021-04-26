package com.my_review.demo.controllers;

import com.my_review.demo.models.User;
import com.my_review.demo.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowCredentials = "true")
public class UserController {
  @Autowired
  UserRepository repository;

  @PostMapping("/logout")
  public void logout(HttpSession session) {
    session.invalidate();
  }

  @PostMapping("/login")
  public User login(HttpSession session,
                    @RequestBody User user,
                    HttpServletResponse res) {
    User profile = repository.findUserByCredentials(user.getUsername(), user.getPassword());
    if (profile != null) {
      session.setAttribute("profile", profile);
      return profile;
    } else {
      res.setStatus(403);
      return null;
    }
  }

  @PostMapping("/register")
  public User register(HttpSession session,
                       @RequestBody User user) {
    User newUser = repository.save(user);
    newUser.setPassword("***");
    session.setAttribute("profile", newUser);
    return newUser;
  }

  @PostMapping("/profile")
  public User profile(HttpSession session, HttpServletResponse res) {
    User profile = (User) session.getAttribute("profile");
    if (profile != null)
      return profile;
    else {
      res.setStatus(403);
      return null;
    }
  }

  @GetMapping("/profile/{userId}")
  public User getProfileForUser(@PathVariable("userId") int uid) {
    User profile = repository.getProfileForUser(uid);
    profile.setPassword("***");
    return profile;
  }

  @GetMapping("/users")
  public List<Object[]> findRecentlyJoinedUsers() {
    return repository.findRecentlyJoinedUsers();
  }

  @PutMapping("/api/users/{userId}")
  public int updateProfile(
          @PathVariable("userId") int uid,
          @RequestBody User user,
          HttpSession session) {
    User oldUser = repository.findUserById(uid);
    oldUser.setFirstName(user.getFirstName());
    oldUser.setLastName(user.getLastName());
    oldUser.setEmail(user.getEmail());
    repository.save(oldUser);
    session.setAttribute("profile", oldUser);
    return 1;
  }
}
