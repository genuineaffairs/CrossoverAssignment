#
# Cookbook:: mybb
# Recipe:: db_schema
#
# Copyright:: 2017, The Authors, All Rights Reserved.


bash 'set_schema' do
  cwd '/tmp'
  code <<-EOH
    mysql --user=#{dbuser} --password=#{dbpass} --host=#{dbhost} --port=#{dbport} --database=#{dbname} < #{schema_file} || echo "Schema Already Exists"
    EOH
  only_if { ::File.exist?(node['mybb']['schema_file']) }
end

