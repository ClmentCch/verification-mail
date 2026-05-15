const codes = global.codes || (global.codes = {});

module.exports = (req, res) => {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email, code } = req.body;

    if (codes[email] === code) {
        delete codes[email];

        return res.json({
            success: true,
            redirect: "https://google.com"
        });
    }

    return res.json({
        success: false,
        message: "Code invalide"
    });
};