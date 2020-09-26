<section class="menu-wrapper">
	<div id="nav-toggle" class="nav-toggle mobile">
		<span class="line"></span>
		<span class="line"></span>
		<span class="line"></span>
	</div>

	<nav id="menu" class="nav">
		<?php wp_nav_menu( array( 'container_class' => 'main-nav', 'theme_location' => 'headerMenuLocation', 'depth' => 2 ) ); ?>
	</nav>
</section>