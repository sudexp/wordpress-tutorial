## wordpress-tutorial
Converting HTML Site to WordPress: quick tutorial for beginners.  

### Install working tools
- source code editor [Visual Studio Code](https://code.visualstudio.com/) (optionally)  
- local server environment [MAMP](https://www.mamp.info/en/) for mac os (or [XAMPP](https://www.apachefriends.org/download.html) for windows)  

### Adjustment of the environment
Open MAMP and start servers. In the main window click "Open WebStart Page" and in the opened browser window select "TOOLS" tab and click on "PHP MY ADMIN". In the opened browser window click "Databases" and create a new *wordpress-tutorial-db* database. Once the database has been created, you need to create/add a new user to this database. To do this, click on "Priveleges" tab and then "Add user account". Fill in the fields for "User name", "Password" and "Re-type", check "Check all" in the "Global ptivileges" field and click on the "Go" button at the right bottom of the web page.  

Download source [static_html](https://drive.google.com/file/d/1vGYTx8QHWuXU-vbwwcpN0oCM-46t6zmC/view?usp=sharing) project for further work and unzip it.  

This site is like a portfolio of traveler of a company that produces certain goods for consumers. Our task is to transform this site into a web application that will allow its owners, editors or other authors to manage it and publish content without any programming knowledge. For this we are going to use [WordPress](https://wordpress.org) - open source software you can use to create a beautiful website, blog, or app.  

Download [WordPress](https://wordpress.org/download/), unzip it, rename it, for example, to *wordpress-tutorial* and move it to the *Applications/MAMP/htdocs* folder.  

### WordPress adjustment
In the main window of MAMP click "Open WebStart Page" and in the opened browser window select "MY WEBSITE" tab and click on it. The browser will redirect you to [http://localhost:8888](http://localhost:8888) where you can find a list of projects in the Applications/MAMP/htdocs directory, one of which will be *wordpress-tutorial*. Click on it. The browser will download [setup page](http://localhost:8888/wordpress-tutorial/wp-admin/setup-config.php) where you sholud to perform the following steps required to configure Wordpress:  

1. Choose prefer language and click "Continue". Then click "Let's go".  
2. Enter the "Database Name", "User" and "Password" fields taking into account the ADMINs created in PHP MY ADMIN earlier and click "Submit".  
3. If all the previous steps have been done correctly, a window will appear saying "All right, sparky! You’ve made it through this part of the installation. WordPress can now communicate with your database. If you are ready, time now to…". Click "Run the installation".  
4. Fill in the required fields in the window that appears and click "Install WordPress". Note that the "Username" and "Password" fields do not belong to our database, but are created for the customer, who will make changes to the site using the Admin Panel.  
5. Click "Log In" for final step.



