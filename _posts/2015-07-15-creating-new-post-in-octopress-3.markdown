---
layout: post
title: "Creating New Post in Octopress 3"
date: 2015-07-15T20:53:22+02:00
---

This is a remainder for myself how to create new post with new [Octopress 3](http://octopress.org/).

	octopress new post "post title"
	open _posts/<timestamp>-post-title.markdown
	(edit post)
	git add .
	git commit -m "adding new post"
	git push origin source
	jekyll build
	octopress deploy
	
1. Create new post stub with given title `post title`. Octopress creates new [Markdown](http://daringfireball.net/projects/markdown/) file.
2. Open new post for edit. On my Mac `.markdown` files are assosiated with [MacDown](http://macdown.uranusjr.com/) - Open source Markdown editor for OS X.
3. Edit the post and save the changes.
4. Add new file to git.
5. Commit changes to git.
6. Deploy post source code to GitHub project's `source` branch.
7. Build the blog using [Jekyll](http://jekyllrb.com/)
8. Deploy the blog with [Octopress Deploy](https://github.com/octopress/deploy) - `octopress-deploy` gem.