type KnowledgeData = {
    language?: string;
    content?: KnowledgeData[] | string;
    resetIndent?: boolean;
};

const dummyData: { known: KnowledgeData[]; learning: KnowledgeData[] } = {
    known: [
        {
            language: "JavaScript",
            content: [
                {
                    language: "ReactJS",
                    content:
                        "Front-end UI development (CSS, TailwindCSS, and more)",
                },
                {
                    language: "NodeJS",
                    content: [
                        {
                            content: "Back-end server development",
                        },
                        {
                            content: "API development with ExpressJS",
                        },
                    ],
                },
            ],
        },
        {
            language: "C#",
            content: "Unity game developer",
            resetIndent: true,
        },
        {
            language: "PHP",
            content: "Back-end server development",
        },
        {
            language:
                "(Some) things related to the ones above that I know how to use are:",
            content: "JSON, REST API protocol, JSON Web Tokens, MariaDB",
        },
    ],
    learning: [
        {
            content: "I'm not currently focused on learning anything.",
        },
    ],
};

let listIndent = -3;
function GetList(data: KnowledgeData[]) {
    listIndent += 3;

    return data.map((d, index) => {
        if (d.resetIndent == true) listIndent = 0;
        return (
            <div
                className="mt-2"
                key={index}
                style={{ marginLeft: listIndent }}
            >
                <h4 className="text-lg underline">{d.language}</h4>
                {d.content ? (
                    typeof d.content !== "string" ? (
                        GetList(d.content)
                    ) : (
                        <p>{d.content}</p>
                    )
                ) : null}
            </div>
        );
    });
}

export function KnowledgeTab() {
    return (
        <div aria-roledescription="tab pane" className="tab">
            <div className="card" aria-roledescription="tab card">
                <h2 className="tab-title">KNOWLEDGE</h2>
                <div
                    className="overflox-hidden overflow-y-scroll"
                    style={{ maxHeight: "50vh" }}
                >
                    <h4 className="text-lg font-bold">THINGS I KNOW</h4>

                    {GetList(dummyData.known)}

                    <h4 className="mt-4 text-lg font-bold">
                        THINGS I'M LEARNING
                    </h4>

                    {GetList(dummyData.learning)}
                </div>
            </div>
        </div>
    );
}
