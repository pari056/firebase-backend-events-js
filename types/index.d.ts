export class FirebaseEvents {

    /**
     * Constructor for FirebaseEvents class.
     * @param {string} firebaseAppId - The Firebase App ID for your project.
     * @param {string} apiSecret - The API Secret for your Firebase project.
     */   
    constructor(firebaseAppId: string, apiSecret: string)
  
    /**
     * Method to add a new event or update an existing event.
     * @param {object} payload - An object which contains the JSON payload defined in the docs here: https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference?client_type=firebase#payload_post_body
     * @returns {Promise} A response promise(fetch promise) from the provider, if successful, the response will be in JSON format. Errors need to be handled separately.
     */
     triggerEvent(payload: object): Promise<any>
  
}