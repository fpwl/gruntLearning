The terminal commands needed to install task manager/node/npm

install software on vagrant: 
(after grabbing vagrant file into project and vagrant up, to install software use commands below)

if vagrant ever ask for password it’s : vagrant

command line: 
1: vagrant ssh
2: curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
(therefore nvm is installed, nvm means 'node version manager')
3: exit
(because we have to restart terminal to get nvm working)
4: vagrant ssh
5: nvm —-version
6: nvm install node
(installing latest node)
7: node -v
(checking version)
8: npm -v
(checking version)

*The following is to make package.json and install it’s dependencies. (start from here if the vagrant server you are using already has node/npm installed.)

9: After making basic base website 10: need to find the project file from the server not the computer. 
11: cd /vagrant
(should see vagrantFile www when you ls into file)
12: then just cd into the project file.
13: npm init
(to initialise npm)
14: follow the terminal and enter the information
15: npm install
this will create a package-lock.json file in root directory
16: npm install jquery --save
(installing jQuery, it will create a node_modules file in project folder)
(--save is needed to save files properly)
17: change script to correlate to nodemodules
18: npm install bootstrap —save 
19: Now install other packages as need. 
(note: to find packages search it on npmjs.com)

*to get into the server again after everything is closed, enter 'vagrant ssh' to get started. 
*npm update: this will update packages
*if you download/clone a repo and they used package.json and node_modules, you need to npm install to download the hidden node module file.  


To make a git ignore file:
new file in root directory: .gitignore
- inside the gitignore file, code node_modules, 
- so it will ignore node module folder, you can add others depending on what you to ignore