package com.Resume.Resume.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Resume.Resume.Model.Model;
import com.Resume.Resume.Repository.Repository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000/")
public class Controller {
    @Autowired
    Repository repository;

    @PostMapping("/Login")
    String getLogin(@RequestBody Model model){
        long c = repository.countByUsernameAndPassword(model.getEmail(),model.getPassword());
        if(c==1){
            return "success";
        }
        return "Faile";
    }

    @PostMapping("/Register")
    String getResgister(@RequestBody Model model){
        repository.save(model);
        return "success";
    }
}
