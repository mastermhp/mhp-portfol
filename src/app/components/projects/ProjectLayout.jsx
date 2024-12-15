import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({
  name,
  description,
  date,
  demoLink,
  isHosted,
  img,
  video,
}) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink || "#"}
      target={"_blank"}
      className=" text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex flex-col items-center w-[30%] pr-4">
        <h2 className="text-foreground font-bold text-center mb-2">{name || "Untitled Project"}</h2>
        <p className="text-muted text-[12px] hidden sm:inline-block">{description}</p>
        
        <p className="text-muted text-[9px] sm:text-foreground mt-1">
          {new Date(date).toDateString()}
        </p>
        {/* </div> */}
        {/* <p className="text-muted sm:text-foreground">
          {date ? new Date(date).toDateString() : "Date not available"}
        </p> */}
      </div>
      <div className="w-[70%]">
        {isHosted && img && (
          <div className="relative h-48 w-full">
            <Image
              src={img}
              alt={name || "Project image"}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              onError={(e) => {
                e.target.src = "/placeholder.svg";
              }}
            />
          </div>
        )}
        {!isHosted && video && (
          <video
            className="w-full h-48 object-cover rounded-md "
            controls
            muted
            autoPlay
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* <p className="text-muted mb-4">{description || "No description available"}</p> */}
        {/* <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" /> */}

        {/* <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-muted sm:text-foreground">
        {new Date(date).toDateString()}
      </p> */}
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
