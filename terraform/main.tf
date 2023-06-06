terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "frontend_vercel_deploy" {
  name      = "rocketproject-frontend"
  git_repository = {
    type = "github"
    repo = "marinadiniz-plank/RocketProject-FrontEnd"
  }
}