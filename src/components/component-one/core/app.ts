export interface Payload {
  readonly name: string;
}

export default async (payloads: Payload[]) => {
  payloads.forEach((payload) => console.log(payload));
};
