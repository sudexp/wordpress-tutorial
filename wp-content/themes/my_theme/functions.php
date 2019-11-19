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
    wp_enqueue_script('my_scripts', get_template_directory_uri() . '/assets/js/main.min.js', array(), null, true);
  }

  // the ability to add a logo to Dashboard
  add_theme_support('custom-logo');
  // enabling support for Post Thumbnails
  add_theme_support('post-thumbnails');
  // activate menus
  add_theme_support('menus');

  // a hook to catch all the attributes of dynamic links
  add_filter('nav_menu_link_attributes', 'filter_nav_menu_link_attributes', 10, 3);
  function filter_nav_menu_link_attributes($atts, $item, $args) {
    if ($args->menu === 'Main') {
      $atts['class'] = 'header__nav-item';
      // activity class
      if ($item->current) {
        $atts['class'] .= ' header__nav-item-active'; // concat classes
      }
      // print_r($item);
      if ( $item->ID === 180 && ( in_category( 'product_line_1' ) || in_category( 'product_line_2' ))){
            $atts['class'] .= ' header__nav-item-active';
        }
    }
    return $atts;
  }
?>