const PageLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center border bg-gray-100">
      <div className="flex flex-col items-center gap-6">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent shadow-lg"></div>
        <p className="text-lg font-semibold text-gray-700">
          Please wait, loading...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
