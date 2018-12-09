#!/bin/bash
#file: ci/build.sh
set -e -u
rootdir="$(cd $(dirname $0)/../ && pwd)"

apps=("react-router-app")

echo 'Prepare start...'

echo 'Create dist folder'
mkdir -p "${rootdir}/dist"

echo 'Start to install'
for app in "${apps[@]}"
do
   echo "App[${app}] installing ..."
   cd "${rootdir}/${app}"
   yarn install
   echo "App[${app}] building ..."
   yarn build
   echo "App[${app}] moving dist files ..."
   mv "${rootdir}/${app}/dist" "${rootdir}/dist/${app}"
   echo "App[${app}] finished."
done

echo 'Copy index.html file'
cp "${rootdir}/index.html" "${rootdir}/dist/index.html"

echo "Build done."
