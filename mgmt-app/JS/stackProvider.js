var baseUrl = "https://e63y6ef8a9.execute-api.us-west-2.amazonaws.com"

function getStackData(callback) {
 $.ajax({
          url: baseUrl + "/prod/mybb_pull",
          type: 'POST',
          crossDomain: true,
          dataType: 'json',
          data: JSON.stringify({
           "StackId": "arn:aws:cloudformation:us-west-2:913925875835:stack/MyBB/7a8d69a0-202b-11e7-8181-50d5ca789e4a",
           "Region": "us-west-2" }),
           success: callback
    });
}

function modify(stack_id ,params_json, callback){

    var stackData = {
        StackId: stack_id,
        Region: "us-west-2",
        ModifiedParams: params_json
    }

     $.ajax({
          url: baseUrl + "/prod/mybb_modify",
          type: 'POST',
          crossDomain: true,
          dataType: 'json',
          data: JSON.stringify(stackData),
           success: callback
    });
}