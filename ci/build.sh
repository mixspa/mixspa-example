#!/bin/bash
#file: ci/build.sh
set -e -u
rootdir="$(cd $(dirname $0)/../ && pwd)"

apps=("react-apps")

echo 'Start to build ..'
for app in "${apps[@]}"
do
   echo "App[${app}] installing ..."
   cd "${rootdir}/${app}"
   yarn install
   echo "App[${app}] building ..."
   yarn build
   echo "App[${app}] finished."
done

echo "Build done."
