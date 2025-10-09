import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface TrialEmailRequest {
  childName: string;
  age: string;
  parentName: string;
  phone: string;
  email: string;
  preferredBatch: string;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: TrialEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "RSA Academy <onboarding@resend.dev>",
      to: ["Soumodip.m@gmail.com"],
      subject: "New Trial Session Request - RSA Academy",
      html: `
        <h1>New Trial Session Request</h1>
        <h2>Student Information</h2>
        <p><strong>Child's Name:</strong> ${formData.childName}</p>
        <p><strong>Age:</strong> ${formData.age}</p>
        
        <h2>Parent/Guardian Information</h2>
        <p><strong>Name:</strong> ${formData.parentName}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        
        <h2>Batch Preference</h2>
        <p>${formData.preferredBatch}</p>
        
        ${formData.notes ? `<h2>Additional Notes</h2><p>${formData.notes}</p>` : ''}
        
        <hr>
        <p style="color: #666; font-size: 12px;">This email was sent from the RSA Academy website contact form.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
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
