## KeyLime

KeyLime is a simple yet tangy WordPress starter theme, based on the wonderful _s or underscores theme by Automattic.

### Notes

I made this theme to scratch an itch, and thought it might be useful for others. A good starter theme is invaluable for any WordPress developer.

I used [Bones](https://github.com/eddiemachado/bones) for a long time and loved it. But as my WordPress and dev skills in general evolved, I began to realize I wanted something that wasn't quite as developed out of the box. I found myself removing a lot of things from Bones ever time. I also wanted something that was coded the WordPress Way<sup>™</up>.

The [Underscores](http://underscores.me) theme fits that bill perfectly. It's built by Automattic, so you know the code is tight and well maintained. But Underscores is just a bit too "blank" for me to start with every time. There are things I like to use on every project like SASS, Compass, Modernizr, a CSS grid system, etc., that aren't included in Underscores. So I figured, why not take Underscores and sprinkle a little sugar on it?

So KeyLime was born. Like Underscores, this theme is meant to be a starting point. Take it and hack away at it. Delete stuff you don't need, add stuff that you like. Fork it. Submit issues and pull requests if you want to make it more awesome.

#### SASS & Compass
I like SASS & Compass. I can't really imagine going to to writing vanilla CSS ever again. I won't get into hows or whys regarding CSS preprocessors here. The Googles can tell you everything you need to know about that. If you like SASS & Compass too, you're all set. If you want to change the way it's set up here, go for it. If you don't want to use it at all, just edit the style.css file directly, and feel free to delete the `library/scss` folder. 

#### modernizr
A custom build of [modernizr](http://modernizr.com/download/#-fontface-flexbox-flexboxlegacy-multiplebgs-rgba-csscolumns-generatedcontent-cssgradients-inlinesvg-svg-svgclippaths-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-css_backgroundposition_xy-css_backgroundsizecover-css_boxsizing-css_calc-css_vhunit-css_vmaxunit-css_vminunit-css_vwunit-load) is included. The URL above will show you which features this build is set up to detect, and allow you to generate your own custom build.

**I highly recommend generating your own build, containing *only* the items you need to detect.** As you might expect, the more features you detect, the bigger the file size of your modernizr build. But another consideration is that each feature that is detected requires running some sort of test before the page loads. If you're at all concerned with performance (and honestly if you're not concerned about performance, you should be doing something other than building websites), you want to load as few tests as possible.