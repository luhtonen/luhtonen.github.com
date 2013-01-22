---
layout: post
title: "How to check AIX version and other useful information"
date: 2013-01-22 19:22
comments: true
categories: [AIX, Unix]
---
I was sending technical request to our support team and needed to find out what is a version of operating system. I've been working with many different Unix/Linux flavors and always used ```uname -a```. I was surpised to find out that on AIX this command shows OS version only with 1 digit. 

I've already noticed that since AIX default shell is KSH, some things are done differently on it. After a brief research I've found command which would produce information I needed: ```oslevel```.
```
> oslevel -g
Fileset                                 Actual Level        Maintenance Level
-----------------------------------------------------------------------------
bos.rte                                 7.1.1.16            7.1.0.0
```

In IBM's [AIX 7.1 Information Center](http://pic.dhe.ibm.com/infocenter/aix/v7r1/index.jsp?topic=%2Fcom.ibm.aix.cmds%2Fdoc%2Faixcmds4%2Foslevel.htm) can find more information about this command and many other.