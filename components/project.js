import Image from 'next/image';

const Project = ({ source, url, name, text }) => {
  return (
    <div className="project-container">
      <div className="border">
        <div className="image-container">
          <Image src={source} width={750} height={400} />
        </div>
        <div className="text-container">
          <h4>{name}</h4>
          <p>{text}</p>
          <a className="btn" href={url} target="_blank">
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
