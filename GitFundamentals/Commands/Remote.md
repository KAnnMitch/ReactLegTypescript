# git remote 
When working with git, a **remote** is any git repository that isn't on the machine you're working on. The counterpart to this is **local** or the machine that is being devoloped on. Take GitHUb for example. While git is the technology that allows you to create local repositories, GitHub is the site that will host your remote repositories. Once stored remotely, you can bring that repository back down or share it with others.
**Note**: While repositories (local and remote) are related and track the same project, they can have different states if changes are not shared between the two. 

### Adding a Remote
A remote can be added with `git remote add` comamand, followed by the name and location of the remote. The name is a local name, meaning it's your label and does not impact the actual remote whatsoever.
```
git remote add origin https://github.com/ElevenfiftyAcademy/GitFundamentals.git
```
### Removing a Remote
A remote can be removed with the `git remote remove`command, followed by the name of the remote. 
```
git remote remove origin
```
## Resources 
-[Git Remote Documentation(https://git-scm.com/docs/git-remote)
---
[Back to home](../README.md)

