---
layout: post
title: "Migrating to Octopress 3"
date: 2015-07-15T16:49:51+02:00
---

I've decided to resurrect my blog site and start adding some more post to it. I have new laptop and needed to setup my development environment for that and I found out that [Octopress](http://octopress.org) was updated to version 3. So I needed to install ruby, update gems and upgrade my old blog post to new one.

With multiple tries and fails and after searching on the Internet here's the steps I should've taken right from the beginning.

## Remove old RMV
On Mac that was easy only this command:

	rvm implode
	
This command was removing directories and executable.

## Install Homebrew
[Homebrew](http://brew.sh/) is a package manager for Mac OS X. With it lots of useful tools can be installed, updated or removed on Mac. Homebrew installs packages into `/usr/local/` directory. This way it does not interfere with system tools, like gcc etc, and it's always easy to remove everything by just deleting installation directory without breaking anything in the system. Installation is easy too.

	ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

This will install `brew` executable.

## Install Ruby
Funny enough that to install Homebrew ruby was required, but luckily ruby is available by default on Mac OS X. But I wanted to newer version and I also wanted to be able to control which version will I use.

First I've installed `rbenv` - the tool to handle ruby environments.

	gem install rbenv ruby-build

`ruby-build` is a good companion for `rbenv`. It provides `rbenv install` command to compile and install different versions of Ruby. 

I needed to add one line to my `.bash_profile` file:

	echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
	source ~/.bash_profile

Now it's time to install and take in use the Ruby.

	rbenv install 2.2.2
	rbenv global 2.2.2
	ruby -v
	
This will install given ruby version and set it as active version on the system. Last line prints out the active ruby version, to ensure that installation went fine.

## Installing new Octropress gems
Now I needed to install Octopress gems to able to use it.

	gem install octopress octopress-deploy octopress-ink
	
This command will install all dependencies including [Jekyll](http://jekyllrb.com/). On top of main `octopress` gem, I've install also `octopress-deploy`, which provides `deploy` command and `octopress-ink` which should help build themes and plugins.

## Migrating old Octopress to version 3
I didn't found any tools which would help in this process, so I did it manually. I'm keeping my blogs source code on [GitHub](https://gitub.com) and hosting it on [GitHub Pages](https://pages.github.com/). GitHub Pages sites are stored in `NAME.gitbub.com`, where `NAME` is either user name or site name. Here's instruction how I've migrated my old blog.

### Check out the blog source
I've checked out my site from Github. I'm using [GibHub Mac](https://mac.github.com/) tool, so I've used the link on my repo site (there is equivalent tool for Windows). Blog source code is stored in `source` branch and in `master` branch is stored compiled blog, which is then published by GitHub Pages. So during check out need to select correct branch, which is `source`.

### Backup old blog
I've made a copy of my entire directory

	cp -r NAME.github.com archive-NAME.github.com

### Clean the source directory
I've decided to use Octopress `init site` command to initialise my blog, so I've removed from source directory `NAME.github.com` all files and directories except `.git` and `.gitignore`.

### Initialise the blog site
Now I was initialising my blog, by executing following command (it needs to be executed in the directory were `NAME.github.com` project is located):

	octopress new NAME.github.com

This will create initial structure of Octopress blog. Then I changed to project (`NAME.github.com`) directory and executed all other commands there. 

Now new project need to be compile with following command:

	jekyll build

and it can be tested locally with following command (it builds the project before):
	
	jekyll serve

Open `http://127.0.0.1:4000` in the browser to test new site.

### Copy old posts
In Octopress 3 project structure was changed. If in previous versions source of post and pages were stored in `source` directory. In new version the are stored directly in the project root directory. I was just copying all my old posts from archived project's `source/_posts` folder to new project's `_posts` folder. I had some images stored in `source/images` directory. I was just copying entire directory to my new project root directory. As well as `favicon.png` from old project `source` folder to new project root.

### Commit source to GitHub
Since I've kept `.git` directory, I preserved my GitHub settings for this project and don't need to initialise git repository. I only needed to add new files, commit changes and push new version to GitHub. But before I need to make sure that I commit code to `source` branch.

	git branch -m source
	git add .
	git commit -m 'Migrating to Octopress 3'

### Push source to GitHub
As I've mentioned before I preserved my GitHub configuration, so didn't needed to setup remote location, but was able to push my changes to GitHub with the following command:

	git push origin source

That was pushing my local changes to GitHub into project's `source` branch.

### Deploying the site to GitHub Pages
To be able to publish my blog on GitHub Pages I needed to create deployment configurations. This is where `octopress-deploy` come to play. 

I did this step wrong first time. I was just using instructions, what I've found on the Internet. But they are good for new blogs, but for my case they weren't. For me initialisation was going fine, but deployment was failing with `Access denied` error. The reason was wrongly configured GitHub URL. Solved it by using URL, which I found from my `.git/config` file in my project directory in the section `[remote "origin"]`.

So I should've done deployment initialisation with following command:

	octopress deploy init git https://github.com/NAME/NAME.github.com.git

After that I needed to add `_deploy.yml` to my `.gitignore` file.

Then actually deployment is easy:
	
	octopress deploy

Just need to remember to build the site after changes with but before deployment:
	
	jekyll build

That concluded my trip in migrating my Octopress blog to new version.
