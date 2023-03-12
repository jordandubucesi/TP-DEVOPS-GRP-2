build {
  name = "fibonacci-app"
  description = <<EOF
This build creates fibonacci-app images for ubuntu versions :
* Ubuntu 22.04
For the following builders :
* azure-arm
EOF

  sources = [
    "source.azure-arm.ubuntu-22-04",
  ]
}
