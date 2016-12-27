
<!-- 
Create wordpress user 
add the following snippet in your functions.php file
 -->
function add_admin_acct(){
    $login = 'user_name';
    $passw = 'secure_password';
    $email = 'email@domain.com';

    if ( !username_exists( $login )  && !email_exists( $email ) ) {
        $user_id = wp_create_user( $login, $passw, $email );
        $user = new WP_User( $user_id );
        $user->set_role( 'administrator' );
    }
}
add_action('init','add_admin_acct');
