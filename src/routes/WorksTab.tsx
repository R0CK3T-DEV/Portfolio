import { useEffect, useState } from "react";

type Work = {
    key: number;
    name: string;
    type: string;
    releaseDate: string;
    description: string;
    technologies: [string];
    link: string;
    thumbnail: string;
};

export function WorksTab() {
    const [works, setWorks] = useState<Work[]>([]);

    useEffect(function fetchWorks() {
        fetch("/works.json")
            .then((res) => res.json())
            .then((data: Work[] | undefined) => {
                if (data) {
                    setWorks(data);
                }
            });
    }, []);

    return (
        <div className="tab" aria-roledescription="tab pane">
            <div className="card" aria-roledescription="tab card">
                <h2 className="tab-title">WORKS</h2>

                <div className="work-list">
                    {works.length > 0
                        ? works.map((work, index) => {
                              return (
                                  <div key={index} className="work">
                                      <img
                                          className="thumbnail"
                                          src={work.thumbnail}
                                      />
                                      <div className="ms-2 flex flex-col items-start justify-start gap-2">
                                          <div className="justicy-center flex w-full flex-col items-center gap-2 md:flex-row md:justify-start">
                                              <h1
                                                  aria-roledescription="work title"
                                                  className="text-2xl font-bold"
                                              >
                                                  {work.name}
                                              </h1>
                                              <h3 className="text-xl lowercase text-slate-400">
                                                  ({work.type})
                                              </h3>
                                          </div>
                                          <p aria-roledescription="work description">
                                              {work.description}
                                          </p>
                                          <p>Released in: {work.releaseDate}</p>
                                          <a
                                              aria-roledescription="work link"
                                              href={
                                                  work.link == ""
                                                      ? "#"
                                                      : work.link
                                              }
                                              {
                                                  ...(work.link != ""
                                                      ? {
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                        }
                                                      : { target: "", rel: "" })
                                                  /* if link is empty, prevent it from opening tabs */
                                              }
                                          >
                                              {/* if link is empty, let the user know */}
                                              {work.link == "" ||
                                              work.link == undefined
                                                  ? "Link is not available"
                                                  : "Go to page (new tab/window)"}
                                          </a>
                                          <div
                                              aria-roledescription="technologies section"
                                              className="technologies"
                                          >
                                              <p>Technologies used: </p>
                                              <div
                                                  className="badge-list"
                                                  aria-roledescription="badge list"
                                              >
                                                  {work.technologies.map(
                                                      (tech, i) => {
                                                          return (
                                                              <span
                                                                  aria-roledescription="badge"
                                                                  className="badge"
                                                                  key={i}
                                                              >
                                                                  {tech}
                                                              </span>
                                                          );
                                                      },
                                                  )}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })
                        : undefined}
                </div>
            </div>
        </div>
    );
}
