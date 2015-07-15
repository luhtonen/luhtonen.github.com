---
layout: post
title: "How to contribute to existing Octopress blog from other computer (Windows)"
date: 2013-03-14 13:42
comments: true
categories: [Octopress, blog, GitHub, Windows]
---
I've created my blog from my home Mac, but sometimes I wanted to add some brief posts from the work Windows computer, when thing I wanted to add is still fresh in my memory. I was wondering how can I do it? I found helpful article from [dBlog.org](http://code.dblock.org/octopress-setting-up-a-blog-and-contributing-to-an-existing-one). Last part was particularly helpful, but those instructions are for Linux/Unix/Mac users and didn't worked for me right away, but I have to do some extra steps.

## Install Ruby for Windows ##
First need to install ruby. I've used [RubyInstaller for Windows](http://rubyinstaller.org/) to install latest version. This is pretty streight forward and shouldn't cause any problems.

## Install GitHub for Windows ##
It is possible to install just git, but I've encountered some problems with connection to GitHub: ```Permission denied (publickey)```. Of cause it possible to generate this key using openssh and add it to your GitHub account's key list. But I dicided to use native [GitHub for Windows](http://windows.github.com/), which handled all this issues for me automatically.

1. Download and install GitHub for Windows
2. Start GitHub and login using your GitHub account
3. Set your username and email: select *tools* > *options...*, under '*git configuration*' check that your *username* and *email* are correct
4. Define where your projects will be cloned, select *tools* > *options...* and change '*default storage directory*' to one you prefer. I've used default, so for me it is optional step
5. Define what shell you'll prefer to use: select *tools* > *options...* and select one you prefer from '*default shell*' list. I've tried *PowerShell* first, but there was some problems with it, so I switched to *Git Bash*.

## Clone your blog from GitHub ##
I've started cloning from GitHub Windows app and then switched to shell.

1. From left panel in GitHub app select your account under *github* section
2. Select your blog repository and click *clone*
3. When clone is complete select *open this repo*
4. Start shell by selecting *tools* > *open a shell here*
5. From this step on everything will be done in shell. First all required ruby gems need to be installed: ```bundle install```
6. From here I've followed instructions from [dBlog.org](http://code.dblock.org/octopress-setting-up-a-blog-and-contributing-to-an-existing-one) article's last part except cloning, since it was already done:
<pre>
username.github.com$ git checkout source
username.github.com$ mkdir _deploy
username.github.com$ cd _deploy
username.github.com/_deploy$ git init
username.github.com/_deploy$ git remote add origin git@github.com:username/username.github.com.git
username.github.com/_deploy$ git pull origin master
username.github.com/_deploy$ cd ..
username.github.com$
</pre>

## Creating new post ##
Now I was ready to post my new post and I did it as following:

1. `rake new_post["Post Title"]`
2. edit post, I'm using [MarkdownPad for Windows](http://markdownpad.com/)
3. `rake generate`
4. `rake deploy`
5. `git add .`
6. `git commit -m 'some comments'`
7. `git push origin source`
