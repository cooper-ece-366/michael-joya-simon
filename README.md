# Welcome to Lava!
### ECE 366 Spring 2022 -- Michael Bentivegna, Joya Debi, Simon Yoon

#### What is Lava?
Lava is... Where Knowledge Flows <br>

Lava strives to assist people in finding their perfect learning community. Users are encouraged to find their “Study Buddy” through Lava to pick up a new skill, refine an existing one, and most importantly, help others learn as well.  A Lava user can start by creating their own account. This account includes information such as name, age, a brief summary about themselves, skills they are comfortable with, etc. Once the account is made and customized for the individual, they can find people with similar interests using the search feature, which is able to be filtered by skill and name. If they find someone they would like to learn with, they can send a Study Buddy request. The other user then has the option to either accept or deny this request. If accepted, the two users share their information and can schedule a time to meetup all within the lava app.  

#### Why does it matter?
* Roughly 65% of individuals reported increased feelings of loneliness since the start of the COVID-19 pandemic

* Of these individuals, 58% said that they had increased the amount of alcohol they drank, and 56% had increased drug use

* Lava strives to be a vector of community rekindling by incorporating a social element to hobby search and overall learning

#### Check out our Kanban Board
[Lava Kanban](https://github.com/orgs/cooper-ece-366/projects/5) <br>

#### Check out our Wiki
[Lava Wiki](https://github.com/cooper-ece-366/michael-joya-simon/wiki/LAVA-Wiki) <br>

#### Check out our Demo
[Lava Demo](https://youtu.be/VEfAvjgmQwc)

#### How do I run this application locally?
1. Make sure you have node and npm installed on your machine to run the React frontend
2. Download MySQL and have an instance of it running
3. The default password is set to "password" to access the root database on port 3306, if you need to change these parameters they can be adjusted in the application.yml file
4. Install IntelliJ to make running the backend easy with just a few clicks or download Maven to run the commands in the terminal
5. Clone the repo into your host computer
6. In the top-most directory of the project run clean.sh, then build.sh to build the Springboot backend
7. To run the server, right click on the server.java file in the server/src/main/java/edu/cooper/ece366/project directory, and hit "Run Server"
8. With the backend running, navigate to the lava-app folder
9. Run npm install to get all the necessary node modules and packages for the React application
10. Lastly, run npm start and the application should spin up on port 3000
