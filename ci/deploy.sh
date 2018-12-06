#!/bin/bash
#file: ci/deploy.sh
set -e -u

echo 'Deploy package to git-page ...'

echo 'Config git'
name=$(git log -1 --pretty=format:"%an")
email=$(git log -1 --pretty=format:"%ae")
git config user.name "$name"
git config user.email "$email"

echo 'Prepare git env'
if [ `git branch | grep gh-pages` ]; then
    git checkout gh-pages
fi
git checkout -b gh-pages

echo 'Commit & push package files'
git add -f dist/
git commit -m "Update package files"
git push origin gh-pages

echo 'Deploy package to git-page done'
