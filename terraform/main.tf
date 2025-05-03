terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

provider "docker" {}

resource "docker_container" "app" {
  name  = "node-app"
  image = "${var.dockerhub_username}/nawy-assignment:${var.image_tag}"
  ports {
    internal = 3000
    external = 3000
  }
  restart = "unless-stopped"
}
