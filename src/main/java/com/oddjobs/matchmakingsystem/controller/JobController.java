package com.oddjobs.matchmakingsystem.controller;

import com.oddjobs.matchmakingsystem.exception.ResourceNotFoundException;
import com.oddjobs.matchmakingsystem.model.Job;
import com.oddjobs.matchmakingsystem.model.User;
import com.oddjobs.matchmakingsystem.repository.JobRepository;

import com.oddjobs.matchmakingsystem.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/job")
@CrossOrigin

public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private JobService jobService;

    @PostMapping("/post")
    public Job postJob(@RequestBody Job job) {
        jobService.saveJob(job);

        return job;

//        String kind = "Job";
//        String name = "firstjob1";
//        Key userKey = datastore.newKeyFactory().setKind(kind).newKey(name);
//
//        Entity newJob = Entity.newBuilder(userKey)
//                .set("firstName", job.getFirstName())
//                .set("lastName", job.getLastName())
//                .set("email", job.getEmail())
//                .set("username", job.getUsername())
//                .set("password", job.getPassword())
//                .build();
//
//        datastore.put(newJob);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Job>> getJobs() {
        return ResponseEntity.ok(
                this.jobRepository.findAll()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Job> getJob(@PathVariable(value = "id") Long id) {
        Job job = this.jobRepository.findById(id).orElseThrow(
            ()-> new ResourceNotFoundException("Job not found")
        );
        return ResponseEntity.ok().body(job);
    }

    @PutMapping("/update")
    public Job updateJob(@RequestBody Job job) {
        System.out.println("Update Job " + job.getId()
                + " with title: " + job.getTitle()
                + " with field: " + job.getField()
                + " with description: " + job.getDescription()
                + " with requirements: " + job.getRequirements()
                + " with location: " + job.getLocation());
        jobService.updateJob(job);
        return job;
    }

    // TODO
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeJob(@PathVariable(value = "id") Long id) {
//        User user = this.userRepository.findById(id).orElseThrow(
//                ()-> new ResourceNotFoundException("User not found" + id)
//        );
//
//        this.userRepository.delete(job);
        return ResponseEntity.ok().build();
    }

}

