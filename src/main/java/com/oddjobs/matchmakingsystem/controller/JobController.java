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

//    private Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

//    @Autowired
//    public JobController(JobRepository jobRepository) {
//        this.jobRepository = jobRepository;
//    }

    @PostMapping("/post")
    public Job postJob(@RequestBody Job job) {
        //TODO Debug print
        System.out.println("Posting Job" + job.getTitle());

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

    @PutMapping("/{id}")
    public Job updateJob(@RequestBody Job newJob, @PathVariable(value = "id") Long id) {
//        return this.jobRepository.findById(id)
//        .map(user-> {
//            job.setName(newJob.getJob());
//            job.setField(newJob.getField());
//            job.setDescription(newJob.getDescription());
//            job.setPrerequisites(newJob.getPrerequisites());
//            return this.jobRepository.save(user);
//        })
//        .orElseGet(()-> {
//            newUser.setId(id);
//            return this.userRepository.save(newJob);
//        });
        return null;
    }

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

