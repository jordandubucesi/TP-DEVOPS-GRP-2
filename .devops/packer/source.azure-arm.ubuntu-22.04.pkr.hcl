# https://developer.hashicorp.com/packer/plugins/builders/azure/arm
source "azure-arm" "ubuntu-22-04" {
  managed_image_resource_group_name = "myResourceGroup",
  managed_image_name                = "ubuntu-22.04-fibonacci-app-${formatdate("YYYY-MM-DD-hhmmss", timestamp())}",
}
