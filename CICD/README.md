#

## TODO
1. research the info can docker to build a env? or need I use the visual meachina?
2. docker, k8s learn
3. CI/CD learn
4. ❌WSL in windows

## reference


```js
kubectl get nodes

// helm
choco install kubernetes-helm
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm search repo nginx
helm install my-nginx bitnami/nginx
helm list
helm status my-nginx

// k8s
kubectl get pods -o wide
kubectl get nodes -o wide
kubectl get svc my-nginx -o yaml
kubectl get endpoints my-nginx
kubectl port-forward svc/my-nginx 9001:81

// docker
docker network ls
docker network inspect kind

// dashboard
kubectl proxy
helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
helm upgrade --install kubernetes-dashboard kubernetes-dashboard/kubernetes-dashboard --create-namespace --namespace kubernetes-dashboard
kubectl -n kubernetes-dashboard port-forward svc/kubernetes-dashboard-kong-proxy 8443:443
```


## Think
- in order to build my self CICD process, I have to know
    - the basic using about docker, k8s(windows wsl using, choco)
        - ✅using the docker: build a docker and run it in docker desktop
            - build/compose/livereload/
        - k8s and kind

    - make a mini k8s service
    - build a CICD templete
- in order to 



##
1. ✅how to make the UI pattern work?
2. about the CICD process setting?
    1. use the Jinkins
    2. other tools
