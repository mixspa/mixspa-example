#!/bin/bash
#file: ci/deploy.sh
set -e -u

echo 'Deploy package to git-page ...'

echo 'Config git'
name=$(git log -1 --pretty=format:"%an")
email=$(git log -1 --pretty=format:"%ae")
git config user.name "$name"
git config user.email "$email"

echo 'Checkout to gh-pages'
git checkout gh-pages

echo "Copy files"
yes | cp -rf dist/* .

echo 'Commit & push package files'
git add .
git commit -m "Update package files"
git push origin gh-pages

echo 'Deploy package to git-page done'
