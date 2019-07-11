echo "ecr get login"
$(aws ecr get-login --no-include-email --region ap-southeast-1)
echo "build"
docker build -t ludo-frontend .
echo "tag"
docker tag ludo-frontend:latest 216891314812.dkr.ecr.ap-southeast-1.amazonaws.com/ludo-frontend:stable
echo "push"
docker push 216891314812.dkr.ecr.ap-southeast-1.amazonaws.com/ludo-frontend:stable
sleep 2m
echo "deploy"
# aws ecs update-service --cluster ludo-frontend-cluster-v1  --service Ludo-frontend-container-service --force-new-deployment
