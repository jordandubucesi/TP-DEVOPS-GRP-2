terraform {
  backend "azurerm" {
    # A remplir avec votre resource group name
    resource_group_name  = ""
    # A remplir avec votre storage account name
    storage_account_name = ""
    container_name       = "tfstate"
    key                  = "tp-devops.terraform.tfstate"
  }
}
