#
# Cookbook:: mybb
# Recipe:: db_schema
#
# Copyright:: 2017, The Authors, All Rights Reserved.


bash 'set_schema' do
  cwd '/tmp'
  code <<-EOH
    mysql --user=#{node['mybb']['dbuser']} --password=#{node['mybb']['dbpass']} --host=#{node['mybb']['dbhost']} --port=#{node['mybb']['dbpass']} --database=#{node['mybb']['dbname']} < #{node['mybb']['schema_file']} || echo "Schema Creation Failed"
    EOH
  only_if { ::File.exist?(node['mybb']['schema_file']) }
end

