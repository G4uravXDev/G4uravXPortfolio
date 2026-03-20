import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Validate the inputs
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            console.error("Missing Web3Forms Access Key");
            return NextResponse.json(
                { message: "Server misconfiguration. Missing API key." },
                { status: 500 }
            );
        }

        // Send to Web3Forms API
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                name: name,
                email: email,
                message: message,
                subject: `New Portfolio Contact: ${name}`,
                from_name: "Portfolio Website",
            }),
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
        } else {
            console.error("Web3Forms error:", result);
            return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
        }

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { message: "Failed to send email" },
            { status: 500 }
        );
    }
}
