<?php
  /*
  Template Name: Products
  */
?>

<?php
  get_header();
?>

<div class="products">
  <div class="container">
    <h2 class="subtitle">Product line 1</h2>
    <div class="products__wrapper">
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
          <a href="<?php echo get_permalink(); ?>" class="minibutton products__trigger">More details</a>
        </div>
      </div>
      <?php
        }
        wp_reset_postdata(); // reset
      ?>
    </div>
    <h2 class="subtitle">Product line 2</h2>
    <div class="products__wrapper">
      <?php
        // default settings 
        $posts = get_posts( array(
          'numberposts' => -1,
          'category_name' => 'product_line_2',
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
          <a href="<?php echo get_permalink(); ?>" class="minibutton products__trigger">More details</a>
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
</div>

<?php
  get_footer();
?>