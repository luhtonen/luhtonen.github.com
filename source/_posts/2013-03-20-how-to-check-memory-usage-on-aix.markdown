---
layout: post
title: "How to check memory usage on AIX"
date: 2013-03-20 11:31
comments: true
categories: [AIX, Unix]
---
AIX suppose to be Unix system, but there is lots of things are done very differently from other Unix systems. I needed to check memory usage on AIX machine, but didn't found well-known command ```free```. After quick research on Web I found AIX own command: ```svmon```. To get global information about memory usage only required option is ```-G```.
<pre>
> svmon -G
               size       inuse        free         pin     virtual   mmode
memory      1003520     1000352        3168      466861     1468212     Ded
pg space    2097152      829774

               work        pers        clnt       other
pin          435310           0           0       31551
in use       901152           0       99200

PageSize   PoolSize       inuse        pgsp         pin     virtual
s    4 KB         -      276720      252814       67101      409300
m   64 KB         -       45227       36060       24985       66182
</pre>

#### List installed software on AIX ####
```lslpp``` is the tool to list installed softwares on AIX. 2 switchs are more useful:
<pre>
-h
        Displays the installation and update history information for the 
        specified fileset. You cannot use this flag with the -J flag.

-L
        Displays the name, most recent level, state, and a description of 
        the specified fileset. The build date, which is specified by the 
        year and the week in the form of yyww (for example, 0852), is also 
        displayed for a fileset, if it has one. Part information (usr, 
        root, and share) is consolidated into the same listing. For 
        formatted filesets, it displays the most recent maintenance or 
        technology level for the specified filesets. In addition, this 
        flag lists any subsystem selective fixes that were installed on 
        top of the maintenance or technology level. RPM and ISMP images 
        are also listed.
</pre>

Sample from ```lslpp -h all``` (not a full listing)
<pre>
 > lslpp -h all
  Fileset         Level     Action       Status       Date         Time
  ----------------------------------------------------------------------------
Path: /usr/lib/objrepos
  Firefox.base.adt
                 3.5.13.1   COMMIT       COMPLETE     12/05/12     12:15:19

  Firefox.base.rte
                 3.5.13.1   COMMIT       COMPLETE     12/05/12     12:15:19

  GSKit8.gskcrypt32.ppc.rte
                 8.0.14.6   COMMIT       COMPLETE     03/26/12     09:51:05

  GSKit8.gskcrypt64.ppc.rte
                8.0.14.14   COMMIT       COMPLETE     01/03/13     12:10:33

  GSKit8.gskssl32.ppc.rte
                 8.0.14.6   COMMIT       COMPLETE     03/26/12     09:51:13

  GSKit8.gskssl64.ppc.rte
                8.0.14.14   COMMIT       COMPLETE     01/03/13     12:10:35
...
</pre>

Sample from ```lslpp -L all``` (not a full listing)
<pre>
> lslpp -L all
  Fileset                      Level  State  Type  Description (Uninstaller)
  ----------------------------------------------------------------------------
  Firefox.base.adt          3.5.13.1    C     F    Firefox Development Tools
  Firefox.base.rte          3.5.13.1    C     F    Firefox Web Browser
  GSKit8.gskcrypt32.ppc.rte
                            8.0.14.6    C     F    IBM GSKit Cryptography Runtime
  GSKit8.gskcrypt64.ppc.rte
                           8.0.14.14    C     F    IBM GSKit Cryptography Runtime
  GSKit8.gskssl32.ppc.rte   8.0.14.6    C     F    IBM GSKit SSL Runtime With
                                                   Acme Toolkit
  GSKit8.gskssl64.ppc.rte  8.0.14.14    C     F    IBM GSKit SSL Runtime With
                                                   Acme Toolkit
...

State codes:
 A -- Applied.
 B -- Broken.
 C -- Committed.
 E -- EFIX Locked.
 O -- Obsolete.  (partially migrated to newer version)
 ? -- Inconsistent State...Run lppchk -v.

Type codes:
 F -- Installp Fileset
 P -- Product
 C -- Component
 T -- Feature
 R -- RPM Package
E -- Interim Fix
</pre>
