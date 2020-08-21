<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'saarbakt' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '17GD}gjYB0-V=f,9~sBIzAcE(pF1MR-6:}<2TdcYLY2v 9D94Km=:3uW|l/$EL^d');
define('SECURE_AUTH_KEY',  'dA+Cg~ujH>{L8r%U HZ4,hm[02,msxK[e!s%+.3JjC=B+X(@##5|>$RyGCK5I(9 ');
define('LOGGED_IN_KEY',    'e,<)^)96m.So3[z8?vDWte1<x|?+T|A{~6IOxg~PXNLcqPhMjgv]:Ne9|/c+On@w');
define('NONCE_KEY',        '))P?.4+_nwAvk:GxfjX6B=!Fp(x[xUIv*+#5N+}YisT^C]2p2Ym^5`V2bOe9wLHv');
define('AUTH_SALT',        'gjxueiL9)ko5a}.-Lw[U~d++ X2,#g|k?,g-iKe8dyb{x9SE|pk-J6@[?ZtK+)q:');
define('SECURE_AUTH_SALT', 'Q%YEg r_,L`w4DZO1.W+gK&yx|FyQV%<UW)<fQh^F~J+!7n)4U{GjJ^CE+I+TBnu');
define('LOGGED_IN_SALT',   '^!kY^:3%,XipR94$D+}$huJ~=G=mo53j8kK6mkJI(`-Qz>Ox<lP> -lJK{SB]BWC');
define('NONCE_SALT',       ')8-v|>ocLd/U|+g25M as)$@eG)womGpO`oo.{ShZ,JM`f4s68}lq)_u]I>~2?-l');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

// update_option( 'siteurl', 'http://saarbakt.nl.test' );
// update_option( 'home', 'http://saarbakt.nl.test' );