<?php


//rename the name of posts for admin, reason? Users get confused.

function change_post_menu_label() {
    global $menu;
    global $submenu;
    $menu[5][0] = 'Contacts';
    $submenu['edit.php'][5][0] = 'Contacts';
    $submenu['edit.php'][10][0] = 'Add Contacts';
    $submenu['edit.php'][15][0] = 'Status'; // Change name for categories
    $submenu['edit.php'][16][0] = 'Labels'; // Change name for tags
    echo '';
}

function change_post_object_label() {
        global $wp_post_types;
        $labels = &$wp_post_types['post']->labels;
        $labels->name = 'Contacts';
        $labels->singular_name = 'Contact';
        $labels->add_new = 'Add Contact';
        $labels->add_new_item = 'Add Contact';
        $labels->edit_item = 'Edit Contacts';
        $labels->new_item = 'Contact';
        $labels->view_item = 'View Contact';
        $labels->search_items = 'Search Contacts';
        $labels->not_found = 'No Contacts found';
        $labels->not_found_in_trash = 'No Contacts found in Trash';
    }
    add_action( 'init', 'change_post_object_label' );
    add_action( 'admin_menu', 'change_post_menu_label' );
