---
layout: post
title: "sbt Error: URI had an athority component"
date: 2015-07-17T12:32:18+02:00
---
This error happened to me several times, but only on Windows. The error looks like that:

	> sbt
    java.lang.IllegalArgumentException: URI has an authority component
    ...
 
I've omitted rest of the exception. Most important is the message `URI has an authority component`.

After a search on the Internet I found at that the error is related to misconfigured pass in sbt local configuration file. To fix it need to edit `repositories` file which is located in Windows user home directory, in my case it was located in `C:\Users\[USER]\.sbt\` directory.

In this file need to search for string `file://` and replace it with `file:///`. I had 2 entries, which I needed to fix. 

Old file:
	
	[repositories]
  	  local
  	  activator-launcher-local: file://${activator.local.repository-${activator.home-/doesnotexist}/repository}, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext]
  	  activator-local: file://${activator.local.repository-/usr/local/Cellar/typesafe-activator/1.3.2/libexec/repository}, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext]
	  maven-central
	  typesafe-releases: http://repo.typesafe.com/typesafe/releases
	  typesafe-ivy-releasez: http://repo.typesafe.com/typesafe/ivy-releases, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext]
  
 
New should look like this:

	[repositories]
  	  local
  	  activator-launcher-local: file:///${activator.local.repository-${activator.home-/doesnotexist}/repository}, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext]
  	  activator-local: file:///${activator.local.repository-/usr/local/Cellar/typesafe-activator/1.3.2/libexec/repository}, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext]
	  maven-central
	  typesafe-releases: http://repo.typesafe.com/typesafe/releases
	  typesafe-ivy-releasez: http://repo.typesafe.com/typesafe/ivy-releases, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext]


I never encountered similar problem on Mac and didn't needed to change my configuration there. This happens only on Windows.