/*import { useState } from "react";
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
};*/

export function ContactTab() {
    /* const handleSubmit = async () => {
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
    }; */

    return (
        <div className="tab">
            <div className="card">
                <h2 className="tab-title">CONTACT</h2>

                <p className="text-center">
                    Due to limitations from the hosting provider, I cannot
                    provide you with a contact form. Instead, I kindly ask you
                    to send me an email to this address:{" "}
                    <a href="mailto:ezequielzapata2023@gmail.com">
                        ezequielzapata2023@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}

/*
    <div
                    aria-roledescription="form"
                    style={{
                        maxHeight: "60vh",
                        overflow: "hidden",
                        overflowY: "scroll",
                    }}
                    className="flex flex-col items-start justify-center gap-4"
                >
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
*/
