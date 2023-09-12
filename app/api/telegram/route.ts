//  'use client'
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const message = await req.json();
  try {
    const response = await axios.post(URI_API, {
      chat_id: CHAT_ID,
      text: message.text,
      parse_mode: 'HTML',
    });

    if (response.status === 200) {
      return new Response('ok');
      //  return NextResponse.json({status: 200});
      //  NextResponse.next();
    } else {
      return NextResponse.json({ status: 400 });
      // NextResponse.next();
    }

    // return {"status": "200"};
  } catch (error) {
    console.log('error: from route');
    return NextResponse.json({ status: 501 });
    // NextResponse.next();
    // return
  }
}
