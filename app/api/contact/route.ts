import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

  try {

    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "WiselineBizz Website <onboarding@resend.dev>",
      to: ["YOUR_GMAIL@gmail.com"],
      replyTo: email,
      subject: `New Website Enquiry from ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f4f7f9;font-family:Arial,sans-serif;">
            
            <div style="max-width:650px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
              
              <div style="padding:28px;background:#020617;color:#ffffff;">
                <h1 style="margin:0;font-size:24px;">
                  New Website Enquiry
                </h1>

                <p style="margin:8px 0 0;color:#94a3b8;">
                  Someone submitted the contact form on WiselineBizz.
                </p>
              </div>

              <div style="padding:30px;">
                
                <h2 style="font-size:18px;color:#0f172a;">
                  Contact Details
                </h2>

                <table style="width:100%;border-collapse:collapse;">
                  
                  <tr>
                    <td style="padding:10px 0;font-weight:bold;color:#475569;">
                      Name
                    </td>
                    <td style="padding:10px 0;color:#0f172a;">
                      ${name}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;color:#475569;">
                      Email
                    </td>
                    <td style="padding:10px 0;color:#0f172a;">
                      ${email}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;color:#475569;">
                      Phone
                    </td>
                    <td style="padding:10px 0;color:#0f172a;">
                      ${phone || "Not provided"}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;color:#475569;">
                      Company
                    </td>
                    <td style="padding:10px 0;color:#0f172a;">
                      ${company || "Not provided"}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 0;font-weight:bold;color:#475569;">
                      Service
                    </td>
                    <td style="padding:10px 0;color:#0f172a;">
                      ${service || "Not specified"}
                    </td>
                  </tr>

                </table>

                <h2 style="margin-top:30px;font-size:18px;color:#0f172a;">
                  Message
                </h2>

                <div style="padding:20px;background:#f8fafc;border-radius:10px;color:#334155;line-height:1.6;">
                  ${message}
                </div>

              </div>

              <div style="padding:20px 30px;background:#f8fafc;border-top:1px solid #e5e7eb;">
                <p style="margin:0;font-size:12px;color:#94a3b8;">
                  This enquiry was submitted through wiselinebizz.com
                </p>
              </div>

            </div>

          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      data,
    });
    
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}