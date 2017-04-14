import boto3


def lambda_handler(event, context):
    payload = {}
    stack_id = event['StackId']
    region = event['Region']
    parameters = event['Parameters']
    param_list = []

    for k, v in parameters.items():
        if k == "DbPass":
            parameter = {'ParameterKey': k, 'UsePreviousValue': True}
        else:
            parameter = {'ParameterKey': k, 'ParameterValue': v}

        param_list.append(parameter)

    cf = boto3.client('cloudformation', region_name=region)
    try:
        payload = cf.update_stack(StackName=stack_id, UsePreviousTemplate=True,
                                  Parameters=param_list)
        payload['Result'] = "Success"

    except Exception as e:
        payload['Result'] = "Failed"
        payload['Reason'] = str(e)

    return payload