import React from "react";
import { useParams } from "react-router-dom";
import content from "./portfolio content/content";
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkIcon from '@mui/icons-material/Link';
import Carousel from "./Carousel";

export default function CardDetails() {
    const {id} = useParams();

    const iconMap = {
        Github: <GitHubIcon />,
        YouTube: <YouTubeIcon />,
        Default: <LinkIcon/>,
    };

    const project = content.find((item) => item.key === Number(id));

    if (!project) {
        return (
            <div className="card-body page">
                <h2>Project not found</h2>
                <p>The project you're looking for does not exist or the URL is incorrect.</p>
            </div>
        );
    }

    const mediaItems = project.img.slice(0, 3).map((src, index) => {
        const isVideo = /\.(mp4|mov|webm)$/i.test(src);
        return {
            src,
            alt: isVideo ? `Video ${index + 1}` : `Image ${index + 1}`,
        };
    });

    return (
        <div className="card-body page">
            <Carousel media={mediaItems} />
            <h5 className="title">{project.title}</h5>
            <h6 className="subtitle">{project.subtitle}</h6>
            <p className="text">{project.text}</p>
            <div className="taglist">
                {project.stack && project.stack.map((tag, index)=> (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="linklist">
            {project.linkName.map((name, index) => (
                <a
                    href={project.url[index]}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: '10px', display: 'inline-block' }}
                >
                    {iconMap[name] || iconMap.Default}
                </a>
            ))}
            </div>
        </div>
    );
}
