


// import React, { useEffect, useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth, db } from "../firebase";
// import { useNavigate } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const [totalStudents, setTotalStudents] = useState(0);
//   const [totalPendingFees, setTotalPendingFees] = useState(0);
//   const [newAdmissions, setNewAdmissions] = useState(0);
//   const [studentsData, setStudentsData] = useState([]); // 💡 Store all student submissions

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "users"));

//         let studentCount = 0;
//         let pendingFees = 0;
//         const tempData = [];

//         const now = new Date();
//         const lastWeek = new Date();
//         lastWeek.setDate(now.getDate() - 7);

//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           studentCount++;
//           pendingFees += data.feesPending ? Number(data.feesPending) : 0;

//           tempData.push({
//             id: doc.id,
//             studentName: data.studentName,
//             parentName: data.parentName,
//             email: data.email,
//             phone: data.phone,
//             grade: data.grade,
//             message: data.message,
//             createdAt: data.createdAt ? data.createdAt.toDate() : null,
//             feesPending: data.feesPending,
//           });
//         });

//         setTotalStudents(studentCount);
//         setTotalPendingFees(pendingFees);

//         const newCount = tempData.filter(
//           (item) => item.createdAt && item.createdAt >= lastWeek
//         ).length;
//         setNewAdmissions(newCount);

//         // Sort by newest first
//         tempData.sort((a, b) => b.createdAt - a.createdAt);
//         setStudentsData(tempData);

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="pt-24 min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-green-600 py-12 relative overflow-hidden">
//         <div className="container mx-auto px-6 relative z-10 flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
//             <p className="text-gray-200">Manage notices, admissions, and student records.</p>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//             <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">Total Students</h3>
//             <p className="text-4xl font-bold">{totalStudents}</p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//             <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">New Admissions (Last 7 Days)</h3>
//             <p className="text-4xl font-bold text-green-600">{newAdmissions}</p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//             <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">Pending Fees</h3>
//             <p className="text-4xl font-bold text-red-500">₹{totalPendingFees}</p>
//           </div>
//         </div>
//       </div>

//       {/* Student Submissions Table */}
//       <div className="container mx-auto px-6 pb-12">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Admissions</h2>
//         {studentsData.length === 0 ? (
//           <p className="text-gray-500">No admissions yet.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white rounded-2xl shadow border border-gray-100">
//               <thead className="bg-green-50 text-gray-700 uppercase text-sm font-semibold">
//                 <tr>
//                   <th className="py-3 px-4 text-left">#</th>
//                   <th className="py-3 px-4 text-left">Student Name</th>
//                   <th className="py-3 px-4 text-left">Parent Name</th>
//                   <th className="py-3 px-4 text-left">Email</th>
//                   <th className="py-3 px-4 text-left">Phone</th>
//                   <th className="py-3 px-4 text-left">Class</th>
//                   <th className="py-3 px-4 text-left">Message</th>
//                   <th className="py-3 px-4 text-left">Submitted On</th>
//                   <th className="py-3 px-4 text-left">Pending Fees</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {studentsData.map((student, idx) => (
//                   <tr key={student.id} className="border-t border-gray-100 hover:bg-green-50 transition">
//                     <td className="py-3 px-4">{idx + 1}</td>
//                     <td className="py-3 px-4">{student.studentName}</td>
//                     <td className="py-3 px-4">{student.parentName}</td>
//                     <td className="py-3 px-4">{student.email}</td>
//                     <td className="py-3 px-4">{student.phone}</td>
//                     <td className="py-3 px-4">{student.grade}</td>
//                     <td className="py-3 px-4">{student.message || "-"}</td>
//                     <td className="py-3 px-4">{student.createdAt ? student.createdAt.toLocaleString() : "-"}</td>
//                     <td className="py-3 px-4">₹{student.feesPending}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;








import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [totalStudents, setTotalStudents] = useState(0);
  const [totalPendingFees, setTotalPendingFees] = useState(0);
  const [newAdmissions, setNewAdmissions] = useState(0);
  const [studentsData, setStudentsData] = useState([]);
  const [search, setSearch] = useState("");

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  // Function to update student status
  const updateStatus = async (id, status) => {
    try {
      await updateDoc(doc(db, "users", id), { status });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      let studentCount = 0;
      let pendingFees = 0;
      const tempData = [];

      const now = new Date();
      const lastWeek = new Date();
      lastWeek.setDate(now.getDate() - 7);

      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        studentCount++;
        pendingFees += data.feesPending ? Number(data.feesPending) : 0;

        tempData.push({
          id: docSnap.id,
          studentName: data.studentName,
          parentName: data.parentName,
          email: data.email,
          phone: data.phone,
          grade: data.grade,
          message: data.message || "-",
          createdAt: data.createdAt ? data.createdAt.toDate() : null,
          feesPending: data.feesPending || 0,
          status: data.status || "Pending",
        });
      });

      // Sort by newest first
      tempData.sort((a, b) => b.createdAt - a.createdAt);

      setTotalStudents(studentCount);
      setTotalPendingFees(pendingFees);
      setNewAdmissions(
        tempData.filter((item) => item.createdAt && item.createdAt >= lastWeek)
          .length
      );
      setStudentsData(tempData);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  // Filtered data by search
  const filteredData = studentsData.filter(
    (s) =>
      s.studentName.toLowerCase().includes(search.toLowerCase()) ||
      s.grade.toLowerCase().includes(search.toLowerCase()) ||
      s.status.toLowerCase().includes(search.toLowerCase())
  );

  // Export CSV
  const exportCSV = () => {
    const headers = [
      "Student Name",
      "Parent Name",
      "Email",
      "Phone",
      "Class",
      "Message",
      "Submitted On",
      "Pending Fees",
      "Status",
    ];
    const rows = filteredData.map((s) => [
      s.studentName,
      s.parentName,
      s.email,
      s.phone,
      s.grade,
      s.message,
      s.createdAt ? s.createdAt.toLocaleString() : "-",
      s.feesPending,
      s.status,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "admissions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-200">
              Manage notices, admissions, and student records.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">
              Total Students
            </h3>
            <p className="text-4xl font-bold">{totalStudents}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">
              New Admissions (Last 7 Days)
            </h3>
            <p className="text-4xl font-bold text-green-600">{newAdmissions}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">
              Pending Fees
            </h3>
            <p className="text-4xl font-bold text-red-500">₹{totalPendingFees}</p>
          </div>
        </div>
      </div>

      {/* Search & Export */}
      <div className="container mx-auto px-6 flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by name, class, status..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={exportCSV}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Export CSV
        </button>
      </div>

      {/* Student Submissions Table */}
      <div className="container mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Student Admissions
        </h2>
        {filteredData.length === 0 ? (
          <p className="text-gray-500">No admissions yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl shadow border border-gray-100">
              <thead className="bg-green-50 text-gray-700 uppercase text-sm font-semibold">
                <tr>
                  <th className="py-3 px-4 text-left">#</th>
                  <th className="py-3 px-4 text-left">Student Name</th>
                  <th className="py-3 px-4 text-left">Parent Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Class</th>
                  <th className="py-3 px-4 text-left">Message</th>
                  <th className="py-3 px-4 text-left">Submitted On</th>
                  <th className="py-3 px-4 text-left">Pending Fees</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((student, idx) => (
                  <tr
                    key={student.id}
                    className="border-t border-gray-100 hover:bg-green-50 transition"
                  >
                    <td className="py-3 px-4">{idx + 1}</td>
                    <td className="py-3 px-4">{student.studentName}</td>
                    <td className="py-3 px-4">{student.parentName}</td>
                    <td className="py-3 px-4">{student.email}</td>
                    <td className="py-3 px-4">{student.phone}</td>
                    <td className="py-3 px-4">{student.grade}</td>
                    <td className="py-3 px-4">{student.message}</td>
                    <td className="py-3 px-4">
                      {student.createdAt ? student.createdAt.toLocaleString() : "-"}
                    </td>
                    <td className="py-3 px-4">₹{student.feesPending}</td>
                    <td className="py-3 px-4">{student.status}</td>
                    <td className="py-3 px-4 flex gap-2">
                      {student.status === "Pending" && (
                        <>
                          <button
                            onClick={() => updateStatus(student.id, "Approved")}
                            className="bg-green-600 text-white px-2 py-1 rounded"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => updateStatus(student.id, "Rejected")}
                            className="bg-red-600 text-white px-2 py-1 rounded"
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {student.status !== "Pending" && (
                        <span className="text-gray-500">{student.status}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
