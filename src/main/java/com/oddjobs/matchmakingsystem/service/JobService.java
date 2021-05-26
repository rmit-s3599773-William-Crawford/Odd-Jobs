package com.oddjobs.matchmakingsystem.service;

import com.oddjobs.matchmakingsystem.exception.ResourceNotFoundException;
import com.oddjobs.matchmakingsystem.model.Job;
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

        System.out.println("Loading Job by ID");

        Job job = new Job();

        if(jobRepository.findById(id).isPresent()) {
            //TODO Debug println
            System.out.println("Job is present: ");
            System.out.print(job.getTitle());
            //
            job = jobRepository.findById(id).get();
            return job;
        }
        else {
            throw new ResourceNotFoundException(MessageFormat.format("Job {0} cannot be found.", id));
        }
    }

    public boolean deleteJobById(Long id) {
        Job job = new Job();
        if(jobRepository.findById(id).isPresent())
            job = jobRepository.findById(id).get();

        this.jobRepository.delete(job);

        return true;
    }
}
