#!/usr/bin/env sh
# abort on errors
set -e
# build
export NODE_OPTIONS=--openssl-legacy-provider
yarn run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git remote add origin https://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@github.com/cowturtle/cowturtle.github.io.git
git add .
git commit -m 'deploy'
git push -f origin master:gh-pages
cd ..