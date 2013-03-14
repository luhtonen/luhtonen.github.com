---
layout: post
title: "How make Java to trust self signed certificate"
date: 2013-03-14 15:24
comments: true
categories: [Java, SSL, Certification, Security, Unix, AIX]
---
We've been doing update to our customers systems and one of the part what was update Java to new version. With the update we've lost our *cacerts* file. In result Java stopped to trust our self signed certificate: `The certificate issued by <..> is not trusted;`

To resolve this issue, we needed to add self signed certifate to Java's trusted certificate list.

<pre>
> sudo su -
> cd <i>install_directory</i>
> mkdir certs
> openssl s_client -connect <i>remote_host</i>:<i>remote_port</i> 2>&1 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > certs/certfile.txt
> cp java/jre/lib/security/cacerts java/jre/lib/security/cacerts-`date -u +"%Y%m%d"`
> java/jre/bin/keytool -import -noprompt -trustcacerts -alias "mycert" -file certs/certfile.txt -keystore java/jre/lib/security/cacerts -storepass changeit
</pre>

#### Explanations ####
1. Since we have our tool installed as *root*, we need to *sudo* as *root*
2. Change to tool installation directory, replace *install_directory* with correct value. Java was installed under it in *java* subdirectory.
3. Create directory to store certificate to be downloaded from  remote host
4. Download certificate from remote host and store it in *certs* directory in *certfile.txt* file. *remote_host* need to be replaced with correct host name or ip addres and *remote_port* need to be replaced with correct port.
5. Make backup of *cacerts* file
6. Add self signed certificate to *cacerts* file. Here's some important options:

*-noprompt* - suppress interactive prompting

*-trustcerts* - set certificate trust attribute to yes and don't ask from user

*-alias "alias_name"* - is alias used by keytool to find certificate from the list, if alias is already in the list certificate value is replace, otherwise new certificate is added to the *cacerts* file

*-storepass pass* - password for key store, *changeit* is default
