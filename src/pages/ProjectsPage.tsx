import { useState } from "react";
import { useTranslation } from "react-i18next";
import HeroBanner from "../components/commons/molecules/HeroBanner";
import { projectsData } from "../utils/ProjectsData";

type Project = {
  id: number;
  name: string;
  imageUrl: string;
  status: string;
  tech: string;
  github: string;
  demo: string;
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useTranslation();

  return (
    <>
      <section>
        <HeroBanner />
        <div className="mt-5 text-left text-(--text-color-black)">
          <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
            {t("projectsTitle")}
          </h1>
          <p className="mt-2 text-sm opacity-70">
            {t("projectsSubtitle")}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={t(`projectList.p${project.id}.name`)}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-(--text-color-black)">{t(`projectList.p${project.id}.name`)}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-600">{t(`projectList.p${project.id}.status`)}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.tech.split(", ").slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
                      {tech}
                    </span>
                  ))}
                  {project.tech.split(", ").length > 3 && (
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                      +{project.tech.split(", ").length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setSelectedProject(null)}
          />
          <div className="fixed left-1/2 top-1/2 z-51 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={() => setSelectedProject(null)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-(--text-color-black)">{t(`projectList.p${selectedProject.id}.name`)}</h2>
              <p className="mt-3 text-sm text-gray-600">{t(`projectList.p${selectedProject.id}.status`)}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tech.split(", ").map((tech, idx) => (
                  <span key={idx} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                >
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> {t("liveDemo")}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectsPage;