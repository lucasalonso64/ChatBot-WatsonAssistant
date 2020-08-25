const watson = require('watson-developer-cloud/assistant/v1'); // watson sdk
 
const ASSISTANT_IAM_URL = '';
const ASSISTANT_IAM_APIKEY = '';
 
const chatbot = new watson({
    'version': '2018-02-16',
    'url': ASSISTANT_IAM_URL || '<url>',
    'iam_apikey': ASSISTANT_IAM_APIKEY || '<iam_apikey>',
    'iam_url': 'https://iam.bluemix.net/identity/token'
  });
 
  var payload = {
    workspace_id: 'b2c8156e-0ca5-4d52-93b0-32a52e321046',
    context: {},
    input: {}
  };
 
  //Começando a conversação com a mensagem vazia;
  chatbot.message(payload, function trataResposta(err, resposta){
 
    if(err){
        console.log(err);
        return;
    }
 
    // exibe a resposta do dialogo,caso exista
    if(resposta.output.text.length > 0){
        console.log(resposta.output.text);
    }
  });