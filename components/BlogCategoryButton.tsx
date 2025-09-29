"use client";

interface BlogCategoryButtonProps {
  category: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const BlogCategoryButton: React.FC<BlogCategoryButtonProps> = ({ category, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-medium text-sm sm:text-base transition
        ${active ? "bg-navy text-ivory" : "bg-highligt text-navy hover:bg-gray-200"}`}
    >
      {category}
    </button>
  );
};

export default BlogCategoryButton;
