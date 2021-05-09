# -*- mode: ruby -*-
# vi: set ft=ruby :

ANSIBLE_VERSION = "2.4.*"

Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-16.04"

  config.vm.synced_folder "./", "/vagrant"

  # Jekyll 
  config.vm.network :forwarded_port, guest: 4000, host: 4000

  # LiveReload
  config.vm.network :forwarded_port, guest: 35729, host: 35728

  
  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = 1024
  end

  config.vm.provision "shell" do |s|
    s.inline = <<-SHELL
    if ! grep -q "cd /vagrant" "/home/vagrant/.bashrc"; then
      echo "cd /vagrant" >> "/home/vagrant/.bashrc"
    fi
    SHELL
  end

  config.vm.provision "ansible_local" do |ansible|
    ansible.compatibility_mode = "2.0"
    ansible.install = true
    ansible.install_mode = "pip_args_only"
    ansible.pip_args = "ansible==#{ANSIBLE_VERSION}"
    ansible.playbook = "deployment/ansible/branding-guide.yml"
    ansible.galaxy_role_file = "deployment/ansible/roles.yml"
    ansible.galaxy_roles_path = "deployment/ansible/roles"
  end
end
