<article class="sb-news-post">
	<h5><a href="<?= get_the_permalink() ?>"><?= get_the_title() ?></a></h5>
	<div><?= wp_trim_words(get_the_content(), 100)?></div>
	<a href="<?= get_the_permalink() ?>" class="btn"><span>Lees meer</span></a>
</article>