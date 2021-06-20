package com.oddjobs.matchmakingsystem.service;

import com.oddjobs.matchmakingsystem.exception.ResourceNotFoundException;
import com.oddjobs.matchmakingsystem.model.Job;
import com.oddjobs.matchmakingsystem.model.User;
import com.oddjobs.matchmakingsystem.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;


@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public void saveJob(Job job) {
        job = jobRepository.save(job);
    }

    public Job loadById(Long id) throws ResourceNotFoundException {
        Job job = new Job();

        // Check if job exists, then get it from the job repository
        if(jobRepository.findById(id).isPresent()) {
            job = jobRepository.findById(id).get();
            return job;
        }
        else {
            throw new ResourceNotFoundException(MessageFormat.format("Job {0} cannot be found.", id));
        }
    }

    // Delete a Job using the Job's Id
    public boolean deleteJobById(Long id) {
        Job job = new Job();
        if(jobRepository.findById(id).isPresent())
            job = jobRepository.findById(id).get();

        this.jobRepository.delete(job);

        return true;
    }

    // Update Job values using a new Job object
    public boolean updateJob(Job job) {
        Long id = job.getId();
        Job savedJob = new Job();
        if(jobRepository.findById(id).isPresent())
            savedJob = jobRepository.findById(id).get();

        //If an attribute of the new User is empty, do not replace it.
        if(!job.getTitle().equals(""))
            savedJob.setTitle(job.getTitle());
        if(!job.getField().equals(""))
            savedJob.setField(job.getField());
        if(!job.getDescription().equals(""))
            savedJob.setDescription(job.getDescription());
        if(!job.getRequirements().equals(""))
            savedJob.setRequirements(job.getRequirements());
        if(!job.getLocation().equals(""))
            savedJob.setLocation(job.getLocation());

        jobRepository.save(savedJob);
        return true;
    }
}
