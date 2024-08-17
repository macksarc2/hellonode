from locust import HttpUser, TaskSet, task, between

class UserBehavior(TaskSet):
    @task
    def hello_world(self):
        self.client.get("/")  # Adjust the path to your endpoint

class WebsiteUser(HttpUser):
    tasks = [UserBehavior]
    wait_time = between(0.5, 1)  # Adjust wait time to control request frequency
    host = "http://minikube.local:31101"