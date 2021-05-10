package com.oddjobs.matchmakingsystem.controller;

import com.oddjobs.matchmakingsystem.exception.ResourceNotFoundException;
import com.oddjobs.matchmakingsystem.model.Job;
import com.oddjobs.matchmakingsystem.repository.JobRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Key;

import java.util.List;

@RestController
@RequestMapping("/api/job")
@CrossOrigin

public class JobController {
    private jobRepository;
    private Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

    @Autowired 
    public JobController(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @PostMapping("/save")
    public Job saveJob(@RequestBody Job job) {
//        String kind = "User";
//        String name = "firstuser1";
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

        return this.jobRepository.save(job);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Job>> getJobs() {
        return ResponseEntity.ok(
                this.jobRepository.findall()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Job> getJob(@PathVariable(value = "id") Long id) {
        Job job = this.jobRepository.findById(id).orElseThrow(
            ()-> new ResourceNOtFoundException("Job not found")
        );
        return ResponseEntity.ok().body(job);
    }

    @PutMapping("/{id}")
    public Job updateJob(@RequestBody Job newJob, @PathVariable(value = "id") Long id) {
        return this.jobRepository.findById(id)
        .map(user-> {
            job.setName(newJob.getJob());
            job.setField(newField.getField());
            job.setDescription(newDescription.getDescription());
            job.setPrerequisites(newPrerequisites.getPrerequisites());
            return this.userRepository.save(user);
        })
        .orElseGet(()-> {
            newUser.setId(id);
            return this.userRepository.save(newJob);
        });
}

@DeleteMapping("/{id}")
public ResponseEntity<Void> removeJob(@PathVariable(value = "id") Long id) {
User user = this.userRepository.findById(id).orElseThrow(
        ()-> new ResourceNotFoundException("User not found" + id)
);

this.userRepository.delete(job);
return ResponseEntity.ok().build();
}

}

