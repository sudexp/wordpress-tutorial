## Wordpress tutorial
Converting HTML Site to WordPress: quick tutorial for beginners.  

### Install working tools
- source code editor [Visual Studio Code](https://code.visualstudio.com/) (optionally)  
- local server environment [MAMP](https://www.mamp.info/en/) for Mac OS (or [XAMPP](https://www.apachefriends.org/download.html) for Windows)  

### Adjustment of environment
Open MAMP and start servers. In the main window click "Open WebStart Page" and in opened browser window select "TOOLS" tab and click on "PHP MY ADMIN". Next, click "Databases" and create a new *wordpress-tutorial-db* database. Once the database has been created, you need to create/add a new user to this database. To do this, click on "Priveleges" tab and then "Add user account". Fill in the fields for "User name", "Password" and "Re-type", check "Check all" in "Global privileges" field and click on "Go" button at the right bottom of the web page.  

Download source [static_html](https://drive.google.com/file/d/1CVUeXxZRzvBa6BHFkL-Yl6S8_scpWzyr/view?usp=sharing) project for further work and unzip it.  

This site is like a portfolio of some company that produces certain products for customers. Our task is to transform this site into a web application that will allow its owners, editors or other authors to manage it and publish content without any programming knowledge. For this, we are going to use [WordPress](https://wordpress.org) - open-source software you can use to create website, blog or app.  

Download [WordPress](https://wordpress.org/download/), unzip and rename it, for example, to *wordpress-tutorial* and move it to *Applications/MAMP/htdocs* folder.  

### WordPress configuring
In the main window of MAMP click "Open WebStart Page" and in the opened browser select *MY WEBSITE* tab and click it. The browser will redirect you to [http://localhost:8888](http://localhost:8888) where you can find a list of projects in *Applications/MAMP/htdocs* directory, one of which is *wordpress-tutorial*. Click it. The browser will download [setup page](http://localhost:8888/wordpress-tutorial/wp-admin/setup-config.php) where you should to perform the following steps required to configure [Wordpress](https://wordpress.org/support/article/how-to-install-wordpress/):  

1. Select your preferred language and click *Continue*. Then click *Let's go*.  
2. Enter *Database Name*, *User* and *Password* fields taking into created in PhpMyAdmin earlier and click *Submit*.  
3. If all the previous steps have been done correctly, the window will appear saying "All right, sparky! You’ve made it through this part of the installation. WordPress can now communicate with your database. If you are ready, time now to…". Click *Run the installation*.  
4. Fill in the required fields in the next window and click *Install WordPress*. Note that the *Username* and *Password* fields do not belong to our database, but are created for the customer, who will make changes to the site using Dashboard.  
5. Click *Log In* for the final step.

### Theme creating
Open *wordpress-tutorial* folder in code editor. In *wp-contents/themes* folder create a new folder named *my_theme*, where you should to create 2 files:  
- style.css (style file)  
- index.php (start file of the main page).  

The only necessary component of *style.css* file to be written in it's the comment with the title "Theme Name:". Add it to this file:  
```
// style.css
/*
Theme Name: My Theme
*/
```

Index.php file can theoretically be left blank.  

Let's make sure that the theme is working now: 
*Dashboard --> Appearance --> Themes*, activate *My Theme*, refresh [browser](http://localhost:8888/wordpress-tutorial/).  

### Update theme
Open *index.php* and transfer all code from *index.html* of source project into it [static_html](https://drive.google.com/file/d/1vGYTx8QHWuXU-vbwwcpN0oCM-46t6zmC/view?usp=sharing).  

Create a new folder inside the *my-theme*, where you can transfer all other folders and files of our source project: *fonts*, *img*, *js* and *styles*.  

#### Adding styles and scripts dynamically
Copy contents of *assets/styles/main.min.css* file to *my_theme/style.css* file.  
Make the following changes:  
```
// index.php
<link rel="stylesheet" href="./styles/main.min.css"> // replace it with
<?php
  wp_head()
?>
...
<script src="./js/main.min.js" defer> // replace it with
<?php
  wp_footer();
?>
```

In *my_theme* directory create a new file named *functions.php*:  
```
// functions.php
<?php
  add_action('wp_enqueue_scripts', 'my_styles');
  add_action('wp_enqueue_scripts', 'my_scripts');

  // styles adding
  function my_styles() {
    wp_enqueue_style('my_style', get_stylesheet_uri());
    // wp_enqueue_style( 'header_style', get_template_directory_uri() . '/assets/styles/main.min.css');
    // wp_enqueue_style( 'animate_style', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
  }

  // scripts adding
  function my_scripts() {
    wp_enqueue_script('my_scripts', get_template_directory_uri() . '/assets/js/main.min.js', array(), null, true);
  }
?>
```

#### Adding images and fonts
Replace all incorrect URLs:
```
// index.php
./img // remove all this
<?php echo bloginfo('template_url'); ?>/assets/img // paste this instead
```
```
// style.css
../img // remove all this
assets/img // paste this instead
...
../fonts // remove all this
assets/fonts // paste this instead
```

*Tip:* use search and replacement features of your code editor.  

Update [page](http://localhost:8888/wordpress-tutorial/) in the browser and make sure it is fully functional.  

### Formation of correct page structure
#### Header
In directory *my_theme* create a new file *header.php*, which will contain all code located in site header, and make the following changes:  
```
// index.php
<div class="mainslider glide"> // cut and replace all code above this with
<?php
  get_header();
?>
```
```
// header.php
// paste all the cut out code from index.php here
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
...
```

#### Footer
Similar to above, create a new file *footer.php*, which will contain all code located in site footer, and exchange code in the files:  

```
// index.php
<div class="question"> // cut and replace all code below this (include) with
<?php
  get_header();
?>
```
```
// footer.php
// paste all the cut out code from index.php here
<div class="question">
      <div class="question__text">
        Any questions? Write to us!
      </div>
      <div id="reply" class="minibutton">Write</div>
...
```

### Setting up dynamic site changing from dashboard
#### Logo
To add a logo to Dashboard, insert the following code at the end of *functions.php*:  
```
// functions.php
add_theme_support('custom-logo');
```

Modify *header.php*:  
```
// header.php
<a href="#" class="header__logo"> // replace it with this
<div class="header__logo">
  <?php the_custom_logo(); ?>
</div>
```

And similarly:  
```
// footer.php
<a href="#" class="footer__logo"> // replace it with this
<div class="footer__logo">
  <?php the_custom_logo(); ?>
</div>
```

Check that logo is now available for adding to site:  
*Dashboard --> Appearance --> Customize --> Site Indentify*  

Click *Select logo* --> *Select files* and choose *img/logo.png*. Add *Alt Text* as, for example, *logo* and click *Select*. Now and in the future, remember to press *Publish* button on Dashboard.  

#### Title
Change content of tag *title*:
```
// header.php
<?php bloginfo('name'); echo " | "; bloginfo('description') ?>
```

Now you can change *Site Title* and *Tagline* in *Dashboard --> Appearance --> Customize --> Site Indentify*  

### Configuring custom fields
#### Creating tabs
*Field Groups --> About company --> Field Type = Tab --> Field Label = General information --> Update*  
*Field Groups --> About company --> Field Type = Tab --> Field Label = Some information --> Update* 

Move mouse over number 4 and drag this field up the section.  

Now, when you switch *Pages --> Main Page*, you can use the tabs, which might be quite convenient when application grows.  

#### Title, description and image
Add new plugin *Advanced Custom Fields*:  
*Dashboard --> Plugins --> Add new = Advanced Custom Fields + Install + Activate*  

After that, new *Custom Fields* plugin appeared in the side menu.  

*Dashboard --> Custom Fields --> Add New --> Add Title = About Company --> Location --> Show this field group if = Page Type + is equal to + Front Page --> Add Field --> Field Label = Сompany title --> Field Name = сompany_title --> Field Type = Text --> Instructions = Enter the title (max 30 characters) --> Required? = Yes --> Character Limit = 30 --> Add Field --> Field Label = Company description --> Field Name = company_description --> Field Type = Text Area --> Required? = Yes --> Rows = 8 --> New lines = Automatically add br --> Add Field --> Field Label = Image --> Field Name = image --> Field Type = Image --> Required? = Yes --> Return Format = Image Array --> Preview Size = Full Size --> Update*  

*Dashboard --> Settings --> Reading --> Your homepage displays = A static page (select below) --> Homepage: = Sample Page --> Save Changes*  

*Dashboard --> Pages --> Sample Page = Main Page + remove all blocks --> Сompany title = About our company --> Company description = Our company has been giving positive emotions... (from *div class="about__text"*) --> Add Image --> Upload Files --> Select Files = img/about.jpg --> Alt Text = About Company --> Select --> Update*  

Modify *index.php*:
```
// index.php
<h1 class="title underlined">About the company</h1> // replace it with this
<h1 class="title underlined"><?php the_field('сompany_title'); ?></h1>
...
<div class="about__text">Our company has ...</div> // replace it with this
<div class="about__text"><?php the_field('company_description'); ?></div>
...
<img src="./img/about.jpg" alt="about company" /> // replace it with this
<?php
  $image = get_field('image');
  if (!empty($image)): ?>
    <img
    src="<?php echo $image['url']; ?>"
    alt="<?php echo $image['alt']; ?>">
  <?php endif;
?>
```

#### General information
##### Email
*Dashboard --> Custom Fields --> Add New --> Add Title = General information --> Location --> Show this field group if = Page --> is equal to + Main Page --> Add Field --> Field Label = Email --> Field Name = email --> Field Type = Text --> Required? = Yes --> Publish*  

Changing content *div class="header__contacts"*:  
```
// header.php
<a href="mailto:<?php the_field('email', 2); ?>"><?php the_field('email', 2); ?></a>
```

Changing content *div class="contacts__mail"*:  
```
// index.php
<a href="mailto:<?php the_field('email', 2); ?>"><?php the_field('email', 2); ?></a>
```

*Pages --> Main Page --> General information --> Email = sudexp@icloud.com --> Update*  

##### Phones
*Dashboard --> Custom Fields --> General information --> Add Field --> Field Label = Phone 1 --> Field Name = phone_1 --> Field Type = Text --> Required? = Yes --> Update*  

*Dashboard --> Custom Fields --> General information --> Add Field --> Field Label = Phone 2 --> Field Name = phone_2 --> Field Type = Text --> Required? = Yes --> Update*  

Changing content *div class="header__contacts-tel"*:  
```
// header.php
<a href="tel:<?php the_field('phone_1', 2); ?>"><?php the_field('phone_1', 2); ?></a>
<a href="tel:<?php the_field('phone_2', 2); ?>"><?php the_field('phone_2', 2); ?></a>
```

Similarly, change link tags with phone numbers in *index.php* and *footer.php*:  
```
// index.php, footer.php
<a href="tel:<?php the_field('phone_1', 2); ?>" <?php the_field('phone_1', 2); ?></a>
<a href="tel:<?php the_field('phone_2', 2); ?>" <?php the_field('phone_2', 2); ?></a>
```

*Dashboard --> Pages --> Main Page --> General information --> Phone 1 = +358400000000 --> Update*  
*Dashboard --> Pages --> Main Page --> General information --> Phone 2 = +358500000000 --> Update*  

##### Social media
*Dashboard --> Custom Fields --> General information --> Add Field --> Field Label = Instagram --> Field Name = instagram --> Field Type = Text --> Required? = Yes --> Update*  

*Dashboard --> Custom Fields --> General information --> Add Field --> Field Label = Facebook --> Field Name = facebook --> Field Type = Text --> Required? = Yes --> Update*  

*Dashboard --> Custom Fields --> General information --> Add Field --> Field Label = Youtube --> Field Name = youtube --> Field Type = Text --> Required? = Yes --> Update*  

Modify all this links:  
```
// footer.php
<a href="#" class="footer__social-item"> // change all this to
<a href="<?php the_field('instagram', 2); ?>" class="footer__social-item">
<a href="<?php the_field('facebook', 2); ?>" class="footer__social-item">
<a href="<?php the_field('youtube', 2); ?>" class="footer__social-item">
```

*Dashboard --> Pages --> Main Page --> General information --> Instagram = [Instagram](https://www.instagram.com) --> Update*  
*Dashboard --> Pages --> Main Page --> General information --> Facebook = [Facebook](https://www.facebook.com) --> Update*  
*Dashboard --> Pages --> Main Page --> General information --> Youtube = [Youtube](https://www.youtube.com) --> Update*  

#### Our team
Also create a possibility to replace team image through *Dashboard*:  

*Dashboard --> Custom Fields --> Add New --> Add Title = Our team --> Location --> Show this field group if = Page --> is equal to + Main Page --> Add Field --> Field Label = Team Image --> Field Name = team_image --> Field Type = Image --> Required? = Yes --> Return Format = Image Array --> Preview Size = Full Size --> Publish*  

Replace *img class="specialists__img"* with the next one:  
```
// index.php
<?php
  $image = get_field('team_image');
  if (!empty($image)): ?>
    <img
    src="<?php echo $image['url']; ?>"
    alt="<?php echo $image['alt']; ?>">
  <?php endif;
?>
```

*Dashboard --> Pages --> Main Page --> Our team --> Add Image --> Upload Files --> Select Files = img/about_1.jpg --> Update*  

#### Alert
*Dashboard --> Custom Fields --> Add New --> Add Title = Alert --> Location --> Show this field group if = Page --> is equal to + Main Page --> Add Field --> Field Label = Text Alert --> Field Name = text_alert --> Field Type = Text Area --> Required? = Yes --> Rows = 8 --> New lines = Automatically add br --> Publish*  

Modify alert text dynamically:  
```
// index.php
<div class="products__alert"><span>Didn't find ...</div> // change for that
<div class="products__alert"><?php the_field('text_alert'); ?></div>
```

*Dashboard --> Pages --> Main Page --> Alert --> Text Alert = Eget gravida cum sociis natoque. Elementum nibh tellus molestie nunc. Viverra nibh cras pulvinar mattis nunc sed. In metus vulputate eu scelerisque felis imperdiet proin. --> Update*  

#### Our History
In the same way we replace headings, text fields and images of this section of site. For example, I will give you a sequence of actions for one of blocks:  

*Dashboard --> Custom Fields --> Add New --> Add Title = Our history --> Location --> Show this field group if = Page --> is equal to + Main Page --> Add Field --> Field Label = Title 1 --> Field Name = title_1 --> Field Type = Text --> Required? = Yes --> Publish*  

*Dashboard --> Custom Fields --> Our history --> Add Field --> Field Label = Description 1 --> Field Name = description_1 --> Field Type = Text Area --> Required? = Yes --> Rows = 8 --> New lines = Automatically add br --> Update*  

*Dashboard --> Custom Fields --> Our history --> Add Field --> Field Label = Image 1 --> Field Name = image_1 --> Field Type = Image --> Required? = Yes --> Return Format = Image URL --> Preview Size = Full Size --> Update*  

Change next code:  
```
// index.php
<div class="subtitle">It all began with a desire</div> // replace it with
<div class="subtitle"><?php the_field('title_1'); ?></div>
...
<div class="aboutus__text">Morbi leo urna...</div> // replace it whith
<div class="aboutus__text"><?php the_field('description_1'); ?></div>
...
<img class="aboutus__img" src="<?php echo bloginfo('template_url'); ?>/assets/img/about_1.jpg" alt="company"> // replace it with
<img class="aboutus__img" src="<?php the_field('image_1'); ?>" alt="about us">
```

*Dashboard --> Pages --> Main Page --> Our history --> Title 1 = IT ALL BEGAN WITH A DESIRE --> Update*  

*Dashboard --> Pages --> Main Page --> Our history --> Description 1 = Morbi leo urna molestie at elementum. Nulla pharetra diam sit amet. Augue interdum velit euismod in pellentesque massa placerat.*
*Vel eros donec ac odio tempor orci dapibus ultrices in. Blandit massa enim nec dui nunc. Dolor sit amet consectetur adipiscing elit. Porttitor massa id neque aliquam vestibulum. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Nibh tellus molestie nunc non blandit massa enim nec dui. Enim facilisis gravida neque convallis. --> Update*  

*Dashboard --> Pages --> Main Page --> Our history --> Image 1 --> Add Image --> Upload Files --> Select Files = img/about_1.jpg --> Update*  

*Tip:* Use *duplicate* option for similar fields.  

Similarly, we create *Contacts* page and make *Address* field available for editing from *Dashboard*.  

### Dynamic output/display of posts
Let's create next categories:  
*Dashboard --> Posts --> Categories --> Add new category --> Name = Slider --> Slug = slider --> Add New Category*  
*Dashboard --> Posts --> Categories --> Add new category --> Name = Product line 1 --> Slug = product_line_1 --> Add New Category*  
*Dashboard --> Posts --> Categories --> Add new category --> Name = Product line 2 --> Slug = product_line_2 --> Add New Category*  
*Dashboard --> Posts --> Categories --> Add new category --> Name = Feedback --> Slug = feedback --> Add New Category*  

Add new Posts:  
*Dashboard --> Posts --> Add new --> Add title = Dreams come true --> Categories = Slider --> Publish*  
*Dashboard --> Posts --> Add new --> Add title = Goods for all tastes --> Categories = Slider --> Publish*  
*Dashboard --> Posts --> Add new --> Add title = Always with you --> Categories = Slider --> Publish*  
*Dashboard --> Posts --> Add new --> Add title = Product 1 --> Categories = Product line 1 --> Publish*  
...  
*Dashboard --> Posts --> Add new --> Add title = Product 9 --> Categories = Product line 2 --> Publish*  
...  
*Dashboard --> Posts --> Add new --> Add title = Feedback 3 --> Categories = Feedback --> Publish*  

Change the settings for permanent links:  
*Settings --> Permalinks --> Custom Structure = /%category%/%postname%/ --> Save changes*  

#### Sliders
Add to unordered list:  
```
// index.php
<ul class="glide__slides">/* inside this place the code below */</ul> 
<?php
  // default settings
  $posts = get_posts( array(
    'numberposts' => -1,
    'category_name' => 'slider',
    'orderby'     => 'date',
    'order'       => 'ASC',
    'post_type'   => 'post',
    'suppress_filters' => true, // suppression of SQL query change filters
  ) );
  foreach( $posts as $post ){
    setup_postdata($post);
      // the_title() output format
      ?>
        <li
          style="background-image: url('<?php echo bloginfo('template_url'); ?>/assets/img/bg_1.jpg')"
          class="glide__slide"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-7 offset-1">
                <h2 class="slider__title"><?php the_title() ?></h2>
                <a href="#" class="button">Learn more</a>
              </div>
            </div>
            <button
              class="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              <svg
                width="15"
                height="25"
                viewBox="0 0 15 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.982942 13.3923L12.2253 24.631C12.7186 25.123 13.5179 25.123 14.0124 24.631C14.5057 24.1389 14.5057 23.3397 14.0124 22.8476L3.66178 12.5007L14.0112 2.15378C14.5045 1.66172 14.5045 0.862477 14.0112 0.369169C13.5179 -0.122894 12.7174 -0.122894 12.2241 0.369169L0.981696 11.6077C0.495966 12.0947 0.495966 12.9065 0.982942 13.3923Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              class="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <svg
                width="15"
                height="25"
                viewBox="0 0 15 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0171 11.6077L2.77467 0.369029C2.28137 -0.123032 1.48213 -0.123032 0.987571 0.369029C0.494263 0.861093 0.494264 1.66033 0.987572 2.15239L11.3382 12.4993L0.98882 22.8462C0.495512 23.3383 0.495512 24.1375 0.98882 24.6308C1.48213 25.1229 2.28261 25.1229 2.77592 24.6308L14.0183 13.3923C14.504 12.9053 14.504 12.0935 14.0171 11.6077Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </li>
      <?php
    }
    wp_reset_postdata(); // reset
  ?>
```

*Dashboard --> Custom Fields --> Add New --> Add Title = Slider --> Location --> Show this field group if = Post Category + is equal to + Slider --> Add field --> Field Label = Slider image --> Field Name = slider_image --> Field Type = Image --> Required? = Yes --> Return Format = Image URL --> Publish*  

*Add field --> Field Label = Text Color --> Field Name = text_color --> Field Type = Radio Button --> Required? = Yes --> Choices = white, dark --> Update*  

*Add field --> Field Label = Button --> Field Name = slider_button --> Field Type = Radio Button --> Required? = Yes --> Choices = on, off --> Update*  

*Add field --> Field Label = Resource Link --> Field Name = resource_link --> Field Type = Text --> Required? = Yes --> Conditional Logic = Yes --> Show this field if = Button + Value is equal to + on --> Update*  

Change part of the previous code as follows:  
```
// index.php
<li
  style="background-image: url('<?php the_field('slider_image'); ?>')"
  class="glide__slide"
>
...
<div class="col-lg-7 offset-1">
  <h2
  style="
  <?php
    $field = get_field('text_color');
    if ($field == 'white') {
      ?>
        color: #fff
      <?php
    }
  ?>
  "
  class="slider__title"><?php the_title() ?></h2>
  <?php
    $field = get_field('slider_button');
    if ($field == 'on') {
      ?>
        <a href="<?php the_field('resource_link') ?>" class="button">Learn more</a>
      <?php
    }
  ?>
</div>
```

Fill in slides that we have with different parameters (on example of one of them):  

*Dashboard --> Posts --> Dreams Come True --> Add image --> Upload Image --> Select Files --> img/bg_1 --> Select --> Text Color = dark --> Button = on --> Resourse Link = https://github.com/sudexp/wordpress-tutorial --> Update*  

Remove all other code for static slides from index.php, you won't need it anymore - all sliders are displayed as posts dynamically.  

In the same way change feedback sliders at the bottom of the page.  

#### Products
*Dashboard --> Custrom fields --> Add Title = Products --> Location --> Show this field group if = Post Category + is equal to + Product line 1 --> Add rule group --> Show this field group if = Post Category + is equal to + Product line 2  --> Add field --> Field Label = Product Description --> Field Name = product_description --> Field Type = Text Area --> Required? = Yes --> Rows = 8 --> New Lines = Automatically add br --> Publish*  

Enabling support for post thumbnails:  
```
// functions.php
add_theme_support('post-thumbnails');

```

```
// index.php
<div class="products__wrapper">/*insert code below inside*/:</div>   
<?php
  // default settings
  $posts = get_posts( array(
    'numberposts' => -1,
    'category_name' => 'product_line_1',
    'orderby'     => 'date',
    'order'       => 'ASC',
    'post_type'   => 'post',
    'suppress_filters' => true, // suppression of SQL query change filters
  ) );
  foreach( $posts as $post ){
    setup_postdata($post);
      // the_title() output format
?>
<div
  class="products__item"
  style="background-image: url(<?php
  if (has_post_thumbnail()) {
    the_post_thumbnail_url();
  } else {
    echo get_template_directory_uri() . '/assets/img/not_found.png';
  }
  ?>)"
>
  <div class="products__item-info">
    <div class="products__item-title"><?php the_title(); ?></div>
    <div class="products__item-descr">
      <?php the_field('product_description') ?>
    </div>
    <div class="minibutton products__trigger">More details</div>
  </div>
</div>
<?php
  }
  wp_reset_postdata(); // reset
?>
```

Fill all products through the dashboard:  

*Dashboard --> Posts --> Product 1 --> Product Description = Erat imperdiet sed euismod nisi porta. Tempus urna et pharetra pharetra massa massa ultricies mi quis. --> Set featured  image --> Upload Files --> Select Files --> img/product_1.jpg --> Update*  

In the same way, dynamically change Product Line 2.  

Finally, remove unnecessary code with static products.  

### Working with forms
Install and activate *Contact Form 7* plugin:  

*Dashboard --> Plugins --> Add New = Contact Form 7 + Install Now + Activate*
*Dashboard --> Contact --> Contact Form 1 --> Title = Feedback form*

In the *Form* tab, replace the default code with this one:  
```
// Form
<label for="feedname">Your name<span>*</span></label>
<label for="feedtext">Your feedback<span>*</span></label>
<button class="minibutton">Send</button>
```

Click *text* and set the following values:  

*Field Type = Required*  
*Name = feedname*  
*Id attribute = feedname*  

Click *Insert Tag*.  

Click *text area* and set the following values:  

*Field Type = Required*  
*Name = feedtext*  
*Id attribute = feedtext*  

Click *Insert Tag*.  

If your form code should look like this, click *Save*:  
```
// Form
<label for="feedname">Your name<span>*</span></label>[text* feedname id:feedname]
<label for="feedtext">Your feedback<span>*</span></label>[textarea* feedtext id:feedtext]
<button class="minibutton">Send</button>
```

Click *Mail* tab and change the following fields:  

*Subject = Letter from the website "Company Portfolio Page"*
*Additional Headers = (empty)*

*Message Boody:*

```
From: [feedname]
Subject: Feedback

Message Body:
[feedtext]

--
This e-mail was sent from a contact form on Company Portfolio Page (http://localhost:8888/wordpress-tutorial)
```

*Use HTML content type = check*  

Save it and click the *Messages* edit messages used in various situations to your choice.  

Finally save all changes on the page using *Save* button in the upper right corner, copy shortcode and paste it into *index.php* instead of form with *class="contacts__feed"*:  

```
// index.php
<div class="contacts__feed">
  <?php echo do_shortcode('[contact-form-7 id="161" title="Feedback form"]'); ?>
</div>
```

Similarly, change the form of our tooltip.  

### Google Maps
Follow the [Google](https://developers.google.com/maps/documentation/embed/get-api-key) instructions to get API Key you need to activate Google Maps.

*Dashboard --> Plugins --> Add New = WP Google Maps + Install Now + Activate*  
*Dashboard --> Maps --> Skip intro and create a map*  

Insert your Api Key into the *Paste your API key here and press save:* field and press *Save* button. In the window that appears, click *My first map* to edit the map we need.  

On the *General Settings* tab, set the settings you prefer.  

In *index.php* file comment on the following code:  
```
// index.php
<!-- <div class="mapouter">
  <div class="gmap_canvas">
    <iframe
      width="550"
      height="350"
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=piippukatu%202%20jyv%C3%A4skyl%C3%A4&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"></iframe><a href="https://www.whatismyip-address.com"
      >whatismyip-address.com</a>
  </div>
</div> -->
```

And add another one instead:  
```
// index.php
<div>
  <?php echo do_shortcode('[wpgmza id="1"]') ?> // short code from plugin
</div>
```

Save the map settings and go to the site web-page. As you can see, the map appears, but immediately disappears, throwing an error. The fact is that Google maps have recently become paid and are not displayed with free API keys.  

I don't think the customer of our site will often have to change the company address, so I will return the static map code.  

### Transformation the project into a multi-page
In the root folder *my_theme*, create a folder called *templates*, where the following page templates will be created:
- page-contacts.php  
- page-history.php  
- page-products.php  
- page-team.php  

In *page-team.php* create the following code:  
```
// page-team.php
<?php
  /*
  Template Name: Our team
  */
?>

<?php
  get_header();
?>

// cut it from index.php and remove *id* (it's not necessary anymore)
<div class="specialists">
  <div class="container">
    <div class="title">Our team</div>
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <?php
          $image = get_field('team_image');
          if (!empty($image)): ?>
              <img
              src="<?php echo $image['url']; ?>"
              alt="<?php echo $image['alt']; ?>"
              class="specialists__img">
          <?php endif;
        ?>
      </div>
    </div>
  </div>
</div>

<?php
  get_footer();
?>
```

Similarly, fill in the contents of the other files, remembering to delete the corresponding *index.php* blocks, to keep it that way in the end:  
```
// index.php
<?php
  get_header();
?>
<div class="mainslider glide">
  // the contents of div here
</div>

<div class="about">
  // the contents of div here
</div>

<?php
  get_footer();
?>
```

Now let's start creating pages:  

*Dashboard --> Pages --> Add New --> Add Tittle = Our team --> Template --> Default template = Our team --> Publish*  
*Dashboard --> Pages --> Add New --> Add Tittle = Products --> Template --> Default template = Products --> Publish*  
*Dashboard --> Pages --> Add New --> Add Tittle = Our history --> Template --> Default template = Our history --> Publish*  
*Dashboard --> Pages --> Add New --> Add Tittle = Contacts and feedback --> Template --> Default template = Contacts and feedback --> Publish*  

Refresh Dashboard.  

*Dashboard --> Custom fields --> Our team --> Location --> change Main Page to Our Team --> Update*  
*Dashboard --> Custom fields --> Our history --> Location --> change Main Page to Our History --> Update*  
*Dashboard --> Custom fields --> Contacts --> Location --> change Main Page to Contacts and feedback --> Update*  

Re-fill the created pages with information, refresh [main page](http://localhost:8888/wordpress-tutorial/) and watch the changes. Also you can test pages [our team](http://localhost:8888/wordpress-tutorial/our-team/), [products](http://localhost:8888/wordpress-tutorial/products/), [our history](http://localhost:8888/wordpress-tutorial/our-history/), [contacts and feedback](http://localhost:8888/wordpress-tutorial/contacts-and-feedback/). So far there is no other way to check if the pages are working, except through URL, as navigation is not working at the moment.  

### Formation of dynamic navigation
Activate the navigation menus in *functions.php*:  
```
// functions.php
add_theme_support('menus');
```

Replace the contents of *nav class="row" data-slide="1"* with this:  
```
// header.php
<?php
  wp_nav_menu( [
    'menu'            => 'Main',
    'container'       => false,
    'menu_class'      => 'header__nav',
    'echo'            => true,
    'fallback_cb'     => 'wp_page_menu',
    'items_wrap'      => '<ul class="header__nav">%3$s</ul>',
    'depth'           => 1,
  ] );
?>
```

*Dashboard --> Appearance --> Customize --> Menus --> Create New Menu --> Menu Name = Main --> Next --> Add Items = Home + Our team + Products + Our history + Contacts and feedback*  

Configure each of the navigation menu items and place them in the desired order by dragging and dropping them and then press *Publish*.  

Now it is important to return a correct class attributes for normal display of navigation elements on the page.  
```
// functions.php
  // a hook to catch all the attributes of dynamic links
  add_filter('nav_menu_link_attributes', 'filter_nav_menu_link_attributes', 10, 3);
  function filter_nav_menu_link_attributes($atts, $item, $args) {
    if ($args->menu === 'Main') {
      $atts['class'] = 'header__nav-item';
      // activity class
      if ($item->current) {
        $atts['class'] .= ' header__nav-item-active'; // concat classes
      }
    }
    return $atts;
  }
```

### Displaying all single posts
Go to (https://underscores.me)[https://underscores.me], enter any name in *Field Name* and generate a template for the base theme.  
Copy *template-parts* folder and the *single.php* file from the topic to the *my_theme* directory.  

Change *single.php* to this:
```
// single.php
<?php
  get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
		<?php
		while ( have_posts() ) :
			the_post();
			get_template_part( 'template-parts/content', get_post_type() );
		endwhile; // End of the loop.
		?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
  get_footer();
?>
```

Check that a single post, for example [Product 1](http://localhost:8888/wordpress-tutorial/product_line_1/product-1/), is already displayed in browser.  

To display the content of an individual post correctly, edit *template/parts/content.php* as follows:  
```
// content.php
<div class="container products">
  <h2 class="subtitle"><?php the_title(); ?></h2>
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="entry-content">
      <?php
      the_content( sprintf(
        wp_kses(
          /* translators: %s: Name of current post. Only visible to screen readers */
          __( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'my_theme' ),
          array(
            'span' => array(
              'class' => array(),
            ),
          )
        ),
        get_the_title()
      ) );
      wp_link_pages( array(
        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'my_theme' ),
        'after'  => '</div>',
      ) );
      ?>
    </div><!-- .entry-content -->
  </article><!-- #post-<?php the_ID(); ?> -->
</div>
```

Edit posts with Dashboard editor:  
*Dashboard --> Posts --> Product 1 --> Add block = Image --> Upload --> Media Library --> product_1.jpg --> Select --> Align Center --> Update --> Add block --> Paragraph --> Add some text --> Update*  

Fill in the rest of products in the same way.  

To implement a widget of recommended products, change single post file as follows:  
```
// single.php
<?php
  get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
		<?php
		while ( have_posts() ) :
			the_post();
			get_template_part( 'template-parts/content', get_post_type() );
		endwhile; // End of the loop.
		?>
		</main><!-- #main -->
	</div><!-- #primary -->

    <div class="container products">
    <h2 class="subtitle">Maybe you will like it</h2>
    <div class="products__wrapper">
      <?php
        // default settings
        $posts = get_posts( array(
          'numberposts' => 3,
          'category_name' => 'product_line_1',
          'orderby'     => 'date',
          'order'       => 'ASC',
          'post_type'   => 'post',
          'suppress_filters' => true,
        ) );
        foreach( $posts as $post ){
          setup_postdata($post);
      ?>
      <div
        class="products__item"
        style="background-image: url(<?php
        if (has_post_thumbnail()) {
          the_post_thumbnail_url();
        } else {
          echo get_template_directory_uri() . '/assets/img/not_found.png';
        }
        ?>)"
      >
        <div class="products__item-info">
          <div class="products__item-title"><?php the_title(); ?></div>
          <div class="products__item-descr">
            <?php the_field('product_description') ?>
          </div>
          <div class="minibutton products__trigger">More details</div>
        </div>
      </div>
      <?php
        }
        wp_reset_postdata(); // reset
      ?>
    </div>
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="products__alert">
          <span>Didn't find what you are looking for?</span>
          <?php the_field('text_alert'); ?>
        </div>
      </div>
    </div>
  </div>

<?php
  get_footer();
?>
```

Now we will dynamically create a link to the product:  
```
// *page-products.php*, *single.php*
<div class="minibutton products__trigger>some text</div> // replace it with
<a href="<?php echo get_permalink(); ?>" class="minibutton products__trigger">More details</a>
```

Finally, add activity class for *Products* link in navigation menu when opening a particular item product. To do this, use print_r() function to *filter_nav_menu_link_attributes* function:  
```
// functions.php
function filter_nav_menu_link_attributes($atts, $item, $args) {
    if ($args->menu === 'Main') {
      $atts['class'] = 'header__nav-item';
      // activity class
      if ($item->current) {
        $atts['class'] .= ' header__nav-item-active'; // concat classes
      }
      print_r($item);
    }
    return $atts;
  }
```

And refresh your browser. Using *cmd + F* (Mac OS) or *ctrl + F* (Windows) search command, find the *[ID]* corresponding to *Products* (in my case, it is the second *ID=180*, as *Products* link is the second in order).  

Replace *print_r* function with the following code:  
```
// functions.php
if ( $item->ID === 180 && ( in_category( 'product_line_1' ) || in_category( 'product_line_2' ))){ // 180 = your ID
      $atts['class'] .= ' header__nav-item-active';
  }
```

### Final steps
Take a screenshot of the home page, name it *screenshot.png* and move it to the root directory *my_theme*. *WordPress* will automatically set theme appearance:  

*Dashboard --> Appearance --> Themes*  

There you can also create some *404.php* file to redirect users from non-existent paths to home page:  
```
// 404.php
<?php
  get_header();
?>

<div class="container products">
<div class="products__alert">There's no such page.</div>
  <h2 class="subtitle">
    <a href="<?php echo get_home_url(); ?>">
      <-- Go back
    </a>
  </h2>
</div>
```

