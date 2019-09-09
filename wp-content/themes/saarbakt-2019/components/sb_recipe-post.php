<article class="sb-recipe-post">
	<h5><a href="<?= get_the_permalink() ?>"><?= get_the_title() ?></a></h5>
	<a class="photo" href="<?= get_the_permalink() ?>"><img src="<?= get_the_post_thumbnail_url(null, 'image-mobile') ?>" alt="<?= get_the_title() ?>" /></a>
	<div class="content"><?= wp_trim_words(get_the_content(), 70) ?></div>
	<a href="<?= get_the_permalink() ?>" class="btn"><span>Lees meer</span></a>
</article>