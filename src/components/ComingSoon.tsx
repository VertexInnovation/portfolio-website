interface ComingSoonProps {
    pageName: string;
  }
  
  function ComingSoon({ pageName }: ComingSoonProps) {
    return (
      <div className="text-center">
        <img
          src="../src/assets/ComingSoon.jpg"
          alt="Coming Soon"
          className="w-64 mx-auto"
        />
        <h1 className="text-2xl font-semibold mt-4">🚀 {pageName} Coming Soon!</h1>
        <p className="text-gray-600 mt-2">
          We're working hard to bring you amazing content. Stay tuned!
        </p>
      </div>
    );
  }
  
  export default ComingSoon;
  