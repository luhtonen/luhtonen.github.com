---
layout: post
title: "How to Remove RVM From Mac"
date: 2015-07-15T16:59:42+02:00
---

I was updating my ruby environment and wanted to completely remove the old installation, so I wanted to remove rvm and all references to gems stored with it. It turned out that it is very easy. I needed only run 1 command:

	rvm implode
	
This command was removing directories and executable.
The command was also suggesting to remove `/etc/rvm` and `~/.rvm` folders, as well as remove `rvm` group. But I didn't found them on my laptop. So that was it for me.