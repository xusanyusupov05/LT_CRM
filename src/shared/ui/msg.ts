import { message } from "antd";

export type MessageType = "success" | "error" | "warning" | "info" | "loading";

export const msg = (type: MessageType, text: string) => {
  message.open({
    type,
    content: text,
    duration: 2,  
  });
};