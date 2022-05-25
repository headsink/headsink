### Tuesday, 17 May, 2022

Most of the entry will be in [TempEntry.md](TempEntry.md) so the front page doesn't look messy.

### Monday, 16 May, 2022

## On Gatsby Error
After gatsby-cli installation, I ran into an error when I input the gatsby command in Powershell:
```
cannot be loaded because running scripts is disabled on
this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
```
From the link provided by the error message, there was something about the Execution Policy. So I entered the command below and got undefined...
```
 Get-ExecutionPolicy -List

        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process       Undefined
  CurrentUser       Undefined
 LocalMachine       Undefined
 ```
 
 So the solution was to Set the execution policy command...
 ```
 Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
 ```
 
## On Git
I don't know why I copied the instruction below from a new repository.
…or create a new repository on the command line
echo "# headsink.github.io" >> README.md
```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/headsink/headsink.github.io.git
git push -u origin main
```
…or push an existing repository from the command line
```
git remote add origin https://github.com/headsink/headsink.github.io.git
git branch -M main
git push -u origin main
```

### Sunday, 15 May, 2022
I haven't been using git and github for almost half a year. I guess I should include a note about **SSH** and **gh CLI** in Window's PowerShell...

```
$ ssh-keygen -t ed25519-sk -C "your_email@example.com"
```
After you entered and received message like below
```
Generating public/private ed25519 key pair.
Enter file in which to save the key
```
Make sure to just press enter and not enter any name because it will be saved into the current directory.

Then go to your Github profile setting under **SSH AND PGP KEYS** and under **SSH KEY**, choose **New SSH Key**. Then paste the content in the file named **id_ed25519.pub** inside the default **/.ssh** folder.

So that's it guys. Adios.
