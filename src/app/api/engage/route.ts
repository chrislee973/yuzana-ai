import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, organization, role, ambiguity } = await request.json();

    // Validate required fields
    if (!name || !email || !organization || !role || !ambiguity) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Yuzana <noreply@yuzana.ai>",
      to: ["Timothy.lee@yuzana.ai", "christopherlee973@gmail.com"],
      replyTo: `${name} <${email}>`,
      subject: `Engagement Request: ${name} from ${organization}`,
      html: `
        <h2>New Engagement Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Ambiguity to Resolve:</strong></p>
        <p>${ambiguity.replace(/\n/g, "<br>")}</p>
      `,
      text: `
New Engagement Request

Name: ${name}
Email: ${email}
Organization: ${organization}
Role: ${role}
Ambiguity to Resolve: ${ambiguity}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
