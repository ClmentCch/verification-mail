const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const codes = global.codes || (global.codes = {});

module.exports = async (req, res) => {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email } = req.body;

    if (!email) {
        return res.json({ success: false, message: "Email manquant" });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    codes[email] = code;

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Code de vérification",
            html: `<h1>${code}</h1>`
        });

        return res.json({ success: true });

    } catch (err) {
        return res.json({ success: false, message: "Erreur email" });
    }
};