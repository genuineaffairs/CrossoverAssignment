

function modifyStack(stackId){

}

function getStack(){

    getStackData(function (json){
         $("#main_stack_id").text(json.Main_Stack).fadeOut('slow').fadeIn('slow');
         $("#network_stack_id").text(json.Network_Stack).fadeOut('slow').fadeIn('slow');
         $("#jumpbox_stack_id").text(json.JumpBox_Stack).fadeOut('slow').fadeIn('slow');
         $("#data_stack_id").text(json.Data_Stack).fadeOut('slow').fadeIn('slow');
         $("#web_stack_id").text(json.Web_Stack).fadeOut('slow').fadeIn('slow');
         //$("#app_endpoint").text('http://' + json.Application_Endpoint).fadeOut('slow').fadeIn('slow');
         var ul_main = document.getElementById("param_list_main");
         var ul_network = document.getElementById("param_list_network");
         var ul_network_out = document.getElementById("out_list_network");
         var ul_jumpbox = document.getElementById("param_list_jumpbox");
         var ul_jumpbox_out = document.getElementById("out_list_jumpbox");
         var ul_data = document.getElementById("param_list_data");
         var ul_data_out = document.getElementById("out_list_data");
         var ul_web = document.getElementById("param_list_web");
         var ul_web_out = document.getElementById("out_list_web");
         var ep = document.getElementById("app_endpoint");
         var link = document.createElement('a')

         link.setAttribute('href', 'http://' + json.Application_Endpoint);
         link.innerHTML = 'http://' + json.Application_Endpoint;
         ep.appendChild(link);

         ul_main.innerHTML = "";
         ul_network.innerHTML = "";
         ul_network_out.innerHTML = "";
         ul_jumpbox.innerHTML = "";
         ul_jumpbox_out.innerHTML = "";
         ul_data.innerHTML = "";
         ul_data_out.innerHTML = "";
         ul_web.innerHTML = "";
         ul_web_out.innerHTML = "";

         addProperStackIdClass('main-stack', json['Main_Stack']);
         addProperStackIdClass('network-stack', json['Network_Stack']);
         addProperStackIdClass('jumpbox-stack', json['JumpBox_Stack']);
         addProperStackIdClass('data-stack', json['Data_Stack']);
         addProperStackIdClass('web-stack', json['Web_Stack']);



         for (var key in json.Main_Params) {

                var textBox = document.createElement('input');
                var form = document.createElement('form');
                var label = document.createElement('label');
                var node = document.createTextNode(key);
                var item = document.createElement('li');

                textBox.name = 'reference[]';
                textBox.type = 'text';
                textBox.value = json.Main_Params[key]
                item.appendChild(node);
                item.appendChild(textBox);
                label.appendChild(item);
                form.appendChild(label);

                ul_main.appendChild(form);
            }

         for (var key in json.Network_Params) {

                var textBox = document.createElement('input');
                var form = document.createElement('form');
                var label = document.createElement('label');
                var node = document.createTextNode(key);
                var item = document.createElement('li');

                textBox.name = 'reference[]';
                textBox.type = 'text';
                textBox.value = json.Network_Params[key]
                item.appendChild(node);
                item.appendChild(textBox);
                label.appendChild(item);
                form.appendChild(label);

                ul_network.appendChild(form);
            }

          for (var key in json.Network_Outputs) {

                var textBox = document.createElement('input');
                var form = document.createElement('form');
                var label = document.createElement('label');
                var node = document.createTextNode(key);
                var item = document.createElement('li');

                textBox.name = 'reference[]';
                textBox.type = 'text';
                textBox.value = json.Network_Outputs[key]
                textBox.disabled = true;
                item.appendChild(node);
                item.appendChild(textBox);
                label.appendChild(item);
                form.appendChild(label);

                ul_network_out.appendChild(form);
            }

         for (var key in json.JumpBox_Params) {

                var textBox = document.createElement('input');
                var form = document.createElement('form');
                var label = document.createElement('label');
                var node = document.createTextNode(key);
                var item = document.createElement('li');

                textBox.name = 'reference[]';
                textBox.type = 'text';
                textBox.value = json.JumpBox_Params[key]
                item.appendChild(node);
                item.appendChild(textBox);
                label.appendChild(item);
                form.appendChild(label);

                ul_jumpbox.appendChild(form);
            }

         for (var key in json.JumpBox_Outputs) {

                var textBox = document.createElement('input');
                var form = document.createElement('form');
                var label = document.createElement('label');
                var node = document.createTextNode(key);
                var item = document.createElement('li');

                textBox.name = 'reference[]';
                textBox.type = 'text';

                textBox.value = json.JumpBox_Outputs[key]
                textBox.disabled = true;
                item.appendChild(node);
                item.appendChild(textBox);
                label.appendChild(item);
                form.appendChild(label);

                ul_jumpbox_out.appendChild(form);
            }
         for (var key in json.Data_Params) {

                var textBox = document.createElement('input');
                var form = document.createElement('form');
                var label = document.createElement('label');
                var node = document.createTextNode(key);
                var item = document.createElement('li');

                textBox.name = 'reference[]';
                textBox.type = 'text';
                textBox.value = json.Data_Params[key]
                item.appendChild(node);
                item.appendChild(textBox);
                label.appendChild(item);
                form.appendChild(label);

                ul_data.appendChild(form);
            }

         for (var key in json.Data_Outputs) {

                var textBox = document.createElement('input');
                var form = document.createElement('form');
                var label = document.createElement('label');
                var node = document.createTextNode(key);
                var item = document.createElement('li');

                textBox.name = 'reference[]';
                textBox.type = 'text';
                textBox.value = json.Data_Outputs[key]
                textBox.disabled = true;
                item.appendChild(node);
                item.appendChild(textBox);
                label.appendChild(item);
                form.appendChild(label);

                ul_data_out.appendChild(form);
            }
         for (var key in json.Web_Params) {

                var textBox = document.createElement('input');
                var form = document.createElement('form');
                var label = document.createElement('label');
                var node = document.createTextNode(key);
                var item = document.createElement('li');

                textBox.name = 'reference[]';
                textBox.type = 'text';
                textBox.value = json.Web_Params[key]
                item.appendChild(node);
                item.appendChild(textBox);
                label.appendChild(item);
                form.appendChild(label);

                ul_web.appendChild(form);
            }

         for (var key in json.Web_Outputs) {

                var textBox = document.createElement('input');
                var form = document.createElement('form');
                var label = document.createElement('label');
                var node = document.createTextNode(key);
                var item = document.createElement('li');

                textBox.name = 'reference[]';
                textBox.type = 'text';
                textBox.value = json.Web_Outputs[key]
                textBox.disabled = true;
                item.appendChild(node);
                item.appendChild(textBox);
                label.appendChild(item);
                form.appendChild(label);

                ul_web_out.appendChild(form);
            }
         });
}

function addProperStackIdClass(elementId, stackId){
    $('#'+ elementId).data("stack-id" ,stackId);
}

$(document).ready(function() {

getStack();


});