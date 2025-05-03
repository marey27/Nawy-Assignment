variable "dockerhub_username" {
  type        = string
  description = "Docker Hub username"
}

variable "image_tag" {
  type        = string
  default     = "latest"
  description = "Docker image tag"
}
