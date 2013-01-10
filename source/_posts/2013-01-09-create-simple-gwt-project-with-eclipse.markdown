---
layout: post
title: "Create simple GWT project with Eclipse"
date: 2013-01-09 17:27
comments: true
categories: [GWT, Google Web Toolkit, Eclipse, Java]
---
Google Web Toolkit is one of popular web UI development frameworks and I've decided to dig into it. There is different ways of creating GWT project: command line tools or even manually creating every bit of it, but I prefer to use IDE for my development work. Even I don't see Eclipse as IDE, but it's better than command line tools. But even when Google officially support Eclipse as it's primer tool for Android and GWT development, GWT plugin doesn't provide straight way of creating simple GWT project, but you have to make few steps to achieve it.

## Preparation
To create GWT project with Eclipse, need to download and install [Java](http://www.oracle.com/technetwork/java/index.html) and [Eclipse](http://www.eclipse.org/downloads/) and then GWT plugin for Eclipse.

1. start Eclipse
2. select menu Help > Eclipse Marketplace…
3. in Find field type: GWT and press GO
4. search for your version of Google Plugin for Eclipse and press Install button
5. follow on screen instructions and install plugin

There would be added GWT button to Eclipse toolbar.

![GWT button on Eclipse toolbar](/images/new-gwt-project/gwt-button.png)

In order to create simple project we need to execute 4 steps:

1. Create GWT project
2. Define GWT module
3. Add an entry point class
4. Provide web page


## Create GWT Project
Now we're ready to create our first, I wouldn't be original, HelloWorld GWT project.

1. click on GWT button and select New Web Application Project…
![Create New Web Application Project…](/images/new-gwt-project/create-new-gwt-project.png)
2. type Project name: HelloWorld
3. choose Package
4. select GWT SDK, default is good
5. deselect Use Google App Engine, it wouldn't be needed for this project
6. 'Add support for listing on Google Apps Marketplace' is deselecte by default and this is ok
7. deselect 'Generate project sample code' since it wouldn't be needed and would only mess with our project
![New GWT project screen](/images/new-gwt-project/new-gwt-project.png)
8. click Finish

We would have simple empty GWT project in Project Explorer.
![Empty GWT Project](/images/new-gwt-project/gwt-empty-project.png)

There is 2 important directories in this project:

- `src` with empty base package; there would be placed module configuration file and all Java classes would be put also there
- `war` were would be located HTML pages 

## Define GWT Module
Now we need to define module for our GWT project. We can create as many modules for one project as we like, it would be useful for example for complex projects to devide functionality and responsibilities between modules and to enabling easier cooperation in bigger development teams. But for our project and generally for any simple project one module would be enough.

1. select base package under src directory
2. from menu select File > New > Other and then under Google Web Toolkit select Module (or you can use mouse right click and skip File part) and click Next
![Select New GWT Module](/images/new-gwt-project/new-gwt-module-selection.png)
3. Source folder and Package should be selected automatically
4. give Module name: HelloWorld and click Finish
![Create New GWT Module](/images/new-gwt-project/create-new-gwt-module.png)

Module configuration file `HelloWorld.gwt.xml` and empty `.client` package would be added to our base package.

![Module creation elements](/images/new-gwt-project/new-gwt-module.png)

## Add an Entry Point Class
Now we need to add entry point class to our project. We can have multiple entry points, but only one can be 'active' at a time. So in most cases one entry point would be enough.

1. select base package under src directory
2. from menu select File > New > Other and then under Google Web Toolkit select Entry Point Class and press Next
![Select new entry point class](/images/new-gwt-project/select-entry-point.png)
3. Source folder, Module and Package would be selected automatically
4. give class a Name: HelloWorld and press Finish
5. add following code in new class method `onModuleLoad()`:

``` java
RootPanel.get().add(new Label("Hello, World!"));
```
Remember to fix imports

``` java
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
```

## Provide the Web Page
Last thing we need is HTML page to be shown to end users.

1. select war directory
2. from menu select File > New > Other and then under Google Web Toolkit select HTML Page and press Next
![Select HTML Page](/images/new-gwt-project/select-new-html-page.png)
3. Project and Path should be already selected
4. give File name: HelloWorld and press Finish
![Create new HTML Page](/images/new-gwt-project/create-new-web-page.png)
5. some plugins generate link to javascript source incorrectly, it need to be fixed to `<base package>.<module name>/<base package>.<page name>.nocache.js`, for example `org.edu.gwt.helloworld.HelloWorld/org.edu.gwt.helloworld.HelloWorld.nocache.js`

Now our project is ready.

## Run Application
Now we need to test our new application. 

1. select project top level
2. from run menu select Run As > Web Application
![Run as web application](/images/new-gwt-project/run-as.png)
3. copy URL and paste into browser, this may take awhile, and it would request to install browser plugin
4. after awhile on page should appear text 'Hello, World!'

