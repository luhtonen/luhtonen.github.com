---
layout: post
title: "Draft - New Octopress Feature"
date: 2015-07-15T21:23:10+02:00
---

In new Octopress version 3 is some new useful features. One of the is *Draft*. At least I was not using anything like that before. When I started to write my first post for new Octopress, I wanted to write another very short post before finishing my first much larger post. Later I realised that I should've used this *draft* feature along with `publish` and `unpublish` commands.

So decided to experiment with this feature and created this new post first as a *draft*.

	octopress new draft "Draft - new Octopress feature"
	open _drafts/draft-new-octopress-feature.markdown
	(edit the draft)
	octopress publish _drafts/draft-new-octopress-feature.markdown 
	Published: _drafts/draft-new-octopress-feature.markdown → _posts/2015-07-15-draft-new-octopress-feature.markdown
	git add .
	git commit -m "adding new post"
	git push origin source
	jekyll build
	octopress deploy
	
1. Create a draft. Octopress creates new draft from template in `_drafts` directory.
2. Open newly created draft for editing.
3. Edit the draft.
4. When draft is ready, publish it .
5. Octopress moves draft into `_posts` directory and adds timestamp to the post file name.
6. Add new files to `git`.
7. Commit changes.
8. Build the blog.
9. Deploy update project.

Post can be converted into draft with `unpublish` command:
	
	octopress unpublish _posts/2015-07-15-draft-new-octopress-feature.markdown
	Unpublished: _posts/2015-07-15-draft-new-octopress-feature.markdown → _drafts/draft-new-octopress-feature.markdown
	
Octopress renames the post by removing timestamp from the name and moves file from `_posts` directory to `_drafts`.

This is very useful when writing long post or when the post writing is interruped otherwise. Work still can be committed and pushed to git without publishing the post yet.

Unfortunately there is no direct way to test the draft locally. Only way to test the draft is to publish it, test and then unpublish again to continue work on it.