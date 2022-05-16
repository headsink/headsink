### Hi there 👋
### Monday, 16 May, 2022

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

<!--
**headsink/headsink** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
