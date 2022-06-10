import { Duration } from "aws-cdk-lib";

export default {
  LAMBDA: {
    TIMEOUT: Duration.seconds(60),
  },

  SQS: {
    TIMEOUT_MULTIPLICATION_FACTOR: 6,
    RETENTION_PERIOD: Duration.days(2),
  },
};
