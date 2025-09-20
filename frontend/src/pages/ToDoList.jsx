import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { X } from "lucide-react";

export default function ToDoList() {
  const textRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setTasks([...tasks, textRef.current.value]);
    textRef.current.value = null;
    console.log(tasks);
  };
  const del= (id) =>{
    const newarray= tasks.filter((task,index)=>index!==id);
    setTasks(newarray);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8">
          <div className="w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-blue-100">
              <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">To do</h1>
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label htmlFor="Task" className="block text-blue-700 font-semibold mb-2">
                    Enter the Task:
                  </label>
                  <input 
                    type="text" 
                    placeholder="What needs to be done?" 
                    ref={textRef} 
                    required 
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 active:bg-blue-800 transition duration-200 shadow-md hover:shadow-lg"
                >
                  Add Task
                </button>
              </form>
            </div>
          </div>
          
          <div className="w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-blue-100">
              <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">List</h1>
              <div className="space-y-3">
                {tasks.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-blue-400 text-lg">You lazy do something!</p>
                  </div>
                ) : (
                  tasks.map((text, index) => {
                    return (
                      <div key={index} className="flex items-center bg-blue-50 rounded-lg p-3 border border-blue-100 hover:bg-blue-100 transition duration-200">
                        <p className="flex-1 text-blue-800 font-medium px-2">{text}</p>
                        <div className="flex gap-2">
                          <button className="p-1 hover:bg-green-100 rounded-md transition duration-200">
                            <Check className="text-green-600 w-5 h-5" />
                          </button>
                          <button 
                            onClick={() => {del(index)}}
                            className="p-1 hover:bg-red-100 rounded-md transition duration-200"
                          >
                            <X className="text-red-500 w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}    