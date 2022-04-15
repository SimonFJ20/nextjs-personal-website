docker build -t website .
docker save website > website-image.tar
rsync website-image.tar host@sfja.dk:/home/host/website-image.tar
rm website-image.tar
docker rmi website