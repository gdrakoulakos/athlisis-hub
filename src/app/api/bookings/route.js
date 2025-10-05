import { supabase } from "../../../lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase.from("bookings").select("*");

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return Response.json(data);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { data, error } = await supabase.from("bookings").insert([body]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    const insertedBookingData = data && data.length > 0 ? data[0] : null;

    return Response.json({
      message: "Booking added successfully",
      movie: insertedBookingData,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}