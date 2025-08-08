import fetch from "node-fetch";

export class FirebaseEvents {
  constructor(firebaseAppId, apiSecret, logger) {
    this.firebaseAppId = firebaseAppId;
    this.apiSecret = apiSecret;
    this.logger = logger;
  }

  triggerEvent(payload) {
    // console.log('triggering firebase event')
    // console.log(payload)
    this.logger.info(`Triggering Firebase event`);
    this.logger.child({'payload': payload});

    return fetch(
      `https://www.google-analytics.com/mp/collect?firebase_app_id=${this.firebaseAppId}&api_secret=${this.apiSecret}`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
  }
}

export default { FirebaseEvents };
