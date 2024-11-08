import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const MoveToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Show the button if scrolled more than 100px, otherwise hide it
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className=" w-10 h-10 flex items-center justify-center rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

export default MoveToTop;
