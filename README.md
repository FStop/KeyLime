## KeyLime

KeyLime is a simple yet tangy WordPress starter theme, based on the wonderful _s or underscores theme by Automattic.

### Notes

I made this theme to scratch an itch, and thought it might be useful for others. A good starter theme is invaluable for any WordPress developer.

I used [Bones](https://github.com/eddiemachado/bones) for a long time and loved it. But as my WordPress and dev skills in general evolved, I began to realize I wanted something that wasn't quite as developed out of the box. I found myself removing a lot of things from Bones every time. I also wanted something that was coded the WordPress Way<sup>™</up>.

The [Underscores](http://underscores.me) theme fits that bill perfectly. It's built by Automattic, so you know the code is tight and well maintained. But Underscores is just a bit too "blank" for me to start a project with. There are things I like to use on every project like SASS, Compass, Modernizr, a CSS grid system, etc., that aren't included in Underscores. So I figured, why not take Underscores and sprinkle a little sugar on it?

So KeyLime was born. Like Underscores, this theme is meant to be a starting point. Take it and hack away at it. Delete stuff you don't need, add stuff that you like. Fork it. Submit issues and pull requests if you want to make it more awesome.

#### modernizr
A custom build of [modernizr](http://modernizr.com/download/#-fontface-flexbox-flexboxlegacy-multiplebgs-rgba-csscolumns-generatedcontent-cssgradients-inlinesvg-svg-svgclippaths-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-css_backgroundposition_xy-css_backgroundsizecover-css_boxsizing-css_calc-css_vhunit-css_vmaxunit-css_vminunit-css_vwunit-load) is included. The URL will take you to the modenizr site, with the custom build that included here all set up, automagically. That way you can see what's included, maybe even tweak it to your liking (hint-hint), and I don't have to list it all out here.

**I highly recommend generating your own build, containing *only* the items you need to detect.** As you might expect, the more features you detect, the bigger the file size of your modernizr build. But another consideration is that each feature that is detected requires running some sort of test before the page loads. If you're at all concerned with performance (and honestly if you're not concerned about performance, you should be doing something other than building websites), you want to load as few tests as possible.

#### SASS & Compass
I like SASS & Compass. I can't really imagine going to to writing vanilla CSS ever again. I won't get into hows or whys regarding CSS preprocessors here. The Googles can tell you everything you need to know about that. If you like SASS & Compass too, you're all set. If you want to change the way it's set up here, go for it. If you don't want to use it at all, just edit the style.css file directly, and feel free to delete the `library/scss` folder.

#### Susy Grids
I've experimented with many different solutions for CSS grids, and my favorite by far has been the [Susy](http://susy.oddbird.net) Compass plugin. I really, really enjoy not needing to use any HTML classes whatsoever to define my grids, That's right, with the power of SASS & Compass, you can have a robust, powerful, and extremely flexible CSS grid system that is entirely decoupled from the HTML markup, and yes it is wonderful, especially for responsive design. I'm using the latest, pre release '[Susy Next](https://github.com/ericam/susy/tree/susy-next)' version. It's got some [neat features](http://oddbird.net/2013/09/05/susy-alpha-4/). For simplicty, I'm including it by importing the .scss files, rather than as a Compass plugin dependency defined in `config.rb`. This way you can use it right out of the box.
