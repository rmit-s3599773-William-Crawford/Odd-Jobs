# Spring Boot Java and React JS Application start up

This project uses Webpack alongside Maven to build and run.

## Install JDK and Maven

### JDK

Install [Amazon Correto 11 JDK](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html)
Here is the direct link to the [Windows installer](https://corretto.aws/downloads/latest/amazon-corretto-11-x86-windows-jdk.msi)

OpenJDK 11 is now installed, move on to installing Maven

### Maven

Download and install [Maven](https://maven.apache.org/download.cgi). 
You will want to download the Binary Archive.
Extract the zip folder anywhere you like, C:\Users\{user}\Documents\Maven is fine.

Now you have to edit the user "Path" variable to include Maven.

On Windows 10, use the search bar and search for "Edit environment variables for your account" and open that menu.
You will see User variables and System variables, in the User variables, select the "Path" variable, and then click the "Edit" button.

Another menu will pop up with a list of directories. Click "New" to add a new variable, and paste the location of the bin folder of the Maven download. 
For example: C:\Users\{user}\Documents\Maven\apache-maven-3.8.1\bin

You can now run Maven goals through powershell and inside Visual Studio Code terminals, use "mvn -v" to confirm

## Available Scripts

These scripts should be run from the root directory of the project (Odd-Jobs/).

### `mvn spring-boot:run`

This builds and runs the Spring Boot application for the back end. 
This does not need to be rerun for frontend changes to apply

### `npm run-script watch`

Builds the front end bundle.js and watches for changes.
Rebuilds the front end on any change to .\frontend files (eg. HomeNavBar.js).
This allows you to view changes without restarting the Spring Boot app.

Open [http://localhost:8080](http://localhost:8080) in your browser to access the application.

## VS Code Extensions

I recommend these extensions:

### GitLens -- Git Supercharged

This adds a toolbar at the bottom of VSCode that lets you swap branches easily, as well as other tools.

### Java Extension Pack

Adds Java development essentials

### Spring Boot Extension Pack

Spring Boot specific Java essentials

### XML 

Support for XML files (such as pom.xml)



