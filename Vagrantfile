require 'yaml'

file = 'vagrant-config.yml'

# Validation configuration file
if File.file?(file)
    conf_file = YAML.load_file(file)
    if ( defined?(conf_file['machine']) &&
         defined?(conf_file['vagrant_api_version']))
        machine_conf = conf_file['machine']
        vagrant_conf = conf_file['vagrant_api_version']
        v_port = conf_file['machine']['port_forwarded']['v_port']
        host_port = conf_file['machine']['port_forwarded']['host_port']
    else
      raise "Configuration file does not contain machines fields."
    end

else
  raise "Configuration file 'vagrant-config.yaml' does not exist."
end
# END of validation configuration

# Vagrant declaration
Vagrant.configure("#{vagrant_conf}") do |config|
    config.vm.box = machine_conf["box"]

    # # Folder Settings
    config.vm.synced_folder "./", "/home/vagrant/app/"

    config.vm.network "public_network"

    # Minimum values for dev-machine
    config.vm.provider "#{machine_conf['v_provider']}" do |v|
        v.name = machine_conf["v_name"]
        # v.hostname = machine_conf["v_hostname"]
        v.memory = machine_conf["v_memory"]
        v.cpus = machine_conf["v_cpus"]
    end

    # Config port forwarding for http
    if(conf_file['machine']['port_forwarded'].has_key?('enabled'))
      if (conf_file['machine']['port_forwarded']['enabled'] == true)
        config.vm.network "forwarded_port",
          guest: "#{v_port}", host: "#{host_port}"
      end
    end

  # Installation all required packages by tags
    config.vm.provision "ansible" do |ansible|
      ansible.playbook = "provisioning/main.yml"
    end
  end