---
layout: post
title: "Blogging with Octopress on GitHub"
date: 2013-01-09 09:51
comments: true
categories: blogging octopress github
---
This post is just a reminder to myself, how to publish new posts to my blog.

1. `rake new_post["Post Title"]`
2. edit post
3. `rake generate`
4. `rake deploy`
5. `git add .`
6. `git commit -m 'some comments'`
7. `git push origin source`

Step 1: creates new post

Step 3: generate blog post from the source

Step 4: deploy generated post to blog hosted on GitHub

Step 5: add new post to version control

Step 6: commit changes to local repository

Step 7: push source to GitHub