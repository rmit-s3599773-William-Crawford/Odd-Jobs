package com.oddjobs.matchmakingsystem.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Jobs")
public class Job {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long userId;
    private String userEmail;
    private String title;
    private String field;
    private String description;
    private String requirements; //TODO not currently used
    private String location;

    public Job(Long userId, String userEmail, String title, String field, String description, String location) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.title = title;
        this.field= field;
        this.description = description;
        this.location = location;
    }

    public Long getID() {
        return id;
    }

    public void setId(Long id) {
        this.id= id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String Description) {
        this.description =  Description;
    }

    public String getRequirements() {
        return requirements;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
