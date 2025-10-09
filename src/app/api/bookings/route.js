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
      booking: insertedBookingData,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json(); // Expecting { "id": <booking_id> }

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing booking ID" }), {
        status: 400,
      });
    }

    const { error } = await supabase.from("bookings").delete().eq("id", id);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return Response.json({
      message: `Booking with ID ${id} deleted successfully`,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}