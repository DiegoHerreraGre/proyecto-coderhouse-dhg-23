let SibApiV3Sdk = require('sib-api-v3-sdk')
let defaultClient = SibApiV3Sdk.ApiClient.instance
let apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = 'xkeysib-a23xtBxxnNxMxsSz308x'

const partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = 'xkeysib-a23xtBxxnNxMxsSz308x'

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()

sendSmtpEmail = {
    to: [{
        email: 'testmail@example.com',
        name: 'John Doe'
    }],
    templateId: 59,
    params: {
        name: 'John',
        surname: 'Doe'
    },
    headers: {
        'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
    }
}

apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
    console.log('API called successfully. Returned data: ' + data)
}, function (error) {
    console.error(error)
})