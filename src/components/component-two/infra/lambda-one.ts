import { SQSEvent } from "aws-lambda";
import app, { Payload } from "../core/app";

export const handler = async (event: SQSEvent) => {
  // here map the SNS Event to the app specific domain model to keep the app independent of infra
  const payloads: Payload[] = event.Records.map((record) => ({
    // this is just for demonstration. Ideally you will deserialize the message and assign it to individual properties
    name: record.body,
  }));

  await app(payloads);
};
