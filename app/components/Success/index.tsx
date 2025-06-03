const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Success!</h1>
        <p className="text-gray-700 mb-6">
          Thanks for getting in touch! I’ll get back to you soon.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;

