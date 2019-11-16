## wordpress-tutorial
Converting HTML Site to WordPress: quick tutorial for beginners.  

### Install working tools
- source code editor [Visual Studio Code](https://code.visualstudio.com/) (optionally)  
- local server environment [MAMP](https://www.mamp.info/en/) for mac os (or [XAMPP](https://www.apachefriends.org/download.html) for windows)  

### Adjustment of the environment
Open MAMP and start servers. In the main window click "Open WebStart Page" and in the opened browser window select "TOOLS" tab and click on "PHP MY ADMIN". In the opened browser window click "Databases" and create a new *wordpress-tutorial-db* database. Once the database has been created, you need to create/add a new user to this database. To do this, click on "Priveleges" tab and then "Add user account". Fill in the fields for "User name", "Password" and "Re-type", check "Check all" in the "Global ptivileges" field and click on the "Go" button at the right bottom of the web page.  

Download source [static_html](https://drive.google.com/file/d/1t052PB9It9zF5rE25ZGH5HPQcvsQDRTW/view?usp=sharing) project for further work and unzip it.  

This site is like a portfolio of traveler of a company that produces certain goods for consumers. Our task is to transform this site into a web application that will allow its owners, editors or other authors to manage it and publish content without any programming knowledge. For this we are going to use [WordPress](https://wordpress.org) - open source software you can use to create a beautiful website, blog, or app.  

Download [WordPress](https://wordpress.org/download/), unzip it, rename it, for example, to *wordpress-tutorial* and move it to the *Applications/MAMP/htdocs* folder.  

### WordPress adjustment
In the main window of MAMP click "Open WebStart Page" and in the opened browser window select "MY WEBSITE" tab and click on it. The browser will redirect you to [http://localhost:8888](http://localhost:8888) where you can find a list of projects in the Applications/MAMP/htdocs directory, one of which will be *wordpress-tutorial*. Click on it. The browser will download [setup page](http://localhost:8888/wordpress-tutorial/wp-admin/setup-config.php) where you sholud to perform the following steps required to configure Wordpress:  

1. Choose prefer language and click "Continue". Then click "Let's go".  
2. Enter the "Database Name", "User" and "Password" fields taking into account the ADMINs created in PHP MY ADMIN earlier and click "Submit".  
3. If all the previous steps have been done correctly, a window will appear saying "All right, sparky! You’ve made it through this part of the installation. WordPress can now communicate with your database. If you are ready, time now to…". Click "Run the installation".  
4. Fill in the required fields in the window that appears and click "Install WordPress". Note that the "Username" and "Password" fields do not belong to our database, but are created for the customer, who will make changes to the site using the Dashboard.  
5. Click "Log In" for final step.

### Theme creating
Open *wordpress-tutorial* folder in the code editor. In *wp-contents/themes* folder create a new folder named *my_theme*, where you should create 2 files:  
- style.css (style file)  
- index.php (start file of the main page).  

The only necessary component of the style.css file to be written in it is the comment with a title "Theme Name:". Add it to this file:  
```
// style.css
/*
Theme Name: My Theme
*/
```

Index.php file can theoretically be left blank.  

Let's make sure the theme is working now. In the dashboard, go to *Appearance --> Themes* and activate "My Theme", refresh [browser page](http://localhost:8888/wordpress-tutorial/).  

### Update the theme
Open index.php file and transfer all code from index.html file of the source project into it [static_html](https://drive.google.com/file/d/1vGYTx8QHWuXU-vbwwcpN0oCM-46t6zmC/view?usp=sharing).  

Create a new folder inside the *my-theme*, where you can transfer all other folders and files of the source project: *fonts*, *img*, *js* and *styles*.  

#### Adding styles and scripts dynamically
Copy the contents of *assets/styles/main.css* file to *my_theme/stylle.css* file.  
Replace the line *<link rel="stylesheet" href="./styles/main.css" />* with the following code from the hеad index.php tag:  
```
// index.php
<?php
  wp_head()
?>
```

Replace the code *<script src="./js/main.js" defer></script>* at the end of body tag with the following:  
```
// index.php
<?php
  wp_footer();
?>
```

Create *functions.php* file in *my_theme* directory:  
```
// functions.php
<?php
  add_action('wp_enqueue_scripts', 'my_styles');
  add_action('wp_enqueue_scripts', 'my_scripts');

  // styles adding
  function my_styles() {
    wp_enqueue_style('my_style', get_stylesheet_uri());
    // wp_enqueue_style( 'header_style', get_template_directory_uri() . '/assets/styles/main.css');
    // wp_enqueue_style( 'animate_style', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
  }

  // scripts adding
  function my_scripts() {
    wp_enqueue_script('my_scripts', get_template_directory_uri() . '/assets/js/main.js', array(), null, true);
  }
?>
```

#### Adding images and fonts
In index.php replace all incorrect urls *./img* with the current theme's url *<?php echo bloginfo('template_url'); ?>/assets/img*.  
In style.css replace all urls *../img* with url *assets/img* and all fonts *../fonts* with url *assets/fonts*.  

*Tip:* use the search and replacement features of the code editor.  

Update the [page](http://localhost:8888/wordpress-tutorial/) in browser and make sure it is fully functional.  

### Formation of the correct page structure

#### Header
In directory *my_theme* create a new file *header.php*, which will contain all the code located in the site header. In the main *index.php* theme file, select and cut out the entire part of the code above *<div class="mainslider glide">* and paste it into the created *header.php*. At the beginning of *index.php* file, instead of the lost part, insert the following header connection code:  
```
// index.php
<?php
  get_header();
?>
```

#### Footer
Similar to the above, create a new file *footer.php*, which will contain all the code located in the site footer. In  *index.php* select and cut out the entire part of the code below *<div class="question">* (include it) and paste it into the created *footer.php*. At the end of *index.php* file, instead of the lost part, similarly  insert the following header connection code:  
```
// index.php
<?php
  get_header();
?>
```

### Setting up dynamic site changing from dashboard
#### Logo
Для добавления логотипа к dashboard вставьте следующий код в конец файла *functions.php*:  
```
// functions.php
add_theme_support('custom-logo');
```

Replace *<a class="header__logo">* with the contents inside with the following code:
```
// header.php
<div class="header__logo">
  <?php the_custom_logo(); ?>
</div>
```

And similarly:
```
// footer.php
<div class="footer__logo">
  <?php the_custom_logo(); ?>
</div>
```

Check that the logo is now available for adding to the site:  
*Dashboard --> Appearance --> Customize --> Site Indentify*  
Click "Select logo" --> "Select files" and choose *img/logo.png*. Add *Alt Text* as, for example, "logo" and click "Select". Now and in the future, remember to press the *Publish* button on the dashboard.  

#### Title
Change the content of the title tag:
```
// header.php
<?php bloginfo('name'); echo " | "; bloginfo('description') ?>
```

Now you can change Site Title and Tagline in *Dashboard --> Appearance --> Customize --> Site Indentify*  