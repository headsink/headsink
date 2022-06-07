## Install package.json dependencies
```
npm install
```

## Shorthand

```
# install
npm i <package>

# uninstall
npm un <package>

# update
npm up <package>
```

## Flags
-S is the same as --save, and -D is the same as --save-dev.

## List globally installed packages

```
npm list -g --depth=0
```

## Uninstall global package

```
npm -g uninstall <name> 
```

## Upgrade npm on Windows

```
npm-windows-upgrade
```

## Update global packages

To see which packages need updating, use:

```
npm outdated -g --depth=0
```

To update global packages individually you can use:

```
npm update -g <package> <package> <package>
```

## list available scripts to run

```
npm run
```

## Update npm

```
npm install -g npm@latest
```

## using windows? Then use

```
npm-windows-upgrade
```

## Installed version

```
npm list # for local packages
```

## Node Version Manager nvm
>**nvm** makes it easy to switch between different versions of Node.js. Read more about it on the project's GitHub page.


Once you have nvm installed, if you want to install the latest version of Node v12 just run:

```
nvm install 12
```
If you have multiple versions of Node.js installed on your workspace, you can switch to a specific version by writing:

```
nvm use 10.19.0
```

Make a Node version default
In order to set a default version of Node for your workspace, just type:

```
nvm alias default 12
```

Where the latest version of 12 is the version you want to be used by default.

## Update npm

If you use Node installed through nvm, it's good practice to update your version of npm with this command:
```
nvm install-latest-npm
```