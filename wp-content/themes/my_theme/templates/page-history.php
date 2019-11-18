<?php
  /*
  Template Name: Our History
  */
?>

<?php
  get_header();
?>

<div class="aboutus">
  <div class="container">
    <h1 class="title">Our history</h1>
    <div class="row">
      <div class="col-lg-6">
        <div class="subtitle">
          <?php the_field('title_1'); ?>
        </div>
        <div class="aboutus__text">
          <?php the_field('description_1'); ?>
        </div>
      </div>
      <div class="col-lg-6">
        <!-- <?php
          $image = get_field('image_1');
          if (!empty($image)): ?>
            <img
            src="<?php echo $image['url']; ?>"
            alt="<?php echo $image['alt']; ?>">
          <?php endif;
        ?> -->
        <img class="aboutus__img" src="<?php the_field('image_1'); ?>" alt="about us">
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <img class="aboutus__img" src="<?php the_field('image_2'); ?>" alt="about us">
      </div>
      <div class="col-lg-6">
        <div class="subtitle">
          <?php the_field('title_2'); ?>
        </div>
        <div class="aboutus__text">
          <?php the_field('description_2'); ?>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="subtitle">
          <?php the_field('title_2'); ?>
        </div>
        <div class="aboutus__text">
          <?php the_field('description_3'); ?>
        </div>
      </div>
      <div class="col-lg-6">
        <img class="aboutus__img" src="<?php the_field('image_3'); ?>" alt="about us">
      </div>
    </div>
  </div>
</div>

<?php
  get_footer();
?>