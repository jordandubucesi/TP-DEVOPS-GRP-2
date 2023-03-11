packer {
  required_plugins {
    # https://github.com/hashicorp/packer-plugin-ansible
    ansible = {
      version = ">= 1.0.2"
      source  = "github.com/hashicorp/packer-plugin-ansible"
    }

    # https://github.com/hashicorp/packer-plugin-azure
    azure-arm = {
      version = ">= 1.4.1"
      source  = "github.com/hashicorp/packer-plugin-azure"
    }
  }
}
