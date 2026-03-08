"use client";

import { useEffect, useCallback, useState } from "react";


export function ProjectModal({ project, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
  }, []);

  const handleEscape = useCallback(
    (e) => {
      if (e.key === "Escape" && !isClosing) handleClose();
    },
    [handleClose, isClosing]
  );

  // Entrance: start closed then open
  useEffect(() => {
    if (project) {
      setIsClosing(false);
      const t = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsOpen(true));
      });
      return () => cancelAnimationFrame(t);
    } else {
      setIsOpen(false);
    }
  }, [project]);

  // Exit: after closing animation, notify parent
  useEffect(() => {
    if (!isClosing) return;
    const id = setTimeout(onClose, 300);
    return () => clearTimeout(id);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (project) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, handleEscape]);

  if (!project) return null;

  const state = isClosing ? "closed" : isOpen ? "open" : "closed";

  const body = (
    <>
      <div
        className="project-modal-backdrop fixed inset-0 z-[100] bg-[#1D3461]/20 backdrop-blur-md transition-opacity duration-300 ease-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100"
        data-state={state}
        onClick={handleClose}
        aria-hidden
      />
      <div
        className="project-modal-content fixed left-1/2 top-1/2 z-[110] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-white bg-[#1D3461]/70 dark:bg-[#33415C]/70 p-6 shadow-2xl transition-[transform,opacity] duration-300 ease-out data-[state=closed]:scale-95 data-[state=closed]:opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100 md:p-8"
        data-state={state}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="project-modal-title"
            className="font-serif text-2xl font-normal text-white md:text-3xl"
          >
            {project.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-xl p-2 text-gray-300 transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="mt-3 text-gray-300">
          {project.longDescription ?? project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.skills?.map(skill => (
            <span
              key={skill}
              className="rounded-xl bg-[#6290C8] px-3 py-1 text-xs font-semibold text-white"
            >
              {skill}
            </span>
          ))}
        </div>
        {(project.liveUrl || project.repoUrl || project.href) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                View live site
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M21 3l-7 7M10 14l11-11" /></svg>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)]/50"
              >
                Source code
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              </a>
            )}
            {!project.liveUrl && !project.repoUrl && project.href && project.href !== "#" && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M21 3l-7 7M10 14l11-11" /></svg>
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      aria-hidden={!project}
    >
      {body}
    </div>
  );
}
