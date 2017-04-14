import boto3


def lambda_handler(event, context):
    payload = {}
    main_stack = event['StackId']
    region = event['Region']
    cf = boto3.client('cloudformation', region_name=region)
    all_stacks = cf.describe_stacks().get('Stacks')
    for stack in all_stacks:
        if stack.get('StackId') == main_stack:
            main_outputs = stack.get('Outputs')
            nested_stacks = {}
            nested_stacks['Main_Stack'] = main_stack
            for output in main_outputs:
                if output['OutputKey'] == 'NetworkStackOut':
                    nested_stacks['Network_Stack'] = output['OutputValue']
                elif output['OutputKey'] == 'JumpBoxStackOut':
                    nested_stacks['JumpBox_Stack'] = output['OutputValue']
                elif output['OutputKey'] == 'DataStackOut':
                    nested_stacks['Data_Stack'] = output['OutputValue']
                elif output['OutputKey'] == 'WebStackOut':
                    nested_stacks['Web_Stack'] = output['OutputValue']
                elif output['OutputKey'] == 'ApplicationEndpoint':
                    nested_stacks['Application_Endpoint'] = output['OutputValue']
            main_params = stack.get('Parameters')
            nested_params = {}
            nested_params['Main_Params'] = {}
            for params in main_params:
                param = {params['ParameterKey']: params['ParameterValue']}
                nested_params['Main_Params'].update(param)
            payload.update(nested_params)
            payload.update(nested_stacks)

    for stack in all_stacks:
        if stack.get('StackId') == nested_stacks.get('Network_Stack'):

            network_outputs = stack.get('Outputs')
            nested_outputs = {}
            nested_outputs['Network_Outputs'] = {}
            for params in network_outputs:
                param = {params['OutputKey']: params['OutputValue']}
                nested_outputs['Network_Outputs'].update(param)

            network_params = stack.get('Parameters')
            nested_params = {}
            nested_params['Network_Params'] = {}
            for params in network_params:
                param = {params['ParameterKey']: params['ParameterValue']}
                nested_params['Network_Params'].update(param)

            payload.update(nested_params)
            payload.update(nested_outputs)

        elif stack.get('StackId') == nested_stacks.get('JumpBox_Stack'):

            jumpbox_outputs = stack.get('Outputs')
            nested_outputs = {}
            nested_outputs['JumpBox_Outputs'] = {}
            for params in jumpbox_outputs:
                param = {params['OutputKey']: params['OutputValue']}
                nested_outputs['JumpBox_Outputs'].update(param)

            jumpbox_params = stack.get('Parameters')
            nested_params = {}
            nested_params['JumpBox_Params'] = {}
            for params in jumpbox_params:
                param = {params['ParameterKey']: params['ParameterValue']}
                nested_params['JumpBox_Params'].update(param)

            payload.update(nested_params)
            payload.update(nested_outputs)

        elif stack.get('StackId') == nested_stacks.get('Data_Stack'):

            data_outputs = stack.get('Outputs')
            nested_outputs = {}
            nested_outputs['Data_Outputs'] = {}
            for params in data_outputs:
                param = {params['OutputKey']: params['OutputValue']}
                nested_outputs['Data_Outputs'].update(param)

            data_params = stack.get('Parameters')
            nested_params = {}
            nested_params['Data_Params'] = {}
            for params in data_params:
                param = {params['ParameterKey']: params['ParameterValue']}
                nested_params['Data_Params'].update(param)

            payload.update(nested_params)
            payload.update(nested_outputs)

        elif stack.get('StackId') == nested_stacks.get('Web_Stack'):

            web_outputs = stack.get('Outputs')
            nested_outputs = {}
            nested_outputs['Web_Outputs'] = {}
            for params in web_outputs:
                param = {params['OutputKey']: params['OutputValue']}
                nested_outputs['Web_Outputs'].update(param)

            web_params = stack.get('Parameters')
            nested_params = {}
            nested_params['Web_Params'] = {}
            for params in web_params:
                param = {params['ParameterKey']: params['ParameterValue']}
                nested_params['Web_Params'].update(param)

            payload.update(nested_params)
            payload.update(nested_outputs)

    return payload