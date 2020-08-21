<section class="menu-wrapper">
	<div id="nav-toggle" class="nav-toggle mobile">
		<span class="line"></span>
		<span class="line"></span>
		<span class="line"></span>
	</div>

	<div id="search-toggle mobile">
		<i class="fas fa-search"></i>
	</div>

	<nav id="menu" class="nav">
		<?php wp_nav_menu( array( 'container_class' => 'main-nav', 'theme_location' => 'headerMenuLocation', 'depth' => 2 ) ); ?>
		<i class="fas fa-search" id="search__trigger"></i>
	</nav>
</section>