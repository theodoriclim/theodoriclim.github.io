CALL yarn run build
CALL cd dist
CALL git init
CALL git remote add origin https://git@github.com/cowturtle/cowturtle.github.io.git
CALL git add .
CALL git commit -m 'deploy'
CALL git push -f origin master:gh-pages
CALL cd ..
