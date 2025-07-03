import { toNextJSHandler } from "better-auth/next-js";
import { auth } from "@/lib/auth";

export const { GET, POST} = toNextJSHandler(auth.handler)