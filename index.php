<?php
/**
 * @package Socialman
 */
/*
  Plugin Name: Socialman
  Plugin URI: https://socialman.net
  Description: Add Socialman giveaway widget to your website.
  Version: 1.0
  Author: Socialman
  License: GPLv2 or later
 */
add_shortcode('socialman', function($atts, $content = null) {
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
    return sprintf('<a href="https://widget.socialman.net" id="socialwidget" data-ref="%s" class="srfl">%s</a>
                    <script src="//widget.socialman.net/get.js"></script>', $hash, __('Giveaway', 'socialman'), do_shortcode($content));
});