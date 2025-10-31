"use client";
import { useRouter } from 'next/navigation'

const NewPage = () => {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    console.log({ title, description });

    const fetchData = async () => {
      try {
        const response = await fetch("/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        });
        const data = await response.json();
        console.log(data);
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form
        className="bg-slate-950 p-4 shadow-md flex flex-col items-center rounded-lg gap-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="text-white">
          Título
        </label>
        <input
          id="title"
          className="border border-gray-300 p-2 rounded-md"
          type="text"
        />
        <label htmlFor="description" className="text-white">
          Descripción
        </label>
        <textarea
          id="description"
          className="border border-gray-300 p-2 rounded-md"
          rows={3}
        ></textarea>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          crear tarea
        </button>
      </form>
    </div>
  );
};

export default NewPage;
