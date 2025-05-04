# Running This Project

This guide provides step-by-step instructions to set up and run this project in your environment.

## Prerequisites

* **GitHub Account:** You will need a GitHub account to fork the repository.
* **Docker Hub Account:** Create a free account at [https://hub.docker.com/](https://hub.docker.com/) to store your Docker images.
* **Local Machine Setup:** Ensure you have Git, Docker, and the necessary development environment installed on your local machine.

## Setup Instructions

1.  **Fork the Repository:**
    Click the "Fork" button at the top right of this repository page to create a copy of it under your GitHub account.

2.  **Create Docker Hub Repository:**
    Go to [https://hub.docker.com/](https://hub.docker.com/) and create a new public or private repository to store the Docker image for this project. Note down the repository name (e.g., `yourdockerhubusername/your-project-name`).

3.  **Configure GitHub Secrets:**
    For automated Docker image building and pushing, you need to configure the following secrets in your forked repository:
    * Navigate to your forked repository on GitHub.
    * Click on the **"Settings"** tab.
    * In the left sidebar, go to **"Secrets and variables"** and then **"Actions"**.
    * Click on **"New repository secret"** for each of the following:

        * **`DOCKERHUB_TOKEN`**:
            * Set the **Name** to `DOCKERHUB_TOKEN`.
            * For the **Value**, go to [https://app.docker.com/settings/personal-access-tokens/create](https://app.docker.com/settings/personal-access-tokens/create).
            * Create a new token with **"read"**, **"write"**, and **"delete"** permissions.
            * Copy the generated token and paste it as the **Value**.
            * Click **"Add secret"**.

        * **`DOCKERHUB_USERNAME`**:
            * Set the **Name** to `DOCKERHUB_USERNAME`.
            * Set the **Value** to your Docker Hub username.
            * Click **"Add secret"**.

        * **`SUDO_PASS`**:
            * Set the **Name** to `SUDO_PASS`.
            * Set the **Value** to the sudo password of your local machine. This is required for certain actions within the self-hosted runner setup. **Use with caution and ensure your runner environment is secure.**
            * Click **"Add secret"**.

4.  **Set Up a Self-Hosted GitHub Runner:**
    To execute the workflows, you need to configure a self-hosted runner on your local machine:
    * Navigate to your forked repository on GitHub.
    * Click on the **"Settings"** tab.
    * In the left sidebar, go to **"Actions"** and then **"Runners"**.
    * Click on **"Add new runner"**.
    * Select **"Linux"** as the operating system.
    * Follow the instructions provided by GitHub to download and configure the runner software on your local machine. This typically involves downloading a script, granting execute permissions, and running the `config.sh` and `run.sh` scripts. **Ensure your runner environment is secure as it will have access to your repository and secrets.**

5.  **Trigger Workflows:**
    Once the secrets and the self-hosted runner are configured, any commit and push you make to your forked repository will automatically trigger the defined workflows. You can monitor the progress of these pipelines in the **"Actions"** tab of your repository.

    ![GitHub Actions Pipeline Example](https://github.com/user-attachments/assets/d238076b-26cd-4866-9c64-ed53db5d4a0d)

## Testing the Application

1.  **Access in Browser:**
    After the Docker container is successfully built and deployed (as defined in your workflows), you should be able to access the application by opening your web browser and navigating to:
    ```
    http://<your_machine_ip>:3000/
    ```
    Replace `<your_machine_ip>` with the actual IP address of the machine where your self-hosted runner and the Docker container are running.

    ![Application Example](https://github.com/user-attachments/assets/c913556c-2fec-480f-8f03-0214b02fe7c3)

## Monitoring with New Relic

You can integrate New Relic for monitoring the running container:

1.  **Create a New Relic Account:**
    Go to [https://one.newrelic.com/](https://one.newrelic.com/) and sign up for a free account.

2.  **Install New Relic Agent:**
    Follow the Linux installation instructions provided by New Relic to set up the agent on your local machine (where the self-hosted runner and Docker container are running). This usually involves downloading and running a setup script.

3.  **Monitor Your Container:**
    Once the New Relic agent is installed and your container is running, you can find monitoring information in the New Relic One platform. Navigate to the **"All entities"** tab to locate and observe the performance of your container.

    ![New Relic Entities Tab Example 1](https://github.com/user-attachments/assets/139eab99-0db9-4e88-96bf-213d162227bb)

    ![New Relic Entities Tab Example 2](https://github.com/user-attachments/assets/36c105d7-3e78-4871-a6ca-b9658b6f72a4)
