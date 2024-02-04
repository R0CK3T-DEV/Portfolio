import { useState } from "react";
import { toast } from "react-hot-toast";

type SubmitResponse = {
    error?: string;
} & {
    success: boolean;
};

const toastStyle = {
    borderRadius: "10px",
    background: "#1f2937",
    color: "#fff",
};

export function ContactTab() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const [sending, setSending] = useState(false);

    const handleSubmit = async () => {
        setSending(true);
        const promise = fetch("https://" + import.meta.env.VITE_CONTACT_URL, {
            method: "POST",

            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                content: content,
            }),
        })
            .then((response) => response.json())
            .then((data: SubmitResponse) => {
                if (data.error) {
                    toast.error(data.error, { style: toastStyle });
                    setSending(false);
                    return;
                }

                toast.success("Your response has been sent succesfully!", {
                    style: toastStyle,
                });
            });
        toast.promise(
            promise,
            {
                loading: "Submitting...",
                success: "Sent!",
                error: (res) => {
                    setSending(false);
                    return `Error submitting your form. Error: ${res}`;
                },
            },
            {
                style: toastStyle,
            },
        );
    };

    return (
        <div className="tab">
            <div className="card">
                <h2 className="tab-title">CONTACT</h2>

                <div
                    aria-roledescription="form"
                    style={{
                        maxHeight: "60vh",
                        overflow: "hidden",
                        overflowY: "scroll",
                    }}
                    className="flex flex-col items-start justify-center gap-4"
                >
                    {/* name */}
                    <div className="form-group">
                        <label htmlFor="nameContact" className="form-label">
                            FIRST & LAST NAME
                        </label>
                        <input
                            name="name"
                            id="nameContact"
                            className="form-input"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {/* email */}
                    <div className="form-group">
                        <label htmlFor="nameContact" className="form-label">
                            E-MAIL
                        </label>
                        <input
                            name="name"
                            id="nameContact"
                            className="form-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* subject */}
                    <div className="form-group">
                        <label htmlFor="nameContact" className="form-label">
                            SUBJECT
                        </label>
                        <input
                            name="name"
                            id="nameContact"
                            className="form-input"
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    {/* content */}
                    <div className="form-group">
                        <label htmlFor="nameContact" className="form-label">
                            CONTENT
                        </label>
                        <textarea
                            name="name"
                            id="nameContact"
                            className="form-input"
                            defaultValue={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="w-fullflex-row mx-auto flex justify-center">
                        <button
                            role="button"
                            onClick={handleSubmit}
                            className="button primary"
                            disabled={sending}
                        >
                            SEND
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
