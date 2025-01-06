import { defineFunction } from "@aws-amplify/backend";

export const myFunction = defineFunction({
    name: "myfirst";
    entry: "./handler.ts";
});