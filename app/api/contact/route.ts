import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, country, phone, telegram } = body;

  const botToken = process.env.TELEGRAM_BOT_TOKEN!;
  const chatId = process.env.TELEGRAM_CHAT_ID!;

  const text = `
📩 New Agent Application:

👤 Name: ${name}
📧 Email: ${email}
🌍 Country: ${country}
📱 Phone: ${phone}
💬 Telegram: ${telegram}
  `;

  const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    await fetch(sendMessageUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Telegram error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
