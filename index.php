<?php

$EXT = strrchr($_SERVER['HTTP_HOST'], '.');

$LANG = [
    '.fr' => 'fr',
    '.com' => 'en'
][$EXT];

$GA = [
    '.fr' => 'UA-36408133-1',
    '.com' => 'UA-36408133-2'
][$EXT];

require 'bower_components/php-markdown/Michelf/MarkdownExtra.inc.php';
$CONTENT = \Michelf\MarkdownExtra::defaultTransform(file_get_contents("resume.$LANG.md"));

?><!doctype html>
<html lang="<?php echo $LANG; ?>">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
            content="width=device-width, initial-scale=1">
        <title>Joan Rieu</title>
        <link rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700">
        <link rel="stylesheet"
            href="style.min.css">
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', '<?php echo $GA; ?>', 'auto');
            ga('send', 'pageview');
        </script>
        <script type="application/ld+json">
            {
                "@context" : "http://schema.org",
                "@type" : "Person",
                "name" : "Joan Rieu",
                "givenName": "Joan",
                "familyName": "Rieu",
                "url" : "http://joanrieu.com",
                "sameAs" : [
                    "http://joanrieu.fr",
                    "https://www.linkedin.com/in/joanrieu",
                    "https://github.com/joanrieu",
                    "https://twitter.com/joanrieu",
                    "https://plus.google.com/+JoanRieu",
                    "https://www.facebook.com/jrieu"
                ]
            }
        </script>
    </head>
    <body>
        <article>
            <?php echo $CONTENT; ?>
        </article>
    </body>
</html>
