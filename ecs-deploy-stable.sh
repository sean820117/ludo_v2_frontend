echo "ecr get login"
$(aws ecr get-login --no-include-email --region ap-northeast-1)
echo "build"
docker build -t ludo-frontend .
echo "tag"
docker tag ludo-frontend:latest 216891314812.dkr.ecr.ap-northeast-1.amazonaws.com/ludo-frontend:latest
echo "push"
docker push 216891314812.dkr.ecr.ap-northeast-1.amazonaws.com/ludo-frontend:latest
sleep 2m
echo "deploy"
# aws ecs update-service --cluster ludo-frontend-cluster-v1  --service Ludo-frontend-container-service --force-new-deployment
