package com.oddjobs.matchmakingsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Job {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String jobName;
    private String Field;
    private String Description;
    private String Prerequisites;
    
    protected Job(){}

    public Job(String jobName, String Field, String Description, String Prerequisites) {
        this.jobName = jobName;
        this.Field= Field;
        this.Description = Description;
        this.Prerequisites = Prerequisites;
    }

    public Long getID() {
        return id;
    }

    public void setId(Long id) {
        this.id= id;
    }

    public String getjobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public String getField() {
        return Field;
    }

    public void setField(String Field) {
        this.Field = Field;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String Description) {
        this.Description =  Description;
    }

    public String getPrereqiusites() {
        return Prerequisites;
    }

    public void setPrerequisites(String Prerequisites) {
        this.Prerequisites = Prerequisites;
    }
}
