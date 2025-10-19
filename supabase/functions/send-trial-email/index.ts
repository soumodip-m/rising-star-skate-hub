import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface TrialEmailRequest {
  parentName: string;
  studentName: string;
  email: string;
  phone: string;
  age: string;
  sport: string;
  preferredDate: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { parentName, studentName, email, phone, age, sport, preferredDate }: TrialEmailRequest = await req.json();

    console.log("Sending trial booking email to rsa4sports@gmail.com");

    const emailResponse = await resend.emails.send({
      from: "RSA Trial Booking <onboarding@resend.dev>",
      to: ["rsa4sports@gmail.com"],
      subject: `New Trial Booking Request - ${studentName}`,
      html: `
        <h2>New Trial Session Booking</h2>
        <p><strong>Parent/Guardian Name:</strong> ${parentName}</p>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Student Age:</strong> ${age}</p>
        <p><strong>Interested Sport:</strong> ${sport}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
      `,
    });

    console.log("Trial booking email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-trial-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
