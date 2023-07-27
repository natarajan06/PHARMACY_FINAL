package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api111")
public class Controller {

    @Autowired
    private Repository repo;

    @GetMapping("/get")
    public List<Model> getAllMessages() {
        return repo.findAll();
    }

    @PostMapping("/post")
    public ResponseEntity<Model> postMessage(@RequestBody Model message) {
        try {
            Model savedMessage = repo.save(message);
            return ResponseEntity.ok(savedMessage);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
}
