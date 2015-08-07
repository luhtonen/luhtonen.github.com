---
layout: post
title: "Change Git Protocol to HTTP/HTTPS"
date: 2015-08-07T15:53:32+02:00
---

By default `git` uses `git` protocol, which is utilising specific port for communcation between client and server. In some networks this port might be closed and cannot be used to pull or push git commits. 

This problem can be solved by changing protocol for git push/pull requests. To switch to `HTTPS` protocol use following command:

	git config --global url."https://".insteadOf git://
	
To switch to `HTTP` protocol command is similar, but protocol is different:

	git config --global url."http://".insteadOf git://