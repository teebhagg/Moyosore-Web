import { NextRequest, NextResponse } from "next/server";
import * as SibApiV3Sdk from "@sendinblue/client";

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

apiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body: any = await req.json();
  
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.subject = body.subject;
  sendSmtpEmail.sender = { name: body.fullName, email: body.email };
  sendSmtpEmail.to = [{ email: "moyosorejones@gmail.com", name: "Moyosore Jones" }];
  sendSmtpEmail.htmlContent = `<html><body><p>${body.message}</p></body></html>`;

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    console.error("API call failed. Error: " + JSON.stringify(error));
    return new NextResponse(JSON.stringify(error.message), { status: 400 });
  }
};
