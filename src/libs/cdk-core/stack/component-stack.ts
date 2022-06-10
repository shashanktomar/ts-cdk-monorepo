import { Construct } from "constructs";
import { Context } from "../types";
import { BaseStack } from "./base-stack";

export class ComponentStack extends BaseStack {
  constructor(parent: Construct, public readonly context: Context) {
    super(parent, context.stackInfo);
  }
}
