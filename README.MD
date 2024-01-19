# Lottery program
Thanks for the origin developers contribution.
@moshang-xc moshang 
@dependabot[bot]
@yiliangjianghu 一两江湖
@JessyTsu1
I just did some style changes.
so  probably it till has a similar way in operation
# Preview
[!image]https://github.com/Was8gm/lottery-AEMG/blob/main/README_img/Page.png
[!image]https://github.com/Was8gm/lottery-AEMG/blob/main/README_img/Page2.png
# Technology Stack
Technology stack: Node + Express + Three.js

Server: Express + Node

Web Page: Three.js, References to the official 3D example of Three.js

#Function Description:
The result can ben save and downloaded to excel synchronously
The winner will not participate in the drawing, and the drawing person can be drawn again if he/she not on site
Refresh or trun off the server will save the winner data and will not resrt the lottery data, only by click the reset button on the page can the lottery data be reset
The number of prizes is able to configure
After all the prizes have been drawn, you can continue to draw special prizes(For example:Red pockets, additional prizes, etc). By default, one is extracted at once



# install
git clone https://github.com/Was8gm/lottery-AEMG.git

cd lottery

//Server plugin installation
cd server
npm install

//Front-end plugin installation
cd ../product
npm install

//Package
npm run build

//Running
npm run serve
npm start

Configuration Information
Lottery personnel list information configuration
The lottery list information is in the server/data/user.xlsx file, information could only fill in base on the format, file name and title are not able to revise

Prize information configuration
Prize information is filled in the server/config.js file, and the file name cannot be modified.

The configuration of the number of prizes drawn each time
EACH_COUNTIt is used to configure the number of lottery draws each time, which corresponds to the prizes one by one. For example, the number of lottery draws corresponding to the above prize configuration is as follows：

const EACH_COUNT = [1, 1, 5];
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Configuration above means the order of the number of prizes to be drawn at one time is：one special prize per time, one grand prize per time and 5 first prize per time.

Enterprise Identity Configuration
This identification is used to display on the lottery card.

const COMPANY = "AEMG";
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Docker Deployment plan
Summary
This project is support to deploy by Docker. Docker is a platform with lightweight containerization, allows you to quickly deploy, test and run the applications. This text will introduce how to deploy the project by Docker.

System Requirement
Before you use the Docker to deploy the project, you need to ensure you have download below software:

Docker (Please refer Docker official file to get the installation instructions)
Docker Compose
Installation
Download and unzip the source code for the project

Access the project directory after unzipped the file

Execute the following command to build the Docker mirror image:

./build.sh [TAG]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
It will use Dockerfile to set up the Docker mirror image named lottery:[TAG]. If no tag is specified, the 'latest' tag is used by default

Execute the following command to run the local container:

./dev.sh [TAG]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
This will start the container and deploy the application in the Docker container. You can test loacally to ensure all running fulently.
Please be pay attention that all applicaiton in the container will monitor port 8888 and port 443.

Execute the following command to tag the Docker mirror image and push it to the remote Docker repository

./tagpush.sh [TAG]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
It will tag the Docker mirror image and push it to the remote Docker repository, please build up your repo at https://hub.docker.com/ if you want to us Docker official hub.


Kindly take note that [TAG] should be replaced with the name of the mirror image you pushed to the Docker repository

Run the following command in the project directory on the server to deploy the application using Docker Compose:
docker-compose up -d
This will start a Docker Compose stack and deploy the project into it. Note that port 8888 and port 443 of the container are mapped to port 8888 and port 443 on the server. If you wish to use a different port, please change the docker-compose.yml file accordingly.

License
MIT


moshang-xc.github.io/lottery/
Topics
nodejs threejs lottery luckydraw lucky prizes lucky-wheel
Resources
 Readme
License
 MIT license
 Activity
Stars
 2.8k stars
Watchers
 19 watching
Forks
 664 forks
Report repository
Releases
No releases published
Packages
No packages published
Contributors
4
@moshang-xc
moshang-xc moshang
@dependabot[bot]
dependabot[bot]
@yiliangjianghu
yiliangjianghu 一两江湖
@JessyTsu1
JessyTsu1
Deployments
1
 github-pages 2 years ago
Languages
JavaScript
85.7%
 
CSS
11.1%
 
HTML
1.7%
 
Dockerfile
1.1%
 
Shell
0.4%
Footer
© 2024 GitH
