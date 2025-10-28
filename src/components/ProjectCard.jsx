const ProjectCard = ({ title, description, imageUrl, tags }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
