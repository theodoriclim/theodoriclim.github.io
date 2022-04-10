yarn run build
cd dist
git init
git remote add origin https://git@github.com/cowturtle/cowturtle.github.io.git
git add .
git commit -m 'deploy'
git push -f origin master:gh-pages
cd ..