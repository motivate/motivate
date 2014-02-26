#MOTIVATE
=========

Project Owners:
- Elaine Chang
- Kevin Chen
- Brittany Lee
- Eric Tu
- Ted Wu

Workflow/How to Merge:
git checkout -b dev
git pull origin dev
- now make your own branch to make changes
git branch own-branch
git push
git checkout own-branch
- start making your changes here
- once your are finished and the code works 
git add .
git commit -m "commit message"
git push origin own-branch
- once you are ready to merge own-branch with dev
git checkout dev
git merge own-branch
git push dev
- once you ensure that your changes work with everyone else's dev changes then you can merge to master
git checkout master
git merge dev
git push master
