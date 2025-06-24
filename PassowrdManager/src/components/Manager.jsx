import React, { use, useEffect } from "react";
import { useRef } from "react"; // new thing i have learnt
import { useState } from "react";

const Manager = () => {
  const ref = useRef();
  const [from, setfrom] = useState({ site: "", userName: "", password: "" });
  const [passwordarray, setPasswordArray] = useState([]);
  const [showpass, setpass] = useState(false);
  const inputRef = useRef();

  const showpassword = () => {
    if (ref.current.src.includes("img/eye.png")) {
      ref.current.src = "img/eye-close-1.png"; // Make sure this file exists
      setpass(!showpass);
    } else {
      ref.current.src = "img/eye.png";
      inputRef.current.type = showpass ? "password" : "text";
    }
  };

  // useEffect to load passwords from localStorage when component mounts
  useEffect(() => {
    const getPass = () => {
      try {
        const savedPasswords = localStorage.getItem("password");
        if (savedPasswords) {
          setPasswordArray(JSON.parse(savedPasswords));
        }
      } catch (error) {
        console.error("Error loading passwords from localStorage:", error);
      }
    };

    getPass();
  }, []);

  {
    /**local storage  */
  }

  const savePass = () => {
    {
      /**local storage  */
    }

    // Check if all fields are filled
    if (!from.site || !from.userName || !from.password) {
      alert("Please fill all fields!");
      return;
    }

    const updatedArray = [...passwordarray, from];
    setPasswordArray(updatedArray); // correctly update state
    localStorage.setItem("password", JSON.stringify(updatedArray)); // store in localStorage
    console.log("Saved passwords:", updatedArray);

    // Backend connection (if you want to also save to server)
    const saveToBackend = async () => {
      try {
        console.log("Sending to backend:", from); // Debug log

        let res = await fetch("http://localhost:3000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(from), // Send just the current password, not the whole array
        });

        console.log("Response status:", res.status); // Debug log

        if (res.ok) {
          const result = await res.json();
          console.log("Saved to backend successfully:", result);
        } else {
          const errorText = await res.text();
          console.error(
            "Backend error:",
            res.status,
            res.statusText,
            errorText
          );
        }
      } catch (error) {
        console.error("Error saving to backend:", error);
        console.log("Data still saved locally!");
      }
    };

    // Save to backend first, then clear form
    saveToBackend().then(() => {
      setfrom({ site: "", userName: "", password: "" });
    });
  };

  const handleChange = (e) => {
    setfrom({ ...from, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied to clipboard:", text);
        alert("Copied !");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="container mx-auto max-w-4xl md:400px">
        <h1 className="flex justify-center font-bold ">
          <span className="text-green-700">&lt;</span>
          <span className="text-white text-2xl">PassWord</span>
          <span className="text-green-700">Manager/ &gt;</span>
        </h1>
        <br />
        <p className="font-bold flex justify-center text-white text-mg">
          Your password manager and don't worry it is local running 😉
        </p>
        <br />
        <div className="text-green flex flex-col p-4 gap-8">
          {/**The website input over here */}
          <input
            value={from.site}
            onChange={handleChange}
            className="rounded-full p-4 w-full border border-green-500"
            type="text"
            name="site"
            placeholder='Enter web name eg."WWW.SAHILBLOG.COM"'
          />
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            {/**the WebUserName */}
            <input
              value={from.userName}
              onChange={handleChange}
              className="rounded-full p-4 border border-green-700 w-full"
              type="text"
              name="userName"
              placeholder='Enter web name e.g. "WWW.SAHILBLOG.COM"'
            />
            <div className="relative w-full md:w-1/2">
              {/**the Password over here */}
              <input
                value={from.password}
                onChange={handleChange}
                className="w-full rounded-full p-4 border border-green-600 pr-20"
                ref={inputRef}
                type="password"
                name="password"
                placeholder="Enter your password here"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-green-600 hover:text-green-800"
                onClick={showpassword}
              >
                <img
                  ref={ref}
                  className="p-5 "
                  width={60}
                  src="img/eye.png"
                  alt="eyeimg"
                />
              </span>
            </div>
          </div>
          <button
            className="flex justify-center items-center bg-green-500 rounded-full px-4 py-2 w-fit hover:bg-green-800 transition-all duration-200 ease-in font-bold text-white"
            onClick={savePass}
          >
            <lord-icon
              src="https://cdn.lordicon.com/ueoydrft.json"
              trigger="hover"
            ></lord-icon>
            AddPassword
          </button>
        </div>

        <div className="password">
          <h2 className="text-white text-4xl py-4">Your Saved Passwords</h2>
          {passwordarray.length === 0 && (
            <div className="text-white font-bold">
              No Password Has been Saved
            </div>
          )}
          {passwordarray != 0 && (
            <table className="table-auto w-full  rounded-xl overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2">WebName</th>
                  <th className="py-2">UserName</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="text-white bg-blue-300">
                {passwordarray.map((iteam, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 text-center w-10">
                        <div className="flex items-center justify-center gap-2">
                          {iteam.site}
                          <lord-icon
                            src="https://cdn.lordicon.com/xuoapdes.json"
                            trigger="hover"
                            style={{
                              width: "20px",
                              height: "20px",
                              cursor: "pointer",
                            }}
                            onClick={() => copyToClipboard(iteam.site)}
                          ></lord-icon>
                        </div>
                      </td>
                      <td className="py-2 text-center w-10">
                        <div className="flex items-center justify-center gap-2">
                          {iteam.userName}
                          <lord-icon
                            src="https://cdn.lordicon.com/xuoapdes.json"
                            trigger="hover"
                            style={{
                              width: "20px",
                              height: "20px",
                              cursor: "pointer",
                            }}
                            onClick={() => copyToClipboard(iteam.userName)}
                          ></lord-icon>
                        </div>
                      </td>
                      <td className="py-2 text-center w-10">
                        <div className="flex items-center justify-center gap-2">
                          {iteam.password}
                          <lord-icon
                            src="https://cdn.lordicon.com/xuoapdes.json"
                            trigger="hover"
                            style={{
                              width: "20px",
                              height: "20px",
                              cursor: "pointer",
                            }}
                            onClick={() => copyToClipboard(iteam.password)}
                          ></lord-icon>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
