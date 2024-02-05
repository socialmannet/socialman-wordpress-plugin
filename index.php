<?php

/**
 * @package Socialman
 */
/*
  Plugin Name: Socialman
  Plugin URI: https://socialman.net
  Description: Add Socialman giveaway widget for your website.
  Version: 1.2.4
  Author: Socialman
  License: GPLv2 or later
 */
function socialman_add_shortcode($atts, $content = null) {
    $args = shortcode_atts(array('url' => null), $atts);
    if (empty($args['url'])) {
        return __('Socialman url is missing', 'socialman');
    }
    $url_parts = parse_url($args['url']);
    if (($url_parts['host'] !== 'socialman.net') || (strpos($url_parts['path'], '/c/') === false)) {
        return __('Not a valid Socialman url', 'socialman');
    }
    $hash = str_replace('/c/', '', $url_parts['path']);
    $hash = str_replace('/', '', $hash);
    return sprintf('<a href="https://socialman.net" id="socialwidget" data-ref="%s" class="srfl">%s</a>
                    <script src="https://socialman.net/widget/get.js"></script>', $hash, __('Giveaway', 'socialman'), do_shortcode($content));
}

function socialman_init() {
    if (function_exists('register_block_type')) {
        wp_register_script(
                'socialman-widget-block', plugin_dir_url( __FILE__ ) . 'public/js/socialman.js', array('wp-blocks', 'wp-i18n', 'wp-element'), '1.1', true
        );
        register_block_type('socialman/widget', array(
            'editor_script' => 'socialman-widget-block',
            'render_callback' => 'socialman_add_shortcode',
            'attributes' => array(
                'url' => array(
                    'type' => 'string'
                ))
        ));
    }
    add_shortcode('socialman', 'socialman_add_shortcode');
}
add_action('init', 'socialman_init');
