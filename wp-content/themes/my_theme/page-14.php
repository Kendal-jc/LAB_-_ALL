<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Astra
 * @since 1.0.0
 */

    if (!defined('ABSPATH')) {
        exit;
}

get_header(); ?>
    <?php if (astra_page_layout ( ) == 'left-sidebar'): ?>
    <?php get_sidebar(); ?>
<?php endif ?>

<div id="primary" <?php astra_primary_class(); ?>>
    <?php
        astra_primary_content_top();

        $paged = get_query_var('pg');
$args = [
    'post_type' => 'sobre-mi', 
    'post_per_page' => 10,
    'paged' => $paged,
];

$query = new WP_Query($args);
?>
<div>
    <ul>
    <?php
        while ($query->have_posts()) {
            $query->the_post();
        global $post;
    ?>
    <li class="card">
        
        <a href="<?php echo get_the_permalink()?>">
        <?php echo get_the_post_thumbnail($post->ID);?>
            <div>
                <h2 >
                    <br>
                    <br>
                    <br>
                     <?php echo get_the_title(); ?>
                </h2>
            </div>
        </a>
    </li>
    <?php
    }
    ?>
    <div>
        <ul>
        <?php
            echo paginate_links(
                array(
                     ' total' => $query->max_num_pages,
                     ' current' => $paged,
                     ' prev_text' => '&raquo; Anterior',
                     ' next_text' => 'Siguiente &raquo;',

                )
            )
            ?>
        </ul>
    </div>
    <?php
      wp_reset_postdata()
    ?>
 </ul>
</div>

<?php
    if (astra_page_layout()== ' right-sibedar'):
         get_sidebar();
    endif;
get_footer();