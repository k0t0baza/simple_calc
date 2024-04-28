#!/bin/bash
git fetch
# Получаем текущий коммит HEAD
head_commit=$(git rev-parse HEAD)
# Получаем последний известный коммит в удаленной ветке origin/main
remote_main_commit=$(git rev-parse origin/main)

# Сравниваем два коммита
if [ "$head_commit" == "$remote_main_commit" ]; then
    echo "Коммиты совпадают"
else
    git pull
    sudo docker stop nodejs-container
    sudo docker container rm nodejs-container
    sudo docker image rm nodejs-container-image
    sudo docker build . -t nodejs-container-image
    sudo docker run -p 8080:3000 -d --name nodejs-container nodejs-container-image
fi
