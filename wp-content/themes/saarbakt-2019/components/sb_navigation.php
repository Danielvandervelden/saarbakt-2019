<div id="sb-nav-toggle" class="sb-nav-toggle">
	<span class="line"></span>
	<span class="line"></span>
	<span class="line"></span>
</div>

<div id="sb-back-toggle">
	<i class="fas fa-arrow-left"></i>
</div>

<div id="sb-menu" class="sb-nav">
	<?php wp_nav_menu( array( 'container_class' => 'main-nav', 'theme_location' => 'headerMenuLocation', 'depth' => 2 ) ); ?>
	<i class="fas fa-search" id="search__trigger"></i>
</div>